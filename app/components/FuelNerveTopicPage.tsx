import Image from "next/image";
import Link from "next/link";
import styles from "./fuelnerve-topic-page.module.css";

export type TopicSection = {
  number: string;
  title: string;
  copy: string;
  points: string[];
};

export type TopicLink = {
  href: string;
  label: string;
  description: string;
};

export type TopicPageContent = {
  canonical: string;
  eyebrow: string;
  title: string;
  accent: string;
  introduction: string;
  definition: string;
  problemTitle: string;
  problemCopy: string;
  outcomes: string[];
  sections: TopicSection[];
  workflowTitle: string;
  workflowIntro: string;
  workflow: Array<{ title: string; copy: string }>;
  buyerTitle: string;
  buyerIntro: string;
  buyerChecklist: string[];
  faqs: Array<[string, string]>;
  related: TopicLink[];
};

export default function FuelNerveTopicPage({
  content,
}: {
  content: TopicPageContent;
}) {
  const isDedicatedSite = content.canonical.startsWith(
    "https://fuelnerve.mindvector.tech",
  );
  const siteHome = isDedicatedSite ? "/" : "/apps/fuelnerve";
  const overviewHref = isDedicatedSite
    ? "/"
    : "/petrol-pump-management-software";
  const websiteId = isDedicatedSite
    ? "https://fuelnerve.mindvector.tech/#website"
    : "https://mindvector.tech/#website";
  const softwareId = isDedicatedSite
    ? "https://fuelnerve.mindvector.tech/#software"
    : "https://mindvector.tech/apps/fuelnerve#software";
  const rootName = isDedicatedSite ? "FuelNerve" : "MindVector";
  const rootUrl = isDedicatedSite
    ? "https://fuelnerve.mindvector.tech/"
    : "https://mindvector.tech/";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${content.canonical}#webpage`,
        url: content.canonical,
        name: content.title,
        description: content.introduction,
        isPartOf: { "@id": websiteId },
        about: { "@id": softwareId },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: rootName,
            item: rootUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Petrol Pump Management Software",
            item: isDedicatedSite
              ? "https://fuelnerve.mindvector.tech/"
              : "https://mindvector.tech/petrol-pump-management-software",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: content.title,
            item: content.canonical,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: content.faqs.map(([question, answer]) => ({
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
        <Link className={styles.brand} href={siteHome}>
          <Image
            src="/fuelnerve-mark.svg"
            width={46}
            height={46}
            alt="FuelNerve"
            priority
          />
          <span>
            <b>FuelNerve</b>
            <small>A MindVector product</small>
          </span>
        </Link>
        <nav aria-label="FuelNerve topic navigation">
          <Link href={overviewHref}>Software overview</Link>
          <a href="#guide">Guide</a>
          <a href="#questions">Questions</a>
        </nav>
        <a className={styles.signIn} href="https://fuel.mindvector.tech/login">
          Sign in <span>↗</span>
        </a>
      </header>

      <div className={styles.breadcrumbs} aria-label="Breadcrumb">
        <a href={isDedicatedSite ? "https://mindvector.tech/" : "/"}>MindVector</a>
        <span>/</span>
        <Link href={overviewHref}>Petrol pump software</Link>
        <span>/</span>
        <b>{content.eyebrow}</b>
      </div>

      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}><span />{content.eyebrow}</p>
          <h1>
            {content.title}
            <br />
            <em>{content.accent}</em>
          </h1>
          <p className={styles.lead}>{content.introduction}</p>
          <div className={styles.actions}>
            <a href="https://fuel.mindvector.tech/demo">
              Try the live demo <span>→</span>
            </a>
            <Link href={overviewHref}>
              Explore the complete OS <span>↗</span>
            </Link>
          </div>
        </div>
        <aside className={styles.definitionCard}>
          <p>PLAIN-LANGUAGE DEFINITION</p>
          <h2>What this workflow should do</h2>
          <div>{content.definition}</div>
          <small>FuelNerve connects the operating record to the owner&apos;s review.</small>
        </aside>
      </section>

      <section className={styles.problem}>
        <div>
          <p className={styles.sectionLabel}>WHY IT MATTERS</p>
          <h2>{content.problemTitle}</h2>
          <p>{content.problemCopy}</p>
        </div>
        <ul>
          {content.outcomes.map((outcome) => (
            <li key={outcome}><span>✓</span>{outcome}</li>
          ))}
        </ul>
      </section>

      <section className={styles.guide} id="guide">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionLabel}>A PRACTICAL OPERATING GUIDE</p>
            <h2>What a connected system records and explains.</h2>
          </div>
          <p>
            The value comes from keeping the source record, the operational
            event and the financial effect connected—not from producing another
            isolated total.
          </p>
        </div>
        <div className={styles.sectionGrid}>
          {content.sections.map((section) => (
            <article key={section.number}>
              <span>{section.number}</span>
              <h3>{section.title}</h3>
              <p>{section.copy}</p>
              <ul>
                {section.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.workflow}>
        <div>
          <p className={styles.sectionLabel}>FROM RECORD TO REVIEW</p>
          <h2>{content.workflowTitle}</h2>
          <p>{content.workflowIntro}</p>
        </div>
        <ol>
          {content.workflow.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.buyer}>
        <div>
          <p className={styles.sectionLabel}>BEFORE YOU CHOOSE SOFTWARE</p>
          <h2>{content.buyerTitle}</h2>
          <p>{content.buyerIntro}</p>
        </div>
        <div className={styles.checklist}>
          {content.buyerChecklist.map((item, index) => (
            <p key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className={styles.faq} id="questions">
        <div>
          <p className={styles.sectionLabel}>QUESTIONS OWNERS ASK</p>
          <h2>Clear answers before a product decision.</h2>
        </div>
        <div>
          {content.faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<span>+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.related}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionLabel}>CONTINUE THE BUYER&apos;S GUIDE</p>
            <h2>See how the other operating records connect.</h2>
          </div>
          <Link href={overviewHref}>
            View complete software overview →
          </Link>
        </div>
        <div className={styles.relatedGrid}>
          {content.related.map((link) => (
            <Link href={link.href} key={link.href}>
              <span>{link.label}</span>
              <p>{link.description}</p>
              <b>Read guide ↗</b>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.finalCta}>
        <p className={styles.sectionLabel}>SEE FUELNERVE WITH REAL WORKFLOWS</p>
        <h2>Replace disconnected records with one operating picture.</h2>
        <p>
          Explore the read-only demo, then speak with us about how your station
          currently handles shifts, stock, collections and accounts.
        </p>
        <div>
          <a href="https://fuel.mindvector.tech/demo">Try the live demo <span>→</span></a>
          <a href="https://wa.me/918977506454?text=Hi%2C%20I%27m%20interested%20in%20FuelNerve%20petrol%20pump%20management%20software.">Talk to FuelNerve <span>↗</span></a>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link className={styles.brand} href={siteHome}>
          <Image src="/fuelnerve-mark.svg" width={42} height={42} alt="" />
          <span><b>FuelNerve</b><small>A MindVector product</small></span>
        </Link>
        <div>
          <a href="https://mindvector.tech/">MindVector</a>
          <Link href={overviewHref}>Petrol pump software</Link>
          <a href="https://fuel.mindvector.tech/demo">Live demo</a>
          <a href="mailto:hello@mindvector.tech">Contact</a>
        </div>
        <p>© 2026 FuelNerve</p>
      </footer>
    </main>
  );
}
