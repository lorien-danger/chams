import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 5181;
const UPLOAD_DIR = './public/assets/photos/products';
fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const HTML = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Upload Product Images</title>
<style>
  body { font-family: system-ui; max-width: 500px; margin: 40px auto; padding: 0 20px; background: #F2E7CB; color: #1A1410; }
  h1 { font-size: 20px; color: #1B3A66; }
  input[type=file] { display: block; margin: 16px 0; }
  input[type=text] { display: block; width: 100%; padding: 10px; margin: 8px 0; box-sizing: border-box; border: 1px solid #C9B98F; border-radius: 4px; }
  button { background: #1B3A66; color: #F2E7CB; border: none; padding: 12px 24px; border-radius: 4px; font-size: 16px; cursor: pointer; }
  .done { color: #4F6B3A; font-weight: bold; margin: 16px 0; }
  .files { margin-top: 24px; padding-top: 16px; border-top: 1px solid #C9B98F; }
  .files div { font-size: 14px; color: #5A5147; padding: 4px 0; }
</style>
</head>
<body>
<h1>Upload Product Images</h1>
<p>Select images and give them a filename (without extension).</p>
<form method="POST" enctype="multipart/form-data" action="/upload">
  <input type="file" name="file" accept="image/*" multiple>
  <label>Filename (optional, used for single file):</label>
  <input type="text" name="filename" placeholder="e.g. hot_soppressa">
  <br>
  <button type="submit">Upload</button>
</form>
<div class="files" id="files"></div>
<script>
fetch('/files').then(r=>r.json()).then(files=>{
  document.getElementById('files').innerHTML = '<b>Uploaded:</b>' + files.map(f=>'<div>'+f+'</div>').join('');
});
</script>
</body>
</html>`;

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(HTML);
    return;
  }

  if (req.method === 'GET' && req.url === '/files') {
    const files = fs.existsSync(UPLOAD_DIR) ? fs.readdirSync(UPLOAD_DIR) : [];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(files));
    return;
  }

  if (req.method === 'POST' && req.url === '/upload') {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const body = Buffer.concat(chunks);

    const contentType = req.headers['content-type'] || '';
    const boundaryMatch = contentType.match(/boundary=(.+)/);
    if (!boundaryMatch) {
      res.writeHead(400); res.end('No boundary'); return;
    }
    const boundary = boundaryMatch[1];
    const parts = parseMultipart(body, boundary);

    let customName = '';
    const files = [];
    for (const part of parts) {
      if (part.name === 'filename') {
        customName = part.data.toString().trim();
      }
    }
    for (const part of parts) {
      if (part.filename) {
        const ext = path.extname(part.filename) || '.png';
        const name = (files.length === 0 && customName) ? customName + ext : part.filename;
        const safeName = name.replace(/[^a-zA-Z0-9._-]/g, '_');
        fs.writeFileSync(path.join(UPLOAD_DIR, safeName), part.data);
        files.push(safeName);
      }
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<html><body style="font-family:system-ui;max-width:500px;margin:40px auto;padding:0 20px;background:#F2E7CB;">
      <h2 style="color:#4F6B3A;">Uploaded ${files.length} file(s)</h2>
      <p>${files.join('<br>')}</p>
      <a href="/" style="color:#1B3A66;">Upload more</a>
    </body></html>`);
    return;
  }

  res.writeHead(404); res.end('Not found');
});

function parseMultipart(body, boundary) {
  const parts = [];
  const boundaryBuf = Buffer.from('--' + boundary);
  let start = body.indexOf(boundaryBuf) + boundaryBuf.length + 2;

  while (start < body.length) {
    const end = body.indexOf(boundaryBuf, start);
    if (end === -1) break;
    const partBuf = body.subarray(start, end - 2);
    const headerEnd = partBuf.indexOf('\r\n\r\n');
    if (headerEnd === -1) { start = end + boundaryBuf.length + 2; continue; }
    const headers = partBuf.subarray(0, headerEnd).toString();
    const data = partBuf.subarray(headerEnd + 4);

    const nameMatch = headers.match(/name="([^"]+)"/);
    const filenameMatch = headers.match(/filename="([^"]+)"/);
    parts.push({
      name: nameMatch ? nameMatch[1] : '',
      filename: filenameMatch ? filenameMatch[1] : null,
      data,
    });
    start = end + boundaryBuf.length + 2;
  }
  return parts;
}

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Upload server running at http://0.0.0.0:${PORT}/`);
});
