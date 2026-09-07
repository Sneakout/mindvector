import type { Metadata } from "next";
import Link from "next/link";
import styles from "./fresh-fold.module.css";

export const metadata: Metadata = {
  title: "Fresh Fold | Laundry & Garment Care Platform by MindVector",
  description: "Fresh Fold is a care-first laundry platform connecting customers, laundry partners and delivery operations—from doorstep booking to garment care and return.",
  alternates: { canonical: "https://mindvector.tech/apps/fresh-fold/" },
  openGraph: { title: "Fresh Fold | Care for the things you love.", description: "One connected platform for laundry discovery, doorstep service, garment operations and delivery.", url: "https://mindvector.tech/apps/fresh-fold/", siteName: "MindVector", type: "website" },
};

const customerSteps = [
  ["01", "Choose care", "Laundry, dry cleaning, shoes, carpets, curtains, leather and steam ironing."],
  ["02", "Book collection", "Confirm an address, see available windows and know the price before booking."],
  ["03", "Follow every step", "Track collection, care, quality checks and return delivery in one calm timeline."],
];

const platformLayers = [
  ["Customer", "Discovery, booking, payments, live order tracking and support."],
  ["Partner", "Orders, intake, production stages, quality evidence and branch performance."],
  ["Delivery", "Custody records, proof, route planning, collections and exceptions."],
  ["Intelligence", "Demand, capacity, turnaround, profitability and service-area insight."],
];

function FreshFoldMark() {
  return <svg viewBox="0 0 64 64" role="img" aria-label="Fresh Fold"><path d="M15 15c0-4 3-7 7-7h20c4 0 7 3 7 7v8c0 3-2 5-5 5H28c-7 0-13-6-13-13Z" fill="#15947a"/><path d="M49 49c0 4-3 7-7 7H22c-4 0-7-3-7-7v-8c0-3 2-5 5-5h16c7 0 13 6 13 13Z" fill="#d4ef7c"/><path d="M21 28h23c3 0 5 2 5 5v3H26c-6 0-11-5-11-11v-4c1 4 3 7 6 7Z" fill="#0d5960" opacity=".72"/><path d="M54 9l1.7 4.3L60 15l-4.3 1.7L54 21l-1.7-4.3L48 15l4.3-1.7L54 9Z" fill="#d4ef7c"/></svg>;
}

export default function FreshFoldPage() {
  return <main className={styles.page}>
    <header className={styles.header}><Link className={styles.brand} href="/apps/fresh-fold/" aria-label="Fresh Fold home"><FreshFoldMark/><span><b>fresh</b>fold</span></Link><nav aria-label="Fresh Fold navigation"><a href="#experience">Experience</a><a href="#platform">Platform</a><a href="#vision">Vision</a></nav><Link className={styles.back} href="/">A MindVector product <span>↗</span></Link></header>

    <section className={styles.hero}><div className={styles.heroCopy}><p className={styles.eyebrow}><span/> LAUNDRY &amp; GARMENT CARE, REIMAGINED</p><h1>Care for the<br/><em>things you love.</em></h1><p className={styles.lede}>Fresh Fold brings customers, trusted laundry partners and delivery teams into one beautifully coordinated care experience.</p><div className={styles.actions}><a className={styles.primary} href="#experience">See how it works <span>↓</span></a><a className={styles.secondary} href="mailto:hello@mindvector.tech?subject=Fresh%20Fold">Follow the product <span>↗</span></a></div><p className={styles.status}><i/> In development by MindVector</p></div>
      <div className={styles.heroVisual} aria-label="Fresh Fold customer order experience" role="img"><div className={styles.fabricLoop}><FreshFoldMark/></div><div className={`${styles.phone} ${styles.phoneBack}`}><div className={styles.phoneTop}><FreshFoldMark/><span>9:41</span></div><p>Good morning</p><h2>What needs<br/>a little care?</h2><div className={styles.serviceGrid}><i/><i/><i/><i/></div></div><div className={styles.phone}><div className={styles.phoneTop}><FreshFoldMark/><span>9:41</span></div><small>ORDER FF-2048</small><h2>Freshly cared for.<br/>On its way.</h2><div className={styles.timeline}><span className={styles.done}>Collected</span><span className={styles.done}>In care</span><span className={styles.active}>Returning today</span></div><div className={styles.deliveryCard}><b>Arriving 5:20–5:40 PM</b><small>Your delivery partner is nearby</small></div></div></div>
    </section>

    <section className={styles.promise} id="experience"><p className={styles.sectionLabel}>01 / THE CUSTOMER EXPERIENCE</p><div className={styles.promiseHeading}><h2>From laundry basket<br/>to wardrobe, <em>without the guesswork.</em></h2><p>Fresh Fold removes the operational burden from garment care. Choose a service, book a collection and always know what happens next.</p></div><div className={styles.steps}>{customerSteps.map(([number,title,copy])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className={styles.network} id="platform"><div className={styles.networkIntro}><p className={styles.sectionLabel}>02 / ONE CONNECTED PLATFORM</p><h2>Better care needs<br/><em>better coordination.</em></h2><p>Behind the simple customer experience is a complete operating layer for the businesses and people doing the work.</p></div><div className={styles.networkMap}><div className={styles.networkCore}><FreshFoldMark/><b>ONE ORDER.<br/>ONE TRUTH.</b></div>{platformLayers.map(([title,copy],index)=><article key={title} className={styles[`layer${index+1}`]}><span>0{index+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className={styles.vision} id="vision"><div className={styles.visionWindow}><div className={styles.windowBar}><span/><span/><span/><small>FRESH FOLD VISION</small></div><div className={styles.windowBody}><aside><FreshFoldMark/><i className={styles.selected}/><i/><i/><i/></aside><div><p>MONDAY / OPERATIONS</p><h3>Your laundry,<br/>running beautifully.</h3><div className={styles.metricRow}><span><b>48</b><small>Orders in care</small></span><span><b>96%</b><small>On time</small></span><span><b>12</b><small>Ready to return</small></span></div><div className={styles.flow}><span>INTAKE</span><i/><span>PROCESSING</span><i/><span>QUALITY</span><i/><span>READY</span></div></div></div></div><div className={styles.visionCopy}><p className={styles.sectionLabel}>03 / FRESH FOLD VISION</p><h2>The calm control room for modern laundry.</h2><p>One clear view of customers, orders, garments and the work happening in every branch.</p><ul><li>Live order and production visibility</li><li>Intake, quality checks and packing evidence</li><li>Capacity, turnaround and branch performance</li><li>Role-based access for each business and location</li></ul></div></section>

    <section className={styles.intelligence}><p className={styles.sectionLabel}>04 / INTELLIGENCE WITH A JOB TO DO</p><h2>Make every collection,<br/>care cycle and route <em>work better.</em></h2><div><p>Fresh Fold is being designed to learn from real operational signals—demand, distance, capacity, service time and quality—while keeping important decisions reviewable by people.</p><div className={styles.intelligenceTags}><span>Capacity-aware discovery</span><span>Smarter dispatch planning</span><span>Profit-aware service areas</span><span>Quality &amp; reliability signals</span></div></div></section>

    <section className={styles.finalCta}><FreshFoldMark/><p>FRESH FOLD / A MINDVECTOR PRODUCT</p><h2>A more thoughtful way<br/>to care for everything.</h2><a href="mailto:hello@mindvector.tech?subject=Fresh%20Fold">Talk to us about Fresh Fold <span>↗</span></a></section>
    <footer className={styles.footer}><Link className={styles.brand} href="/apps/fresh-fold/"><FreshFoldMark/><span><b>fresh</b>fold</span></Link><p>Care for the things you love.</p><Link href="/">MindVector <span>↗</span></Link></footer>
  </main>;
}
