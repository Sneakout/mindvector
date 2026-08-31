import { Mark } from "./components/Mark";

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
        <nav aria-label="Main navigation"><a href="#services">Capabilities</a><a href="#approach">Approach</a><a href="#contact">Contact</a></nav>
        <a className="nav-cta" href="#contact">Start a project <span>↗</span></a>
      </header>

      <section className="hero" id="content">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Independent digital product studio</p>
          <h1>Ideas worth<br /><em>building well.</em></h1>
          <p className="hero-lede">MindVector partners with ambitious teams to design and build digital products people choose to use.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Tell us what you&apos;re building <b>→</b></a><a className="text-link" href="#services">Explore capabilities <span>↓</span></a></div>
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
        <div className="intro-layout"><h2>Business-minded.<br /><em>Product-obsessed.</em></h2><div><p className="big-copy">We combine strategy, product design and engineering to turn ambitious ideas into software that is useful, distinct and built to last.</p><p className="muted">From a first prototype to a platform that needs to scale, we bring the senior attention a meaningful product deserves.</p></div></div>
        <div className="signal-row" aria-label="MindVector capabilities"><span>PRODUCT STRATEGY</span><i /><span>DESIGN</span><i /><span>ENGINEERING</span><i /><span>INTELLIGENCE</span></div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading"><p className="section-kicker">02 / CAPABILITIES</p><p>One partner across the work that turns an idea into a living product.</p></div>
        <div className="service-grid">{services.map((service) => <article className={`service-card ${service.className}`} key={service.number}><div className="service-top"><span>{service.number}</span><i>↗</i></div><div className="service-art" aria-hidden="true"><b /><b /><b /></div><div className="service-content"><h3>{service.title}</h3><p>{service.text}</p><ul>{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div></article>)}</div>
      </section>

      <section className="statement section">
        <p className="section-kicker">03 / WHAT WE BELIEVE</p>
        <p className="statement-copy">Technology should make a business <em>clearer, quicker and more human.</em> The best products create their own momentum.</p>
        <div className="statement-note"><span>OUR STANDARD</span><p>Thoughtful in the details.<br />Direct in the decisions.<br /><b>Useful in the real world.</b></p></div>
      </section>

      <section className="approach section" id="approach">
        <div className="section-heading"><p className="section-kicker">04 / HOW WE WORK</p><h2>Less theatre.<br /><em>More progress.</em></h2></div>
        <div className="process-list">{process.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><i>→</i></article>)}</div>
      </section>

      <section className="outcomes section"><div className="outcome-rail"><span>WHAT WE HELP CREATE</span><span>WHAT WE HELP CREATE</span></div><div className="outcomes-grid"><h2>Software with a<br /><em>reason to exist.</em></h2><div className="outcome-list"><p>New ventures with a clear first release.</p><p>Established products ready for their next chapter.</p><p>Operations that need to stop living in spreadsheets.</p><p>AI opportunities grounded in an actual business need.</p></div></div></section>

      <section className="contact" id="contact"><p className="eyebrow"><span /> Let&apos;s make something useful</p><h2>Have a product<br /><em>in mind?</em></h2><p>Tell us where you are and where you want to get to. We&apos;ll start with a candid conversation.</p><a className="contact-link" href="mailto:hello@mindvector.tech?subject=Project%20enquiry">hello@mindvector.tech <span>↗</span></a></section>

      <footer><a className="brand" href="#top"><Mark />MindVector</a><div className="footer-links"><a href="#services">Capabilities</a><a href="#approach">Approach</a><a href="mailto:hello@mindvector.tech">Contact</a></div><p>© 2026 MindVector</p></footer>
    </main>
  );
}
