import React, { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Menu,
  MoveUpRight,
  Sparkles,
  X,
} from "lucide-react";

import heroImage from "./imports/hero.webp";
import clinicImage from "./imports/taj.jpeg";
import Construction from "./imports/mei.jpeg";
import Construction2 from "./imports/sam.jpeg";
import ecommerce from "./imports/switch.jpeg";
import ecommerce2 from "./imports/qaro2a.jpeg";
import display from "./imports/display.jpeg";
import apex from "./imports/apex.jpeg";
import porfolio from "./imports/porfolio.jpeg";
import porfolio2 from "./imports/porfolio2.jpeg";
import porfolio3 from "./imports/porfolio3.jpeg";
import ronin from "./imports/ronin.jpeg";
const categories = ["Healthcare", "Construction", "E-commerce", "Business", "Portfolio", "UI/UX"];

const projects = [
  {
    id: "01", category: "Healthcare", type: "HEALTHCARE / FULL-STACK", title: "TAJ Clinics",
    description: "A comprehensive healthcare management platform designed for modern clinics, featuring seamless appointment scheduling, interactive UI components, and integrated backend services.",
    image: clinicImage, tags: ["React 19", "Node.js", "Express", "TypeScript"], accent: "olive",
    url: "https://tajclinics-7f4tfgfb.manus.space/",
  },
  {
    id: "01", category: "Construction", type: "Construction / CORPORATE", title: "Meridian",
    description: "A modern corporate website for a high-end architectural and precision engineering firm, featuring dynamic project showcases, service offerings, and interactive inquiry forms.",
    image: Construction, tags: ["React","Vite", "TypeScript", "Tailwind CSS"], accent: "copper",
    url: "https://amreltanany.github.io/MeridianBuild/",
  },

  {
    id: "02", category: "Construction", type: "CONSTRUCTION / CORPORATE", title: "SAM Construction",
    description: "Developed A web platform for a leading Egyptian construction and general investments firm. Built with a clean, modern wordpress layout highlighting architectural services, corporate portfolios, and project management.",
    image: Construction2 , tags: ["WordPress", "PHP", "Responsive Design" ,"SEO"], accent: "copper",
    url: "https://samconstructions-eg.com/",
  },
  {
    id: "01", category: "E-commerce", type: "E-COMMERCE / FURNITURE", title: "Switch On",
    description: "A sleek, responsive e-commerce Platform for a modern furniture brand, focused on minimalist aesthetics, smooth user interactions, and high-quality product displays.",
    image: ecommerce, tags: ["React", "TypeScript", "Tailwind CSS"], accent: "copper",
    url: "https://amreltanany.github.io/Switch-On/",
  },
  {
    id: "02", category: "E-commerce", type: "E-COMMERCE / PUBLISHING", title: "Qaro2a",
    description: "Architecting complex digital ecosystems like Qaro2a, designed for author publishing, e-commerce, and broadcasting. I combine top-tier engineering with sleek UI design to deliver fast, conversion-driven platforms.",
    image: ecommerce2, tags: ["ASP.NET Core", "SQL Server", "JWT Auth"], accent: "copper",
    url: "http://qaro2a.com/",
  },
  {
    id: "01", category: "Business", type: "BUSINESS / OUTDOOR MEDIA", title: "Display Egypt",
    description: "Developed DisplayEgypt—a dynamic WordPress platform built for an outdoor advertising leader, highlighting street-level campaigns, digital billboards, and high-impact urban displays.",
    image:display, tags: ["WordPress", "PHP", "Responsive Design","SEO"], accent: "olive",
    url: "https://displayegypt.com/",
  },
  {
    id: "01", category: "Business", type: "Business / INTERACTIVE", title: "Apex//Nine Racing",
    description: "An original cinematic GT3 motorsport driver portfolio featuring and an immersive contact experience.",
    image: apex, tags: ["Next.js 16", "React", " TypeScript","Tailwind"], accent: "copper",
    url: "https://amreltanany.github.io/apex-nine-racing/",
  },
{
    id: "01", category: "Portfolio", type: "Portfolio", title: "Portfolio",
    description: "Architected a Portfolio to serve as a high-speed central hub for cutting-edge web projects, combining slick motion design, interactive features.",
    image: porfolio , tags: ["React + Vite"," TypeScript","Tailwind"], accent: "copper",
    url: "https://amreltanany.github.io/Amr_Portfolio/",
  },
{
    id: "02", category: "Portfolio", type: "Portfolio", title: "Portfolio",
    description: "Architected a Portfolio to serve as a high-speed central hub for cutting-edge web projects, combining slick motion design, interactive features.",
    image: porfolio2 , tags: ["React + Vite"," TypeScript","Tailwind"], accent: "copper",
    url: "https://amreltanany.github.io/ElTanany/",
  },
{
    id: "03", category: "Portfolio", type: "Portfolio", title: "Portfolio",
    description: "A responsive front-end showcase site highlighting developer projects, technical skills, and experience with a modern, tabbed interactive layout.",
    image: porfolio3 , tags: ["HTML5"," GITHUB PAGES","Tailwind"], accent: "copper",
    url: "https://amreltanany.github.io/portfolio-/",
  },
  {
    id: "01", category: "UI/UX", type: "CREATIVE UI", title: "Interactive Masking",
    description: "Dynamic radial-gradient mask that moves with mouse/touch events to reveal an alternate image layer underneath.",
    image: ronin, tags: ["UI/UX", "Motion", "Interaction"], accent: "copper",
    url: "https://amreltanany.github.io/ronin/",
  },
];

const tracks = [
  {
    number: "01", title: "For clinics",
    copy: "Build trust before the first appointment with a calmer patient journey, clearer services, and booking that feels effortless.",
    tags: ["Clinic websites", "Booking systems", "Service pages"],
  },
  {
    number: "02", title: "For Construction",
    copy: "Make every project easier to understand, explore, and enquire about—from the first scroll to the sales handoff.",
    tags: ["Project launches", "Property listings", "Lead flows"],
  },
  {
    number: "03", title: "For E-Commerce",
    copy:"Build scalable online stores with high conversion rates, fast checkout flows, and seamless backend inventory integration.",
    tags: ["E-commerce", "Checkout optimization", "Inventory management", "Payment Gateways", "Inventory APIs"],
  },
  {
    number: "04", title: "For businesses",
    copy: "Turn a complex offer into a digital presence that looks credible, loads fast, and gives people a clear next step.",
    tags: ["Corporate websites", "E-commerce", "Digital systems"],
  }, 
  {
    number: "05", title: "For Portfolios & Personal Brands",
    copy:"Craft high-converting, custom portfolio websites that showcase your work with slick animations and speed.",
    tags: ["Custom Portfolio","Interactive UI","Personal branding", "Showcase projects"],
  }, 
  {
    number: "06", title: "For Design & UI Systems",
    copy:"Build scalable, maintainable design systems that ensure consistency across all digital touchpoints.",
    tags: ["Design Systems","UI Components","UI Animations"],
  }, 
];

const faqItems: [string, string][] = [
  ["What kind of projects do you take on?", "I work with clinics, real-estate teams, and growing businesses that need a sharper website, a better customer journey, or a focused digital system."],
  ["Do you handle design and development?", "Yes. I can take a project from the first content direction and wireframe through visual design, development, launch, and performance refinement."],
  ["Can you work with an existing brand?", "Absolutely. I can preserve what already works, clarify the visual language, and build a web experience that feels unmistakably yours."],
  ["How do we start?", "Send a short brief through WhatsApp or email. We will use a focused 20-minute call to understand the goal, audience, and best first step."],
];

const procesSteps = [
  ["01", "Discover", "We find the sharpest version of the problem, audience, and opportunity."],
  ["02", "Design", "We shape the visual direction and user journey around the outcome."],
  ["03", "Build", "I turn the approved direction into a fast, responsive, production-ready experience."],
  ["04", "Launch", "We test the details, make the handoff clear, and put the work in the world."],
];

function AMRMark({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      <path d="M50 8L8 85h18l8-16h32l8 16h18L50 8zm0 22l11 22H39L50 30z" fill="currentColor" />
    </svg>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Healthcare");
  const [displayedCategory, setDisplayedCategory] = useState("Healthcare");
  const [phase, setPhase] = useState<"idle" | "leaving" | "entering">("idle");
  const [activeTrack, setActiveTrack] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    projects.forEach((project) => {
      const img = new Image();
      img.decoding = "async";
      img.src = project.image;
    });
  }, []);

  const selectCategory = (category: string) => {
    if (category === activeCategory || phase !== "idle") return;
    setActiveCategory(category);
    setPhase("leaving");
    setTimeout(() => {
      setDisplayedCategory(category);
      setPhase("entering");
      setTimeout(() => setPhase("idle"), 700);
    }, 240);
  };

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const visibleProjects = projects.filter((p) => p.category === displayedCategory);

  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />

      {/* Header */}
      <header className="site-header">
        <button className="wordmark" onClick={() => scrollTo("top")} aria-label="Back to top">
          <AMRMark style={{ width: 27, height: 27, color: "var(--copper)" }} />
          <span>AMR<span className="wordmark-dot">.</span></span>
        </button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          <button onClick={() => scrollTo("work")}>Work</button>
          <button onClick={() => scrollTo("solutions")}>Solutions</button>
          <button onClick={() => scrollTo("process")}>Process</button>
          <button className="nav-cta" onClick={() => scrollTo("contact")}>
            Start a project <ArrowUpRight size={15} />
          </button>
        </nav>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      {/* Hero */}
      <section id="top" className="hero section-pad">
        <div className="hero-copy reveal-up">
          <p className="eyebrow"><span className="status-dot" /> Available for selected projects</p>
          <h1>Digital work<br /><em>with a reason.</em></h1>
          <p className="hero-intro">
            I design and build websites and digital systems that help ambitious businesses look credible, move faster, and win the next conversation.
          </p>
          <div className="hero-actions">
            <button className="button button-copper" onClick={() => scrollTo("work")}>
              View case studies <ArrowDownRight size={17} />
            </button>
            <button className="text-link" onClick={() => scrollTo("contact")}>
              Start a project <ArrowUpRight size={16} />
            </button>
          </div>
          <div className="hero-meta">
            <span>Based in Egypt</span>
            <span>Working worldwide</span>
            <span>© 2026</span>
          </div>
        </div>
        <div className="hero-visual reveal-in">
          <div className="hero-image-wrap">
            <img src={heroImage} alt="Editorial workspace with interface studies" />
          </div>
          <div className="hero-caption">
            <span>Selected direction / 001</span>
            <span>Design + engineering</span>
          </div>
          <div className="hero-side-note">
            Crafted <br />With Care <ArrowDownRight size={14} />
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="statement section-pad">
        <div className="section-marker"><span>00</span><span>Point of view</span></div>
        <div className="statement-content">
          <p className="kicker">A better website is not decoration.</p>
          <h2>It is your next<br /><span>sales conversation.</span></h2>
          <p className="statement-copy">
            The strongest digital experiences make a business easier to trust and easier to choose. That is where design meets engineering.
          </p>
        </div>
        <div className="statement-signature">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: '27px', height: '27px' }}>
            <path d="M50 8L8 85h18l8-16h32l8 16h18L50 8zm0 22l11 22H39L50 30z" fill="currentColor" />
          </svg>
          <span>AMR<br />ELTANANY</span>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="work-section section-pad">
        <div className="section-heading">
          <div className="section-marker"><span>01</span><span>Selected work</span></div>
          <div>
            <p className="kicker">Built for the real world</p>
            <h2>Case studies<br /><em>with intent.</em></h2>
          </div>
          <button className="circle-link" aria-label="View all work"><MoveUpRight size={20} /></button>
        </div>

        <div className="case-study-layout">
          <aside className="case-category-rail">
            <p className="mono-label">Browse by practice</p>
            <p className="category-note" style={{ margin: "0 0 32px", color: "#77736c", fontSize: 12 }}>Choose a direction.</p>
            <div className="category-tabs" role="tablist" aria-label="Case study categories">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={activeCategory === category ? "active" : ""}
                  onClick={() => selectCategory(category)}
                  role="tab"
                  aria-selected={activeCategory === category}
                >
                  <span>0{index + 1}</span>{category}<ArrowUpRight size={14} />
                </button>
              ))}
            </div>
            <div className="rail-line" />
          </aside>

          <div className={`project-stage${phase === "leaving" ? " stage-leaving" : ""}`}>
            <div
              key={displayedCategory}
              className={`project-layer project-layer-current${phase === "entering" ? " stage-entering" : ""}`}
            >
              {visibleProjects.map((project, index) => (
                <article
                  className={`project-card project-enter-fade-left project-enter-card-${index}`}
                  key={`${activeCategory}-${project.id}`}
                >
                  <div className="project-number">{project.id}</div>
                  <div className="project-image">
                    <a
                      href={project.url}
                      target={project.url.startsWith("#") ? undefined : "_blank"}
                      rel={project.url.startsWith("#") ? undefined : "noreferrer"}
                      aria-label={`Open ${project.title}`}
                    >
                      <img src={project.image} alt={project.title} loading="eager" decoding="async" />
                    </a>
                    <span className={`project-accent ${project.accent}`}>{project.type}</span>
                  </div>
                  <div className="project-info">
                    <p className="mono-label">{project.type}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-row">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    <a
                      className="case-link"
                      href={project.url}
                      target={project.url.startsWith("#") ? undefined : "_blank"}
                      rel={project.url.startsWith("#") ? undefined : "noreferrer"}
                    >
                      Open project <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="solutions section-pad">
        <div className="section-marker"><span>02</span><span>What I build</span></div>
        <div className="solutions-grid">
          <div>
            <p className="kicker">Choose your lane</p>
            <h2>Clearer digital<br /><em>directions.</em></h2>
            <p className="solutions-intro">
              Different businesses need different proof. Choose a direction and see how I can help you make the next move feel obvious.
            </p>
            <div className="track-tabs">
              {tracks.map((track, index) => (
                <button
                  key={track.number}
                  className={activeTrack === index ? "active" : ""}
                  onClick={() => setActiveTrack(index)}
                >
                  <span>{track.number}</span>{track.title}<ArrowUpRight size={15} />
                </button>
              ))}
            </div>
          </div>
          <div className="track-detail">
            <span className="detail-index">0{activeTrack + 1} / 03</span>
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
        <div className="section-marker" style={{ marginBottom: 0 }}><span>03</span><span>How it works</span></div>
        <div className="process-heading">
          <p className="kicker">From first brief to launch day</p>
          <h2>A clear process<br /><em>keeps things moving.</em></h2>
        </div>
        <div className="process-grid">
          {procesSteps.map(([number, title, copy]) => (
            <div className="process-step" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <ArrowDownRight size={17} />
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="stack section-pad">
        <div className="stack-intro">
          <div className="section-marker"><span>04</span><span>The toolkit</span></div>
          <h2>Built to feel good<br /><em>and hold up.</em></h2>
        </div>
        <div className="stack-list">
          <p>Frontend</p><span>HTML5 / React / TypeScript / Next.js</span>
          <p>Backend</p><span>Asp.Net Core / Node.js / Laravel / APIs / SQL</span>
          <p>Craft</p><span>WordPress / SEO / Performance</span>
          <p>Motion</p><span>Framer Motion / Interaction</span>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq section-pad">
        <div className="section-marker"><span>05</span><span>Good to know</span></div>
        <div className="faq-grid">
          <div>
            <p className="kicker">The short version</p>
            <h2>Before we<br /><em>begin.</em></h2>
          </div>
          <div className="faq-list">
            {faqItems.map(([question, answer], index) => (
              <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)}>
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
        <div className="section-marker"><span>06</span><span>Let's make it clear</span></div>
        <div className="contact-content">
          <p className="kicker">Have a project in mind?</p>
          <h2>Bring the brief.<br /><em>Leave with a direction.</em></h2>
          <a className="contact-email" href="mailto:amr_eltanany@outlook.com">
            amr_eltanany@outlook.com <ArrowUpRight size={22} />
          </a>
          <div className="contact-actions">
            <a className="button button-copper" href="https://wa.me/201119708154" target="_blank" rel="noreferrer">
              Book a 20-minute call <ArrowUpRight size={17} />
            </a>
            <a className="text-link" href="mailto:amr_eltanany@outlook.com">
              Request a website proposal <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span>© 2026 Amr ElTanany</span>
        <span>Design + engineering from Egypt</span>
        <div>
          <a href="https://github.com/amreltanany" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.instagram.com/amr_eltanany_" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://wa.me/201119708154" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </footer>
    </main>
  );
}
