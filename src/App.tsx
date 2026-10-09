import React, { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUp,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  MoveUpRight,
  X,
} from "lucide-react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { copy, type Lang } from "./i18n";

gsap.registerPlugin(ScrollTrigger);
let lenis: Lenis | null = null;

const base = import.meta.env.BASE_URL;

// Layout data only. Titles, descriptions and every other visible string come from i18n.ts (same order).
const categoryKeys = ["Healthcare", "Construction", "E-commerce", "Business", "Portfolio", "UI/UX"];

const projects = [
  { id: "01", category: "Healthcare", image: `${base}imports/taj.jpeg`, tags: ["React 19", "Node.js", "Express", "TypeScript"], accent: "olive", url: "https://tajclinics-7f4tfgfb.manus.space/" },
  { id: "01", category: "Construction", image: `${base}imports/mei.jpeg`, tags: ["React", "Vite", "TypeScript", "Tailwind CSS"], accent: "copper", url: "https://amreltanany.github.io/MeridianBuild/" },
  { id: "02", category: "Construction", image: `${base}imports/sam.jpeg`, tags: ["WordPress", "PHP", "Responsive Design", "SEO"], accent: "copper", url: "https://samconstructions-eg.com/" },
  { id: "01", category: "E-commerce", image: `${base}imports/switch.jpeg`, tags: ["React", "TypeScript", "Tailwind CSS"], accent: "copper", url: "https://amreltanany.github.io/Switch-On/" },
  { id: "02", category: "E-commerce", image: `${base}imports/qaro2a.jpeg`, tags: ["ASP.NET Core", "SQL Server", "JWT Auth"], accent: "copper", url: "http://qaro2a.com/" },
  { id: "03", category: "E-commerce", image: `${base}imports/sneakers.jpeg`, tags: ["HTML5", "CSS3", "JavaScript"], accent: "copper", url: "https://amreltanany.github.io/sneakers-/" },
  { id: "01", category: "Business", image: `${base}imports/display.jpeg`, tags: ["WordPress", "PHP", "Responsive Design", "SEO"], accent: "olive", url: "https://displayegypt.com/" },
  { id: "01", category: "Business", image: `${base}imports/apex.jpeg`, tags: ["Next.js 16", "React", "TypeScript", "Tailwind"], accent: "copper", url: "https://amreltanany.github.io/apex-nine-racing/" },
  { id: "01", category: "Portfolio", image: `${base}imports/porfolio.jpeg`, tags: ["React + Vite", "TypeScript", "Tailwind"], accent: "copper", url: "https://amreltanany.github.io/Amr_Portfolio/" },
  { id: "02", category: "Portfolio", image: `${base}imports/porfolio2.jpeg`, tags: ["React + Vite", "TypeScript", "Tailwind"], accent: "copper", url: "https://amreltanany.github.io/ElTanany/" },
  { id: "03", category: "Portfolio", image: `${base}imports/porfolio3.jpeg`, tags: ["HTML5", "GITHUB PAGES", "Tailwind"], accent: "copper", url: "https://amreltanany.github.io/portfolio-/" },
  { id: "01", category: "UI/UX", image: `${base}imports/ronin.jpeg`, tags: ["UI/UX", "Motion", "Interaction"], accent: "copper", url: "https://amreltanany.github.io/ronin/" },
];

// DRAFT pricing numbers: edit here. Names, features and notes are in i18n.ts (same order).
type PkgData = { price?: number; unit?: boolean; from?: boolean; custom?: boolean; featured?: boolean };
const packageTypes: { id: "rental" | "sale" | "management"; packages: PkgData[] }[] = [
  { id: "rental", packages: [{ price: 500, unit: true }, { price: 1000, unit: true, featured: true }] },
  { id: "sale", packages: [{ price: 3000 }, { price: 6000, featured: true }, { custom: true }] },
  { id: "management", packages: [{ price: 1000, unit: true }, { price: 1500, unit: true, featured: true }, { custom: true }] },
];

const WHATSAPP = "https://wa.me/201119708154";
const wa = (text: string) => `${WHATSAPP}?text=${encodeURIComponent(text)}`;

function AMRMark({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      <path d="M50 8L8 85h18l8-16h32l8 16h18L50 8zm0 22l11 22H39L50 30z" fill="currentColor" />
    </svg>
  );
}

const getInitialLang = (): Lang => {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "ar" || saved === "en") return saved;
  } catch { /* storage can be blocked */ }
  return "en";
};

export default function App() {
  const [lang, setLang] = useState<Lang>(getInitialLang);
  const c = copy[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [activeCategory, setActiveCategory] = useState("Healthcare");
  const [displayedCategory, setDisplayedCategory] = useState("Healthcare");
  const [phase, setPhase] = useState<"idle" | "leaving" | "entering">("idle");
  const [activeTrack, setActiveTrack] = useState(0);
  const [activeType, setActiveType] = useState<"rental" | "sale" | "management">("sale"); // opens on one-time purchase
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openPkgFaq, setOpenPkgFaq] = useState<number | null>(null);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try { localStorage.setItem("lang", lang); } catch { /* ignore */ }
  }, [lang]);

  // Warm only the hovered category's images, instead of downloading all of them on first load.
  const preloadCategory = (category: string) => {
    projects.filter((p) => p.category === category).forEach((project) => {
      const img = new Image();
      img.decoding = "async";
      img.src = project.image;
    });
  };

  const selectCategory = (category: string) => {
    if (category === activeCategory || phase !== "idle") return;
    setActiveCategory(category);
    setPhase("leaving");
    setTimeout(() => {
      setDisplayedCategory(category);
      clearTimeout(infoTimer.current);
      setSlide(0); setInfoIdx(0); setInfoHidden(false);
      setPhase("entering");
      setTimeout(() => setPhase("idle"), 700);
    }, 240);
  };

  // Smooth wheel scroll (Lenis) + scroll reveals (GSAP).
  useEffect(() => {
    lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    let raf = 0;
    const tick = (t: number) => { lenis?.raf(t); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);

    const cleanups: (() => void)[] = [];
    const ctx = gsap.context(() => {
      // Magnetic buttons: fine pointers on desktop only.
      if (window.matchMedia("(pointer: fine) and (min-width: 900px)").matches) {

        document.querySelectorAll<HTMLElement>(".button, .nav-cta").forEach((btn) => {
          const move = (e: MouseEvent) => {
            const r = btn.getBoundingClientRect();
            gsap.to(btn, { x: (e.clientX - r.left - r.width / 2) * 0.35, y: (e.clientY - r.top - r.height / 2) * 0.35, duration: 0.3 });
          };
          const leave = () => gsap.to(btn, { x: 0, y: 0, duration: 1, ease: "elastic.out(1,0.3)" });
          btn.addEventListener("mousemove", move);
          btn.addEventListener("mouseleave", leave);
          cleanups.push(() => { btn.removeEventListener("mousemove", move); btn.removeEventListener("mouseleave", leave); });
        });
      }

      gsap.utils.toArray<HTMLElement>("section:not(#top) h2").forEach((el) =>
        gsap.from(el, { y: 50, opacity: 0, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 88%" } }),
      );
      gsap.utils.toArray<HTMLElement>(".about-portrait").forEach((el) => {
        gsap.fromTo(el, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 85%" } });
        const img = el.querySelector("img");
        if (img) gsap.fromTo(img, { scale: 1.3 }, { scale: 1, duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 85%" } });
      });
      gsap.to(".hero-visual", { y: -80, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    });

    return () => {
      cleanups.forEach((fn) => fn());
      ctx.revert();
      cancelAnimationFrame(raf);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) lenis ? lenis.scrollTo(el) : el.scrollIntoView({ behavior: "smooth" });
  };

  // project index keeps its text: i18n.projects[i] matches projects[i]
  const visibleProjects = projects
    .map((project, index) => ({ project, text: c.work.projects[index] }))
    .filter(({ project }) => project.category === displayedCategory);

  // Slider: `slide` moves the image track at once; the side details fade out, swap, then fade in.
  const [slide, setSlide] = useState(0);
  const [infoIdx, setInfoIdx] = useState(0);
  const [infoHidden, setInfoHidden] = useState(false);
  const infoTimer = useRef<number>(0);
  const touchX = useRef(0);
  const goSlide = (next: number) => {
    const i = Math.max(0, Math.min(visibleProjects.length - 1, next));
    if (i === slide) return;
    setSlide(i);
    setInfoHidden(true);
    clearTimeout(infoTimer.current);
    infoTimer.current = window.setTimeout(() => { setInfoIdx(i); setInfoHidden(false); }, 280);
  };
  const info = visibleProjects[infoIdx];

  const typeData = packageTypes.find((t) => t.id === activeType)!;
  const typeText = c.pricing.types[activeType];
  const showPending = import.meta.env.DEV;
  const pkgFaq = c.pricing.faq.filter(([, answer]) => answer || showPending);
  const tracks = c.solutions.tracks;

  return (
    <main className="site-shell" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="grain" aria-hidden="true" />

      {/* Header */}
      <header className="site-header">
        <button className="wordmark" onClick={() => scrollTo("top")} aria-label={c.nav.back}>
          <AMRMark style={{ width: 27, height: 27, color: "var(--copper)" }} />
          <span dir="ltr">AMR<span className="wordmark-dot">.</span></span>
        </button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label={c.nav.mainNav}>
          <button onClick={() => scrollTo("pricing")}>{c.nav.pricing}</button>
          <button onClick={() => scrollTo("about")}>{c.nav.about}</button>
          <button onClick={() => scrollTo("work")}>{c.nav.work}</button>
          <button onClick={() => scrollTo("solutions")}>{c.nav.solutions}</button>
          <button onClick={() => scrollTo("process")}>{c.nav.process}</button>
          <button className="nav-cta" onClick={() => scrollTo("contact")}>
            {c.nav.start} <ArrowUpRight size={15} />
          </button>
        </nav>
        <div className="header-tools">
          <button className="lang-toggle" onClick={() => setLang(lang === "en" ? "ar" : "en")} aria-label={c.nav.toggleLabel} lang={lang === "en" ? "ar" : "en"}>
            {c.nav.toggle}
          </button>
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={c.nav.menu}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="hero section-pad">
        <div className="hero-copy reveal-up">
          <p className="eyebrow"><span className="status-dot" /> {c.hero.eyebrow}</p>
          <h1>{c.hero.h1a}<br /><em>{c.hero.h1b}</em></h1>
          <p className="hero-intro">{c.hero.intro}</p>
          <div className="hero-actions">
            <button className="button button-copper" onClick={() => scrollTo("work")}>
              {c.hero.cta1} <ArrowDownRight size={17} />
            </button>
            <button className="text-link" onClick={() => scrollTo("contact")}>
              {c.hero.cta2} <ArrowUpRight size={16} />
            </button>
          </div>
          <div className="hero-meta">
            {c.hero.meta.map((m) => <span key={m}>{m}</span>)}
          </div>
        </div>
        <div className="hero-visual reveal-in">
          <div className="hero-image-wrap">
            <img src={`${base}imports/hero.webp`} alt={c.hero.imgAlt} />
          </div>
          <div className="hero-caption">
            <span>{c.hero.caption[0]}</span>
            <span>{c.hero.caption[1]}</span>
          </div>
          <div className="hero-side-note">
            {c.hero.side[0]} <br />{c.hero.side[1]} <ArrowDownRight size={14} />
          </div>
        </div>
      </section>

      {/* Packages & pricing */}
      <section id="pricing" className="pricing section-pad">
        <div className="pricing-head">
          <div className="section-marker"><span>01</span><span>{c.pricing.marker}</span></div>
          <div>
            <p className="kicker">{c.pricing.kicker}</p>
            <h2>{c.pricing.h2a}<br /><em>{c.pricing.h2b}</em></h2>
          </div>
        </div>

        <div className="price-tabs" role="tablist" aria-label={c.pricing.tabsLabel}>
          {packageTypes.map((type, index) => (
            <button
              key={type.id}
              role="tab"
              aria-selected={activeType === type.id}
              className={activeType === type.id ? "active" : ""}
              onClick={() => setActiveType(type.id)}
            >
              <span>0{index + 1}</span>{c.pricing.types[type.id].label}
            </button>
          ))}
        </div>
        <p className="price-type-note">{typeText.note}</p>

        <div className="price-grid" key={`${activeType}-${lang}`} style={{ ["--cols" as string]: typeData.packages.length }}>
          {typeData.packages.map((pkg, i) => {
            const text = typeText.packages[i];
            return (
              <article className={`price-card${pkg.featured ? " featured" : ""}`} key={text.name}>
                {pkg.featured && <span className="price-flag">{c.pricing.mostChosen}</span>}
                <p className="mono-label">{text.name}</p>
                <h3>{text.tagline}</h3>
                <div className="price-line">
                  {pkg.from && <small>{c.pricing.from}</small>}
                  {pkg.price !== undefined
                    ? <strong>{c.pricing.money(pkg.price)}</strong>
                    : <strong className="price-custom">{c.pricing.custom}</strong>}
                  {pkg.unit && <small>{c.pricing.perMonth}</small>}
                </div>
                <p className="price-time">{text.time}</p>
                {pkg.unit && pkg.price !== undefined && (
                  <p className="price-yearly">{c.pricing.yearly(pkg.price * 10)} <em>{c.pricing.twoFree}</em></p>
                )}
                <ul className="price-features">
                  {text.features.map((feature) => {
                    const extra = feature.startsWith("+");
                    return <li key={feature} className={extra ? "extra" : undefined}><Check size={14} />{extra ? feature.slice(1) : feature}</li>;
                  })}
                </ul>
                <a className="button button-copper price-cta" href={wa(c.pricing.wa.pkg(text.name, typeText.label))} target="_blank" rel="noreferrer">
                  {pkg.custom ? c.pricing.quote : c.pricing.choose(text.name)} <ArrowUpRight size={16} />
                </a>
              </article>
            );
          })}
        </div>

        <ul className="price-terms">
          {typeText.terms.map((term) => <li key={term}>{term}</li>)}
          <li>{c.pricing.currencyNote}</li>
        </ul>
        {activeType === "sale" && typeText.linkText && (
          <button className="text-link price-switch" onClick={() => setActiveType("management")}>
            {typeText.linkText} <ArrowUpRight size={15} />
          </button>
        )}

        {pkgFaq.length > 0 && (
          <div className="pkg-faq">
            <p className="kicker">{c.pricing.faqKicker}</p>
            <div className="faq-list">
              {pkgFaq.map(([question, answer], index) => (
                <div className={`faq-item ${openPkgFaq === index ? "open" : ""}`} key={question}>
                  <button onClick={() => setOpenPkgFaq(openPkgFaq === index ? null : index)} aria-expanded={openPkgFaq === index}>
                    <span>{question}</span>
                    <ChevronDown size={18} />
                  </button>
                  <div className="faq-answer">
                    <p>{answer || c.pricing.faqPending}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Statement */}
      <section className="statement section-pad">
        <div className="section-marker"><span>02</span><span>{c.statement.marker}</span></div>
        <div className="statement-content">
          <p className="kicker">{c.statement.kicker}</p>
          <h2>{c.statement.h2a}<br /><span>{c.statement.h2b}</span></h2>
          <p className="statement-copy">{c.statement.copy}</p>
        </div>
        <div className="statement-signature" dir="ltr">
          <AMRMark style={{ width: 27, height: 27 }} />
          <span>AMR<br />ELTANANY</span>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about section-pad">
        <div className="section-marker"><span>03</span><span>{c.about.marker}</span></div>
        <div className="about-portrait">
          <img src={`${base}imports/amr.jpeg`} alt={c.about.alt} loading="lazy" decoding="async" />
        </div>
        <div className="about-copy">
          <p className="kicker">{c.about.kicker}</p>
          <h2>{c.about.h2a}<br /><em>{c.about.h2b}</em></h2>
          <p>{c.about.p1}</p>
          <p>{c.about.p2}</p>
          <div className="about-stats">
            <div><strong>{projects.length}</strong><span>{c.about.stats[0]}</span></div>
            <div><strong>{categoryKeys.length}</strong><span>{c.about.stats[1]}</span></div>
            <div><strong>{c.about.call}</strong><span>{c.about.stats[2]}</span></div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="work-section section-pad">
        <div className="section-heading">
          <div className="section-marker"><span>04</span><span>{c.work.marker}</span></div>
          <div>
            <p className="kicker">{c.work.kicker}</p>
            <h2>{c.work.h2a}<br /><em>{c.work.h2b}</em></h2>
          </div>
          <button className="circle-link" aria-label={c.work.viewAll}><MoveUpRight size={20} /></button>
        </div>

        <div className="case-study-layout">
          <aside className="case-category-rail">
            <p className="mono-label">{c.work.browse}</p>
            <p className="category-note" style={{ margin: "0 0 32px", color: "#77736c", fontSize: 12 }}>{c.work.choose}</p>
            <div className="category-tabs" role="tablist" aria-label={c.work.tabsLabel}>
              {categoryKeys.map((category, index) => (
                <button
                  key={category}
                  className={activeCategory === category ? "active" : ""}
                  onClick={() => selectCategory(category)}
                  onPointerEnter={() => preloadCategory(category)}
                  onFocus={() => preloadCategory(category)}
                  role="tab"
                  aria-selected={activeCategory === category}
                >
                  <span>0{index + 1}</span>{c.work.categories[category]}<ArrowUpRight size={14} />
                </button>
              ))}
            </div>
            <div className="rail-line" />
          </aside>

          <div className={`project-stage${phase === "leaving" ? " stage-leaving" : ""}`}>
            <article className={`project-card${phase === "entering" ? " stage-entering" : ""}`} key={displayedCategory}>
              <div className="project-number">0{slide + 1}</div>
              <div className="project-media">
                <div
                  className="project-image"
                  onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
                  onTouchEnd={(e) => {
                    const dx = e.changedTouches[0].clientX - touchX.current;
                    if (Math.abs(dx) > 50) goSlide(slide + (dx < 0 ? 1 : -1) * (lang === "ar" ? -1 : 1));
                  }}
                >
                  <div className="slider-track" style={{ transform: `translateX(${(lang === "ar" ? 1 : -1) * slide * 100}%)` }}>
                    {visibleProjects.map(({ project, text }, i) => (
                      <div className={i === slide ? "slide active" : "slide"} key={project.url}>
                        <a href={project.url} target="_blank" rel="noreferrer" aria-label={c.work.openAria(text.title)}>
                          <img src={project.image} alt={text.title} loading="eager" decoding="async" />
                        </a>
                        <span className={`project-accent ${project.accent}`}>{text.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {visibleProjects.length > 1 && (
                  <div className="slider-controls">
                    <button className="slider-arrow" onClick={() => goSlide(slide - 1)} disabled={slide === 0} aria-label={c.work.prev}>
                      {lang === "ar" ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                    </button>
                    <div className="slider-dots">
                      {visibleProjects.map(({ project, text }, i) => (
                        <button key={project.url} className={i === slide ? "active" : ""} onClick={() => goSlide(i)} aria-label={text.title} aria-current={i === slide} />
                      ))}
                    </div>
                    <div className="gutter-dots">
                      <span className="gutter-count">{slide + 1} / {visibleProjects.length}</span>
                      {visibleProjects.map(({ project, text }, i) => (
                        <button key={project.url} className={i === slide ? "active" : ""} onClick={() => goSlide(i)} aria-label={text.title} aria-current={i === slide} />
                      ))}
                    </div>
                    <span className="slider-count">{slide + 1} / {visibleProjects.length}</span>
                    <button className="slider-arrow" onClick={() => goSlide(slide + 1)} disabled={slide === visibleProjects.length - 1} aria-label={c.work.next}>
                      {lang === "ar" ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
                    </button>
                  </div>
                )}
              </div>
              {info && (
                <div className={`project-info${infoHidden ? " is-hidden" : ""}`} key={infoIdx}>
                  <p className="mono-label">{info.text.type}</p>
                  <h3>{info.text.title}</h3>
                  <p>{info.text.description}</p>
                  <div className="tag-row" dir="ltr">
                    {info.project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <a className="case-link" href={info.project.url} target="_blank" rel="noreferrer">
                    {c.work.open} <ArrowUpRight size={15} />
                  </a>
                </div>
              )}
            </article>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="solutions section-pad">
        <div className="section-marker"><span>05</span><span>{c.solutions.marker}</span></div>
        <div className="solutions-grid">
          <div>
            <p className="kicker">{c.solutions.kicker}</p>
            <h2>{c.solutions.h2a}<br /><em>{c.solutions.h2b}</em></h2>
            <p className="solutions-intro">{c.solutions.intro}</p>
            <div className="track-tabs">
              {tracks.map((track, index) => (
                <button
                  key={track.title}
                  className={activeTrack === index ? "active" : ""}
                  onClick={() => setActiveTrack(index)}
                >
                  <span>0{index + 1}</span>{track.title}<ArrowUpRight size={15} />
                </button>
              ))}
            </div>
          </div>
          <div className="track-detail">
            <span className="detail-index">0{activeTrack + 1} / 0{tracks.length}</span>
            <h3>{tracks[activeTrack].title}</h3>
            <p>{tracks[activeTrack].copy}</p>
            <div className="detail-tags">
              {tracks[activeTrack].tags.map((tag) => (
                <span key={tag}><Check size={13} />{tag}</span>
              ))}
            </div>
            <div className="detail-line" />
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="process section-pad">
        <div className="section-marker" style={{ marginBottom: 0 }}><span>06</span><span>{c.process.marker}</span></div>
        <div className="process-heading">
          <p className="kicker">{c.process.kicker}</p>
          <h2>{c.process.h2a}<br /><em>{c.process.h2b}</em></h2>
        </div>
        <div className="process-grid">
          {c.process.steps.map(([title, text], i) => (
            <div className="process-step" key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ArrowDownRight size={17} />
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="stack section-pad">
        <div className="stack-intro">
          <div className="section-marker"><span>07</span><span>{c.stack.marker}</span></div>
          <h2>{c.stack.h2a}<br /><em>{c.stack.h2b}</em></h2>
        </div>
        <div className="stack-list">
          {c.stack.rows.map(([label, value]) => (
            <React.Fragment key={label}>
              <p>{label}</p><span>{value}</span>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq section-pad">
        <div className="section-marker"><span>08</span><span>{c.faq.marker}</span></div>
        <div className="faq-grid">
          <div>
            <p className="kicker">{c.faq.kicker}</p>
            <h2>{c.faq.h2a}<br /><em>{c.faq.h2b}</em></h2>
          </div>
          <div className="faq-list">
            {c.faq.items.map(([question, answer], index) => (
              <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>
                  <span>{question}</span>
                  <ChevronDown size={18} />
                </button>
                <div className="faq-answer">
                  <p>{answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact section-pad">
        <div className="contact-mark">
          <AMRMark style={{ width: 180, height: 180, color: "#11110f", opacity: 0.15 }} />
        </div>
        <div className="section-marker"><span>09</span><span>{c.contact.marker}</span></div>
        <div className="contact-content">
          <p className="kicker">{c.contact.kicker}</p>
          <h2>{c.contact.h2a}<br /><em>{c.contact.h2b}</em></h2>
          <a className="contact-email" href="mailto:amr_eltanany@outlook.com" dir="ltr">
            amr_eltanany@outlook.com <ArrowUpRight size={22} />
          </a>
          <div className="contact-actions">
            <a className="button button-copper" href={WHATSAPP} target="_blank" rel="noreferrer">
              {c.contact.call} <ArrowUpRight size={17} />
            </a>
            <a className="text-link" href={wa(c.pricing.wa.proposal)} target="_blank" rel="noreferrer">
              {c.contact.proposal} <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <button className={showTop ? "to-top is-visible" : "to-top"} onClick={() => (lenis ? lenis.scrollTo(0, { duration: 1.6 }) : window.scrollTo({ top: 0, behavior: "smooth" }))} aria-label={c.nav.back} tabIndex={showTop ? 0 : -1}>
        <ArrowUp size={20} />
      </button>

      <footer className="footer">
        <span>{c.footer.left}</span>
        <span>{c.footer.mid}</span>
        <div>
          <a href="https://github.com/amreltanany" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.instagram.com/amr_eltanany_" target="_blank" rel="noreferrer">Instagram</a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </footer>
    </main>
  );
}
