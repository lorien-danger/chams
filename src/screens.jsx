/* eslint-disable */
import { useState, useEffect } from 'react';
import {
  useIsMobile,
  Container, Section, Eyebrow, SectionHead,
  Button, InlineLink, Icon, ImageBlock,
  SiteHeader, SiteFooter,
  ProductCard, Badge, ScriptLockup,
} from './components.jsx';

/* ============================================================
   HOME
   ============================================================ */

function HomeScreen({ setRoute }) {
  const mobile = useIsMobile();
  return (
    <main>
      {/* HERO */}
      <Section bg="cream" style={{ paddingTop: 64, paddingBottom: 96 }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1.05fr 0.95fr", gap: mobile ? 32 : 64, alignItems: "center" }}>
            <div>
              <Eyebrow>Family-Owned Smallgoods · Lismore NSW</Eyebrow>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: mobile ? 52 : 96, lineHeight: 0.94, letterSpacing: "-0.01em", textTransform: "uppercase", color: "var(--chams-blue-ink)", margin: "16px 0 28px" }}>
                Honest<br/>Ingredients.<br/>
                <span style={{ color: "var(--chams-red)" }}>Time-Honoured</span><br/>
                Methods.
              </h1>
              <p style={{ fontSize: 19, lineHeight: 1.5, color: "var(--chams-stone)", maxWidth: 520, marginBottom: 28 }}>
                Cham's Small Meats &amp; Preservatives has been producing traditional cured meats for the Australian market since 1987. Made the same way for nearly forty years, supplied to independent retailers and hospitality providers across NSW.
              </p>
              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <Button kind="primary" onClick={() => setRoute("products")}>View Our Range <Icon name="arrowRight" size={14} /></Button>
                <Button kind="outline" onClick={() => setRoute("about")}>Our Story</Button>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 36, paddingTop: 22, borderTop: "1px solid var(--chams-tan)" }}>
                <Badge kind="red">EST · 1987</Badge>
                <Badge kind="outline">HACCP Certified</Badge>
              </div>
            </div>
            <div>
              <ImageBlock label="curing room · house no.2" ratio="4/5" tone="curing" src="/assets/photos/cham_portrait.png" objectPosition="center top" />
              <div style={{ background: "var(--chams-cream)", padding: "18px 22px", border: "1px solid var(--chams-tan)", borderTop: "none", borderRadius: "0 0 4px 4px", display: "flex", alignItems: "center", gap: 16 }}>
                <ScriptLockup name="we-do-it-properly" height={42} />
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--chams-stone)", letterSpacing: "0.04em" }}>— Cham Bellanova, Founder</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FEATURED PRODUCTS */}
      <Section bg="bone" style={{ paddingTop: 88, paddingBottom: 88 }}>
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36, gap: 24 }}>
            <SectionHead eyebrow="Vol. 02 · Our Range" title="Featured Products" lede="Six varieties of salami and soppressa, plus traditional cured cuts and select preservatives. Available in retail packs and bulk for hospitality." />
            <InlineLink onClick={() => setRoute("products")}>See all 11 products →</InlineLink>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)", gap: 24 }}>
            <ProductCard name="Hot Soppressa" sub="Naturally cured with chilli and fennel. Coarse-cut, traditional southern-Italian style." weight="250 g" tone="product" batch="HS-26-04" image="/assets/photos/products/hot_soppressa.png" onClick={() => setRoute("product:hot-soppressa")} />
            <ProductCard name="Mild Soppressa" sub="The classic Calabrian recipe, made without heat. Slow-cured for ten weeks." weight="250 g" tone="product" batch="MS-26-04" image="/assets/photos/products/mild_soppressa.png" onClick={() => setRoute("product:mild-soppressa")} />
            <ProductCard name="Cacciatore" sub="Hunter-style salami, sized to fit a back pocket. Sold in packs of four." weight="4 × 80 g" tone="product" batch="CC-26-04" image="/assets/photos/products/cacciatore.png" onClick={() => setRoute("product:cacciatore")} />
          </div>
        </Container>
      </Section>

      {/* BLUE BAND - factory image + values */}
      <Section bg="blue" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: mobile ? 32 : 64, alignItems: "center" }}>
            <ImageBlock label="processing facility · lismore" ratio="4/3" tone="factory" src="/assets/photos/processing_facility.png" />
            <div>
              <SectionHead eyebrow="Vol. 03 · The Cham's Way" title="Same Recipes. Same Standards. Forty Years On." color="cream" />
              <p style={{ fontSize: 17, lineHeight: 1.5, color: "rgba(242,231,203,.85)", marginTop: 22, maxWidth: 520 }}>
                Every batch we produce begins with Cham's father's recipes, brought from southern Italy in 1983. Forty years on, the only things that have changed are the size of the building and the number of hands. The meat, the curing, the time it takes — all the same.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr 1fr", gap: 24, marginTop: 36 }}>
                {[
                  ["Honest", "Ingredients sourced from Australian producers we've worked with for decades."],
                  ["Time-Honoured", "Naturally cured, never rushed. Some batches take twelve weeks."],
                  ["Properly", "Specifications, batch numbers, and a phone number that rings."],
                ].map(([k, v]) => (
                  <div key={k} style={{ borderTop: "2px solid var(--chams-cream)", paddingTop: 14 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, textTransform: "uppercase", color: "var(--chams-cream)", lineHeight: 1 }}>{k}.</div>
                    <p style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(242,231,203,.78)", marginTop: 8, marginBottom: 0 }}>{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* TESTIMONIAL / WHOLESALE STRIP */}
      <Section bg="cream" style={{ paddingTop: 80, paddingBottom: 96 }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1.2fr 1fr", gap: mobile ? 32 : 64, alignItems: "center" }}>
            <div>
              <Eyebrow>For Trade · Wholesale &amp; Hospitality</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: mobile ? 36 : 56, lineHeight: 1, textTransform: "uppercase", color: "var(--chams-blue-ink)", margin: "12px 0 18px" }}>
                Stocked in independent grocers, delis &amp; restaurants across NSW.
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--chams-stone)", maxWidth: 540, marginBottom: 24 }}>
                We supply independent retailers, butchers, delicatessens, and hospitality providers in retail packs and food-service bulk. Minimum order quantities apply. Standard delivery weekly across the Lismore–Byron–Tweed catchment; cold-chain freight statewide.
              </p>
              <div style={{ display: "flex", gap: 14 }}>
                <Button kind="red" onClick={() => setRoute("contact")}>Wholesale Enquiries</Button>
                <Button kind="outline" href="#">Download Specs (PDF)</Button>
              </div>
            </div>
            <div style={{ background: "var(--chams-bone)", border: "1px solid var(--chams-tan)", borderRadius: 4, padding: 28 }}>
              <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, lineHeight: 1.45, color: "var(--chams-blue-ink)", margin: "0 0 18px" }}>
                "Cham's has supplied our deli for fourteen years. Consistent product, consistent batch sizes, never a missed delivery. We don't need to think about it."
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 14, paddingTop: 16, borderTop: "1px solid var(--chams-tan)" }}>
                <div style={{ width: 44, height: 44, borderRadius: 999, background: "var(--chams-blue)", color: "var(--chams-cream)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800 }}>JP</div>
                <div>
                  <div style={{ fontFamily: "var(--font-subhead)", fontWeight: 700, fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--chams-blue-ink)" }}>Joseph Pellegrini</div>
                  <div style={{ fontSize: 13, color: "var(--chams-stone)" }}>Pellegrini's Continental, Newcastle</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <SiteFooter setRoute={setRoute} />
    </main>
  );
}

/* ============================================================
   ABOUT
   ============================================================ */

function AboutScreen({ setRoute }) {
  const mobile = useIsMobile();
  const milestones = [
    ["1983", "Cham Bellanova arrives in Australia from southern Italy with his father's recipes."],
    ["1985", "Begins making salami in his garage in Goonellabah for neighbours."],
    ["1987", "Cham's Small Meats &amp; Preservatives Pty Ltd is founded."],
    ["1994", "Moves into the first dedicated facility on Industrial Drive, Lismore."],
    ["2003", "Son Marco Bellanova joins production."],
    ["2011", "Daughter Lucia Bellanova takes on operations and trade."],
    ["2018", "Facility expansion — second curing house commissioned."],
    ["2024", "60 staff. Supplying 320+ stockists across NSW &amp; QLD."],
  ];

  return (
    <main>
      <Section bg="cream" style={{ paddingTop: 56, paddingBottom: 64 }}>
        <Container>
          <div style={{ maxWidth: 820 }}>
            <Eyebrow>Our Story</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: mobile ? 44 : 88, lineHeight: 0.96, textTransform: "uppercase", color: "var(--chams-blue-ink)", margin: "16px 0 20px", letterSpacing: "-0.005em" }}>
              Family-Owned. Northern NSW. Since 1987.
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.5, color: "var(--chams-stone)", maxWidth: 680 }}>
              Cham's was founded in a Goonellabah garage in 1985 and incorporated as a smallgoods manufacturer in 1987. Today the company runs a 60-staff processing facility in Lismore and supplies independent retailers and hospitality providers throughout New South Wales.
            </p>
          </div>
          <div style={{ marginTop: 48 }}>
            <ImageBlock label="processing floor · lismore" ratio="16/9" tone="factory" src="/assets/photos/processing_close_up.png" />
          </div>
        </Container>
      </Section>

      {/* FOUNDER STATEMENT */}
      <Section bg="bone" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "0.85fr 1.15fr", gap: mobile ? 32 : 64, alignItems: "start" }}>
            <div>
              <ImageBlock label="cham bellanova · 2024" ratio="4/5" tone="portrait" src="/assets/photos/cham_portrait.png" />
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--chams-grain)", marginTop: 10 }}>Photographed in the original curing house, May 2024.</div>
            </div>
            <div>
              <Eyebrow>A Word from the Founder</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 48, lineHeight: 1, textTransform: "uppercase", color: "var(--chams-blue-ink)", margin: "12px 0 24px" }}>
                In Cham's Own Words.
              </h2>
              <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 19, lineHeight: 1.55, color: "var(--chams-blue-ink)" }}>
                <p>"When I come to Australia in 1983 I didn't know nobody. I had my father's recipes and I had two hands. I start making salami in my garage for the neighbours. They say <em>Cham, this is good, you should sell this</em>. So I sell it.</p>
                <p>Forty year later we still make everything the same way. Good meat, proper curing, no shortcut. My son work with me now. My daughter do the office. She tell me I need website, I need social media. I say OK, but the salami is the same.</p>
                <p>People ask me why I don't change the name. Small Meats &amp; Preservatives, they say it sound old fashioned. I say, that's what we make. Why I'm going to call it something else.</p>
                <p>We do it properly. That's it. That's the whole business."</p>
              </div>
              <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 16 }}>
                <ScriptLockup name="grazie-mate" height={56} />
                <div style={{ fontFamily: "var(--font-subhead)", fontWeight: 700, fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--chams-stone)" }}>— Cham Bellanova, Founder</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAMILY HERITAGE */}
      <Section bg="cream" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <Container>
          <div style={{ borderTop: "1px solid var(--chams-tan)", borderBottom: "1px solid var(--chams-tan)", borderRadius: 4, overflow: "hidden" }}>
            <img src="/assets/photos/cham_family_heritage.png" alt="The Bellanova family, southern Italy, before emigration" style={{ display: "block", width: "100%", height: "auto", filter: "sepia(0.05)" }} />
          </div>
        </Container>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 2fr", gap: mobile ? 16 : 48, paddingTop: 22, paddingBottom: 60, alignItems: "start" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--chams-grain)", letterSpacing: "0.04em", lineHeight: 1.6 }}>
              Fig. 01<br/>The Bellanova family,<br/>southern Italy, c.1962.
            </div>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 19, lineHeight: 1.55, color: "var(--chams-stone)", margin: 0, maxWidth: 720 }}>
              Cham (highlighted, front) with his parents, grandparents, aunts, uncles and cousins outside the family home in Calabria. The recipes the company makes today were the recipes the family ate every weekend.
            </p>
          </div>
        </Container>
      </Section>

      {/* TIMELINE */}
      <Section bg="cream">
        <Container>
          <SectionHead eyebrow="Vol. 04 · Forty Years" title="A Brief Timeline" />
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: mobile ? 24 : 32, marginTop: 48 }}>
            {milestones.map(([year, body]) => (
              <div key={year} style={{ borderTop: "3px solid var(--chams-red)", paddingTop: 14 }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 44, lineHeight: 1, color: "var(--chams-blue-ink)" }}>{year}</div>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: "var(--chams-stone)", marginTop: 8, marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: body }} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* VALUES BAND */}
      <Section bg="blue" style={{ paddingTop: 88, paddingBottom: 88 }}>
        <Container>
          <SectionHead eyebrow="Our Values" title="Honest Ingredients. Time-Honoured Methods." color="cream" />
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)", gap: 32, marginTop: 48 }}>
            {[
              ["01", "Australian Ingredients", "Pork sourced from accredited Australian farms. Salt from Pyramid Salt in northern Victoria. No imported fillers."],
              ["02", "Naturally Cured", "Slow, cool curing at controlled humidity. No accelerants. Some products take twelve weeks before they leave the curing house."],
              ["03", "Family Operated", "Cham still runs production. His son Marco is on the floor. His daughter Lucia runs operations. We answer the phone."],
            ].map(([n, t, d]) => (
              <div key={n}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "rgba(242,231,203,.55)", letterSpacing: "0.1em" }}>— {n}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 30, textTransform: "uppercase", color: "var(--chams-cream)", lineHeight: 1.05, margin: "10px 0 12px" }}>{t}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(242,231,203,.78)", margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <SiteFooter setRoute={setRoute} />
    </main>
  );
}

/* ============================================================
   PRODUCTS
   ============================================================ */

const PRODUCTS = [
  {
    cat: "Salami & Soppressa", slug: "hot-soppressa", name: "Hot Soppressa",
    sub: "Naturally cured with chilli and fennel. Coarse-cut, traditional southern-Italian style.",
    weight: "250 g", batch: "HS-26-04", image: "/assets/photos/products/hot_soppressa.png",
    description: "Our hot soppressa is made to a traditional southern-Italian recipe passed down from Cham's father. Coarse-cut Australian pork shoulder is blended with cracked fennel seed and dried chilli flakes, then stuffed into natural casings and hung in our curing house for a minimum of eight weeks. The result is a firm, intensely flavoured salami with a slow, building heat that pairs well with aged cheeses and crusty bread.",
    ingredients: "Australian pork (85%), salt, dried chilli flakes, fennel seed, garlic, dextrose, black pepper, starter culture, sodium nitrate.",
    formats: ["250 g retail vacuum pack", "1 kg whole (hospitality)", "Sliced 100 g deli pack"],
    storage: "Refrigerate at 0–4°C. Once opened, consume within 14 days.",
    curing: "Minimum 8 weeks natural air-cured",
    origin: "Lismore, NSW",
  },
  {
    cat: "Salami & Soppressa", slug: "mild-soppressa", name: "Mild Soppressa",
    sub: "The classic Calabrian recipe, made without heat. Slow-cured for ten weeks.",
    weight: "250 g", batch: "MS-26-04", image: "/assets/photos/products/mild_soppressa.png",
    description: "The mild soppressa is Cham's original recipe and the product that started the business. Made without chilli, it lets the quality of the pork and the depth of the cure speak for themselves. Coarse-ground pork with garlic, black pepper, and a touch of white wine, hung for ten full weeks. This is the salami Cham made in his garage in 1985 — the recipe hasn't changed.",
    ingredients: "Australian pork (87%), salt, black pepper, garlic, white wine, dextrose, starter culture, sodium nitrate.",
    formats: ["250 g retail vacuum pack", "1 kg whole (hospitality)", "Sliced 100 g deli pack"],
    storage: "Refrigerate at 0–4°C. Once opened, consume within 14 days.",
    curing: "Minimum 10 weeks natural air-cured",
    origin: "Lismore, NSW",
  },
  {
    cat: "Salami & Soppressa", slug: "traditional-salami", name: "Traditional Salami",
    sub: "House-recipe pork salami. Lightly seasoned, finely-grained. Sliced or whole.",
    weight: "1 kg whole", batch: "TS-26-03", image: "/assets/photos/products/traditional_salami.png",
    description: "Our traditional salami is a finely-grained, lightly seasoned pork salami suited to everyday eating. It's the most versatile product in our range — equally at home on a sandwich, a pizza, or an antipasto board. Finely ground Australian pork seasoned with salt, pepper, and garlic, then cured for six weeks. Available whole or pre-sliced for deli and hospitality.",
    ingredients: "Australian pork (88%), salt, black pepper, garlic, dextrose, starter culture, sodium nitrate.",
    formats: ["1 kg whole", "500 g half", "Sliced 150 g deli pack", "Bulk 5 kg (hospitality)"],
    storage: "Refrigerate at 0–4°C. Once opened, consume within 14 days.",
    curing: "Minimum 6 weeks natural air-cured",
    origin: "Lismore, NSW",
  },
  {
    cat: "Salami & Soppressa", slug: "cacciatore", name: "Cacciatore",
    sub: "Hunter-style salami in a small format. Sized to fit a back pocket. Pack of four.",
    weight: "4 × 80 g", batch: "CC-26-04", image: "/assets/photos/products/cacciatore.png",
    description: "Cacciatore — 'hunter's salami' — is a small-format dried sausage designed to be eaten on the go. Ours are hand-tied, individually cured, and sold in packs of four. They're sized to fit a coat pocket or a lunchbox. Rich, dense, and deeply savoury, with a fine grind and a peppery finish. A favourite with school lunches and hiking packs alike.",
    ingredients: "Australian pork (86%), salt, black pepper, garlic, paprika, fennel seed, dextrose, starter culture, sodium nitrate.",
    formats: ["4 × 80 g retail pack", "20-pack box (hospitality)"],
    storage: "Refrigerate at 0–4°C. Individually sealed — once opened, consume within 7 days.",
    curing: "Minimum 4 weeks natural air-cured",
    origin: "Lismore, NSW",
  },
  {
    cat: "Cured Cuts", slug: "pepperoni", name: "Pepperoni",
    sub: "Hot, oily, paprika-forward. The pizzeria standard, made the proper way.",
    weight: "200 g sliced", batch: "PP-26-04", image: "/assets/photos/products/pepperoni.png",
    description: "Our pepperoni is made for the pizzeria. Smoky, paprika-forward, with a clean heat and an oily cure that crisps beautifully under a broiler. We use a blend of pork and a small percentage of beef for the characteristic texture. Pre-sliced for convenience or available as whole sticks for in-house slicing. Supplied to over sixty pizzerias across NSW.",
    ingredients: "Australian pork (72%), Australian beef (12%), salt, paprika, chilli, garlic, black pepper, dextrose, starter culture, sodium nitrate.",
    formats: ["200 g sliced retail pack", "1.5 kg whole stick (hospitality)", "Pre-sliced 2 kg bulk (hospitality)"],
    storage: "Refrigerate at 0–4°C. Once opened, consume within 10 days.",
    curing: "Minimum 5 weeks smoked and air-cured",
    origin: "Lismore, NSW",
  },
  {
    cat: "Cured Cuts", slug: "pancetta", name: "Pancetta",
    sub: "Belly pork, dry-cured for eight weeks. Available rolled or flat.",
    weight: "500 g", batch: "PA-26-03", image: "/assets/photos/products/pancetta.png",
    description: "Our pancetta is dry-cured pork belly, seasoned with juniper, bay leaf, and black pepper, then hung for eight weeks. Available rolled (arrotolata) for slicing into thin rounds, or flat (stesa) for dicing into lardons. The fat is silky and flavourful — it renders beautifully for pasta, risotto, and any dish where you need a rich, porky base.",
    ingredients: "Australian pork belly (92%), salt, black pepper, juniper berry, bay leaf, garlic, dextrose, sodium nitrate.",
    formats: ["500 g rolled (retail)", "500 g flat (retail)", "2 kg whole slab (hospitality)"],
    storage: "Refrigerate at 0–4°C. Once opened, consume within 14 days.",
    curing: "Minimum 8 weeks dry-cured",
    origin: "Lismore, NSW",
  },
  {
    cat: "Preservatives", slug: "pickled-peppers", name: "Pickled Peppers",
    sub: "Long red chillies in a brine of vinegar, salt, and bay leaf.",
    weight: "330 g jar", batch: "PE-26-02", image: "/assets/photos/products/pickled_peppers.png",
    description: "Whole long red chillies pickled in a simple brine of white wine vinegar, salt, and bay leaf. Crunchy, tangy, and gently hot — these are the peppers Cham's family served at every meal in Calabria. Excellent alongside cured meats, on sandwiches, or chopped through a pasta sauce for a vinegary kick.",
    ingredients: "Long red chillies, white wine vinegar, water, salt, bay leaf, garlic.",
    formats: ["330 g glass jar (retail)", "2 L catering jar (hospitality)"],
    storage: "Store in a cool, dry place. Refrigerate after opening. Consume within 4 weeks of opening.",
    curing: "Brined minimum 3 weeks",
    origin: "Lismore, NSW",
  },
  {
    cat: "Preservatives", slug: "marinated-artichokes", name: "Marinated Artichokes",
    sub: "Quartered artichoke hearts in olive oil, garlic and parsley.",
    weight: "280 g jar", batch: "AR-26-02", image: "/assets/photos/products/marinated_artichokes.png",
    description: "Quartered artichoke hearts, blanched and marinated in Australian extra-virgin olive oil with garlic, flat-leaf parsley, and a touch of white wine vinegar. Tender, earthy, and rich — ideal for antipasto platters, pizza toppings, or served straight from the jar with good bread. Made in small batches at our Lismore facility.",
    ingredients: "Artichoke hearts (55%), extra-virgin olive oil, white wine vinegar, garlic, flat-leaf parsley, salt, black pepper.",
    formats: ["280 g glass jar (retail)", "2 L catering jar (hospitality)"],
    storage: "Store in a cool, dry place. Refrigerate after opening. Keep submerged in oil. Consume within 3 weeks of opening.",
    curing: "Marinated minimum 2 weeks",
    origin: "Lismore, NSW",
  },
  {
    cat: "Preservatives", slug: "giardiniera", name: "Giardiniera",
    sub: "Mixed pickled vegetables — cauliflower, capsicum, carrot, celery.",
    weight: "500 g jar", batch: "GI-26-02", image: "/assets/photos/products/giardiniera.png",
    description: "Our giardiniera is a classic Italian mixed pickle — cauliflower, capsicum, carrot, and celery, cut into bite-sized pieces and pickled in white wine vinegar with oregano and chilli. Bright, crunchy, and versatile. Serve it as a side, pile it on a sandwich, or eat it straight from the jar. A staple of every Italian pantry and a natural partner to everything else we make.",
    ingredients: "Cauliflower, capsicum, carrot, celery, white wine vinegar, water, extra-virgin olive oil, salt, oregano, dried chilli, garlic.",
    formats: ["500 g glass jar (retail)", "2 L catering jar (hospitality)"],
    storage: "Store in a cool, dry place. Refrigerate after opening. Consume within 4 weeks of opening.",
    curing: "Pickled minimum 2 weeks",
    origin: "Lismore, NSW",
  },
];

function ProductsScreen({ setRoute }) {
  const mobile = useIsMobile();
  const [filter, setFilter] = useState("All");
  const cats = ["All", "Salami & Soppressa", "Cured Cuts", "Preservatives"];
  const list = filter === "All" ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);
  return (
    <main>
      <Section bg="cream" style={{ paddingTop: 56, paddingBottom: 32 }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1.05fr 1fr", gap: mobile ? 32 : 56, alignItems: "end" }}>
            <div>
              <Eyebrow>Our Range</Eyebrow>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: mobile ? 52 : 88, lineHeight: 0.96, textTransform: "uppercase", color: "var(--chams-blue-ink)", margin: "16px 0 20px", letterSpacing: "-0.005em" }}>
                Products
              </h1>
              <p style={{ fontSize: 19, lineHeight: 1.5, color: "var(--chams-stone)" }}>
                Eleven products across three categories, all manufactured at our Lismore facility. All retail packs are food-safe vacuum-sealed; bulk hospitality formats available on request.
              </p>
            </div>
            <ImageBlock label="finished goods · cold store" ratio="4/3" tone="product" src="/assets/photos/factory_shelves.png" />
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 36, paddingTop: 22, borderTop: "1px solid var(--chams-tan)" }}>
            {cats.map(c => (
              <button key={c} onClick={() => setFilter(c)}
                style={{
                  fontFamily: "var(--font-subhead)",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  padding: "9px 16px",
                  borderRadius: 999,
                  border: "2px solid " + (filter === c ? "var(--chams-blue)" : "var(--chams-tan)"),
                  background: filter === c ? "var(--chams-blue)" : "transparent",
                  color: filter === c ? "var(--chams-cream)" : "var(--chams-blue)",
                  cursor: "pointer",
                }}>{c}</button>
            ))}
            <div style={{ flex: 1 }}></div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--chams-grain)", alignSelf: "center" }}>{list.length} products</span>
          </div>
        </Container>
      </Section>

      <Section bg="cream" style={{ paddingTop: 32, paddingBottom: 96 }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)", gap: 24 }}>
            {list.map(p => <ProductCard key={p.name} {...p} onClick={() => setRoute("product:" + p.slug)} />)}
          </div>
        </Container>
      </Section>

      <Section bg="red" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <Container>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
            <div>
              <Eyebrow color="rgba(242,231,203,.85)">Hospitality &amp; Wholesale</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 44, textTransform: "uppercase", color: "var(--chams-cream)", margin: "8px 0 0", lineHeight: 1.05 }}>
                Bulk formats and trade pricing on every product.
              </h2>
            </div>
            <Button kind="outline-cream" onClick={() => setRoute("contact")}>Request a Trade Pack</Button>
          </div>
        </Container>
      </Section>

      <SiteFooter setRoute={setRoute} />
    </main>
  );
}

/* ============================================================
   COMMUNITY
   ============================================================ */

function CommunityScreen({ setRoute }) {
  const mobile = useIsMobile();
  return (
    <main>
      <Section bg="cream" style={{ paddingTop: 56, paddingBottom: 32 }}>
        <Container>
          <div style={{ maxWidth: 820 }}>
            <Eyebrow>Community &amp; Environment</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: mobile ? 44 : 80, lineHeight: 0.96, textTransform: "uppercase", color: "var(--chams-blue-ink)", margin: "16px 0 20px", letterSpacing: "-0.005em" }}>
              Committed to the Place We Operate.
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.5, color: "var(--chams-stone)" }}>
              Cham's is a Northern NSW business, and the place we operate matters to us. We are committed to responsible environmental management at our Lismore facility and to supporting community partners who do meaningful work in our region.
            </p>
          </div>
        </Container>
      </Section>

      <Section bg="bone" style={{ paddingTop: 64, paddingBottom: 80 }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: mobile ? 32 : 64, alignItems: "stretch" }}>
            <div style={{ background: "var(--chams-cream)", border: "3px solid var(--chams-blue)", borderRadius: 4, padding: mobile ? 20 : 36 }}>
              <img src="/assets/logos/dam-kings-beach.svg" alt="Dam Kings Beach" style={{ height: 64, marginBottom: 16 }} />
              <Eyebrow>Community Partner</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 44, textTransform: "uppercase", color: "var(--chams-blue-ink)", margin: "10px 0 16px", lineHeight: 1 }}>
                Dam Kings Beach
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--chams-stone)" }}>
                Cham's is proud to support the Dam Kings Beach initiative, a community-led project working to maintain and improve public-access waterways in our region. We provide annual financial support and donate to their seasonal community events.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--chams-stone)" }}>
                Our partnership reflects our commitment to the Northern Rivers community and to the long-term stewardship of the natural assets that make this part of Australia what it is.
              </p>
              <a href="https://damkingsbeach.org" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontFamily: "var(--font-subhead)", fontWeight: 700, fontSize: 13,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--chams-red)", textDecoration: "none",
                borderBottom: "2px solid var(--chams-red)", paddingBottom: 2, marginTop: 8,
              }}>damkingsbeach.org <Icon name="arrowRight" size={12} /></a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <ImageBlock label="dam kings beach · community day" ratio="16/9" tone="archival" src="/assets/photos/dam_kings_beach_community.png" objectPosition="center 40%" />
              <div style={{ background: "var(--chams-cream)", border: "1px solid var(--chams-tan)", borderRadius: 4, padding: 28 }}>
                <Eyebrow>From the Founder</Eyebrow>
                <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, lineHeight: 1.5, color: "var(--chams-blue-ink)", margin: "14px 0 0" }}>
                  "We been here forty year. The river, the beach, all this — it's our community. You support the community, the community support you. That's how it works."
                </p>
                <div style={{ fontFamily: "var(--font-subhead)", fontWeight: 700, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--chams-stone)", marginTop: 16 }}>— Cham Bellanova</div>
              </div>
              <div style={{ background: "var(--chams-cream)", border: "1px solid var(--chams-tan)", borderRadius: 4, padding: 28, display: "flex", alignItems: "center", gap: 24 }}>
                <img src="/assets/logos/dam-kings-beach.svg" alt="Dam Kings Beach" style={{ height: 56, flexShrink: 0 }} />
                <div style={{ fontSize: 14, lineHeight: 1.55, color: "var(--chams-stone)" }}>
                  Cham's is a founding sponsor of the Dam Kings Beach initiative. Supporting clean waterways in the Northern Rivers since 2019.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="cream">
        <Container>
          <SectionHead eyebrow="Operations" title="Environmental Management" />
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)", gap: 32, marginTop: 36 }}>
            {[
              ["Water", "Closed-loop water recycling on all sanitation lines, installed 2019. ~62% reduction in mains water draw vs 2018 baseline."],
              ["Waste", "Trim and bone by-product diverted to local agricultural use. Plastic and cardboard packaging waste sorted for recycling on-site."],
              ["Energy", "Rooftop solar (148 kW) installed 2022. Refrigeration retro-fitted to natural-refrigerant condensers."],
            ].map(([t, d]) => (
              <div key={t} style={{ borderTop: "2px solid var(--chams-blue)", paddingTop: 14 }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 26, textTransform: "uppercase", color: "var(--chams-blue-ink)", margin: 0 }}>{t}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--chams-stone)", marginTop: 8, marginBottom: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <SiteFooter setRoute={setRoute} />
    </main>
  );
}

/* ============================================================
   CONTACT
   ============================================================ */

function ContactScreen({ setRoute }) {
  const mobile = useIsMobile();
  const [submitted, setSubmitted] = useState(false);
  return (
    <main>
      <Section bg="cream" style={{ paddingTop: 56, paddingBottom: 32 }}>
        <Container>
          <div style={{ maxWidth: 760 }}>
            <Eyebrow>Get in Touch</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: mobile ? 52 : 88, lineHeight: 0.96, textTransform: "uppercase", color: "var(--chams-blue-ink)", margin: "16px 0 20px", letterSpacing: "-0.005em" }}>
              Contact Cham's
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.5, color: "var(--chams-stone)" }}>
              Office hours are Monday to Friday, 7am to 4pm. For wholesale enquiries, please use the form below or call directly.
            </p>
          </div>
        </Container>
      </Section>

      <Section bg="cream" style={{ paddingTop: 32, paddingBottom: 96 }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1.1fr", gap: mobile ? 32 : 56, alignItems: "start" }}>
            {/* Address card + map */}
            <div>
              <ImageBlock label="cham's facility · industrial drive" ratio="4/3" tone="factory" src="/assets/photos/chams_factory_front_van.png" />
              <div style={{ background: "var(--chams-bone)", border: "1px solid var(--chams-tan)", borderRadius: 4, padding: 28, marginTop: 24 }}>
                <Eyebrow>Visit / Contact</Eyebrow>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, textTransform: "uppercase", color: "var(--chams-blue-ink)", margin: "10px 0 16px" }}>Cham's Office &amp; Factory</h3>
                <ContactRow icon="pin" label="Address">12 Industrial Drive<br />Lismore NSW 2480<br />Australia</ContactRow>
                <ContactRow icon="phone" label="Phone">02 6621 4488</ContactRow>
                <ContactRow icon="mail" label="Email">office@chams.com.au</ContactRow>
                <ContactRow icon="clock" label="Hours">Mon–Fri · 7am – 4pm<br />Closed weekends &amp; public holidays</ContactRow>
                <ContactRow icon="truck" label="Wholesale">trade@chams.com.au<br />02 6621 4499</ContactRow>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--chams-grain)", marginTop: 18, paddingTop: 14, borderTop: "1px solid var(--chams-tan)" }}>ABN 38 614 720 991 · Cham's Small Meats &amp; Preservatives Pty Ltd</div>
              </div>
            </div>
            {/* Contact form */}
            <div style={{ background: "var(--chams-bone)", border: "1px solid var(--chams-tan)", borderRadius: 4, padding: 36 }}>
              <Eyebrow>General &amp; Wholesale Enquiries</Eyebrow>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 36, textTransform: "uppercase", color: "var(--chams-blue-ink)", margin: "8px 0 6px" }}>Send a Message</h3>
              <p style={{ fontSize: 14, color: "var(--chams-stone)", marginBottom: 24 }}>
                We respond to all enquiries within two business days. For urgent wholesale matters please call directly on 02 6621 4499.
              </p>
              {submitted ? (
                <div style={{ background: "rgba(79,107,58,.12)", border: "2px solid var(--chams-success)", borderRadius: 4, padding: 22 }}>
                  <Eyebrow color="var(--chams-success)">Message Received</Eyebrow>
                  <p style={{ fontSize: 16, color: "var(--chams-blue-ink)", margin: "10px 0 0" }}>Thanks. The office will be in touch within two business days.</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <Field label="First name" defaultValue="" />
                    <Field label="Last name" defaultValue="" />
                    <Field label="Business name" defaultValue="" colSpan={2} />
                    <Field label="Email" type="email" defaultValue="" />
                    <Field label="Phone" type="tel" defaultValue="" />
                    <Field label="Enquiry type" select options={["General", "Wholesale", "Hospitality", "Media / Press", "Other"]} colSpan={2} />
                    <Field label="Message" textarea defaultValue="" colSpan={2} />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
                    <span style={{ fontSize: 12, color: "var(--chams-grain)" }}>We don't share details with third parties.</span>
                    <Button kind="primary">Send Enquiry <Icon name="arrowRight" size={14} /></Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>
      </Section>

      <SiteFooter setRoute={setRoute} />
    </main>
  );
}

function ContactRow({ icon, label, children }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "20px 90px 1fr", gap: 12, alignItems: "start", padding: "10px 0", borderTop: "1px solid var(--chams-tan)" }}>
      <Icon name={icon} size={16} color="var(--chams-blue)" style={{ marginTop: 2 }} />
      <div style={{ fontFamily: "var(--font-subhead)", fontWeight: 700, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--chams-stone)", marginTop: 2 }}>{label}</div>
      <div style={{ fontSize: 14, color: "var(--chams-blue-ink)", lineHeight: 1.5 }}>{children}</div>
    </div>
  );
}

function Field({ label, type, textarea, select, options, defaultValue, colSpan }) {
  const inputStyle = {
    width: "100%",
    boxSizing: "border-box",
    background: "var(--chams-paper)",
    border: "1px solid var(--chams-tan)",
    borderRadius: 2,
    padding: "11px 12px",
    fontFamily: "var(--font-body)",
    fontSize: 14,
    color: "var(--chams-ink)",
    outline: 0,
  };
  const onFocus = e => { e.currentTarget.style.border = "2px solid var(--chams-blue)"; e.currentTarget.style.padding = "10px 11px"; };
  const onBlur = e => { e.currentTarget.style.border = "1px solid var(--chams-tan)"; e.currentTarget.style.padding = "11px 12px"; };
  return (
    <label style={{ display: "block", gridColumn: colSpan === 2 ? "span 2" : null }}>
      <span style={{ display: "block", fontFamily: "var(--font-subhead)", fontWeight: 700, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--chams-blue)", marginBottom: 6 }}>{label}</span>
      {textarea ? (
        <textarea defaultValue={defaultValue} rows={4} onFocus={onFocus} onBlur={onBlur} style={{ ...inputStyle, resize: "vertical", minHeight: 110 }} />
      ) : select ? (
        <select defaultValue={defaultValue} onFocus={onFocus} onBlur={onBlur} style={{ ...inputStyle, appearance: "none" }}>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input type={type || "text"} defaultValue={defaultValue} onFocus={onFocus} onBlur={onBlur} style={inputStyle} />
      )}
    </label>
  );
}

/* ============================================================
   PRODUCT DETAIL
   ============================================================ */

function ProductDetailScreen({ slug, setRoute }) {
  const mobile = useIsMobile();
  const product = PRODUCTS.find(p => p.slug === slug);
  if (!product) return (
    <main>
      <Section bg="cream" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <Container>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 48, textTransform: "uppercase", color: "var(--chams-blue-ink)" }}>Product Not Found</h1>
          <Button kind="primary" onClick={() => setRoute("products")}>Back to Products</Button>
        </Container>
      </Section>
      <SiteFooter setRoute={setRoute} />
    </main>
  );

  const related = PRODUCTS.filter(p => p.cat === product.cat && p.slug !== product.slug).slice(0, 3);

  return (
    <main>
      <Section bg="cream" style={{ paddingTop: 32, paddingBottom: 0 }}>
        <Container>
          <a href="#" onClick={e => { e.preventDefault(); setRoute("products"); }}
            style={{
              fontFamily: "var(--font-subhead)", fontWeight: 700, fontSize: 12,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "var(--chams-stone)", textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8,
            }}>
            <span style={{ transform: "rotate(180deg)", display: "inline-flex" }}><Icon name="arrowRight" size={12} /></span>
            Back to Products
          </a>
        </Container>
      </Section>

      <Section bg="cream" style={{ paddingTop: 24, paddingBottom: 80 }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: mobile ? 32 : 64, alignItems: "start" }}>
            <div style={{ position: mobile ? "static" : "sticky", top: 100 }}>
              <ImageBlock label={product.name.toLowerCase()} ratio="1/1" tone="product" src={product.image} objectFit="contain" style={{ borderRadius: 8 }} />
            </div>

            <div>
              <Eyebrow>{product.cat}</Eyebrow>
              <h1 style={{
                fontFamily: "var(--font-display)", fontWeight: 900,
                fontSize: mobile ? 44 : 64, lineHeight: 0.96,
                textTransform: "uppercase", color: "var(--chams-blue-ink)",
                margin: "12px 0 8px", letterSpacing: "-0.005em",
              }}>{product.name}</h1>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 24 }}>
                <Badge kind="blue">{product.weight}</Badge>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--chams-grain)" }}>Batch · {product.batch}</span>
              </div>

              <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--chams-stone)", marginBottom: 32 }}>
                {product.description}
              </p>

              <div style={{ display: "grid", gap: 0 }}>
                <DetailRow label="Ingredients" value={product.ingredients} />
                <DetailRow label="Curing" value={product.curing} />
                <DetailRow label="Storage" value={product.storage} />
                <DetailRow label="Origin" value={product.origin} />
                <DetailRow label="Available Formats" value={
                  <ul style={{ margin: 0, paddingLeft: 18 }}>
                    {product.formats.map(f => <li key={f} style={{ fontSize: 14, lineHeight: 1.6, color: "var(--chams-stone)" }}>{f}</li>)}
                  </ul>
                } />
              </div>

              <div style={{ display: "flex", gap: 14, marginTop: 32 }}>
                <Button kind="red" onClick={() => setRoute("contact")}>Wholesale Enquiry</Button>
                <Button kind="outline" href="#">Download Spec Sheet</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section bg="bone" style={{ paddingTop: 64, paddingBottom: 80 }}>
          <Container>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, gap: 24 }}>
              <SectionHead eyebrow={product.cat} title="More in This Range" />
              <InlineLink onClick={() => setRoute("products")}>See all products →</InlineLink>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : `repeat(${Math.min(related.length, 3)}, 1fr)`, gap: 24 }}>
              {related.map(p => <ProductCard key={p.name} {...p} onClick={() => setRoute("product:" + p.slug)} />)}
            </div>
          </Container>
        </Section>
      )}

      <SiteFooter setRoute={setRoute} />
    </main>
  );
}

function DetailRow({ label, value }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 16, padding: "14px 0", borderTop: "1px solid var(--chams-tan)", alignItems: "start" }}>
      <div style={{
        fontFamily: "var(--font-subhead)", fontWeight: 700, fontSize: 11,
        letterSpacing: "0.18em", textTransform: "uppercase",
        color: "var(--chams-blue)", paddingTop: 2,
      }}>{label}</div>
      <div style={{ fontSize: 14, lineHeight: 1.55, color: "var(--chams-stone)" }}>{value}</div>
    </div>
  );
}

/* ============================================================
   APP SHELL
   ============================================================ */

function usePageMeta(title, description, image) {
  useEffect(() => {
    document.title = title;
    const setMeta = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(property.startsWith("og:") || property.startsWith("twitter:") ? "property" : "name", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("description", description);
    setMeta("og:title", title);
    setMeta("og:description", description);
    setMeta("og:type", "website");
    setMeta("og:site_name", "Cham's Small Meats & Preservatives");
    if (image) setMeta("og:image", image);
    setMeta("twitter:card", image ? "summary_large_image" : "summary");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    if (image) setMeta("twitter:image", image);
  }, [title, description, image]);
}

function App() {
  const [route, setRoute] = useState("home");
  useEffect(() => { window.scrollTo(0, 0); }, [route]);

  const isProduct = route.startsWith("product:");
  const productSlug = isProduct ? route.slice(8) : null;
  const product = productSlug ? PRODUCTS.find(p => p.slug === productSlug) : null;

  const pageMeta = {
    home: { title: "Cham's Small Meats & Preservatives — Family-Owned Smallgoods, Lismore NSW", desc: "Traditional cured meats and preservatives made the same way for nearly forty years. Supplying independent retailers and hospitality providers across NSW since 1987.", img: "/assets/photos/cham_portrait.png" },
    about: { title: "Our Story — Cham's Small Meats & Preservatives", desc: "Founded in a Goonellabah garage in 1985, Cham's has grown into a 60-staff facility in Lismore. Family-owned, same recipes, forty years on.", img: "/assets/photos/processing_close_up.png" },
    products: { title: "Products — Cham's Small Meats & Preservatives", desc: "Nine products across three categories: salami & soppressa, cured cuts, and preservatives. All manufactured at our Lismore facility.", img: "/assets/photos/factory_shelves.png" },
    community: { title: "Community & Environment — Cham's Small Meats & Preservatives", desc: "Cham's is committed to the Northern Rivers community. Proud supporter of Dam Kings Beach and responsible environmental management.", img: "/assets/photos/dam_kings_beach_community.png" },
    contact: { title: "Contact — Cham's Small Meats & Preservatives", desc: "Get in touch with Cham's. Office hours Monday to Friday, 7am to 4pm. Wholesale and hospitality enquiries welcome.", img: "/assets/photos/chams_factory_front_van.png" },
  };

  const meta = product
    ? { title: `${product.name} — Cham's Small Meats & Preservatives`, desc: product.sub, img: product.image }
    : (pageMeta[route] || pageMeta.home);

  usePageMeta(meta.title, meta.desc, meta.img);

  if (isProduct) {
    return (
      <div data-screen-label={`Website · product · ${productSlug}`}>
        <SiteHeader route="products" setRoute={setRoute} />
        <ProductDetailScreen slug={productSlug} setRoute={setRoute} />
      </div>
    );
  }

  const screens = { home: HomeScreen, about: AboutScreen, products: ProductsScreen, community: CommunityScreen, contact: ContactScreen };
  const Cur = screens[route] || HomeScreen;
  return (
    <div data-screen-label={`Website · ${route}`}>
      <SiteHeader route={route} setRoute={setRoute} />
      <Cur setRoute={setRoute} />
    </div>
  );
}

export default App;
