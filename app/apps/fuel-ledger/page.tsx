import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FuelLedger | Petrol pump management, under control.",
  description: "FuelLedger is the complete operating system for petrol pumps, with FuelLedger Intelligence for daily AI owner briefings, anomaly alerts and better business questions.",
  alternates: { canonical: "https://mindvector.tech/apps/fuel-ledger" },
  keywords: ["FuelLedger", "petrol pump management", "fuel station management system", "petrol pump software", "fuel inventory", "pump reconciliation", "petrol pump AI"],
  openGraph: {
    title: "FuelLedger | The operating system for petrol pumps",
    description: "Run staff, shifts, fuel and non-fuel inventory, sales, collections, accounting and daily AI-led owner insights from one system.",
    url: "https://mindvector.tech/apps/fuel-ledger",
    siteName: "FuelLedger",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "FuelLedger | The operating system for petrol pumps",
    description: "Complete petrol pump operations, daily control and AI-led owner insights in one place.",
  },
};

const features = [
  "Shift, nozzle and attendant management",
  "Shift-wise transactions and profitability",
  "Tank stock, dips and density management",
  "MS, HSD, lubricants and AdBlue inventory",
  "Stock transfers, purchases and stock reports",
  "Sales and collection reconciliation",
  "Bank statement reconciliation",
  "Customers, credit billing and fleet management",
  "Credit-collection reports and outstanding reminders",
  "Purchases, expenses and salaries",
  "Complete GST management",
  "Start-to-end accounting and owner reports",
  "DSR and required operational reports",
  "Graphical dashboard and business statistics",
  "SMS, email and WhatsApp communication",
  "Mobile access, daily backups and audit history",
  "Secure, confidential data and customised support",
  "Online demo, training and assisted installation",
];

const modules = [
  ["01", "People & shifts", "Manage attendants, shift handovers, nozzles, cash responsibility and approvals in one daily flow."],
  ["02", "Fuel & inventory", "Track MS, HSD, lubricants, AdBlue and every tank movement—from dip to density to closing stock."],
  ["03", "Sales & revenue", "Reconcile cash, UPI, cards, credit, fleet and other non-fuel revenue without stitching reports together."],
  ["04", "Finance & control", "Run purchases, expenses, salaries, accounting, reports and a multi-pump view from the same source of truth."],
];

export default function FuelLedgerPage() {
  return <main className="fuel-page">
    <header className="fuel-nav"><a href="/" className="fuel-brand" aria-label="MindVector home"><img className="fuel-logo" src="/fuel-ledger-mark.svg" alt="" />FuelLedger</a><nav aria-label="FuelLedger navigation"><a href="#product">Product</a><a href="#operations">Operations</a><a href="#intelligence">Intelligence</a><a href="#intelligence-package">AI package</a><a href="#pricing">Pricing</a></nav><a className="fuel-nav-cta" href="https://fuelledger.mindvector.tech/login">Sign in <span>↗</span></a></header>
    <section className="fuel-hero" id="product">
      <div className="fuel-hero-copy"><p className="fuel-eyebrow"><span /> The operating system for petrol pumps</p><h1>Every shift.<br /><em>Under control.</em></h1><p>FuelLedger runs the daily reality of a petrol pump—from people and fuel stock to collections, accounting and every revenue line—so owners know exactly how the business is doing.</p><div className="fuel-actions"><a className="fuel-primary" href="https://fuelledger.mindvector.tech/demo">Try live demo <b>→</b></a><a className="fuel-link" href="#operations">Explore the OS <span>↓</span></a></div></div>
      <div className="fuel-dashboard" aria-label="FuelLedger dashboard preview" role="img"><div className="dashboard-top"><span>GREENWAY FUEL POINT</span><i>● LIVE</i></div><div className="dashboard-title"><p>Tuesday, 1 September</p><b>Greenway Fuel Point, under control</b><span>Today&apos;s performance, outlet health, and what needs attention.</span></div><div className="fuel-metrics"><div><small>SALES TODAY</small><strong>₹3,40,948</strong><span>10 transactions</span></div><div><small>COLLECTED TODAY</small><strong>₹2,93,295</strong><span>Cash, UPI, card & other</span></div><div><small>NET PROFIT TODAY</small><strong>₹29,826</strong><span>Sales less product cost</span></div></div><div className="dashboard-lower"><section><small>7-DAY PERFORMANCE</small><h2>₹22,60,916 <span>in sales</span></h2><div className="bar-chart" aria-hidden="true">{[59,68,63,77,71,82,74].map((height, index) => <i key={index} style={{ "--height": `${height}%` } as React.CSSProperties} />)}</div></section><aside><small>ATTENTION</small><h3>What needs action</h3><p><b>3 shifts</b> waiting for reconciliation <span>→</span></p><p><b>1 stock position</b> at zero or below <span>→</span></p></aside></div></div>
    </section>
    <section className="fuel-value"><p>ONE SYSTEM FOR THE WHOLE OUTLET</p><div><strong>01</strong><span>Know what happened today.</span><strong>02</strong><span>See what needs attention.</span><strong>03</strong><span>Close every shift with confidence.</span></div></section>
    <section className="fuel-operations" id="operations"><div className="fuel-section-head"><p className="fuel-eyebrow"><span /> The complete petrol pump OS</p><h2>One operating picture.<br /><em>Every moving part.</em></h2><p>FuelLedger connects the work that usually lives across registers, spreadsheets, messages and disconnected software. Your outlet runs from one source of truth.</p></div><div className="module-grid">{modules.map(([number, title, detail]) => <article key={number}><span>{number}</span><div className="module-icon" aria-hidden="true"><i /><i /><i /></div><h3>{title}</h3><p>{detail}</p><b>→</b></article>)}</div><div className="revenue-strip"><div><span>FUEL REVENUE</span><b>MS · HSD · Lubes · AdBlue</b></div><div><span>NON-FUEL REVENUE</span><b>Store · Services · Other income</b></div><div><span>EVERYDAY CONTROL</span><b>Stock · Collections · Cash · Credit</b></div></div></section>
    <section className="fuel-intelligence" id="intelligence"><div className="intelligence-copy"><p className="fuel-eyebrow"><span /> Owner intelligence</p><h2>Know the story<br /><em>behind the numbers.</em></h2><p>FuelLedger uses AI and machine learning to turn the day&apos;s operations into a clear owner briefing. It surfaces patterns, flags unusual movement and helps you ask better questions before a small issue becomes a costly one.</p><ul><li><span>✓</span>Daily business health summary</li><li><span>✓</span>Sales, stock and collection anomalies</li><li><span>✓</span>Actionable attention prompts</li></ul></div><div className="ai-brief" aria-label="Example FuelLedger daily intelligence briefing"><div className="ai-brief-top"><span>FUELLEDGER INTELLIGENCE</span><i>● DAILY BRIEF</i></div><p className="ai-date">GREENWAY FUEL POINT · 01 SEP</p><h3>Your outlet is <em>healthy today.</em></h3><div className="ai-insight good"><span>↗</span><p><b>Sales are 8.4% above</b> your 7-day average, led by HSD volume.</p></div><div className="ai-insight alert"><span>!</span><p><b>Collection gap needs review.</b> One shift remains open after the expected close time.</p></div><div className="ai-insight"><span>◎</span><p><b>MS Tank 1 is trending low.</b> Plan the next replenishment before tomorrow evening.</p></div><footer><span>3 signals reviewed</span><b>Open daily brief →</b></footer></div></section>
    <section className="fuel-pricing" id="pricing"><div className="pricing-heading"><p className="fuel-eyebrow"><span /> One complete plan</p><h2>FuelLedger<br /><em>Lifetime access.</em></h2><p>Own the complete operating system with a one-time payment. Add FuelLedger Intelligence whenever you want ongoing AI owner insight.</p></div><article className="pricing-card"><div className="complete-plan-head"><div><img className="fuel-logo" src="/fuel-ledger-mark.svg" alt="" /><div><span>Recommended plan</span><p>FuelLedger Complete</p></div></div><b>Simple pricing</b></div><div className="complete-price-grid"><div className="complete-price setup-price"><p>First-time setup <b>1 month free</b></p><strong>₹2,000</strong><span>per petrol pump</span></div><div className="complete-price lifetime-complete-price"><p>Lifetime access <b>One-time payment</b></p><strong>₹24,000</strong><span>lifetime access per petrol pump</span></div></div><p className="complete-price-caption">One setup. Full ownership. No recurring FuelLedger software subscription.</p><aside className="whatsapp-fair-use"><div className="whatsapp-fair-use-copy"><p>WHATSAPP OWNER ALERTS</p><h3>Essential alerts included under fair use.</h3><span>Daily summaries, density reminders, open-shift prompts and occasional low-stock or variance alerts.</span></div><div className="whatsapp-limit"><strong>200</strong><span>alerts / month included</span></div><p className="whatsapp-policy">Need more? Recharge notification credits at cost: <b>₹100 for 500 alerts.</b> WhatsApp delivery is subject to Meta availability and fair-use limits. <a href="https://developers.facebook.com/docs/whatsapp/pricing" target="_blank" rel="noreferrer">Meta pricing ↗</a></p></aside><p className="feature-intro">Every FuelLedger Complete plan includes:</p><ul className="feature-list">{features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul><a className="pricing-contact" href="https://fuelledger.mindvector.tech/login">Start FuelLedger <span>↗</span></a><p className="price-note">Prices exclude applicable GST. No transaction fee is charged by FuelLedger.</p></article></section>
    <section className="intelligence-package" id="intelligence-package"><div className="intelligence-package-copy"><p className="fuel-eyebrow"><span /> A recurring AI service</p><h2>FuelLedger<br /><em>Intelligence.</em></h2><p>FuelLedger uses AI and machine learning to turn the day&apos;s operations into a clear owner briefing. It surfaces patterns, flags unusual movement and helps you ask better questions before a small issue becomes a costly one.</p><ul><li><span>01</span>Daily business-health briefings</li><li><span>02</span>Sales, stock and collection anomaly alerts</li><li><span>03</span>25 AI owner questions every month</li></ul><small>Requires FuelLedger Complete. GST applies where applicable.</small></div><article className="intelligence-package-card"><div className="intelligence-package-top"><img className="fuel-logo" src="/fuel-ledger-mark.svg" alt="" /><div><p>FUELLEDGER INTELLIGENCE</p><span>AI owner briefings and actions</span></div><b>NEW</b></div><div className="intelligence-package-price"><div><p>MONTHLY</p><strong>₹1,199</strong><span>per outlet / month</span></div><div className="annual-price"><p>BEST VALUE · ANNUAL</p><strong>₹11,999</strong><span>per outlet / year</span><small>Two months effectively free</small></div></div><div className="founding-offer"><span>FOUNDING OUTLET OFFER</span><b>₹7,999 for the first year</b><p>Available for the first 50 FuelLedger outlets. Renews at ₹11,999/year.</p></div><a className="intelligence-package-cta" href="https://fuelledger.mindvector.tech/login">Add Intelligence <span>→</span></a></article></section>
    <section className="fuel-cta"><p className="fuel-eyebrow"><span /> Built for the daily reality of a pump</p><h2>Ready to run a<br /><em>tighter outlet?</em></h2><a href="https://fuelledger.mindvector.tech/login">Start FuelLedger <span>→</span></a></section><footer className="fuel-footer"><a href="/" className="fuel-brand"><img className="fuel-logo" src="/fuel-ledger-mark.svg" alt="" />FuelLedger</a><p>© 2026 FuelLedger</p><a href="/">A MindVector product ↗</a></footer>
  </main>;
}
