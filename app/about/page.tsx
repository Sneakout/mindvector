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
          <p className={styles.eyebrow}>ABOUT THE BUSINESS</p>
          <h1>
            One business.
            <br />
            <em>A growing product company.</em>
          </h1>
          <p className={styles.lede}>
            <strong>Sneakout</strong> is the registered business behind
            MindVector and the products we create. MindVector is our product
            studio and technology brand—where we build our own software and
            help other teams build theirs.
          </p>
        </div>

        <div className={styles.structure} aria-label="Sneakout business structure">
          <article className={styles.legalNode}>
            <span>REGISTERED BUSINESS</span>
            <strong>Sneakout</strong>
            <p>The legal business operating this website and its products.</p>
          </article>
          <i aria-hidden="true" />
          <article className={styles.studioNode}>
            <span>PRODUCT STUDIO &amp; BRAND</span>
            <strong>MindVector</strong>
            <p>Product strategy, design, engineering and applied AI.</p>
          </article>
          <div className={styles.productNodes}>
            <article>
              <span>LIVE PRODUCT</span>
              <strong>FuelNerve</strong>
            </article>
            <article>
              <span>IN DEVELOPMENT</span>
              <strong>Fresh Fold</strong>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.relationship}>
        <p className={styles.sectionLabel}>HOW THE NAMES FIT TOGETHER</p>
        <div className={styles.relationshipIntro}>
          <h2>
            Clear names.
            <br />
            <em>One accountable business.</em>
          </h2>
          <p>
            Sneakout provides the registered business foundation. MindVector is
            the public-facing product company and studio. Every product shown on
            this website is created, operated or developed through that same
            business.
          </p>
        </div>
        <div className={styles.roleGrid}>
          <article>
            <span>LEGAL &amp; BUSINESS</span>
            <h3>Sneakout</h3>
            <p>
              The registered business name associated with mindvector.tech,
              MindVector and the products presented here.
            </p>
          </article>
          <article>
            <span>PRODUCT &amp; TECHNOLOGY</span>
            <h3>MindVector</h3>
            <p>
              The studio and technology brand through which we create focused
              software products and work with ambitious teams.
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
