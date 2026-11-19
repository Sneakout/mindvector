import type { Metadata } from "next";
import Link from "next/link";
import { Mark } from "../components/Mark";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Sneakout & MindVector | Business and Products",
  description:
    "Sneakout is the registered business behind MindVector, FuelNerve and Fresh Fold. Learn how the business, product studio and software products fit together.",
  alternates: { canonical: "https://mindvector.tech/about" },
  openGraph: {
    title: "About Sneakout & MindVector",
    description:
      "Sneakout is the registered business behind MindVector and its software products, including FuelNerve and Fresh Fold.",
    url: "https://mindvector.tech/about",
    siteName: "MindVector",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://mindvector.tech/#organization",
      name: "Sneakout",
      legalName: "Sneakout",
      alternateName: "MindVector",
      url: "https://mindvector.tech/",
      email: "hello@mindvector.tech",
      brand: {
        "@type": "Brand",
        "@id": "https://mindvector.tech/#mindvector-brand",
        name: "MindVector",
      },
      owns: [
        { "@id": "https://mindvector.tech/apps/fuelnerve#software" },
        { "@id": "https://mindvector.tech/apps/fresh-fold/#software" },
      ],
    },
    {
      "@type": "AboutPage",
      "@id": "https://mindvector.tech/about#webpage",
      url: "https://mindvector.tech/about",
      name: "About Sneakout and MindVector",
      description:
        "The business and product structure behind MindVector, FuelNerve and Fresh Fold.",
      about: { "@id": "https://mindvector.tech/#organization" },
      isPartOf: { "@id": "https://mindvector.tech/#website" },
      inLanguage: "en-IN",
    },
  ],
};

export default function AboutPage() {
  return (
    <main className={styles.page} id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <a className={styles.skip} href="#content">
        Skip to content
      </a>

      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="MindVector home">
          <Mark />
          MindVector
        </Link>
        <nav aria-label="About page navigation">
          <Link href="/#products">Products</Link>
          <Link href="/#services">Capabilities</Link>
          <Link className={styles.current} href="/about" aria-current="page">
            About
          </Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <Link className={styles.homeLink} href="/">
          MindVector home
        </Link>
      </header>

      <section className={styles.hero} id="content">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>ABOUT MINDVECTOR</p>
          <h1>
            We build useful software.
            <br />
            <em>Then keep making it better.</em>
          </h1>
          <p className={styles.lede}>
            MindVector is a small product studio from <strong>Sneakout</strong>.
            We build software around real, everyday work—and partner with teams
            who care about making things simpler, clearer and genuinely useful.
          </p>
        </div>

        <aside className={styles.now} aria-label="What MindVector is building">
          <p className={styles.sectionLabel}>WHAT WE&apos;RE BUILDING</p>
          <h2>Products that stay close to the work.</h2>
          <div className={styles.nowList}>
            <article>
              <span>FuelNerve</span>
              <p>A clearer operating day for petrol pump owners.</p>
            </article>
            <article>
              <span>Fresh Fold</span>
              <p>A calmer, connected garment-care experience.</p>
            </article>
            <article>
              <span>Product partnerships</span>
              <p>Thoughtful software built alongside ambitious teams.</p>
            </article>
          </div>
          <p className={styles.legalNote}>
            MindVector is operated by Sneakout, the registered business behind
            our work.
          </p>
        </aside>
      </section>

      <section className={styles.story}>
        <p className={styles.sectionLabel}>WHY WE&apos;RE HERE</p>
        <div className={styles.storyIntro}>
          <h2>
            Good software should feel
            <br />
            <em>obvious in hindsight.</em>
          </h2>
          <p>
            We started MindVector because the most useful products rarely begin
            with a feature list. They begin with a stubborn problem, a close
            look at the work and a decision to make the next day better than the
            last one.
          </p>
        </div>
        <div className={styles.principleGrid}>
          <article>
            <span>STAY CLOSE TO THE WORK</span>
            <h3>Start with the real day.</h3>
            <p>
              We learn how people actually work—the handovers, exceptions,
              shortcuts and small frustrations—before deciding what to build.
            </p>
          </article>
          <article>
            <span>OWN THE OUTCOME</span>
            <h3>Keep showing up after launch.</h3>
            <p>
              Building our own products keeps us honest. We live with the
              decisions, learn from real use and keep improving what matters.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.portfolio}>
        <div className={styles.portfolioHeading}>
          <p className={styles.sectionLabel}>THE PRODUCT PORTFOLIO</p>
          <h2>
            Products built around
            <br />
            <em>real operating problems.</em>
          </h2>
        </div>
        <div className={styles.productGrid}>
          <article className={styles.fuelnerveCard}>
            <div>
              <span>FUEL STATION OPERATIONS</span>
              <b>LIVE</b>
            </div>
            <h3>FuelNerve</h3>
            <p>
              A petrol pump operating system for shifts, fuel inventory,
              collections, accounts and owner intelligence.
            </p>
            <Link href="/apps/fuelnerve">Explore FuelNerve</Link>
          </article>
          <article className={styles.freshFoldCard}>
            <div>
              <span>LAUNDRY &amp; GARMENT CARE</span>
              <b>IN DEVELOPMENT</b>
            </div>
            <h3>Fresh Fold</h3>
            <p>
              A connected care platform for customers, laundry partners and
              delivery operations.
            </p>
            <Link href="/apps/fresh-fold/">Explore Fresh Fold</Link>
          </article>
        </div>
      </section>

      <section className={styles.details}>
        <div>
          <p className={styles.sectionLabel}>BUSINESS INFORMATION</p>
          <h2>Open about who is behind the work.</h2>
        </div>
        <dl>
          <div>
            <dt>Registered business name</dt>
            <dd>Sneakout</dd>
          </div>
          <div>
            <dt>Product studio and brand</dt>
            <dd>MindVector</dd>
          </div>
          <div>
            <dt>Website</dt>
            <dd>mindvector.tech</dd>
          </div>
          <div>
            <dt>Business contact</dt>
            <dd>
              <a href="mailto:hello@mindvector.tech">hello@mindvector.tech</a>
            </dd>
          </div>
        </dl>
      </section>

      <section className={styles.contact}>
        <p className={styles.sectionLabel}>WORK WITH MINDVECTOR</p>
        <h2>
          Have a useful product
          <br />
          <em>worth building?</em>
        </h2>
        <p>
          Tell us what you are trying to change. We will start with a direct,
          practical conversation.
        </p>
        <a href="mailto:hello@mindvector.tech?subject=Project%20enquiry">
          hello@mindvector.tech
        </a>
      </section>

      <footer className={styles.footer}>
        <Link className={styles.brand} href="/">
          <Mark />
          MindVector
        </Link>
        <p>
          MindVector is operated by <strong>Sneakout</strong>, the registered
          business behind this website and its products.
        </p>
        <span>© 2026 Sneakout</span>
      </footer>
    </main>
  );
}
