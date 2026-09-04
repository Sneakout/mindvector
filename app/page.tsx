import { Mark } from "./components/Mark";
import { AppsMenu } from "./components/AppsMenu";
import { MobileMenu } from "./components/MobileMenu";

const services = [
  { number: "01", title: "Mobile products", text: "Native iOS and Android apps that feel considered from the first tap to the thousandth.", tags: ["iOS", "Android", "React Native"], className: "mobile" },
  { number: "02", title: "Web platforms", text: "Fast, expressive websites and web applications built to turn attention into action.", tags: ["Websites", "SaaS", "Commerce"], className: "web" },
  { number: "03", title: "Business systems", text: "CRM, billing and internal tools that bring the moving parts of your business into focus.", tags: ["CRM", "Billing", "Operations"], className: "systems" },
  { number: "04", title: "Applied AI", text: "Useful AI and machine-learning capabilities, designed around real workflows—not demos.", tags: ["AI agents", "Automation", "ML"], className: "ai" },
];

const process = [
  ["01", "Frame", "We find the real problem, the commercial opportunity and the clearest path through."],
  ["02", "Shape", "We turn the direction into an opinionated product, brand and technical plan."],
  ["03", "Build", "A focused senior team designs, engineers and tests the product as one system."],
  ["04", "Evolve", "We launch, learn from real use and make the next decisions with intent."],
];

export default function Home() {
  return (
    <main id="top">
      <a className="skip" href="#content">Skip to content</a>
      <header className="nav">
        <a className="brand" href="#top" aria-label="MindVector home"><Mark />MindVector</a>
        <nav aria-label="Main navigation"><a href="#services">Capabilities</a><a href="#approach">Approach</a><AppsMenu /><a href="#contact">Contact</a></nav>
        <MobileMenu />
        <a className="nav-cta" href="#contact">Start a project <span>↗</span></a>
      </header>

      <section className="hero" id="content">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Product company &amp; development partner</p>
          <h1>Products we build.<br /><em>Teams we help build.</em></h1>
          <p className="hero-lede">MindVector creates software products of its own—and works alongside ambitious teams to turn sharp ideas into mobile apps, web platforms, business systems and applied AI.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Build with MindVector <b>→</b></a><a className="text-link" href="#products">Explore our products <span>↓</span></a></div>
        </div>
        <div className="hero-system" aria-label="A visual representation of product systems connecting into one release" role="img">
          <div className="system-label label-a">PRODUCT / 01</div><div className="system-label label-b">SHIPPED WITH INTENT</div>
          <div className="system-grid">
            <div className="system-card card-product"><span>01</span><b>PRODUCT</b><i /></div><div className="system-card card-design"><span>02</span><b>DESIGN</b><i /></div><div className="system-card card-engineering"><span>03</span><b>ENGINEERING</b><i /></div><div className="system-card card-intelligence"><span>04</span><b>INTELLIGENCE</b><i /></div><div className="system-core"><Mark /><strong>ONE<br />SYSTEM</strong></div>
          </div>
        </div>
        <div className="hero-foot"><span>BUILT FOR THE NEXT VERSION OF YOUR BUSINESS</span><a href="#approach">SCROLL TO EXPLORE <b>↓</b></a></div>
      </section>

      <section className="intro section">
        <p className="section-kicker">01 / THE STUDIO</p>
        <div className="intro-layout"><h2>We ship our own.<br /><em>Then help you ship yours.</em></h2><div><p className="big-copy">Building and operating products gives us a practical point of view: what launches cleanly, what people adopt and what survives everyday use.</p><p className="muted">That same product judgement goes into every partnership—from a first prototype to a platform ready to scale.</p></div></div>
        <div className="signal-row" aria-label="MindVector capabilities"><span>PRODUCT STRATEGY</span><i /><span>DESIGN</span><i /><span>ENGINEERING</span><i /><span>INTELLIGENCE</span></div>
      </section>

      <section className="products section" id="products">
        <div className="section-heading"><p className="section-kicker">02 / OUR PRODUCTS</p><p>Software born from real operating problems, built with the same care we bring to client work.</p></div>
        <div className="product-showcase">
          <div className="product-showcase-copy"><p className="product-label">NOW LIVE / FUELLEDGER</p><h2>Every shift.<br /><em>Under control.</em></h2><p>FuelLedger is the operating system for petrol pumps—bringing people, fuel, inventory, collections, finance and daily business intelligence into one clear view.</p><div className="product-points"><span>Operations &amp; reconciliation</span><span>Inventory, MS, HSD &amp; Lubes</span><span>Owner intelligence &amp; alerts</span></div><a className="text-link" href="/apps/fuel-ledger/">Discover FuelLedger <span>↗</span></a></div>
          <div className="product-showcase-panel" aria-label="FuelLedger product overview"><div><small>FUELLEDGER / DAILY BRIEF</small><strong>Your outlet,<br />in focus.</strong><p>Clear signals for the decisions that matter today.</p></div><span>01</span></div>
        </div>
        <div className="product-note"><span>WHAT WE&apos;RE BUILDING</span><p>A growing portfolio of focused software products—alongside original work for teams that need a committed product partner.</p></div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading"><p className="section-kicker">03 / BUILD WITH US</p><p>One senior partner across the work that turns an idea into a living product.</p></div>
        <div className="service-grid">{services.map((service) => <article className={`service-card ${service.className}`} key={service.number}><div className="service-top"><span>{service.number}</span><i>↗</i></div><div className="service-art" aria-hidden="true"><b /><b /><b /></div><div className="service-content"><h3>{service.title}</h3><p>{service.text}</p><ul>{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div></article>)}</div>
      </section>

      <section className="statement section">
        <p className="section-kicker">04 / WHAT WE BELIEVE</p>
        <p className="statement-copy">Technology should make a business <em>clearer, quicker and more human.</em> The best products create their own momentum.</p>
        <div className="statement-note"><span>OUR STANDARD</span><p>Thoughtful in the details.<br />Direct in the decisions.<br /><b>Useful in the real world.</b></p></div>
      </section>

      <section className="approach section" id="approach">
        <div className="section-heading"><p className="section-kicker">05 / HOW WE WORK</p><h2>Less theatre.<br /><em>More progress.</em></h2></div>
        <div className="process-list">{process.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><i>→</i></article>)}</div>
      </section>

      <section className="outcomes section"><div className="outcome-rail"><span>WHAT WE HELP CREATE</span><span>WHAT WE HELP CREATE</span></div><div className="outcomes-grid"><h2>Software with a<br /><em>reason to exist.</em></h2><div className="outcome-list"><p>New ventures with a clear first release.</p><p>Established products ready for their next chapter.</p><p>Operations that need to stop living in spreadsheets.</p><p>AI opportunities grounded in an actual business need.</p></div></div></section>

      <section className="contact" id="contact"><p className="eyebrow"><span /> Let&apos;s make something useful</p><h2>Have a product<br /><em>in mind?</em></h2><p>Tell us where you are and where you want to get to. We&apos;ll start with a candid conversation.</p><a className="contact-link" href="mailto:hello@mindvector.tech?subject=Project%20enquiry">hello@mindvector.tech <span>↗</span></a></section>

      <footer><a className="brand" href="#top"><Mark />MindVector</a><div className="footer-links"><a href="#services">Capabilities</a><a href="#approach">Approach</a><a href="mailto:hello@mindvector.tech">Contact</a></div><p>© 2026 MindVector</p></footer>
    </main>
  );
}
