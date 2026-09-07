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

const intelligenceAgents = [
  ["01", "Shift Review", "Reviews closed shifts, cash handovers, payment methods and unexplained differences."],
  ["02", "Stock Watch", "Watches MS, HSD and lubricants, then flags stock risk and unusual tank movement."],
  ["03", "Credit Follow-up", "Prioritises overdue customers and prepares clear, account-specific reminder drafts."],
  ["04", "Purchase Check", "Checks invoice rates, quantities, duplicates and receipt timing before errors spread."],
  ["05", "Profit Insight", "Explains margin changes across fuel, lubricants, NFR and operating expenses."],
  ["06", "Owner Assistant", "Answers plain-language questions and links each explanation to supporting records."],
];

const pricingGroups: Array<[string, string[]]> = [
  ["Run your fuel station", ["Shifts, nozzle readings & attendant assignments", "Tank stock, deliveries, dips & testing", "Cash, UPI & card reconciliation", "Lubricant inventory & sales", "Non-fuel revenue (NFR) · retail products & services"]],
  ["Keep your accounts clear", ["Customers, credit & fleet accounts", "Supplier invoices & payments", "Expenses, staff salaries & profit reports", "Stock & collection difference visibility", "Staff permissions, audit history & data exports"]],
  ["Your Fuel Intelligence agents", ["Shift Review Agent · checks closing and collection differences", "Stock Watch Agent · tracks tank risks, receipts and unusual movement", "Credit Agent · prioritises dues and prepares reminder drafts", "Purchase Check Agent · checks invoice rates, quantities and duplicates", "Profit Insight Agent · explains fuel margin, expenses and NFR", "Owner Assistant · answers questions with supporting records"]],
];

const pricingFaqs = [
  ["Can I pay monthly for Core?", "Yes. Core is ₹699 per month. The annual plan is ₹5,988, equivalent to ₹499 per month, and lifetime access is ₹24,000. Assisted setup is optional at ₹2,000. All prices are per fuel station, excluding applicable GST."],
  ["What is non-fuel revenue?", "NFR covers sales of lubricants, shop products and services configured in FuelLedger. These sales form part of your existing sales records and should not be entered again as extra revenue."],
  ["What does Fuel Intelligence include?", "The early-access vision includes six specialised assistants for shift review, stock watch, customer credit, purchase checks, profit insight and owner questions. Availability may be phased by capability."],
  ["What happens after the founding offer?", "The Core + Fuel Intelligence founding offer is ₹11,999 for the first year, subject to availability for the first 50 fuel stations. It renews at ₹14,999 per year. Applicable GST is additional."],
  ["How do I activate or change my plan?", "Contact our team to confirm your fuel station, applicable taxes and activation details. This page does not charge you or change your plan automatically."],
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
    <section className="fuel-pricing" id="pricing"><div className="pricing-heading"><p className="fuel-eyebrow"><span /> One foundation. Two ways forward.</p><h2>Choose your<br /><em>level of insight.</em></h2><p>Run the whole station on Core, then add Fuel Intelligence when you want specialist agents reviewing the details with you.</p></div><article className="pricing-card"><div className="complete-plan-head"><div><img className="fuel-logo" src="/fuel-ledger-mark.svg" alt="" /><div><span>FuelLedger plans</span><p>Everything connected.</p></div></div><b>Per fuel station · GST additional</b></div><div className="fuel-plan-grid"><div className="fuel-plan-core"><p className="fuel-plan-eyebrow">YOUR DAILY FOUNDATION</p><h3>Core</h3><span>Run every shift with clarity.</span><div className="fuel-plan-price">₹24,000</div><small>One-time lifetime access</small><p className="fuel-plan-note">Monthly ₹699 · Yearly ₹5,988<br />Assisted setup optional · ₹2,000</p><a className="pricing-contact" href="https://fuelledger.mindvector.tech/login">Choose Core <span>→</span></a></div><div className="fuel-plan-intelligence"><p className="fuel-plan-eyebrow">AGENT AI · EARLY ACCESS</p><h3>Core +<br />Fuel Intelligence</h3><span>Specialised agents for stock, money and daily decisions.</span><div className="fuel-plan-price">₹14,999<small>/year</small></div><small>Complete bundled plan</small><p className="fuel-plan-note">Billed yearly · Save ₹2,989 vs monthly<br />Six agent capabilities · phased early access</p><a className="pricing-contact" href="https://wa.me/918977506454?text=Hi%2C%20I%27m%20interested%20in%20Fuel%20Intelligence%20early%20access." target="_blank" rel="noreferrer">Enquire about early access <span>→</span></a></div></div><div className="fuel-plan-section"><h3>Run your fuel station</h3>{pricingGroups[0][1].map((row) => <p key={row}><span>✓</span>{row}</p>)}</div><div className="fuel-plan-section"><h3>Keep your accounts clear</h3>{pricingGroups[1][1].map((row) => <p key={row}><span>✓</span>{row}</p>)}</div><div className="fuel-plan-section fuel-plan-agent-rows"><h3>Your Fuel Intelligence agents <small>Agent AI · Early access</small></h3>{pricingGroups[2][1].map((row) => <p key={row}><span>—</span>{row}<b>Agent · Early access</b></p>)}</div><p className="fuel-plan-note-bottom">Accurate stock, essential difference checks and account permissions belong in every plan.</p></article></section>
    <section className="intelligence-package" id="intelligence-package"><div className="intelligence-package-copy"><p className="fuel-eyebrow"><span /> A recurring AI service</p><h2>FuelLedger<br /><em>Intelligence.</em></h2><p>FuelLedger uses AI and machine learning to turn the day&apos;s operations into a clear owner briefing. It surfaces patterns, flags unusual movement and helps you ask better questions before a small issue becomes a costly one.</p><ul><li><span>01</span>Daily business-health briefings</li><li><span>02</span>Sales, stock and collection anomaly alerts</li><li><span>03</span>Six specialist agent capabilities</li></ul><small>Requires FuelLedger Core. GST applies where applicable.</small></div><article className="intelligence-package-card"><div className="intelligence-package-top"><img className="fuel-logo" src="/fuel-ledger-mark.svg" alt="" /><div><p>FUELLEDGER INTELLIGENCE</p><span>AI owner briefings and actions</span></div><b>EARLY ACCESS</b></div><div className="intelligence-package-price"><div><p>MONTHLY</p><strong>₹1,499</strong><span>per outlet / month</span></div><div className="annual-price"><p>BEST VALUE · ANNUAL</p><strong>₹14,999</strong><span>per outlet / year</span><small>Save ₹2,989 vs monthly</small></div></div><div className="founding-offer"><span>FOUNDING FUEL STATION OFFER</span><b>₹11,999 for the first year</b><p>Available for the first 50 fuel stations. Renews at ₹14,999/year. GST additional.</p></div><a className="intelligence-package-cta" href="https://wa.me/918977506454?text=Hi%2C%20I%27m%20interested%20in%20Fuel%20Intelligence%20early%20access." target="_blank" rel="noreferrer">Enquire about early access <span>→</span></a></article></section>
    <section className="fuel-agent-showcase"><header><p className="fuel-eyebrow"><span /> Your agent team</p><h2>Always reviewing. Ready when you ask.</h2><p>Each agent has one clear job and works from the records already inside your fuel station account.</p></header><div className="fuel-agent-grid">{intelligenceAgents.map(([number,name,copy]) => <article key={name}><span>{number}</span><h3>{name} <small>Agent</small></h3><p>{copy}</p><b>● Early access</b></article>)}</div><div className="fuel-agent-flow"><span>Trusted station records</span><i>→</i><span>Specialist agents review</span><i>→</i><span>Owner gets clear actions</span></div></section>
    <section className="fuel-owner-preview"><div><p className="fuel-eyebrow"><span /> Fuel intelligence</p><h2>Ask the business.<br /><em>See the evidence.</em></h2><p>Ask a plain-language question, review the explanation and open the supporting shift, invoice, tank or customer records.</p><small>Illustrative preview · Early access</small></div><article><header><img src="/fuel-ledger-mark.svg" alt="" /><div><b>Owner Assistant</b><span>A clearer view of your fuel station</span></div></header><div className="fuel-question">Why is today&apos;s collection lower than sales?</div><p>Some sales may be on customer credit or fleet accounts. Review that split alongside cash, UPI and card collections before treating the difference as a shortage.</p><div className="fuel-source-tags"><span>Shift collections</span><span>Customer balances</span></div><small>Example explanation. No live account data is shown here.</small></article></section>
    <section className="fuel-founding"><span>✦</span><div><small>FOUNDING FUEL STATION OFFER</small><h3>₹11,999 for your first year of Core + Fuel Intelligence</h3><p>For the first 50 fuel stations, subject to availability. Renews at ₹14,999/year. GST additional.</p></div><a href="tel:+918977506454">Check availability <b>→</b></a></section>
    <section className="fuel-faq"><div><p className="fuel-eyebrow"><span /> The details, made simple</p><h2>Good to know.</h2><p>Clear terms before you choose.</p><a href="tel:+918977506454">? &nbsp;Talk to us · 89775 06454</a></div><div>{pricingFaqs.map(([question,answer]) => <details key={question}><summary>{question}<span>⌄</span></summary><p>{answer}</p></details>)}</div></section>
    <section className="fuel-cta"><p className="fuel-eyebrow"><span /> Built for the daily reality of a pump</p><h2>Ready to run a<br /><em>tighter outlet?</em></h2><a href="https://fuelledger.mindvector.tech/login">Start FuelLedger <span>→</span></a></section><footer className="fuel-footer"><a href="/" className="fuel-brand"><img className="fuel-logo" src="/fuel-ledger-mark.svg" alt="" />FuelLedger</a><p>© 2026 FuelLedger</p><a href="/">A MindVector product ↗</a></footer>
  </main>;
}
