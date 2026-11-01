"""Read-only public SEO crawl. Requires Python 3, curl and network access."""
import concurrent.futures, hashlib, json, re, time, subprocess, tempfile
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit, urldefrag
import xml.etree.ElementTree as ET

OUT = Path(__file__).parent
BASE = 'https://www.chams.com.au'
class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.title=[]; self.headings=[]; self.meta={}; self.links=[]; self.assets=[]; self.images=[]; self.schemas=[]; self.forms=[]; self.scripts=[]; self.visible=[]; self.stack=[]; self.capture=None; self.buffer=[]; self.main=False; self.maintext=[]
    def handle_starttag(self, tag, attrs):
        a=dict(attrs); self.stack.append(tag)
        if tag=='main': self.main=True
        if tag in ['title','h1','h2','h3'] or (tag=='script' and a.get('type')=='application/ld+json'): self.capture=tag; self.buffer=[]
        if tag=='meta': self.meta[a.get('name',a.get('property',''))]=a.get('content','')
        if tag=='link':
            if a.get('rel')=='canonical': self.meta['canonical']=a.get('href')
            if a.get('rel') in ['stylesheet','icon','preload']: self.assets.append(a.get('href',''))
        if tag=='a': self.links.append(a.get('href',''))
        if tag=='img': self.images.append(a); self.assets.append(a.get('src',''))
        if tag=='source': self.assets.extend(x.strip().split(' ')[0] for x in a.get('srcset','').split(',') if x.strip())
        if tag=='script' and a.get('src'): self.scripts.append(a['src']); self.assets.append(a['src'])
        if tag=='form': self.forms.append(a)
    def handle_endtag(self, tag):
        if tag==self.capture:
            s=' '.join(' '.join(self.buffer).split())
            if tag=='title': self.title.append(s)
            elif tag=='script':
                try: self.schemas.append(json.loads(s))
                except Exception: self.schemas.append({'parse_error':s})
            else: self.headings.append([tag,s])
            self.capture=None; self.buffer=[]
        if tag=='main': self.main=False
        if tag in self.stack: self.stack=self.stack[:len(self.stack)-1-self.stack[::-1].index(tag)]
    def handle_data(self,data):
        if self.capture: self.buffer.append(data)
        if not any(x in self.stack for x in ['script','style']):
            self.visible.append(data)
            if self.main: self.maintext.append(data)

def fetch(url):
    started=time.time()
    try:
        with tempfile.TemporaryDirectory() as temp:
            payload=Path(temp)/'body'; head=Path(temp)/'headers'
            proc=subprocess.run(['curl','-sS','-L','--max-time','30','-A','Chams-SEO-Audit/1.0','-H','Accept: text/html,application/xml,*/*','-D',str(head),'-o',str(payload),'-w','%{json}',url],capture_output=True,text=True)
            if proc.returncode: return {'url':url,'error':proc.stderr.strip()}
            info=json.loads(proc.stdout); body=payload.read_bytes(); raw_headers=head.read_text()
        headers={}
        for line in raw_headers.splitlines():
            if line.startswith('HTTP/'): headers={}
            elif ':' in line:
                k,v=line.split(':',1); headers[k.lower()]=v.strip()
        typ=headers.get('content-type','')
        row={'url':url,'final_url':info['url_effective'],'status':info['http_code'],'redirects':info['num_redirects'],'raw_headers':raw_headers,'headers':headers,'bytes':len(body),'elapsed_seconds':round(time.time()-started,3),'sha256':hashlib.sha256(body).hexdigest()}
        if 'text/html' in typ:
            p=Page(); p.feed(body.decode('utf-8','replace'))
            row.update(title=p.title,headings=p.headings,meta=p.meta,links=p.links,assets=p.assets,images=p.images,schemas=p.schemas,forms=p.forms,scripts=p.scripts,main_words=len(' '.join(p.maintext).split()),main_text=' '.join(' '.join(p.maintext).split()))
        if 'text/' in typ or any(x in typ for x in ['xml','json','javascript']): row['body_text']=body.decode('utf-8','replace')
        return row
    except Exception as e: return {'url':url,'error':str(e)}

def run():
    sitemap=fetch(BASE+'/sitemap.xml')
    if sitemap.get('status') != 200 or 'body_text' not in sitemap:
        raise SystemExit('Could not retrieve the sitemap: '+json.dumps(sitemap))
    urls=[e.text for e in ET.fromstring(sitemap['body_text']).iter() if e.tag.endswith('loc')]
    extras=['/robots.txt','/sitemap-index.xml','/sitemap-0.xml','/seo-audit-missing-20260914/','/404','/404.html','/index.html','/products','/products/pepperoni','/products/pepperoni/?utm_source=seo-audit','/api/products.json']
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        pages=list(pool.map(fetch,urls))
        variants=list(pool.map(fetch,[BASE+x for x in extras]+['http://chams.com.au/','http://www.chams.com.au/','https://chams.com.au/','https://chams.com.au/products/pepperoni/']))
        assets=sorted({urldefrag(urljoin(p['url'],a))[0] for p in pages for a in p.get('assets',[])+[p.get('meta',{}).get('og:image','')] if a and urlsplit(urljoin(p['url'],a)).hostname=='www.chams.com.au'})
        linked=sorted({urldefrag(urljoin(p['url'],a))[0] for p in pages for a in p.get('links',[]) if a and urlsplit(urljoin(p['url'],a)).hostname=='www.chams.com.au'}-set(urls)-set(assets))
        resources=list(pool.map(fetch,assets+linked))
    data={'checked_at':datetime.now(timezone.utc).isoformat(),'sitemap':sitemap,'pages':pages,'variants':variants,'resources':resources}
    (OUT/'crawl-evidence.json').write_text(json.dumps(data,indent=2))
    print(json.dumps({'pages':len(pages),'page_statuses':[(p['url'],p.get('status'),p.get('error')) for p in pages], 'variants':[(p['url'],p.get('status'),p.get('final_url'),p.get('error')) for p in variants], 'resource_count':len(resources),'failed_resources':[(p['url'],p.get('status'),p.get('error')) for p in resources if p.get('status')!=200]},indent=2))
if __name__=='__main__': run()
