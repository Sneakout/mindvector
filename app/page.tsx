"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Mark } from "./components/Mark";
import { AppsMenu } from "./components/AppsMenu";

const facets = [
  ["Memory", "What happened to you."],
  ["Personality", "How you tend to think and behave."],
  ["Preferences", "What you like and dislike."],
  ["Relationships", "The people and communities that matter to you."],
  ["Context", "The circumstances surrounding your decisions."],
  ["Creativity", "How you express yourself."],
  ["Values", "What matters to you."],
  ["Evolution", "How all of this changes over time."],
];

const principles = ["Ownership", "Consent", "Privacy", "Transparency", "Portability", "Memory control", "Agent permissions", "Right to delete", "Legacy consent"];

function MindCanvas({ compact = false }: { compact?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let frame = 0, animation = 0, mx = 0, my = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const count = compact ? 30 : 66;
    const nodes = Array.from({ length: count }, (_, i) => ({
      a: i * 2.399 + (i % 7) * .08,
      r: 28 + ((i * 47) % 210),
      z: .35 + ((i * 19) % 65) / 100,
      s: .00015 + (i % 5) * .000035,
    }));
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(devicePixelRatio, 2);
      canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const move = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mx = (e.clientX - r.left - r.width / 2) * .045;
      my = (e.clientY - r.top - r.height / 2) * .045;
    };
    const draw = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight, t = reduce ? 0 : frame++;
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2 + mx, cy = h / 2 + my;
      const pts = nodes.map((n, i) => {
        const a = n.a + t * n.s;
        const pulse = reduce ? 1 : 1 + Math.sin(t * .008 + i) * .035;
        return { x: cx + Math.cos(a) * n.r * n.z * pulse, y: cy + Math.sin(a) * n.r * .62 * pulse, z: n.z };
      });
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
        if (d < 78) { ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.strokeStyle = `rgba(147,177,255,${(1-d/78)*.16})`; ctx.lineWidth = .6; ctx.stroke(); }
      }
      pts.forEach((p, i) => {
        const glow = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,7);
        glow.addColorStop(0, i % 9 === 0 ? "rgba(197,255,216,.95)" : "rgba(205,218,255,.8)");
        glow.addColorStop(1,"rgba(120,150,255,0)");
        ctx.fillStyle=glow; ctx.beginPath(); ctx.arc(p.x,p.y,7,0,Math.PI*2); ctx.fill();
        ctx.fillStyle="#e9efff"; ctx.beginPath(); ctx.arc(p.x,p.y, p.z * 1.25,0,Math.PI*2); ctx.fill();
      });
      if (!reduce) animation = requestAnimationFrame(draw);
    };
    resize(); draw();
    window.addEventListener("resize", resize); canvas.addEventListener("pointermove", move);
    return () => { cancelAnimationFrame(animation); window.removeEventListener("resize", resize); canvas.removeEventListener("pointermove", move); };
  }, [compact]);
  return <canvas ref={canvasRef} className="mind-canvas" aria-label="An abstract, evolving constellation representing a MindVector" role="img" />;
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([entry]) => entry.isIntersecting && el.classList.add("visible"), { threshold: .12 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setSubmitted(true); };
  return <main>
    <a className="skip" href="#content">Skip to content</a>
    <header className="nav">
      <a className="brand" href="#top" aria-label="MindVector home"><Mark />MindVector</a>
      <button className="menu" aria-label="Toggle navigation" aria-expanded={menu} onClick={() => setMenu(!menu)}><span/><span/></button>
      <nav className={menu ? "open" : ""} aria-label="Main navigation">
        <a href="#idea" onClick={() => setMenu(false)}>The idea</a><a href="#technology" onClick={() => setMenu(false)}>Technology</a><a href="#vision" onClick={() => setMenu(false)}>Vision</a><a href="#principles" onClick={() => setMenu(false)}>Principles</a><AppsMenu /><a className="nav-cta" href="#waitlist" onClick={() => setMenu(false)}>Join the waitlist</a>
      </nav>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span/> A computational representation of a person</p>
        <h1>Your mind,<br/><em>represented.</em></h1>
        <p className="lede">MindVector is building technology that learns the patterns, memories, relationships and perspectives that make you who you are.</p>
        <div className="actions"><a className="button primary" href="#technology">Explore MindVector <b>↘</b></a><a className="text-link" href="#idea">The idea <span>→</span></a></div>
      </div>
      <div className="hero-visual"><MindCanvas/><span className="coordinate top">MV / 00—∞</span><span className="coordinate bottom">EVOLVING MODEL<br/>STATE: FORMING</span></div>
      <div className="scroll">SCROLL TO EXPLORE <span>↓</span></div>
    </section>

    <div id="content">
      <section className="section idea" id="idea"><Reveal>
        <div className="section-number">01 / THE IDEA</div>
        <div className="split"><h2>What if an AI could<br/>truly <em>understand you?</em></h2><div><p className="large-copy">Conventional AI knows information. MindVector is interested in something deeper: the structure beneath your choices.</p><p className="muted">What you remember. What you value. Who matters to you. How your opinions evolve. How relationships influence you. How you see the world.</p></div></div>
        <div className="forming" aria-label="Disconnected signals becoming a coherent model"><div className="signal-label">DISCONNECTED SIGNALS</div>{Array.from({length: 24},(_,i)=><i key={i} style={{"--i":i} as React.CSSProperties}/>)}<div className="forming-core"><Mark/><span>COHERENT<br/>MODEL</span></div></div>
      </Reveal></section>

      <section className="section model" id="technology"><Reveal>
        <div className="section-number">02 / MINDVECTOR</div><div className="split"><h2>A living model<br/>of a <em>person.</em></h2><p className="large-copy">A MindVector is not a static profile. It continuously evolves as a person lives. Each experience adds a deeper layer of understanding.</p></div>
        <div className="process">{["Experience","Memory","Pattern","Understanding","Prediction"].map((x,i)=><div className="process-step" key={x}><span>0{i+1}</span><b>{x}</b><i>{i<4?"→":"↗"}</i></div>)}</div>
      </Reveal></section>

      <section className="section anatomy"><Reveal>
        <div className="section-number">03 / ANATOMY</div><div className="center-title"><h2>What makes a<br/><em>MindVector?</em></h2><p>Not a single dataset. A living relationship between the many dimensions of a person.</p></div>
        <div className="facet-grid">{facets.map(([name,desc],i)=><button type="button" className="facet" key={name}><span>0{i+1}</span><div className="facet-dot"/><h3>{name}</h3><p>{desc}</p></button>)}</div>
      </Reveal></section>

      <section className="section agent"><Reveal className="agent-inner">
        <div><div className="section-number">04 / YOUR AGENT</div><h2>Your agent doesn&apos;t just<br/>know about you.<br/><em>It learns you.</em></h2><p className="large-copy">We are building toward a personal agent that understands preferences, remembers experiences, recognizes social context and helps represent your perspective.</p><p className="caveat">This is a long-term direction, not a claim that every capability exists today.</p></div>
        <div className="agent-orbit"><div className="orbit-ring r1"/><div className="orbit-ring r2"/><div className="agent-core"><Mark/><b>PERSONAL<br/>AGENT</b></div>{["CONTEXT","MEMORY","STYLE","DECISIONS"].map((x,i)=><span key={x} className={`satellite s${i}`}>{x}</span>)}</div>
      </Reveal></section>

      <section className="section network" id="vision"><Reveal>
        <div className="section-number">05 / A NETWORK OF MINDS</div><div className="split"><h2>What happens when<br/>minds can <em>connect?</em></h2><p className="large-copy">A network where every person has an intelligent representation of themselves. Their agents can understand context before people connect.</p></div>
        <div className="network-flow">{["Human","MindVector","Agent","Agent","MindVector","Human"].map((x,i)=><div key={i} className={`network-node ${x==="Human"?"human":""}`}><span>{i+1}</span><b>{x}</b>{i<5&&<i>→</i>}</div>)}</div>
      </Reveal></section>

      <section className="section beyond"><div className="beyond-glow"><MindCanvas compact/></div><Reveal><div className="section-number">06 / BEYOND A LIFETIME</div><h2>Some things should<br/><em>outlive us.</em></h2><div className="beyond-copy"><p className="beyond-lead">Over a lifetime, a MindVector can become a rich representation of the experiences, memories, relationships, ideas and perspectives that shaped a person.</p><p>We believe technology could eventually allow that representation to persist beyond the lifetime of its creator.</p><blockquote>Not a replacement for a person.<br/>Not the person themselves.<br/><strong>But a digital continuation of the traces they chose to leave behind.</strong></blockquote></div></Reveal></section>

      <section className="section principles" id="principles"><Reveal>
        <div className="section-number">07 / PRINCIPLES</div><div className="split"><h2>Your mind<br/><em>belongs to you.</em></h2><div><p className="large-copy">MindVector is being designed around a simple principle: a representation of you should remain under your control.</p><p className="muted">These are design goals guiding the system, not unsupported promises about a finished product.</p></div></div>
        <div className="principle-list">{principles.map((p,i)=><div key={p}><span>{String(i+1).padStart(2,"0")}</span><b>{p}</b><i>+</i></div>)}</div>
      </Reveal></section>

      <section className="section future"><Reveal><div className="section-number">08 / THE FUTURE</div><h2>Infrastructure for<br/><em>digital identity.</em></h2><div className="future-line">{[["Today","AI understands language."],["Next","AI understands context."],["Then","AI understands individuals."],["Eventually","AI can represent individuals."],["The future","Networks of intelligent personal agents."]].map(([a,b],i)=><div key={a}><span>0{i+1}</span><i/><h3>{a}</h3><p>{b}</p></div>)}</div></Reveal></section>

      <section className="section hood"><Reveal><div className="section-number">09 / UNDER THE HOOD</div><div className="hood-layout"><div><h2>Philosophy,<br/>with <em>structure.</em></h2><p>An abstract view of the layers behind a MindVector. The architecture will evolve; the distinction between source, representation and action remains essential.</p></div><div className="stack">{["Memory","Semantic representation","Relationship graph","Context","Personality","MindVector","Personal agent"].map((x,i)=><div key={x} className={i>4?"active":""}><span>{String(i+1).padStart(2,"0")}</span><b>{x}</b><i>↓</i></div>)}</div></div></Reveal></section>

      <section className="waitlist" id="waitlist"><Reveal><Mark/><p className="eyebrow">THE QUESTION</p><h2>What would your mind<br/>look like as a model?</h2><form onSubmit={submit}>{submitted?<p className="success" role="status">You&apos;re on the early list. We&apos;ll keep you close to the journey.</p>:<><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" required placeholder="you@example.com" autoComplete="email"/><button type="submit">Join the waitlist <span>→</span></button></>}</form><a className="text-link" href="mailto:hello@mindvector.tech">Follow the journey ↗</a></Reveal></section>
    </div>

    <footer><div><a className="brand" href="#top"><Mark/>MindVector</a><p>Your mind, represented.</p></div><div className="footer-links"><a href="#idea">About</a><a href="#technology">Technology</a><a href="#vision">Vision</a><a href="#principles">Privacy</a><a href="mailto:hello@mindvector.tech">Contact</a></div><div className="copyright">© 2026 MindVector <span>mindvector.tech</span></div></footer>
  </main>;
}
