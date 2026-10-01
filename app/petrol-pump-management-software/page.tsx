import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./petrol-pump-software.module.css";

const canonical = "https://mindvector.tech/petrol-pump-management-software";

export const metadata: Metadata = {
  title: "Petrol Pump Management Software in India | FuelNerve",
  description:
    "FuelNerve is petrol pump management software for Indian fuel stations—covering shifts, nozzle readings, stock, sales, credit, reconciliation, accounts and owner insights.",
  alternates: { canonical },
  keywords: [
    "petrol pump management software",
    "petrol pump software India",
    "petrol pump accounting software",
    "fuel station management software",
    "petrol pump inventory software",
    "petrol pump shift reconciliation",
  ],
  openGraph: {
    title: "Petrol Pump Management Software in India | FuelNerve",
    description:
      "Run shifts, nozzles, fuel stock, collections, credit, accounting and owner reporting from one petrol-pump operating system.",
    url: canonical,
    siteName: "MindVector",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://mindvector.tech/fuelnerve-mark.svg",
        width: 96,
        height: 96,
        alt: "FuelNerve petrol pump management software",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Petrol Pump Management Software in India | FuelNerve",
    description:
      "One operating system for fuel stock, shifts, collections, credit, accounting and daily owner control.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const modules = [
  {
    number: "01",
    title: "Shifts, staff & nozzles",
    copy: "Assign attendants, capture opening and closing nozzle readings, manage handovers and keep responsibility clear across every shift.",
    detail: "Attendants · meter readings · handovers · permissions",
  },
  {
    number: "02",
    title: "Fuel stock & inventory",
    copy: "Track MS, HSD, lubricants and AdBlue with purchases, tank movements, dip readings, density checks and closing stock in one place.",
    detail: "MS · HSD · lubes · AdBlue · dips · density",
  },
  {
    number: "03",
    title: "Sales & reconciliation",
    copy: "Bring cash, UPI, cards, credit and fleet transactions together so expected sales and actual collections can be reviewed before a shift closes.",
    detail: "Cash · UPI · cards · credit · differences",
  },
  {
    number: "04",
    title: "Credit & customer accounts",
    copy: "Maintain customer and vehicle-level credit records, generate bills, review ageing and keep collection follow-ups connected to the underlying account.",
    detail: "Credit billing · fleet accounts · outstanding reports",
  },
  {
    number: "05",
    title: "Purchases, expenses & payroll",
    copy: "Record supplier invoices, operating expenses, staff salaries and other revenue without maintaining a separate set of disconnected registers.",
    detail: "Suppliers · expenses · salaries · non-fuel revenue",
  },
  {
    number: "06",
    title: "Accounts, DSR & reports",
    copy: "Review profit, stock, collections and daily operations with accounting reports, DSR visibility, exports, audit history and owner dashboards.",
    detail: "Accounting · GST · DSR · exports · audit trail",
  },
];

const workflow = [
  ["01", "Open the shift", "Assign staff and record opening nozzle and tank positions."],
  ["02", "Run the outlet", "Capture fuel, lubricant and non-fuel sales against the right shift."],
  ["03", "Reconcile money", "Match sales with cash, UPI, cards, fleet and customer credit."],
  ["04", "Close with evidence", "Review readings, collections, stock movement and unresolved differences."],
  ["05", "See the business", "Open owner reports or an Intelligence briefing with the records behind it."],
];

const faqs = [
  [
    "What is petrol pump management software?",
    "Petrol pump management software brings daily station operations into one system. It helps an owner or manager record nozzle readings, run shifts, track tank stock, reconcile sales and collections, manage credit customers, record expenses and review operational and accounting reports.",
  ],
  [
    "Can FuelNerve manage MS, HSD, lubricants and AdBlue?",
    "Yes. FuelNerve supports fuel and non-fuel inventory, including MS, HSD, lubricants and AdBlue. It connects purchases, tank or stock movements, sales and closing positions so the owner can review the complete inventory picture.",
  ],
  [
    "How does shift and nozzle reconciliation work?",
    "FuelNerve connects attendant assignments, opening and closing meter readings, recorded sales and collection methods. The shift can then be reviewed against cash, UPI, card, credit and other collections before it is treated as complete.",
  ],
  [
    "Does it support credit customers and fleet accounts?",
    "Yes. Customer, vehicle and fleet records can be maintained with credit billing, outstanding balances, ageing visibility and collection follow-up information.",
  ],
  [
    "Does FuelNerve include accounting and DSR reports?",
    "FuelNerve connects purchases, expenses, salaries, customer and supplier accounts with operational records. It provides DSR visibility, GST-related records, accounting reports, exports and audit history from the same system.",
  ],
  [
    "Can an owner manage more than one petrol pump?",
    "FuelNerve is designed to give owners a clear view of individual outlets and support a multi-pump operating picture. Access and activation are configured per fuel station.",
  ],
  [
    "How much does FuelNerve cost?",
    "FuelNerve Core is ₹699 per month, ₹5,988 per year or ₹24,000 for lifetime software access per petrol pump. Assisted setup is optional at ₹2,000. Applicable GST is additional. FuelNerve Intelligence is a separate recurring plan.",
  ],
];

export default function PetrolPumpManagementSoftwarePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: "Petrol Pump Management Software in India | FuelNerve",
        description:
          "FuelNerve is petrol pump management software for Indian fuel stations, covering shifts, nozzle readings, stock, sales, credit, reconciliation, accounts and owner insights.",
        isPartOf: { "@id": "https://mindvector.tech/#website" },
        about: { "@id": "https://mindvector.tech/apps/fuelnerve#software" },
        inLanguage: "en-IN",
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://mindvector.tech/apps/fuelnerve#software",
        name: "FuelNerve",
        alternateName: "FuelNerve Core",
        url: "https://mindvector.tech/apps/fuelnerve",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Petrol Pump Management Software",
        operatingSystem: "Web",
        inLanguage: "en-IN",
        image: "https://mindvector.tech/fuelnerve-mark.svg",
        description:
          "Petrol pump management software for shifts, nozzle readings, fuel inventory, sales, collections, credit, expenses, accounts and owner reporting.",
        brand: { "@type": "Brand", name: "FuelNerve" },
        publisher: { "@id": "https://mindvector.tech/#organization" },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: "699",
          highPrice: "24000",
          offerCount: 3,
          url: "https://mindvector.tech/apps/fuelnerve#pricing",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "MindVector",
            item: "https://mindvector.tech/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "FuelNerve",
            item: "https://mindvector.tech/apps/fuelnerve",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Petrol Pump Management Software",
            item: canonical,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <header className={styles.header}>
        <Link className={styles.brand} href="/apps/fuelnerve">
          <Image
            src="/fuelnerve-mark.svg"
            width={48}
            height={48}
            alt="FuelNerve"
            priority
          />
          <span>
            <b>FuelNerve</b>
            <small>A MindVector product</small>
          </span>
        </Link>
        <nav aria-label="Petrol pump software page navigation">
          <a href="#features">Features</a>
          <a href="#workflow">How it works</a>
          <a href="#compare">Compare</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className={styles.signIn} href="https://fuel.mindvector.tech/login">
          Sign in <span>↗</span>
        </a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            <span /> Built for Indian fuel stations
          </p>
          <h1>
            Petrol pump
            <br />
            management software
            <br />
            <em>built for everyday control.</em>
          </h1>
          <p className={styles.heroLead}>
            FuelNerve brings shifts, nozzle readings, fuel stock, sales,
            collections, credit, expenses and accounts into one connected
            operating system—so owners can understand what happened and what
            needs attention.
          </p>
          <div className={styles.heroActions}>
            <a
              className={styles.primaryButton}
              href="https://fuel.mindvector.tech/demo"
            >
              Try the live demo <span>→</span>
            </a>
            <Link className={styles.secondaryButton} href="/apps/fuelnerve">
              Explore FuelNerve <span>↗</span>
            </Link>
          </div>
          <div className={styles.heroSignals}>
            <span>Web-based</span>
            <span>Per-station plans</span>
            <span>Assisted setup available</span>
          </div>
        </div>

        <div className={styles.controlPanel} aria-label="FuelNerve dashboard example">
          <div className={styles.panelTop}>
            <span>GREENWAY FUEL POINT</span>
            <b>● LIVE</b>
          </div>
          <div className={styles.panelHeading}>
            <span>DAILY OPERATING PICTURE</span>
            <h2>Every litre. Every shift. Every rupee.</h2>
          </div>
          <div className={styles.metrics}>
            <article>
              <small>SALES TODAY</small>
              <strong>₹3,40,948</strong>
              <span>Fuel + non-fuel revenue</span>
            </article>
            <article>
              <small>COLLECTED</small>
              <strong>₹2,93,295</strong>
              <span>Cash, UPI, card &amp; other</span>
            </article>
            <article>
              <small>METERED VOLUME</small>
              <strong>4,045 L</strong>
              <span>MS, HSD and metered DEF</span>
            </article>
          </div>
          <div className={styles.panelLower}>
            <div className={styles.chartCard}>
              <small>7-DAY SALES</small>
              <strong>₹22,60,916</strong>
              <div className={styles.chart} aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className={styles.attentionCard}>
              <small>NEEDS ATTENTION</small>
              <p>
                <b>3 shifts</b>
                <span>Awaiting reconciliation</span>
              </p>
              <p>
                <b>1 tank</b>
                <span>At or below reorder level</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.definition}>
        <p className={styles.sectionLabel}>WHAT IT REPLACES</p>
        <div>
          <h2>One source of truth instead of disconnected registers.</h2>
          <p>
            Petrol pump management software is the operating layer between the
            activity at the forecourt and the decisions an owner makes. It
            records how fuel and money move through each shift, connects those
            records to stock and accounts, and preserves an audit trail that can
            be reviewed later.
          </p>
          <p>
            FuelNerve is designed around the daily reality of a petrol pump—not
            adapted from generic retail software. Nozzle readings, tank stock,
            density, collection methods, customer credit, lubricants and DSR
            reporting belong to the same operating picture.
          </p>
        </div>
      </section>

      <section className={styles.features} id="features">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionLabel}>THE COMPLETE PETROL PUMP OS</p>
            <h2>Every moving part, connected.</h2>
          </div>
          <p>
            Run the outlet from opening reading to owner report without
            rebuilding the day across separate registers and spreadsheets.
          </p>
        </div>
        <div className={styles.moduleGrid}>
          {modules.map((module) => (
            <article key={module.number}>
              <span>{module.number}</span>
              <h3>{module.title}</h3>
              <p>{module.copy}</p>
              <small>{module.detail}</small>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.workflow} id="workflow">
        <div className={styles.workflowIntro}>
          <p className={styles.sectionLabel}>A CONNECTED WORKDAY</p>
          <h2>From opening reading to owner review.</h2>
          <p>
            FuelNerve keeps each step connected to the same station records, so
            the closing picture is built throughout the day—not reconstructed
            after it.
          </p>
        </div>
        <ol>
          {workflow.map(([number, title, copy]) => (
            <li key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
              <b>→</b>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.intelligence}>
        <div>
          <p className={styles.sectionLabel}>OPTIONAL OWNER INTELLIGENCE</p>
          <h2>
            Know the story
            <br />
            <em>behind the numbers.</em>
          </h2>
          <p>
            FuelNerve Intelligence adds specialised AI agents that review shift
            closing, stock movement, credit, purchases and profit. They surface
            signals with the underlying records so the owner can ask better
            questions and make the final decision.
          </p>
          <Link href="/apps/fuelnerve#intelligence-package">
            Explore FuelNerve Intelligence <span>↗</span>
          </Link>
        </div>
        <article>
          <header>
            <span>FUELNERVE INTELLIGENCE</span>
            <b>DAILY BRIEF</b>
          </header>
          <h3>Your outlet is <em>healthy today.</em></h3>
          <p className={styles.goodSignal}>
            <span>↗</span>
            <span className={styles.signalCopy}>
              <b>Sales are 8.4% above</b> the seven-day average, led by HSD volume.
            </span>
          </p>
          <p className={styles.alertSignal}>
            <span>!</span>
            <span className={styles.signalCopy}>
              <b>Collection gap needs review.</b> One shift remains open.
            </span>
          </p>
          <p className={styles.neutralSignal}>
            <span>◎</span>
            <span className={styles.signalCopy}>
              <b>MS Tank 1 is trending low.</b> Plan the next replenishment.
            </span>
          </p>
          <footer>Signals reviewed · Evidence linked · Owner decides</footer>
        </article>
      </section>

      <section className={styles.comparison} id="compare">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionLabel}>CHOOSE THE RIGHT OPERATING LAYER</p>
            <h2>Built for the pump—not just the ledger.</h2>
          </div>
          <p>
            General tools can store numbers. FuelNerve connects those numbers to
            the shift, nozzle, tank, customer and collection that created them.
          </p>
        </div>
        <div className={styles.tableWrap}>
          <table>
            <thead>
              <tr>
                <th>Daily requirement</th>
                <th>Registers &amp; spreadsheets</th>
                <th>General accounting software</th>
                <th>FuelNerve</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Shift and nozzle workflow</th>
                <td>Manual entries</td>
                <td>Usually outside the system</td>
                <td>Connected to sales and collections</td>
              </tr>
              <tr>
                <th>Tank, dip and density records</th>
                <td>Separate registers</td>
                <td>Stock totals without forecourt context</td>
                <td>Fuel-specific stock movement</td>
              </tr>
              <tr>
                <th>Cash, UPI, card and credit</th>
                <td>Matched by hand</td>
                <td>Recorded after the event</td>
                <td>Reviewed against each shift</td>
              </tr>
              <tr>
                <th>Customer and fleet credit</th>
                <td>Multiple ledgers</td>
                <td>Financial ledger</td>
                <td>Operational and account visibility</td>
              </tr>
              <tr>
                <th>Owner operating picture</th>
                <td>Rebuilt at day end</td>
                <td>Finance-first reporting</td>
                <td>Operations, stock and money together</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.pricing} id="pricing">
        <div className={styles.pricingCopy}>
          <p className={styles.sectionLabel}>CLEAR PRICING PER PETROL PUMP</p>
          <h2>Start with Core. Add Intelligence when you need it.</h2>
          <p>
            Core includes the essential operating system for shifts, stock,
            collections, credit, expenses, accounts, reports and audit history.
            Assisted setup is optional at ₹2,000. Applicable GST is additional.
          </p>
          <Link href="/apps/fuelnerve#pricing">
            Compare complete plans <span>↗</span>
          </Link>
        </div>
        <div className={styles.priceCards}>
          <article>
            <small>MONTHLY</small>
            <strong>₹699</strong>
            <span>per petrol pump / month</span>
          </article>
          <article>
            <small>BEST YEARLY VALUE</small>
            <strong>₹5,988</strong>
            <span>per petrol pump / year</span>
          </article>
          <article className={styles.lifetimeCard}>
            <small>ONE-TIME</small>
            <strong>₹24,000</strong>
            <span>lifetime Core access</span>
          </article>
        </div>
      </section>

      <section className={styles.faq} id="faq">
        <div>
          <p className={styles.sectionLabel}>BUYER QUESTIONS, ANSWERED</p>
          <h2>Petrol pump software, made clear.</h2>
          <p>
            Review the essentials before choosing a system for your station.
          </p>
        </div>
        <div>
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span>+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.finalCta}>
        <p className={styles.sectionLabel}>SEE THE WORKFLOW BEFORE YOU DECIDE</p>
        <h2>
          Run a petrol pump
          <br />
          <em>with one clear operating picture.</em>
        </h2>
        <p>
          Explore a read-only FuelNerve product tour or speak with us about your
          station, current process and onboarding needs.
        </p>
        <div>
          <a href="https://fuel.mindvector.tech/demo">
            Try the live demo <span>→</span>
          </a>
          <a href="https://wa.me/918977506454?text=Hi%2C%20I%27m%20interested%20in%20FuelNerve%20petrol%20pump%20management%20software.">
            Talk to FuelNerve <span>↗</span>
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link className={styles.brand} href="/apps/fuelnerve">
          <Image src="/fuelnerve-mark.svg" width={42} height={42} alt="" />
          <span>
            <b>FuelNerve</b>
            <small>A MindVector product</small>
          </span>
        </Link>
        <div>
          <Link href="/">MindVector</Link>
          <Link href="/apps/fuelnerve">FuelNerve product</Link>
          <a href="https://fuel.mindvector.tech/demo">Live demo</a>
          <a href="mailto:hello@mindvector.tech">Contact</a>
        </div>
        <p>© 2026 FuelNerve</p>
      </footer>
    </main>
  );
}
