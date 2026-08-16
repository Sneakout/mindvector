import type { Metadata } from "next";
import Link from "next/link";
import { Mark } from "../../components/Mark";
import "../../viral.css";

export const metadata: Metadata = {
  title: "Viral — A social network for what matters",
  description: "Viral is a new kind of social network, launching soon on iOS.",
};

export default function ViralPage() {
  return <main className="viral-page">
    <header className="nav viral-nav">
      <Link className="brand" href="/" aria-label="MindVector home"><Mark />MindVector</Link>
      <nav aria-label="Main navigation">
        <Link href="/#idea">The idea</Link><Link href="/#technology">Technology</Link><Link href="/#vision">Vision</Link><Link href="/#principles">Principles</Link>
        <details className="apps-menu" open><summary>Apps</summary><div className="apps-dropdown"><Link href="/apps/viral/">Viral <span>↗</span></Link></div></details>
        <Link className="nav-cta" href="/#waitlist">Join the waitlist</Link>
      </nav>
    </header>

    <section className="viral-hero">
      <div className="viral-hero-copy">
        <p className="eyebrow"><span/> An app by MindVector</p>
        <h1>Social,<br/><em>reframed.</em></h1>
        <p className="viral-lede">Viral is a social network built around the people, ideas and moments you actually want to carry with you.</p>
        <div className="viral-actions"><span className="ios-badge"><b></b><span>Launching soon<br/><strong>on iOS</strong></span></span><Link className="text-link" href="/#waitlist">Follow the journey <span>→</span></Link></div>
      </div>
      <div className="viral-visual" aria-label="Abstract preview of the Viral social network interface" role="img">
        <div className="viral-orbit orbit-a"/><div className="viral-orbit orbit-b"/><div className="viral-signal signal-a">PEOPLE</div><div className="viral-signal signal-b">IDEAS</div><div className="viral-signal signal-c">MOMENTS</div>
        <div className="viral-card"><div className="viral-card-top"><span>VIRAL / 01</span><i>•••</i></div><div className="viral-avatar">V</div><h2>Find what<br/><em>moves you.</em></h2><div className="viral-card-line"><span/><span/><span/></div><p>your signal is forming</p></div>
      </div>
    </section>

    <section className="viral-intro"><div className="section-number">01 / VIRAL</div><div className="viral-split"><h2>A social network<br/>for <em>what matters.</em></h2><div><p className="large-copy">Most feeds optimize for more. Viral is interested in better: the conversations, communities and creative sparks that feel like they belong to you.</p><p className="muted">A calmer layer for discovering people and ideas—with context, intention and a little more signal.</p></div></div></section>

    <section className="viral-pillars"><div className="section-number">02 / THE SIGNAL</div><div className="viral-pillar-grid"><article><span>01</span><h3>Find your people</h3><p>Discover communities around shared curiosity, not just shared reach.</p></article><article><span>02</span><h3>Keep the context</h3><p>Conversations stay connected to the ideas and moments that started them.</p></article><article><span>03</span><h3>Make it yours</h3><p>Shape a social space that reflects your interests, pace and perspective.</p></article></div></section>

    <section className="viral-launch"><p className="eyebrow"><span/> First signal</p><h2>Viral is launching<br/><em>soon on iOS.</em></h2><p>We are building the first version now. Join the MindVector waitlist to follow the launch and be among the first to try it.</p><Link className="button primary" href="/#waitlist">Join the waitlist <b>↗</b></Link></section>

    <footer><div><Link className="brand" href="/"><Mark/>MindVector</Link><p>Viral is an app by MindVector.</p></div><div className="footer-links"><Link href="/">MindVector</Link><Link href="/#vision">Vision</Link><a href="mailto:hello@mindvector.tech">Contact</a></div><div className="copyright">© 2026 MindVector <span>mindvector.tech</span></div></footer>
  </main>;
}
