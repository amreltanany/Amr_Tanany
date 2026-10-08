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


const categories = ["Healthcare", "Construction", "E-commerce", "Business", "Portfolio", "UI/UX"];
 
const projects = [
  {
    id: "01", category: "Healthcare", type: "HEALTHCARE / FULL-STACK", title: "TAJ Clinics",
    description: "A comprehensive healthcare management platform designed for modern clinics, featuring seamless appointment scheduling, interactive UI components, and integrated backend services.",
    image: `${import.meta.env.BASE_URL}imports/taj.jpeg`, tags: ["React 19", "Node.js", "Express", "TypeScript"], accent: "olive",
    url: "https://tajclinics-7f4tfgfb.manus.space/",
  },
  {
    id: "01", category: "Construction", type: "Construction / CORPORATE", title: "Meridian",
    description: "A modern corporate website for a high-end architectural and precision engineering firm, featuring dynamic project showcases, service offerings, and interactive inquiry forms.",
    image: `${import.meta.env.BASE_URL}imports/mei.jpeg`, tags: ["React","Vite", "TypeScript", "Tailwind CSS"], accent: "copper",
    url: "https://amreltanany.github.io/MeridianBuild/",
  },

  {
    id: "02", category: "Construction", type: "CONSTRUCTION / CORPORATE", title: "SAM Construction",
    description: "Developed A web platform for a leading Egyptian construction and general investments firm. Built with a clean, modern wordpress layout highlighting architectural services, corporate portfolios, and project management.",
    image: `${import.meta.env.BASE_URL}imports/sam.jpeg`, tags: ["WordPress", "PHP", "Responsive Design" ,"SEO"], accent: "copper",
    url: "https://samconstructions-eg.com/",
  },
  {
    id: "01", category: "E-commerce", type: "E-COMMERCE / FURNITURE", title: "Switch On",
    description: "A sleek, responsive e-commerce Platform for a modern furniture brand, focused on minimalist aesthetics, smooth user interactions, and high-quality product displays.",
    image: `${import.meta.env.BASE_URL}imports/switch.jpeg`, tags: ["React", "TypeScript", "Tailwind CSS"], accent: "copper",
    url: "https://amreltanany.github.io/Switch-On/",
  },
  {
    id: "02", category: "E-commerce", type: "E-COMMERCE / PUBLISHING", title: "Qaro2a",
    description: "Architecting complex digital ecosystems like Qaro2a, designed for author publishing, e-commerce, and broadcasting. I combine top-tier engineering with sleek UI design to deliver fast, conversion-driven platforms.",
    image: `${import.meta.env.BASE_URL}imports/qaro2a.jpeg`, tags: ["ASP.NET Core", "SQL Server", "JWT Auth"], accent: "copper",
    url: "http://qaro2a.com/",
  },
  {
    id: "01", category: "Business", type: "BUSINESS / OUTDOOR MEDIA", title: "Display Egypt",
    description: "Developed DisplayEgypt—a dynamic WordPress platform built for an outdoor advertising leader, highlighting street-level campaigns, digital billboards, and high-impact urban displays.",
    image:`${import.meta.env.BASE_URL}imports/display.jpeg`, tags: ["WordPress", "PHP", "Responsive Design","SEO"], accent: "olive",
    url: "https://displayegypt.com/",
  },
  {
    id: "01", category: "Business", type: "Business / INTERACTIVE", title: "Apex//Nine Racing",
    description: "An original cinematic GT3 motorsport driver portfolio featuring and an immersive contact experience.",
    image: `${import.meta.env.BASE_URL}imports/apex.jpeg`, tags: ["Next.js 16", "React", " TypeScript","Tailwind"], accent: "copper",
    url: "https://amreltanany.github.io/apex-nine-racing/",
  },
{
    id: "01", category: "Portfolio", type: "Portfolio", title: "Portfolio",
    description: "Architected a Portfolio to serve as a high-speed central hub for cutting-edge web projects, combining slick motion design, interactive features.",
    image: `${import.meta.env.BASE_URL}imports/porfolio.jpeg`, tags: ["React + Vite"," TypeScript","Tailwind"], accent: "copper",
    url: "https://amreltanany.github.io/Amr_Portfolio/",
  },
{
    id: "02", category: "Portfolio", type: "Portfolio", title: "Portfolio",
    description: "Architected a Portfolio to serve as a high-speed central hub for cutting-edge web projects, combining slick motion design, interactive features.",
   image: `${import.meta.env.BASE_URL}imports/porfolio2.jpeg`, tags: ["React + Vite"," TypeScript","Tailwind"], accent: "copper",
    url: "https://amreltanany.github.io/ElTanany/",
  },
{
    id: "03", category: "Portfolio", type: "Portfolio", title: "Portfolio",
    description: "A responsive front-end showcase site highlighting developer projects, technical skills, and experience with a modern, tabbed interactive layout.",
    image: `${import.meta.env.BASE_URL}imports/porfolio3.jpeg`, tags: ["HTML5"," GITHUB PAGES","Tailwind"], accent: "copper",
    url: "https://amreltanany.github.io/portfolio-/",
  },
  {
    id: "01", category: "UI/UX", type: "CREATIVE UI", title: "Interactive Masking",
    description: "Dynamic radial-gradient mask that moves with mouse/touch events to reveal an alternate image layer underneath.",
    image: `${import.meta.env.BASE_URL}imports/ronin.jpeg`, tags: ["UI/UX", "Motion", "Interaction"], accent: "copper",
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

// DRAFT pricing: 3 package types, each with its own packages. Edit names, EGP prices, units and features here;
// the whole section renders from this array.
type Pkg = { name: string; tagline: string; price?: number; custom?: boolean; unit?: string; from?: boolean; time: string; featured?: boolean; features: string[] };
const PAY_TERMS = "Payment is made after the design is delivered to you. No deposits or installments.";
const packageTypes: { id: string; label: string; note: string; terms: string[]; link?: { text: string; to: string }; packages: Pkg[] }[] = [
  {
    id: "rental", label: "For rent",
    note: "Rent a ready, fully managed website. You pay monthly and skip the big upfront cost.",
    terms: ["Minimum commitment: 1 month. No setup fee.", PAY_TERMS],
    packages: [
      { name: "Portfolio", tagline: "Your work, online.", price: 500, unit: "/ month", time: "Monthly",
        features: ["Custom design", "Hosting included (monthly)", "24/7 support", "SSL security", "Backup", "Responsive design"] },
      { name: "E-commerce", tagline: "Your store, online.", price: 1000, unit: "/ month", time: "Monthly", featured: true,
        features: ["Everything in Portfolio, plus:", "Domain", "Admin dashboard"] },
    ],
  },
  {
    id: "sale", label: "One-time purchase",
    note: "You pay once and own the website and its code.",
    terms: [PAY_TERMS, "Hosting is included for the first year. After that, you can continue with Website management from EGP 1,500 / month."],
    link: { text: "See Website management", to: "management" },
    packages: [
      { name: "Portfolio", tagline: "Your work, online.", price: 3000, time: "One-time payment",
        features: ["Professional design", "1 year of hosting", "Domain", "Technical support", "SSL security"] },
      { name: "E-commerce", tagline: "Your store, online.", price: 6000, time: "One-time payment", featured: true,
        features: ["Everything in Portfolio, plus:", "Admin dashboard", "Backup"] },
      { name: "Bespoke", tagline: "Built around your business.", time: "Scoped after a short call", custom: true,
        features: ["Everything in E-commerce, plus:", "Custom features and integrations", "Backend, database and APIs", "Booking, management or custom systems", "Priced after we define the project"] },
    ],
  },
  {
    id: "management", label: "Website management",
    note: "I manage, maintain and secure your website month after month.",
    terms: [],
    packages: [
      { name: "Standard Management", tagline: "Keep it running.", price: 1500, unit: "/ month", time: "Monthly",
        features: ["Website management and routine maintenance", "Up to 10 design or content update requests per month", "Technical support and bug fixing", "Monthly summary of work and site health"] },
      { name: "Full Management + Hosting", tagline: "Hosting included.", price: 2000, unit: "/ month", time: "Monthly",
        features: ["Everything in Standard, plus:", "Hosting and server management", "Automated backups and security updates", "Uptime monitoring with alerts"] },
    ],
  },
];

const whatsappLink = (text: string) => `https://wa.me/201119708154?text=${encodeURIComponent(text)}`;
const packageLink = (pkg: string, type: string) => whatsappLink(`Hi Amr, I'm interested in the ${pkg} package (${type}).`);
const proposalLink = whatsappLink("Hi Amr, I'd like a website proposal for my project. Here is a short brief:");

const faqItems: [string, string][] = [
  ["What kind of projects do you take on?", "I work with clinics, construction firms, online stores, and growing businesses that need a sharper website, a better customer journey, or a focused digital system."],
  ["How much does a website cost?", "You can rent a managed website from EGP 500 per month, or buy one outright from EGP 3,000. Custom projects are quoted after a short call. All prices are on this page."],
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
  const [activeType, setActiveType] = useState(packageTypes[1].id); // opens on one-time purchase
  const currentType = packageTypes.find((t) => t.id === activeType) ?? packageTypes[0];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Warm only the hovered category's images, instead of downloading all of them (~4MB) on first load.
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
          <button onClick={() => scrollTo("pricing")}>Pricing</button>
          <button onClick={() => scrollTo("about")}>About</button>
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
            <img src={`${import.meta.env.BASE_URL}imports/hero.webp`} alt="Editorial workspace with interface studies" />
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

      {/* Packages & pricing */}
      <section id="pricing" className="pricing section-pad">
        <div className="pricing-head">
          <div className="section-marker"><span>01</span><span>Packages</span></div>
          <div>
            <p className="kicker">Clear scope, clear price</p>
            <h2>Pick a package.<br /><em>Know the cost.</em></h2>
          </div>
        </div>
        <div className="price-tabs" role="tablist" aria-label="Package types">
          {packageTypes.map((type, index) => (
            <button
              key={type.id}
              role="tab"
              aria-selected={activeType === type.id}
              className={activeType === type.id ? "active" : ""}
              onClick={() => setActiveType(type.id)}
            >
              <span>0{index + 1}</span>{type.label}
            </button>
          ))}
        </div>
        <p className="price-type-note">{currentType.note}</p>
        <div className="price-grid" key={currentType.id} style={{ ["--cols" as string]: currentType.packages.length }}>
          {currentType.packages.map((pkg) => (
            <article className={`price-card${pkg.featured ? " featured" : ""}`} key={pkg.name}>
              {pkg.featured && <span className="price-flag">Most chosen</span>}
              <p className="mono-label">{pkg.name}</p>
              <h3>{pkg.tagline}</h3>
              <div className="price-line">
                {pkg.from && <small>From</small>}
                {pkg.price !== undefined ? <strong>EGP {pkg.price.toLocaleString("en-US")}</strong> : <strong className="price-custom">Custom quote</strong>}
                {pkg.unit && <small>{pkg.unit}</small>}
              </div>
              <p className="price-time">{pkg.time}</p>
              {pkg.unit && pkg.price !== undefined && (
                <p className="price-yearly">Pay yearly: EGP {(pkg.price * 10).toLocaleString("en-US")} <em>2 months free</em></p>
              )}
              <ul className="price-features">
                {pkg.features.map((feature) => (
                  <li key={feature}><Check size={14} />{feature}</li>
                ))}
              </ul>
              <a className="button button-copper price-cta" href={packageLink(pkg.name, currentType.label)} target="_blank" rel="noreferrer">
                {pkg.custom ? "Get a quote" : `Choose ${pkg.name}`} <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
        <ul className="price-terms">
          {currentType.terms.map((term) => <li key={term}>{term}</li>)}
          <li>Prices are in Egyptian pounds. A custom quote is confirmed after a short call.</li>
        </ul>
        {currentType.link && (
          <button className="text-link price-switch" onClick={() => setActiveType(currentType.link!.to)}>
            {currentType.link.text} <ArrowUpRight size={15} />
          </button>
        )}
      </section>

      {/* Statement */}
      <section className="statement section-pad">
        <div className="section-marker"><span>02</span><span>Point of view</span></div>
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

      {/* About */}
      <section id="about" className="about section-pad">
        <div className="section-marker"><span>03</span><span>About</span></div>
        <div className="about-portrait">
          <img src={`${import.meta.env.BASE_URL}imports/amr.jpeg`} alt="Portrait of Amr ElTanany" loading="lazy" decoding="async" />
        </div>
        <div className="about-copy">
          <p className="kicker">The person behind the work</p>
          <h2>Hi, I'm Amr.<br /><em>I build it end to end.</em></h2>
          <p>
            I'm a web designer and full-stack developer based in Egypt. I build websites and digital systems for clinics, construction firms, online stores, and growing businesses, from the first wireframe to launch day.
          </p>
          <p>
            You work with me directly, so there are no handoffs and no surprises: one person who designs it, builds it, and stands behind it.
          </p>
          <div className="about-stats">
            <div><strong>{projects.length}</strong><span>Projects delivered</span></div>
            <div><strong>{categories.length}</strong><span>Industries</span></div>
            <div><strong>20 min</strong><span>Free intro call</span></div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="work-section section-pad">
        <div className="section-heading">
          <div className="section-marker"><span>04</span><span>Selected work</span></div>
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
                  onPointerEnter={() => preloadCategory(category)}
                  onFocus={() => preloadCategory(category)}
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
        <div className="section-marker"><span>05</span><span>What I build</span></div>
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
        <div className="section-marker" style={{ marginBottom: 0 }}><span>06</span><span>How it works</span></div>
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
          <div className="section-marker"><span>07</span><span>The toolkit</span></div>
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
        <div className="section-marker"><span>08</span><span>Good to know</span></div>
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
        <div className="section-marker"><span>09</span><span>Let's make it clear</span></div>
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
            <a className="text-link" href={proposalLink} target="_blank" rel="noreferrer">
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
