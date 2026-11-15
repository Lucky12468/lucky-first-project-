import React, { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Menu, X, Sparkles,
  Layers3, Smartphone, MousePointer2, Code2, Palette, Zap,
  Github, Mail, MoveUpRight, Check
} from 'lucide-react';
import { CONTACT_EMAIL } from './config';

const projects = [
  {
    number: '01',
    type: 'BRAND & DIGITAL EXPERIENCE',
    title: 'The Sunday Studio',
    description: 'A warm, editorial-style concept for a creative studio. Designed to make a small brand feel memorable.',
    tags: ['Landing page', 'Responsive', 'Motion'],
    visual: 'studio',
    label: 'CREATIVE STUDIO'
  },
  {
    number: '02',
    type: 'FOOD & HOSPITALITY',
    title: 'Saffron Table',
    description: 'A restaurant website concept focused on appetite-led visuals, clear menus and effortless discovery.',
    tags: ['Restaurant', 'Menu UI', 'Mobile-first'],
    visual: 'restaurant',
    label: 'GOOD FOOD. GOOD MOOD.'
  },
  {
    number: '03',
    type: 'PRODUCT & E-COMMERCE',
    title: 'Forma Objects',
    description: 'A minimal storefront concept for everyday objects, with a considered product grid and quiet details.',
    tags: ['Storefront concept', 'Product UI', 'Clean design'],
    visual: 'shop',
    label: 'OBJECTS FOR LIVING'
  }
];

const skills = [
  { icon: Palette, name: 'Visual design', detail: 'Layouts, colour & typography' },
  { icon: Code2, name: 'Frontend development', detail: 'React, HTML, CSS & JavaScript' },
  { icon: Smartphone, name: 'Responsive design', detail: 'Mobile, tablet & desktop' },
  { icon: Zap, name: 'Motion & interaction', detail: 'Subtle animation & micro-interactions' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'work', 'services', 'contact'];
    if (!('IntersectionObserver' in window)) {
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) setActive(id === 'work' ? 'Work' : id.charAt(0).toUpperCase() + id.slice(1));
      });
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const name = entry.target.id;
          setActive(name === 'work' ? 'Work' : name.charAt(0).toUpperCase() + name.slice(1));
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          reveal.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach(el => reveal.observe(el));
    return () => reveal.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleContact = async () => {
    if (CONTACT_EMAIL) {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Let's build something")}`;
      return;
    }
    try {
      await navigator.clipboard.writeText('Hi Lucky! I saw your portfolio and would like to talk about a website.');
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      alert('Add your email address in src/config.js to activate direct contact.');
    }
  };

  return (
    <>
      <div className="top-line" />
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Lucky home">
          <span className="brand-mark">L<span>.</span></span>
          <span className="brand-name">LUCKY<span>®</span></span>
        </a>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {['Home', 'About', 'Work', 'Services', 'Contact'].map(item => (
            <a key={item} className={active === item ? 'nav-link active' : 'nav-link'}
               href={`#${item === 'Work' ? 'work' : item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR CREATIVE PROJECTS</div>
            <h1>Ideas deserve<br/>a <span className="accent-word">beautiful</span><br/>place online<span className="period">.</span></h1>
            <p className="hero-description">I'm Lucky. I turn ideas into clean, modern websites that look good, feel intuitive and work beautifully on every screen.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17}/></a>
              <a className="text-link" href="#about">A little about me <ArrowDown size={15}/></a>
            </div>
            <div className="hero-footnote"><span className="mono">01 / 04</span><span className="footnote-line"/><span>DESIGN-MINDED. DETAIL-DRIVEN.</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract decorative design">
            <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
            <div className="art-glow"/>
            <div className="art-card card-back"><span>GOOD IDEAS<br/>LIVE HERE.</span><i>↗</i></div>
            <div className="art-card card-front">
              <div className="card-top"><span className="tiny-dot"/><span className="tiny-dot"/><span className="tiny-dot"/><span className="card-url">lucky.studio</span></div>
              <div className="card-content"><span className="card-kicker">DIGITAL / 001</span><strong>Make it<br/><em>matter.</em></strong><div className="card-bottom"><span>DESIGN WITH INTENTION</span><span className="card-arrow">↗</span></div></div>
            </div>
            <div className="floating-tag tag-one"><Sparkles size={14}/> Thoughtful design</div>
            <div className="floating-tag tag-two"><span className="tag-swatch"/> Made for every screen</div>
            <div className="art-caption mono">FIG. 01 — A DIGITAL FIRST IMPRESSION</div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true"><div className="ticker-track">
          {Array.from({length: 2}).map((_, i) => <span key={i}>DESIGN <b>✳</b> DEVELOP <b>✳</b> MAKE IT MATTER <b>✳</b> BUILD FOR PEOPLE <b>✳</b> </span>)}
        </div></div>

        <section className="about section-wrap section-pad" id="about">
          <div className="section-label reveal"><span className="mono">01 — ABOUT</span><span className="label-rule"/></div>
          <div className="about-grid">
            <h2 className="reveal">Curious mind.<br/><span className="muted">Digital maker.</span></h2>
            <div className="about-copy reveal">
              <p className="large-copy">I’m interested in the space where thoughtful design meets useful technology.</p>
              <p>I'm building my skills in creating professional websites — from the first rough idea to a polished, responsive experience. I care about the details: clear layouts, smooth interactions and making things easy to use.</p>
              <p>This portfolio is my starting point. The projects below are concept explorations, created to practise and show the kind of work I want to make.</p>
              <a href="#contact" className="underlined-link">Have an idea? Let's talk <ArrowUpRight size={16}/></a>
            </div>
          </div>
          <div className="stats-row reveal">
            <div><strong>01<span>+</span></strong><small>CURIOUS BY NATURE</small></div>
            <div><strong>∞</strong><small>IDEAS TO EXPLORE</small></div>
            <div><strong>100<span>%</span></strong><small>FOCUSED ON THE DETAILS</small></div>
          </div>
        </section>

        <section className="work section-wrap section-pad" id="work">
          <div className="section-label reveal"><span className="mono">02 — SELECTED CONCEPTS</span><span className="label-rule"/></div>
          <div className="section-heading reveal"><h2>Some things<br/><span className="muted">I'm imagining.</span></h2><p>A few self-initiated directions exploring different styles, audiences and digital experiences.</p></div>
          <div className="project-grid">
            {projects.map(project => <article className="project-card reveal" key={project.number}>
              <div className={`project-visual ${project.visual}`}>
                <div className="project-browser"><span/><span/><span/><small>CONCEPT / {project.number}</small></div>
                {project.visual === 'studio' && <div className="visual-studio"><small>THE SUNDAY</small><strong>Make room<br/>for <i>good</i><br/>ideas.</strong><span className="visual-circle">✳</span><em>CREATIVE STUDIO — EST. 2025</em></div>}
                {project.visual === 'restaurant' && <div className="visual-restaurant"><span>SAFFRON TABLE</span><strong>A little<br/><i>more</i> flavour.</strong><small>FRESH · LOCAL · SEASONAL</small></div>}
                {project.visual === 'shop' && <div className="visual-shop"><small>FORMA / OBJECTS</small><strong>Less, but<br/><i>better.</i></strong><div className="object-shapes"><b/><b/><b/></div></div>}
                <span className="concept-stamp">CONCEPT PROJECT</span>
              </div>
              <div className="project-meta"><span className="mono">{project.number} / {project.type}</span><ArrowUpRight size={17}/></div>
              <h3>{project.title}</h3><p>{project.description}</p>
              <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </article>)}
          </div>
          <div className="work-note reveal"><Sparkles size={16}/><span>These are original portfolio concepts, not commissioned client projects.</span></div>
        </section>

        <section className="services section-wrap section-pad" id="services">
          <div className="section-label reveal"><span className="mono">03 — WHAT I FOCUS ON</span><span className="label-rule"/></div>
          <div className="section-heading reveal"><h2>Good websites<br/><span className="muted">do more.</span></h2><p>My current focus areas as I keep learning, experimenting and building.</p></div>
          <div className="skill-list">
            {skills.map((skill, index) => <div className="skill-row reveal" key={skill.name}>
              <span className="skill-index mono">0{index + 1}</span><div className="skill-icon"><skill.icon size={20}/></div>
              <div className="skill-name"><h3>{skill.name}</h3><p>{skill.detail}</p></div><ArrowUpRight className="skill-arrow" size={20}/>
            </div>)}
          </div>
          <div className="tech-stack reveal"><span className="mono">TOOLS & TECHNOLOGIES</span><div>{['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Responsive UI', 'AI-assisted workflow'].map(t => <span key={t}>{t}</span>)}</div></div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-inner reveal">
            <div className="contact-orb"><MoveUpRight size={34}/></div>
            <span className="mono contact-kicker">04 — YOUR IDEA STARTS HERE</span>
            <h2>Have something<br/>in <span className="accent-word">mind?</span></h2>
            <p>Got an idea for a website? I'd love to hear what you're thinking. Let's start with a conversation.</p>
            <button className="button button-primary contact-button" onClick={handleContact}>
              {CONTACT_EMAIL ? 'Send me an email' : copied ? 'Message copied!' : 'Copy a message'} {copied ? <Check size={17}/> : <ArrowUpRight size={17}/>}
            </button>
            {!CONTACT_EMAIL && <small className="contact-hint">To activate email contact, add your address in <code>src/config.js</code>.</small>}
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">L<span>.</span></span><span className="brand-name">LUCKY<span>®</span></span></a>
        <span className="footer-note">MADE WITH CURIOSITY & A LOT OF COFFEE-LESS FOCUS.</span>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <div className="copyright">© {new Date().getFullYear()} LUCKY. A PERSONAL PORTFOLIO.</div>
      </footer>
    </>
  );
}

export default App;
