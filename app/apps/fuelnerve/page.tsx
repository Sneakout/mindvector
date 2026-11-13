import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FuelNerve | Petrol Pump Management Software & AI",
  description:
    "Manage shifts, fuel inventory, sales, collections, credit, expenses and accounts with FuelNerve Core—plus AI-powered owner intelligence and operational alerts.",
  alternates: { canonical: "https://mindvector.tech/apps/fuelnerve" },
  keywords: [
    "FuelNerve",
    "petrol pump management",
    "fuel station management system",
    "petrol pump software",
    "fuel inventory",
    "pump reconciliation",
    "petrol pump AI",
  ],
  openGraph: {
    title: "FuelNerve | The operating system for petrol pumps",
    description:
      "Run staff, shifts, fuel and non-fuel inventory, sales, collections, accounting and daily AI-led owner insights from one system.",
    url: "https://mindvector.tech/apps/fuelnerve",
    siteName: "FuelNerve",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://mindvector.tech/fuelnerve-mark.svg",
        alt: "FuelNerve petrol pump management software",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "FuelNerve | The operating system for petrol pumps",
    description:
      "Complete petrol pump operations, daily control and AI-led owner insights in one place.",
  },
};

const modules = [
  [
    "01",
    "People & shifts",
    "Manage attendants, shift handovers, nozzles, cash responsibility and approvals in one daily flow.",
  ],
  [
    "02",
    "Fuel & inventory",
    "Track MS, HSD, lubricants, AdBlue and every tank movement—from dip to density to closing stock.",
  ],
  [
    "03",
    "Sales & revenue",
    "Reconcile cash, UPI, cards, credit, fleet and other non-fuel revenue without stitching reports together.",
  ],
  [
    "04",
    "Finance & control",
    "Run purchases, expenses, salaries, accounting, reports and a multi-pump view from the same source of truth.",
  ],
];

const intelligenceAgents = [
  [
    "01",
    "Shift Review",
    "Reviews closed shifts, cash handovers, payment methods and unexplained differences.",
  ],
  [
    "02",
    "Stock Watch",
    "Watches MS, HSD and lubricants, then flags stock risk and unusual tank movement.",
  ],
  [
    "03",
    "Credit Follow-up",
    "Prioritises overdue customers and prepares clear, account-specific reminder drafts.",
  ],
  [
    "04",
    "Purchase Check",
    "Checks invoice rates, quantities, duplicates and receipt timing before errors spread.",
  ],
  [
    "05",
    "Profit Insight",
    "Explains margin changes across fuel, lubricants, NFR and operating expenses.",
  ],
  [
    "06",
    "Owner Assistant",
    "Answers plain-language questions and links each explanation to supporting records.",
  ],
];

const pricingGroups: Array<[string, string[]]> = [
  [
    "Run your fuel station",
    [
      "Shifts, nozzle readings & attendant assignments",
      "Tank stock, deliveries, dips & testing",
      "Cash, UPI & card reconciliation",
      "Lubricant inventory & sales",
      "Non-fuel revenue (NFR) · retail products & services",
    ],
  ],
  [
    "Keep your accounts clear",
    [
      "Customers, credit & fleet accounts",
      "Supplier invoices & payments",
      "Expenses, staff salaries & profit reports",
      "Stock & collection difference visibility",
      "Staff permissions, audit history & data exports",
    ],
  ],
  [
    "Your FuelNerve Intelligence agents",
    [
      "Shift Review Agent · checks closing and collection differences",
      "Stock Watch Agent · tracks tank risks, receipts and unusual movement",
      "Credit Agent · prioritises dues and prepares reminder drafts",
      "Purchase Check Agent · checks invoice rates, quantities and duplicates",
      "Profit Insight Agent · explains fuel margin, expenses and NFR",
      "Owner Assistant · answers questions with supporting records",
    ],
  ],
];

const pricingFaqs = [
  [
    "Can I pay monthly for Core?",
    "Yes. Core is ₹699 per month. The annual plan is ₹5,988, equivalent to ₹499 per month, and lifetime access is ₹24,000. Assisted setup is optional at ₹2,000. All prices are per fuel station, excluding applicable GST.",
  ],
  [
    "What is non-fuel revenue?",
    "NFR covers sales of lubricants, shop products and services configured in FuelNerve. These sales form part of your existing sales records and should not be entered again as extra revenue.",
  ],
  [
    "What does FuelNerve Intelligence include?",
    "The early-access vision includes six specialised assistants for shift review, stock watch, customer credit, purchase checks, profit insight and owner questions. Availability may be phased by capability.",
  ],
  [
    "What happens after the founding offer?",
    "The Core + FuelNerve Intelligence founding offer is ₹11,999 for the first year, subject to availability for the first 50 fuel stations. It renews at ₹14,999 per year. Applicable GST is additional.",
  ],
  [
    "How do I activate or change my plan?",
    "Contact our team to confirm your fuel station, applicable taxes and activation details. This page does not charge you or change your plan automatically.",
  ],
];

const operatingGuides = [
  ["DSR & daily sales", "/petrol-pump-dsr-software"],
  ["Fuel inventory", "/petrol-pump-inventory-management"],
  ["Shift reconciliation", "/petrol-pump-shift-reconciliation"],
  ["Accounting", "/petrol-pump-accounting-software"],
  ["Credit management", "/petrol-pump-credit-management"],
  ["Software pricing", "/petrol-pump-software-pricing-india"],
];

export default function FuelNervePage({
  siteUrl = "https://mindvector.tech/apps/fuelnerve",
}: {
  siteUrl?: string;
} = {}) {
  const isDedicatedSite = siteUrl.startsWith(
    "https://fuelnerve.mindvector.tech",
  );
  const canonicalUrl = isDedicatedSite
    ? `${siteUrl.replace(/\/$/, "")}/`
    : siteUrl.replace(/\/$/, "");
  const siteHome = "/";
  const overviewHref = isDedicatedSite
    ? "/"
    : "/petrol-pump-management-software";
  const softwareId = `${canonicalUrl}#software`;
  const softwareApplicationJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...(isDedicatedSite
        ? [
            {
              "@type": "WebSite",
              "@id": "https://fuelnerve.mindvector.tech/#website",
              name: "FuelNerve",
              alternateName: ["FuelNerve India", "fuelnerve.mindvector.tech"],
              url: "https://fuelnerve.mindvector.tech/",
              inLanguage: "en-IN",
              publisher: { "@id": "https://mindvector.tech/#organization" },
            },
          ]
        : []),
      {
        "@type": "SoftwareApplication",
        "@id": softwareId,
        name: "FuelNerve",
        alternateName: "FuelNerve Core",
        description:
          "A petrol pump management platform for shifts, fuel inventory, sales, collections, credit, expenses, accounts and AI-powered owner intelligence.",
        url: canonicalUrl,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Petrol Pump Management Software",
        operatingSystem: "Web",
        inLanguage: "en-IN",
        image: `${isDedicatedSite ? "https://fuelnerve.mindvector.tech" : "https://mindvector.tech"}/fuelnerve-icon-512.png`,
        brand: { "@type": "Brand", name: "FuelNerve" },
        publisher: {
          "@type": "Organization",
          "@id": "https://mindvector.tech/#organization",
          name: "MindVector",
          url: "https://mindvector.tech",
        },
        offers: [
          ["FuelNerve Core Monthly", "699"],
          ["FuelNerve Core Annual", "5988"],
          ["FuelNerve Core Lifetime", "24000"],
          ["FuelNerve Core + Intelligence Annual", "14999"],
        ].map(([name, price]) => ({
          "@type": "Offer",
          name,
          price,
          priceCurrency: "INR",
          url: `${canonicalUrl}#pricing`,
        })),
      },
    ],
  };

  return (
    <main className="fuel-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationJsonLd).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      <header className="fuel-nav">
        <a href={siteHome} className="fuel-brand" aria-label="FuelNerve home">
          <Image
            className="fuel-logo"
            src="/fuelnerve-mark.svg"
            alt=""
            width={40}
            height={40}
            priority
          />
          FuelNerve
        </a>
        <nav aria-label="FuelNerve navigation">
          <a href="#product">Product</a>
          <a href="#operations">Operations</a>
          <a href="#intelligence">Intelligence</a>
          <a href="#intelligence-package">AI package</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <a className="fuel-nav-cta" href="https://fuel.mindvector.tech/login">
          Sign in <span>↗</span>
        </a>
      </header>
      <section className="fuel-hero" id="product">
        <div className="fuel-hero-copy">
          <p className="fuel-eyebrow">
            <span /> The operating system for petrol pumps
          </p>
          <h1>
            FuelNerve.
            {isDedicatedSite && (
              <span className="fuel-seo-keyword">
                Petrol pump management software.
              </span>
            )}
            <br />
            <em>Every shift under control.</em>
          </h1>
          <p>
            FuelNerve connects people, fuel stock, collections, accounting and
            every revenue line. Six specialist AI agents review the details so
            owners understand the business and act sooner.
          </p>
          <div className="fuel-agent-intro">
            <span>NEW · FUELNERVE INTELLIGENCE</span>
            <p>
              <b>Six specialist AI agents</b> review shifts, stock, credit,
              purchases and profit—then give owners clear, evidence-backed
              actions.
            </p>
            <a
              href="#intelligence-package"
              aria-label="Explore FuelNerve AI agents"
            >
              Explore agents →
            </a>
          </div>
          <div className="fuel-actions">
            <a
              className="fuel-primary"
              href="https://fuel.mindvector.tech/demo"
            >
              Try live demo <b>→</b>
            </a>
            <a className="fuel-link" href="#operations">
              Explore the OS <span>↓</span>
            </a>
          </div>
          {!isDedicatedSite && (
            <p className="fuel-category-link">
              Looking for the complete category overview?{" "}
              <Link href={overviewHref}>
                Explore FuelNerve petrol pump management software →
              </Link>
            </p>
          )}
        </div>
        <div
          className="fuel-dashboard"
          aria-label="FuelNerve dashboard preview"
          role="img"
        >
          <div className="dashboard-top">
            <span>GREENWAY FUEL POINT</span>
            <i>● LIVE</i>
          </div>
          <div className="dashboard-title">
            <p>Tuesday, 1 September</p>
            <b>Greenway Fuel Point, under control</b>
            <span>
              Today&apos;s performance, outlet health, and what needs attention.
            </span>
          </div>
          <div className="fuel-metrics">
            <div>
              <small>SALES TODAY</small>
              <strong>₹3,40,948</strong>
              <span>10 transactions</span>
            </div>
            <div>
              <small>COLLECTED TODAY</small>
              <strong>₹2,93,295</strong>
              <span>Cash, UPI, card & other</span>
            </div>
            <div>
              <small>NET PROFIT TODAY</small>
              <strong>₹29,826</strong>
              <span>Sales less product cost</span>
            </div>
          </div>
          <div className="dashboard-lower">
            <section>
              <small>7-DAY PERFORMANCE</small>
              <h2>
                ₹22,60,916 <span>in sales</span>
              </h2>
              <div className="bar-chart" aria-hidden="true">
                {[59, 68, 63, 77, 71, 82, 74].map((height, index) => (
                  <i
                    key={index}
                    style={{ "--height": `${height}%` } as React.CSSProperties}
                  />
                ))}
              </div>
            </section>
            <aside>
              <small>ATTENTION</small>
              <h3>What needs action</h3>
              <p>
                <b>3 shifts</b> waiting for reconciliation <span>→</span>
              </p>
              <p>
                <b>1 stock position</b> at zero or below <span>→</span>
              </p>
            </aside>
          </div>
        </div>
      </section>
      <section className="fuel-value">
        <p>ONE SYSTEM FOR THE WHOLE OUTLET</p>
        <div>
          <strong>01</strong>
          <span>Know what happened today.</span>
          <strong>02</strong>
          <span>See what needs attention.</span>
          <strong>03</strong>
          <span>Close every shift with confidence.</span>
        </div>
      </section>
      <section className="fuel-operations" id="operations">
        <div className="fuel-section-head">
          <p className="fuel-eyebrow">
            <span /> The complete petrol pump OS
          </p>
          <h2>
            One operating picture.
            <br />
            <em>Every moving part.</em>
          </h2>
          <p>
            FuelNerve connects the work that usually lives across registers,
            spreadsheets, messages and disconnected software. Your outlet runs
            from one source of truth.
          </p>
        </div>
        <div className="module-grid">
          {modules.map(([number, title, detail]) => (
            <article key={number}>
              <span>{number}</span>
              <div className="module-icon" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <h3>{title}</h3>
              <p>{detail}</p>
              <b>→</b>
            </article>
          ))}
        </div>
        <div className="revenue-strip">
          <div>
            <span>FUEL REVENUE</span>
            <b>MS · HSD · Lubes · AdBlue</b>
          </div>
          <div>
            <span>NON-FUEL REVENUE</span>
            <b>Store · Services · Other income</b>
          </div>
          <div>
            <span>EVERYDAY CONTROL</span>
            <b>Stock · Collections · Cash · Credit</b>
          </div>
        </div>
      </section>
      <section className="fuel-intelligence" id="intelligence">
        <div className="intelligence-copy">
          <p className="fuel-eyebrow">
            <span /> Owner intelligence
          </p>
          <h2>
            Know the story
            <br />
            <em>behind the numbers.</em>
          </h2>
          <p>
            FuelNerve uses AI and machine learning to turn the day&apos;s
            operations into a clear owner briefing. It surfaces patterns, flags
            unusual movement and helps you ask better questions before a small
            issue becomes a costly one.
          </p>
          <ul>
            <li>
              <span>✓</span>Daily business health summary
            </li>
            <li>
              <span>✓</span>Sales, stock and collection anomalies
            </li>
            <li>
              <span>✓</span>Actionable attention prompts
            </li>
          </ul>
        </div>
        <div
          className="ai-brief"
          aria-label="Example FuelNerve daily intelligence briefing"
        >
          <div className="ai-brief-top">
            <span>FUELNERVE INTELLIGENCE</span>
            <i>● DAILY BRIEF</i>
          </div>
          <p className="ai-date">GREENWAY FUEL POINT · 01 SEP</p>
          <h3>
            Your outlet is <em>healthy today.</em>
          </h3>
          <div className="ai-insight good">
            <span>↗</span>
            <p>
              <b>Sales are 8.4% above</b> your 7-day average, led by HSD volume.
            </p>
          </div>
          <div className="ai-insight alert">
            <span>!</span>
            <p>
              <b>Collection gap needs review.</b> One shift remains open after
              the expected close time.
            </p>
          </div>
          <div className="ai-insight">
            <span>◎</span>
            <p>
              <b>MS Tank 1 is trending low.</b> Plan the next replenishment
              before tomorrow evening.
            </p>
          </div>
          <footer>
            <span>3 signals reviewed</span>
            <b>Open daily brief →</b>
          </footer>
        </div>
      </section>
      <section className="fuel-pricing" id="pricing">
        <div className="pricing-heading">
          <p className="fuel-eyebrow">
            <span /> Simple plans. Clear differences.
          </p>
          <h2>
            Start with the OS.
            <br />
            <em>Add an agent team.</em>
          </h2>
          <p>
            Core runs your fuel station. Core + FuelNerve Intelligence adds six
            specialist AI agents that continuously review the records and help
            you act sooner.
          </p>
        </div>
        <article className="pricing-card">
          <div className="complete-plan-head">
            <div>
              <Image
                className="fuel-logo"
                src="/fuelnerve-mark.svg"
                alt=""
                width={42}
                height={42}
              />
              <div>
                <span>FuelNerve plans</span>
                <p>Choose what fits your station today.</p>
              </div>
            </div>
            <b>Per fuel station · GST additional</b>
          </div>
          <div className="fuel-plan-grid fuel-plan-grid-reworked">
            <div className="fuel-plan-core">
              <p className="fuel-plan-eyebrow">
                CORE · COMPLETE PETROL PUMP OS
              </p>
              <h3>
                Run every shift
                <br />
                with clarity.
              </h3>
              <span>Choose monthly, yearly or lifetime access.</span>
              <div className="fuel-core-prices">
                <div>
                  <small>MONTHLY</small>
                  <strong>₹699</strong>
                  <span>/month</span>
                </div>
                <div>
                  <small>BEST YEARLY VALUE</small>
                  <strong>₹5,988</strong>
                  <span>/year</span>
                </div>
                <div className="selected">
                  <small>ONE-TIME</small>
                  <strong>₹24,000</strong>
                  <span>lifetime access</span>
                </div>
              </div>
              <p className="fuel-plan-note">
                Assisted setup is optional · ₹2,000
              </p>
              <a
                className="pricing-contact"
                href="https://fuel.mindvector.tech/login"
              >
                Choose Core <span>→</span>
              </a>
            </div>
            <div className="fuel-plan-intelligence">
              <p className="fuel-plan-eyebrow">
                CORE + FUELNERVE INTELLIGENCE · EARLY ACCESS
              </p>
              <h3>
                Your AI agent team,
                <br />
                always reviewing.
              </h3>
              <span>
                Core plus six agents for stock, money and daily decisions.
              </span>
              <div className="fuel-plan-price">
                ₹14,999<small>/year</small>
              </div>
              <div className="fuel-offer-inline">
                <small>FOUNDING OFFER</small>
                <strong>₹11,999 first year</strong>
                <span>First 50 fuel stations · Renews at ₹14,999/year</span>
              </div>
              <a
                className="pricing-contact"
                href="https://wa.me/918977506454?text=Hi%2C%20I%27m%20interested%20in%20FuelNerve%20Intelligence%20early%20access."
                target="_blank"
                rel="noreferrer"
              >
                Enquire about early access <span>→</span>
              </a>
            </div>
          </div>
          <div className="fuel-comparison-wrap">
            <div
              className="fuel-comparison"
              role="region"
              aria-label="Compare FuelNerve plans"
            >
              <div className="fuel-comparison-header">
                <b>What&apos;s included</b>
                <strong>Core</strong>
                <strong>
                  Core + Intelligence <small>Early access</small>
                </strong>
              </div>
              {pricingGroups.map(([group, rows], groupIndex) => (
                <div className="fuel-comparison-group" key={group}>
                  <h3>{group}</h3>
                  {rows.map((row) => (
                    <div className="fuel-comparison-row" key={row}>
                      <span>{row}</span>
                      <b
                        aria-label={
                          groupIndex === 2
                            ? "Not included in Core"
                            : "Included in Core"
                        }
                      >
                        {groupIndex === 2 ? "—" : "✓"}
                      </b>
                      <strong
                        aria-label="Included in Core plus FuelNerve Intelligence"
                      >
                        {groupIndex === 2 ? "Early access" : "✓"}
                      </strong>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <p className="fuel-plan-note-bottom">
            Accurate stock, essential difference checks and account permissions
            belong in every plan.
          </p>
        </article>
      </section>
      <section className="intelligence-package" id="intelligence-package">
        <div className="intelligence-package-copy">
          <p className="fuel-eyebrow">
            <span /> A recurring AI service
          </p>
          <h2>
            FuelNerve
            <br />
            <em>Intelligence.</em>
          </h2>
          <p>
            FuelNerve uses AI and machine learning to turn the day&apos;s
            operations into a clear owner briefing. It surfaces patterns, flags
            unusual movement and helps you ask better questions before a small
            issue becomes a costly one.
          </p>
          <ul>
            <li>
              <span>01</span>Daily business-health briefings
            </li>
            <li>
              <span>02</span>Sales, stock and collection anomaly alerts
            </li>
            <li>
              <span>03</span>Six specialist agent capabilities
            </li>
          </ul>
          <small>Requires FuelNerve Core. GST applies where applicable.</small>
        </div>
        <article className="intelligence-package-card">
          <div className="intelligence-package-top">
            <Image
              className="fuel-logo"
              src="/fuelnerve-mark.svg"
              alt=""
              width={42}
              height={42}
            />
            <div>
              <p>FUELNERVE INTELLIGENCE</p>
              <span>AI owner briefings and actions</span>
            </div>
            <b>EARLY ACCESS</b>
          </div>
          <div className="intelligence-package-price">
            <div>
              <p>MONTHLY</p>
              <strong>₹1,499</strong>
              <span>per outlet / month</span>
            </div>
            <div className="annual-price">
              <p>BEST VALUE · ANNUAL</p>
              <strong>₹14,999</strong>
              <span>per outlet / year</span>
              <small>Save ₹2,989 vs monthly</small>
            </div>
          </div>
          <div className="founding-offer">
            <span>FOUNDING FUEL STATION OFFER</span>
            <b>₹11,999 for the first year</b>
            <p>
              Available for the first 50 fuel stations. Renews at ₹14,999/year.
              GST additional.
            </p>
          </div>
          <a
            className="intelligence-package-cta"
            href="https://wa.me/918977506454?text=Hi%2C%20I%27m%20interested%20in%20FuelNerve%20Intelligence%20early%20access."
            target="_blank"
            rel="noreferrer"
          >
            Enquire about early access <span>→</span>
          </a>
        </article>
      </section>
      <section className="fuel-agent-showcase">
        <header>
          <p className="fuel-eyebrow">
            <span /> Your agent team
          </p>
          <h2>Always reviewing. Ready when you ask.</h2>
          <p>
            Each agent has one clear job and works from the records already
            inside your fuel station account.
          </p>
        </header>
        <div className="fuel-agent-grid">
          {intelligenceAgents.map(([number, name, copy]) => (
            <article key={name}>
              <span>{number}</span>
              <h3>
                {name} <small>Agent</small>
              </h3>
              <p>{copy}</p>
              <b>● Early access</b>
            </article>
          ))}
        </div>
        <div className="fuel-agent-flow">
          <span>Trusted station records</span>
          <i>→</i>
          <span>Specialist agents review</span>
          <i>→</i>
          <span>Owner gets clear actions</span>
        </div>
      </section>
      <section className="fuel-owner-preview">
        <div>
          <p className="fuel-eyebrow">
            <span /> FuelNerve Intelligence
          </p>
          <h2>
            Ask the business.
            <br />
            <em>See the evidence.</em>
          </h2>
          <p>
            Ask a plain-language question, review the explanation and open the
            supporting shift, invoice, tank or customer records.
          </p>
          <small>Illustrative preview · Early access</small>
        </div>
        <article>
          <header>
            <Image src="/fuelnerve-mark.svg" alt="" width={54} height={54} />
            <div>
              <b>Owner Assistant</b>
              <span>A clearer view of your fuel station</span>
            </div>
          </header>
          <div className="fuel-question">
            Why is today&apos;s collection lower than sales?
          </div>
          <p>
            Some sales may be on customer credit or fleet accounts. Review that
            split alongside cash, UPI and card collections before treating the
            difference as a shortage.
          </p>
          <div className="fuel-source-tags">
            <span>Shift collections</span>
            <span>Customer balances</span>
          </div>
          <small>
            Example explanation. No live account data is shown here.
          </small>
        </article>
      </section>
      <section className="fuel-founding">
        <span>✦</span>
        <div>
          <small>FOUNDING FUEL STATION OFFER</small>
          <h3>₹11,999 for your first year of Core + FuelNerve Intelligence</h3>
          <p>
            For the first 50 fuel stations, subject to availability. Renews at
            ₹14,999/year. GST additional.
          </p>
        </div>
        <a href="tel:+918977506454">
          Check availability <b>→</b>
        </a>
      </section>
      <section className="fuel-faq">
        <div>
          <p className="fuel-eyebrow">
            <span /> The details, made simple
          </p>
          <h2>Good to know.</h2>
          <p>Clear terms before you choose.</p>
          <a href="tel:+918977506454">? &nbsp;Talk to us · 89775 06454</a>
        </div>
        <div>
          {pricingFaqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span>⌄</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      {isDedicatedSite && (
        <section className="fuel-guide-hub" aria-labelledby="fuel-guide-title">
          <div>
            <p className="fuel-eyebrow">
              <span /> Practical petrol pump operating guides
            </p>
            <h2 id="fuel-guide-title">
              Understand the records
              <br />
              <em>behind every closing number.</em>
            </h2>
          </div>
          <nav aria-label="FuelNerve petrol pump software guides">
            {operatingGuides.map(([label, href], index) => (
              <Link href={href} key={href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {label}
                <b>↗</b>
              </Link>
            ))}
          </nav>
        </section>
      )}
      <section className="fuel-cta">
        <p className="fuel-eyebrow">
          <span /> Built for the daily reality of a pump
        </p>
        <h2>
          Ready to run a<br />
          <em>tighter outlet?</em>
        </h2>
        <a href="https://fuel.mindvector.tech/login">
          Start FuelNerve <span>→</span>
        </a>
      </section>
      <footer className="fuel-footer">
        <a href={siteHome} className="fuel-brand">
          <Image
            className="fuel-logo"
            src="/fuelnerve-mark.svg"
            alt=""
            width={40}
            height={40}
          />
          FuelNerve
        </a>
        <p>© 2026 FuelNerve</p>
        <Link href={overviewHref}>
          Petrol pump management software ↗
        </Link>
      </footer>
    </main>
  );
}
