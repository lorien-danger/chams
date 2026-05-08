/* eslint-disable */
import { useState, useEffect, useRef } from 'react';

function useIsMobile(breakpoint = 768) {
  const [mobile, setMobile] = useState(window.innerWidth < breakpoint);
  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [breakpoint]);
  return mobile;
}

/* -------------------- LAYOUT PRIMITIVES -------------------- */

function Container({ children, wide, style }) {
  const mobile = useIsMobile();
  return (
    <div style={{
      maxWidth: wide ? 1280 : 1160,
      margin: "0 auto",
      padding: mobile ? "0 16px" : "0 32px",
      ...style,
    }}>
      {children}
    </div>
  );
}

function Section({ children, bg, style }) {
  const mobile = useIsMobile();
  const bgColor = bg === "blue" ? "var(--chams-blue)"
    : bg === "red" ? "var(--chams-red)"
    : bg === "bone" ? "var(--chams-bone)"
    : bg === "cream-deep" ? "var(--chams-cream-deep)"
    : "var(--chams-cream)";
  const fgColor = (bg === "blue" || bg === "red") ? "var(--chams-cream)" : "var(--chams-ink)";
  const defaultPad = mobile ? "48px 0" : "80px 0";
  return (
    <section style={{ background: bgColor, color: fgColor, padding: defaultPad, ...style }}>
      {children}
    </section>
  );
}

function Eyebrow({ children, color, style }) {
  return (
    <div style={{
      fontFamily: "var(--font-subhead)",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: color || "var(--chams-red)",
      ...style,
    }}>
      {children}
    </div>
  );
}

function SectionHead({ eyebrow, title, lede, align, color }) {
  const mobile = useIsMobile();
  const a = align || "left";
  return (
    <div style={{ textAlign: a, maxWidth: a === "center" ? 760 : null, margin: a === "center" ? "0 auto" : null }}>
      <div style={{ borderTop: "2px solid", borderColor: color === "cream" ? "var(--chams-cream)" : "var(--chams-blue)", paddingTop: 14, display: "inline-block", minWidth: mobile ? 0 : 240 }}>
        {eyebrow && <Eyebrow color={color === "cream" ? "rgba(242,231,203,.85)" : "var(--chams-red)"}>{eyebrow}</Eyebrow>}
      </div>
      <h2 style={{
        fontFamily: "var(--font-display)",
        fontWeight: 900,
        fontSize: mobile ? 36 : 56,
        lineHeight: 0.98,
        letterSpacing: "-0.005em",
        textTransform: "uppercase",
        color: color === "cream" ? "var(--chams-cream)" : "var(--chams-blue-ink)",
        margin: "10px 0 16px",
      }}>{title}</h2>
      {lede && (
        <p style={{ fontSize: 19, lineHeight: 1.45, color: color === "cream" ? "rgba(242,231,203,.85)" : "var(--chams-stone)", maxWidth: 640, marginLeft: a === "center" ? "auto" : 0, marginRight: a === "center" ? "auto" : 0 }}>{lede}</p>
      )}
    </div>
  );
}

/* -------------------- BUTTONS / LINKS -------------------- */

function Button({ children, kind, href, onClick, style }) {
  const k = kind || "primary";
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    fontFamily: "var(--font-subhead)",
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    border: 0,
    borderRadius: 4,
    padding: "14px 22px",
    cursor: "pointer",
    textDecoration: "none",
    transition: "transform 120ms ease, background 160ms ease, box-shadow 160ms ease",
    ...style,
  };
  const variants = {
    primary: {
      background: "var(--chams-blue)",
      color: "var(--chams-cream)",
      boxShadow: "0 2px 0 0 var(--chams-blue-deep)",
    },
    red: {
      background: "var(--chams-red)",
      color: "var(--chams-cream)",
      boxShadow: "0 2px 0 0 var(--chams-red-deep)",
    },
    outline: {
      background: "transparent",
      color: "var(--chams-blue)",
      border: "2px solid var(--chams-blue)",
      padding: "12px 20px",
    },
    "outline-cream": {
      background: "transparent",
      color: "var(--chams-cream)",
      border: "2px solid var(--chams-cream)",
      padding: "12px 20px",
    },
  };
  const Tag = href ? "a" : "button";
  return (
    <Tag href={href} onClick={onClick} style={{ ...base, ...variants[k] }}
      onMouseDown={e => e.currentTarget.style.transform = "translateY(1px)"}
      onMouseUp={e => e.currentTarget.style.transform = "translateY(0)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
      {children}
    </Tag>
  );
}

function InlineLink({ children, href, onClick, color }) {
  return (
    <a href={href} onClick={onClick} style={{
      color: color || "var(--chams-red)",
      fontFamily: "var(--font-subhead)",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      textDecoration: "none",
      borderBottom: `2px solid ${color || "var(--chams-red)"}`,
      paddingBottom: 2,
    }}>
      {children}
    </a>
  );
}

/* -------------------- IMAGE / PHOTO PLACEHOLDERS -------------------- */
// All photography in the kit is placeholder. We render warm, slightly
// labelled rectangles so the layouts are evaluable without real assets.

function ImageBlock({ label, ratio, tone, src, objectPosition, style }) {
  const tones = {
    curing:   "linear-gradient(135deg, #3a2418 0%, #5a2f1d 100%)",
    factory:  "linear-gradient(135deg, #2b3540 0%, #475968 100%)",
    product:  "linear-gradient(135deg, #4a2a20 0%, #6b3a28 100%)",
    portrait: "linear-gradient(135deg, #2a2620 0%, #4a4036 100%)",
    cream:    "linear-gradient(135deg, #E7D9B4 0%, #D9C99B 100%)",
    archival: "linear-gradient(135deg, #3a342c 0%, #5e574b 100%)",
  };
  const t = tones[tone] || tones.product;
  return (
    <div style={{
      background: t,
      aspectRatio: ratio || "4 / 3",
      borderRadius: 4,
      position: "relative",
      overflow: "hidden",
      ...style,
    }}>
      {src ? (
        <img
          src={src}
          alt={label || ""}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: objectPosition || "center center",
            display: "block",
          }}
        />
      ) : (
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          padding: 14,
          color: "rgba(255,255,255,.5)",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.04em",
        }}>[ photo · {label} ]</div>
      )}
    </div>
  );
}

/* -------------------- ICONS -------------------- */
// Lucide static SVG strings, inlined. (We avoid the runtime CDN in case it's
// blocked.) Stroke 1.75. Color via currentColor.

const ICONS = {
  phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
  mail: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z|22,6 12,13 2,6',
  pin: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z|circle:12,10,3',
  clock: 'circle:12,12,10|polyline:12 6 12 12 16 14',
  arrowRight: 'M5 12h14|polyline:12 5 19 12 12 19',
  menu: 'M3 12h18|M3 6h18|M3 18h18',
  check: 'polyline:20 6 9 17 4 12',
  truck: 'M1 3h15v13H1z|M16 8h4l3 3v5h-7V8z|circle:5.5,18.5,2.5|circle:18.5,18.5,2.5',
};

function Icon({ name, size, color, style }) {
  const sz = size || 18;
  const def = ICONS[name];
  if (!def) return null;
  // Quick mini-SVG renderer for the lucide-style strokes we inlined above.
  const items = def.split('|').map((part, i) => {
    if (part.startsWith('circle:')) {
      const [cx, cy, r] = part.slice(7).split(',');
      return <circle key={i} cx={cx} cy={cy} r={r} />;
    }
    if (part.startsWith('polyline:')) {
      return <polyline key={i} points={part.slice(9)} />;
    }
    if (part.startsWith('M') || part.startsWith('m')) {
      return <path key={i} d={part} />;
    }
    return <polyline key={i} points={part} />;
  });
  return (
    <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"}
      strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
      {items}
    </svg>
  );
}

/* -------------------- HEADER / FOOTER -------------------- */

function SiteHeader({ route, setRoute }) {
  const mobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const items = [
    ["home", "Home"],
    ["about", "About"],
    ["products", "Products"],
    ["community", "Community"],
    ["contact", "Contact"],
  ];
  const navLink = (k, l) => (
    <a key={k} href="#" onClick={e => { e.preventDefault(); setRoute(k); setMenuOpen(false); }}
      style={{
        fontFamily: "var(--font-subhead)",
        fontWeight: 600,
        fontSize: mobile ? 16 : 13,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: route === k ? "var(--chams-red)" : "var(--chams-blue)",
        textDecoration: "none",
        paddingBottom: 4,
        borderBottom: route === k ? "2px solid var(--chams-red)" : "2px solid transparent",
      }}>{l}</a>
  );
  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 10,
      background: "var(--chams-cream)",
      borderBottom: "1px solid var(--chams-tan)",
    }}>
      <Container>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0", gap: 24 }}>
          <a href="#" onClick={e => { e.preventDefault(); setRoute("home"); }} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img src="/assets/logos/chams-text-blue-outline.svg" alt="Cham's" style={{ height: mobile ? 36 : 44 }} />
          </a>
          {mobile ? (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}>
              <Icon name="menu" size={24} color="var(--chams-blue)" />
            </button>
          ) : (
            <>
              <nav style={{ display: "flex", gap: 28 }}>
                {items.map(([k, l]) => navLink(k, l))}
              </nav>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <a href="#" style={{
                  fontFamily: "var(--font-subhead)",
                  fontWeight: 600,
                  fontSize: 12,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--chams-stone)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}><Icon name="phone" size={14} /> 02 6621 4488</a>
                <Button kind="red" onClick={() => setRoute("contact")} style={{ padding: "10px 16px", fontSize: 12 }}>Wholesale</Button>
              </div>
            </>
          )}
        </div>
      </Container>
      {mobile && menuOpen && (
        <nav style={{ background: "var(--chams-cream)", borderTop: "1px solid var(--chams-tan)", padding: "16px 32px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
          {items.map(([k, l]) => navLink(k, l))}
          <Button kind="red" onClick={() => { setRoute("contact"); setMenuOpen(false); }} style={{ marginTop: 8, alignSelf: "flex-start" }}>Wholesale</Button>
        </nav>
      )}
    </header>
  );
}

function SiteFooter({ setRoute }) {
  const mobile = useIsMobile();
  return (
    <footer style={{ background: "var(--chams-blue)", color: "var(--chams-cream)", paddingTop: 64, paddingBottom: 28, marginTop: 0 }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "2fr 1fr 1fr 1fr", gap: mobile ? 32 : 48, alignItems: "start" }}>
          <div>
            <img src="/assets/logos/chams-text-blue-outline.svg" alt="Cham's"
              style={{ height: 60, filter: "brightness(0) invert(.95) sepia(.3) saturate(.4) hue-rotate(350deg)" }} />
            <p style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(242,231,203,.78)", marginTop: 18, maxWidth: 320 }}>
              Family-owned smallgoods manufacturer based in Lismore, Northern NSW. Supplying independent retailers and hospitality across Australia since 1987.
            </p>
          </div>
          <FooterCol title="Visit">
            <FooterAddr>
              <Icon name="pin" size={14} /> 12 Industrial Drive<br />
              <span style={{ paddingLeft: 22, display: "inline-block" }}>Lismore NSW 2480</span>
            </FooterAddr>
            <FooterAddr><Icon name="phone" size={14} /> 02 6621 4488</FooterAddr>
            <FooterAddr><Icon name="mail" size={14} /> office@chams.com.au</FooterAddr>
            <FooterAddr><Icon name="clock" size={14} /> Mon–Fri · 7am–4pm</FooterAddr>
          </FooterCol>
          <FooterCol title="Pages">
            {[["home","Home"],["about","About"],["products","Products"],["community","Community"],["contact","Contact"]].map(([k,l]) => (
              <a key={k} href="#" onClick={e=>{e.preventDefault();setRoute(k);}} style={{ display: "block", color: "rgba(242,231,203,.85)", textDecoration: "none", padding: "3px 0", fontSize: 14 }}>{l}</a>
            ))}
          </FooterCol>
          <FooterCol title="Trade">
            <a href="#" style={{ display: "block", color: "rgba(242,231,203,.85)", textDecoration: "none", padding: "3px 0", fontSize: 14 }}>Wholesale enquiries</a>
            <a href="#" style={{ display: "block", color: "rgba(242,231,203,.85)", textDecoration: "none", padding: "3px 0", fontSize: 14 }}>Find a stockist</a>
            <a href="#" style={{ display: "block", color: "rgba(242,231,203,.85)", textDecoration: "none", padding: "3px 0", fontSize: 14 }}>Hospitality range</a>
            <a href="#" style={{ display: "block", color: "rgba(242,231,203,.85)", textDecoration: "none", padding: "3px 0", fontSize: 14 }}>Product specs (PDF)</a>
          </FooterCol>
        </div>
        <div style={{ borderTop: "1px solid rgba(242,231,203,.18)", marginTop: 56, paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ fontFamily: "var(--font-subhead)", fontWeight: 600, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(242,231,203,.6)" }}>
            © Cham's Small Meats &amp; Preservatives Pty Ltd · ABN 38 614 720 991 · Family-Owned Since 1987
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontFamily: "var(--font-subhead)", fontWeight: 600, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(242,231,203,.55)" }}>— The Bellanova Family</span>
            <img src="/assets/logos/grazie-mate-script.svg" alt="Grazie Mate"
              style={{ height: 40, filter: "brightness(0) invert(.95) sepia(.3) saturate(.4) hue-rotate(350deg)" }} />
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--font-subhead)", fontWeight: 700, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--chams-cream)", paddingBottom: 10, borderBottom: "1px solid rgba(242,231,203,.25)", marginBottom: 12 }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>{children}</div>
    </div>
  );
}
function FooterAddr({ children }) {
  return <div style={{ fontSize: 14, lineHeight: 1.55, color: "rgba(242,231,203,.85)", display: "flex", alignItems: "flex-start", gap: 8 }}>{children}</div>;
}

/* -------------------- PRODUCT CARD -------------------- */

function ProductCard({ name, sub, weight, tone, batch }) {
  return (
    <article style={{
      background: "var(--chams-bone)",
      border: "1px solid var(--chams-tan)",
      borderRadius: 4,
      overflow: "hidden",
      transition: "transform 200ms ease, box-shadow 200ms ease",
      cursor: "pointer",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 1px 0 0 rgba(26,20,16,.06), 0 8px 24px -12px rgba(26,20,16,.18)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
      <ImageBlock label={name.toLowerCase()} ratio="5/4" tone={tone || "product"} />
      <div style={{ padding: "16px 18px 18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: "var(--chams-blue-ink)", textTransform: "uppercase", lineHeight: 1.05, margin: 0 }}>{name}</h3>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--chams-grain)" }}>{weight}</span>
        </div>
        <p style={{ fontSize: 14, color: "var(--chams-stone)", margin: "6px 0 12px" }}>{sub}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--chams-tan)", paddingTop: 10 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--chams-stone)" }}>Batch · {batch}</span>
          <span style={{ fontFamily: "var(--font-subhead)", fontWeight: 700, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--chams-red)", display: "inline-flex", alignItems: "center", gap: 6 }}>Detail <Icon name="arrowRight" size={12} /></span>
        </div>
      </div>
    </article>
  );
}

/* -------------------- ROW BADGES, RULES -------------------- */

function Badge({ children, kind }) {
  const styles = {
    red: { background: "var(--chams-red)", color: "var(--chams-cream)" },
    blue: { background: "var(--chams-blue)", color: "var(--chams-cream)" },
    olive: { background: "var(--chams-success)", color: "var(--chams-cream)" },
    outline: { background: "transparent", color: "var(--chams-blue)", border: "2px solid var(--chams-blue)" },
  };
  return (
    <span style={{
      fontFamily: "var(--font-subhead)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      padding: "6px 12px",
      borderRadius: 999,
      ...(styles[kind] || styles.red),
    }}>{children}</span>
  );
}

function ScriptLockup({ name, height, color }) {
  // name: "we-do-it-properly" or "grazie-mate"
  const map = {
    "we-do-it-properly": "/assets/logos/we-do-it-properly-script.svg",
    "grazie-mate": "/assets/logos/grazie-mate-script.svg",
  };
  const filter = color === "cream"
    ? "brightness(0) invert(.95) sepia(.3) saturate(.4) hue-rotate(350deg)"
    : "none";
  return <img src={map[name]} style={{ height: height || 48, filter }} alt="" />;
}

export {
  useIsMobile,
  Container, Section, Eyebrow, SectionHead,
  Button, InlineLink, Icon, ImageBlock,
  SiteHeader, SiteFooter,
  ProductCard, Badge, ScriptLockup,
};
