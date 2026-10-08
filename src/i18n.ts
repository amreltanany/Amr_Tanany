// All visible copy lives here, in English and Arabic. Layout data (prices, images, urls, flags) lives in App.tsx.
// Package features starting with "+" are the ones a package adds on top of the previous one (rendered bold).
// An FAQ answer left as "" is a placeholder: it shows only in dev, never on the published site.

export type Lang = "en" | "ar";

const pay = {
  en: "Payment is made after the design is delivered to you. No deposits or installments.",
  ar: "يتم الدفع بعد تسليم التصميم لك. لا توجد دفعات مقدمة أو أقساط.",
};

const en = {
  nav: { pricing: "Pricing", about: "About", work: "Work", solutions: "Solutions", process: "Process", start: "Start a project", toggle: "العربية", toggleLabel: "Switch to Arabic", back: "Back to top", menu: "Toggle navigation", mainNav: "Main navigation" },
  hero: {
    eyebrow: "Available for selected projects", h1a: "Digital work", h1b: "with a reason.",
    intro: "I design and build websites and digital systems that help ambitious businesses look credible, move faster, and win the next conversation.",
    cta1: "View case studies", cta2: "Start a project",
    meta: ["Based in Egypt", "Working worldwide", "© 2026"],
    caption: ["Selected direction / 001", "Design + engineering"], side: ["Crafted", "With Care"],
    imgAlt: "Editorial workspace with interface studies",
  },
  statement: { marker: "Point of view", kicker: "A better website is not decoration.", h2a: "It is your next", h2b: "sales conversation.", copy: "The strongest digital experiences make a business easier to trust and easier to choose. That is where design meets engineering." },
  pricing: {
    marker: "Packages", kicker: "Clear scope, clear price", h2a: "Pick a package.", h2b: "Know the cost.",
    tabsLabel: "Package types", from: "From", perMonth: "/ month", mostChosen: "Most chosen",
    choose: (name: string) => `Choose ${name}`, quote: "Get a quote", custom: "Custom quote",
    money: (n: number) => `EGP ${n.toLocaleString("en-US")}`,
    yearly: (n: number) => `Pay yearly: EGP ${n.toLocaleString("en-US")}`, twoFree: "2 months free",
    currencyNote: "Prices are in Egyptian pounds. A custom quote is confirmed after a short call.",
    faqKicker: "Questions about packages", faqPending: "Answer pending: add it in src/i18n.ts",
    types: {
      rental: {
        label: "For rent",
        note: "Rent a ready, fully managed website. You pay monthly and skip the big upfront cost.",
        terms: ["Minimum commitment: 1 month. No setup fee.", pay.en],
        linkText: "",
        packages: [
          { name: "Portfolio", tagline: "Your work, online.", time: "Monthly", features: ["Custom design", "Hosting included (monthly)", "Ongoing support", "SSL security", "Backup", "Responsive design"] },
          { name: "E-commerce", tagline: "Your store, online.", time: "Monthly", features: ["Custom design", "Hosting included (monthly)", "Ongoing support", "SSL security", "Backup", "Responsive design", "+Domain", "+Admin dashboard"] },
        ],
      },
      sale: {
        label: "One-time purchase",
        note: "You pay once and own the website and its code.",
        terms: [pay.en, "Hosting is included for the first year. After that, you can continue with Website management from EGP 1,500 / month."],
        linkText: "See Website management",
        packages: [
          { name: "Portfolio", tagline: "Your work, online.", time: "One-time payment", features: ["Professional design", "1 year of hosting", "Domain", "Technical support", "SSL security"] },
          { name: "E-commerce", tagline: "Your store, online.", time: "One-time payment", features: ["Professional design", "1 year of hosting", "Domain", "Technical support", "SSL security", "+Admin dashboard", "+Backup"] },
          { name: "Bespoke", tagline: "Built around your business.", time: "Scoped after a short call", features: ["Professional design", "1 year of hosting", "Domain", "Technical support", "SSL security", "Admin dashboard", "Backup", "+Custom features and integrations", "+Backend, database and APIs", "+Booking, management or custom systems"] },
        ],
      },
      management: {
        label: "Website management",
        note: "I manage, maintain and secure your website month after month.",
        terms: [] as string[],
        linkText: "",
        packages: [
          { name: "Standard Management", tagline: "Keep it running.", time: "Monthly", features: ["Website management and routine maintenance", "Up to 10 design or content update requests per month", "Technical support and bug fixing", "Monthly summary of work and site health"] },
          { name: "Full Management + Hosting", tagline: "Hosting included.", time: "Monthly", features: ["Website management and routine maintenance", "Up to 10 design or content update requests per month", "Technical support and bug fixing", "Monthly summary of work and site health", "+Hosting and server management", "+Automated backups and security updates", "+Uptime monitoring with alerts"] },
        ],
      },
    },
    faq: [
      ["When do I pay?", pay.en],
      ["Is there a minimum rental period?", "The minimum is one month, with no setup fee."],
      ["What happens after the first year of hosting?", "You can continue with Website management from EGP 1,500 / month."],
      ["What happens if I want to stop renting?", "You can pause your website for one full month, and bringing it back costs nothing. There is no reactivation fee."],
      ["Is the domain registered in my name?", "Yes. The domain is registered in your name."],
    ] as [string, string][],
    wa: { pkg: (name: string, type: string) => `Hi Amr, I'm interested in the ${name} package (${type}).`, proposal: "Hi Amr, I'd like a website proposal for my project. Here is a short brief:" },
  },
  about: {
    marker: "About", kicker: "The person behind the work", h2a: "Hi, I'm Amr.", h2b: "I build it end to end.",
    p1: "I'm a web designer and full-stack developer based in Egypt. I build websites and digital systems for clinics, construction firms, online stores, and growing businesses, from the first wireframe to launch day.",
    p2: "You work with me directly, so there are no handoffs and no surprises: one person who designs it, builds it, and stands behind it.",
    stats: ["Projects built", "Industries", "Free intro call"], call: "20 min", alt: "Portrait of Amr ElTanany",
  },
  work: {
    marker: "Selected work", kicker: "Built for the real world", h2a: "Case studies", h2b: "with intent.", viewAll: "View all work",
    browse: "Browse by practice", choose: "Choose a direction.", tabsLabel: "Case study categories", open: "Open project", openAria: (t: string) => `Open ${t}`,
    categories: { Healthcare: "Healthcare", Construction: "Construction", "E-commerce": "E-commerce", Business: "Business", Portfolio: "Portfolio", "UI/UX": "UI/UX" } as Record<string, string>,
    projects: [
      { type: "HEALTHCARE / FULL-STACK", title: "TAJ Clinics", description: "A comprehensive healthcare management platform designed for modern clinics, featuring seamless appointment scheduling, interactive UI components, and integrated backend services." },
      { type: "Construction / CORPORATE", title: "Meridian", description: "A modern corporate website for a high-end architectural and precision engineering firm, featuring dynamic project showcases, service offerings, and interactive inquiry forms." },
      { type: "CONSTRUCTION / CORPORATE", title: "SAM Construction", description: "Developed a web platform for a leading Egyptian construction and general investments firm. Built with a clean, modern WordPress layout highlighting architectural services, corporate portfolios, and project management." },
      { type: "E-COMMERCE / FURNITURE", title: "Switch On", description: "A sleek, responsive e-commerce platform for a modern furniture brand, focused on minimalist aesthetics, smooth user interactions, and high-quality product displays." },
      { type: "E-COMMERCE / PUBLISHING", title: "Qaro2a", description: "Architecting complex digital ecosystems like Qaro2a, designed for author publishing, e-commerce, and broadcasting. I combine top-tier engineering with sleek UI design to deliver fast, conversion-driven platforms." },
      { type: "BUSINESS / OUTDOOR MEDIA", title: "Display Egypt", description: "Developed DisplayEgypt, a dynamic WordPress platform built for an outdoor advertising leader, highlighting street-level campaigns, digital billboards, and high-impact urban displays." },
      { type: "Business / INTERACTIVE", title: "Apex//Nine Racing", description: "An original cinematic GT3 motorsport driver portfolio featuring an immersive contact experience." },
      { type: "Portfolio", title: "Portfolio", description: "Architected a portfolio to serve as a high-speed central hub for cutting-edge web projects, combining slick motion design and interactive features." },
      { type: "Portfolio", title: "Portfolio", description: "Architected a portfolio to serve as a high-speed central hub for cutting-edge web projects, combining slick motion design and interactive features." },
      { type: "Portfolio", title: "Portfolio", description: "A responsive front-end showcase site highlighting developer projects, technical skills, and experience with a modern, tabbed interactive layout." },
      { type: "CREATIVE UI", title: "Interactive Masking", description: "Dynamic radial-gradient mask that moves with mouse/touch events to reveal an alternate image layer underneath." },
    ],
  },
  solutions: {
    marker: "What I build", kicker: "Choose your lane", h2a: "Clearer digital", h2b: "directions.",
    intro: "Different businesses need different proof. Choose a direction and see how I can help you make the next move feel obvious.",
    tracks: [
      { title: "For clinics", copy: "Build trust before the first appointment with a calmer patient journey, clearer services, and booking that feels effortless.", tags: ["Clinic websites", "Booking systems", "Service pages"] },
      { title: "For Construction", copy: "Make every project easier to understand, explore, and enquire about, from the first scroll to the sales handoff.", tags: ["Project launches", "Property listings", "Lead flows"] },
      { title: "For E-Commerce", copy: "Build scalable online stores with high conversion rates, fast checkout flows, and seamless backend inventory integration.", tags: ["E-commerce", "Checkout optimization", "Inventory management", "Payment Gateways", "Inventory APIs"] },
      { title: "For businesses", copy: "Turn a complex offer into a digital presence that looks credible, loads fast, and gives people a clear next step.", tags: ["Corporate websites", "E-commerce", "Digital systems"] },
      { title: "For Portfolios & Personal Brands", copy: "Craft high-converting, custom portfolio websites that showcase your work with slick animations and speed.", tags: ["Custom Portfolio", "Interactive UI", "Personal branding", "Showcase projects"] },
      { title: "For Design & UI Systems", copy: "Build scalable, maintainable design systems that ensure consistency across all digital touchpoints.", tags: ["Design Systems", "UI Components", "UI Animations"] },
    ],
  },
  process: {
    marker: "How it works", kicker: "From first brief to launch day", h2a: "A clear process", h2b: "keeps things moving.",
    steps: [
      ["Discover", "We find the sharpest version of the problem, audience, and opportunity."],
      ["Design", "We shape the visual direction and user journey around the outcome."],
      ["Build", "I turn the approved direction into a fast, responsive, production-ready experience."],
      ["Launch", "We test the details, make the handoff clear, and put the work in the world."],
    ],
  },
  stack: {
    marker: "The toolkit", h2a: "Built to feel good", h2b: "and hold up.",
    rows: [["Frontend", "HTML5 / React / TypeScript / Next.js"], ["Backend", "Asp.Net Core / Node.js / Laravel / APIs / SQL"], ["Craft", "WordPress / SEO / Performance"], ["Motion", "CSS animation / Interaction design"]],
  },
  faq: {
    marker: "Good to know", kicker: "The short version", h2a: "Before we", h2b: "begin.",
    items: [
      ["What kind of projects do you take on?", "I work with clinics, construction firms, online stores, and growing businesses that need a sharper website, a better customer journey, or a focused digital system."],
      ["How much does a website cost?", "You can rent a managed website from EGP 500 per month, or buy one outright from EGP 3,000. Custom projects are quoted after a short call. All prices are on this page."],
      ["Do you handle design and development?", "Yes. I can take a project from the first content direction and wireframe through visual design, development, launch, and performance refinement."],
      ["Can you work with an existing brand?", "Absolutely. I can preserve what already works, clarify the visual language, and build a web experience that feels unmistakably yours."],
      ["How do we start?", "Send a short brief through WhatsApp or email. We will use a focused 20-minute call to understand the goal, audience, and best first step."],
    ] as [string, string][],
  },
  contact: { marker: "Let's make it clear", kicker: "Have a project in mind?", h2a: "Bring the brief.", h2b: "Leave with a direction.", call: "Book a 20-minute call", proposal: "Request a website proposal" },
  footer: { left: "© 2026 Amr ElTanany", mid: "Design + engineering from Egypt" },
};

const ar: typeof en = {
  nav: { pricing: "الأسعار", about: "نبذة", work: "الأعمال", solutions: "الحلول", process: "المراحل", start: "ابدأ مشروعك", toggle: "EN", toggleLabel: "التبديل إلى الإنجليزية", back: "العودة للأعلى", menu: "تبديل القائمة", mainNav: "القائمة الرئيسية" },
  hero: {
    eyebrow: "متاح لمشاريع مختارة", h1a: "أعمال رقمية", h1b: "لها هدف.",
    intro: "أصمّم وأبني مواقع وأنظمة رقمية تساعد الشركات الطموحة على أن تبدو موثوقة، وتتحرك أسرع، وتكسب المحادثة القادمة.",
    cta1: "شاهد دراسات الحالة", cta2: "ابدأ مشروعك",
    meta: ["مقيم في مصر", "أعمل مع العالم", "© 2026"],
    caption: ["اتجاه مختار / 001", "تصميم + هندسة"], side: ["صُنع", "بعناية"],
    imgAlt: "مساحة عمل تحريرية مع دراسات واجهات",
  },
  statement: { marker: "وجهة نظر", kicker: "الموقع الأفضل ليس زينة.", h2a: "إنه محادثة", h2b: "مبيعاتك القادمة.", copy: "أقوى التجارب الرقمية تجعل النشاط أسهل في الثقة وأسهل في الاختيار. هنا يلتقي التصميم بالهندسة." },
  pricing: {
    marker: "الباقات", kicker: "نطاق واضح وسعر واضح", h2a: "اختر باقتك.", h2b: "اعرف التكلفة.",
    tabsLabel: "أنواع الباقات", from: "من", perMonth: "/ شهر", mostChosen: "الأكثر اختياراً",
    choose: (name: string) => `اختر ${name}`, quote: "اطلب سعراً", custom: "سعر مخصص",
    money: (n: number) => `${n.toLocaleString("en-US")} ج.م`,
    yearly: (n: number) => `ادفع سنوياً: ${n.toLocaleString("en-US")} ج.م`, twoFree: "شهران مجاناً",
    currencyNote: "الأسعار بالجنيه المصري. السعر المخصص يُحدد بعد مكالمة قصيرة.",
    faqKicker: "أسئلة عن الباقات", faqPending: "الإجابة قيد الإضافة: أضفها في src/i18n.ts",
    types: {
      rental: {
        label: "للإيجار",
        note: "استأجر موقعاً جاهزاً ومُداراً بالكامل. تدفع شهرياً وتتجنب التكلفة الكبيرة مقدماً.",
        terms: ["الحد الأدنى للالتزام: شهر واحد. بدون رسوم تأسيس.", pay.ar],
        linkText: "",
        packages: [
          { name: "بورتفوليو", tagline: "أعمالك على الإنترنت.", time: "شهرياً", features: ["تصميم مخصص", "استضافة شهرية مشمولة", "دعم متواصل", "حماية SSL", "نسخ احتياطي", "تصميم متجاوب"] },
          { name: "متجر إلكتروني", tagline: "متجرك على الإنترنت.", time: "شهرياً", features: ["تصميم مخصص", "استضافة شهرية مشمولة", "دعم متواصل", "حماية SSL", "نسخ احتياطي", "تصميم متجاوب", "+دومين", "+لوحة تحكم"] },
        ],
      },
      sale: {
        label: "شراء مرة واحدة",
        note: "تدفع مرة واحدة وتمتلك الموقع وكوده.",
        terms: [pay.ar, "الاستضافة مشمولة لأول سنة. بعدها يمكنك الاستمرار مع إدارة المواقع بدءاً من 1,500 ج.م شهرياً."],
        linkText: "شاهد إدارة المواقع",
        packages: [
          { name: "بورتفوليو", tagline: "أعمالك على الإنترنت.", time: "دفعة واحدة", features: ["تصميم احترافي", "استضافة لمدة سنة", "دومين", "دعم فني", "حماية SSL"] },
          { name: "متجر إلكتروني", tagline: "متجرك على الإنترنت.", time: "دفعة واحدة", features: ["تصميم احترافي", "استضافة لمدة سنة", "دومين", "دعم فني", "حماية SSL", "+لوحة تحكم", "+نسخ احتياطي"] },
          { name: "مخصص", tagline: "مبني حول نشاطك.", time: "يُحدد بعد مكالمة قصيرة", features: ["تصميم احترافي", "استضافة لمدة سنة", "دومين", "دعم فني", "حماية SSL", "لوحة تحكم", "نسخ احتياطي", "+ميزات وتكاملات مخصصة", "+Backend وقواعد بيانات وAPIs", "+أنظمة حجز أو إدارة أو أنظمة مخصصة"] },
        ],
      },
      management: {
        label: "إدارة المواقع",
        note: "أدير موقعك وأصونه وأؤمّنه شهراً بعد شهر.",
        terms: [] as string[],
        linkText: "",
        packages: [
          { name: "الإدارة القياسية", tagline: "حافظ على تشغيله.", time: "شهرياً", features: ["إدارة الموقع وصيانة دورية", "حتى 10 طلبات تعديل تصميم أو محتوى شهرياً", "دعم فني وإصلاح الأخطاء", "ملخص شهري للعمل وحالة الموقع"] },
          { name: "الإدارة الكاملة + الاستضافة", tagline: "الاستضافة مشمولة.", time: "شهرياً", features: ["إدارة الموقع وصيانة دورية", "حتى 10 طلبات تعديل تصميم أو محتوى شهرياً", "دعم فني وإصلاح الأخطاء", "ملخص شهري للعمل وحالة الموقع", "+إدارة الاستضافة والسيرفر", "+نسخ احتياطي تلقائي وتحديثات أمان", "+مراقبة التشغيل مع تنبيهات"] },
        ],
      },
    },
    faq: [
      ["متى أدفع؟", pay.ar],
      ["هل يوجد حد أدنى لمدة الإيجار؟", "الحد الأدنى شهر واحد، وبدون رسوم تأسيس."],
      ["ماذا يحدث بعد السنة الأولى من الاستضافة؟", "يمكنك الاستمرار مع إدارة المواقع بدءاً من 1,500 ج.م شهرياً."],
      ["ماذا يحدث لو أردت إيقاف الإيجار؟", "يمكنك إيقاف موقعك لمدة شهر كامل، والعودة إليه بدون أي رسوم. لا توجد رسوم لإعادة التفعيل."],
      ["هل الدومين مسجّل باسمي؟", "نعم. الدومين مسجّل باسمك."],
    ] as [string, string][],
    wa: { pkg: (name: string, type: string) => `مرحباً عمرو، أنا مهتم بباقة ${name} (${type}).`, proposal: "مرحباً عمرو، أريد عرضاً لموقع لمشروعي. هذا ملخص قصير:" },
  },
  about: {
    marker: "نبذة", kicker: "الشخص وراء العمل", h2a: "أهلاً، أنا عمرو.", h2b: "أبني كل شيء من الألف إلى الياء.",
    p1: "أنا مصمم ومطوّر ويب Full-Stack مقيم في مصر. أبني مواقع وأنظمة رقمية للعيادات وشركات الإنشاءات والمتاجر الإلكترونية والأعمال النامية، من أول مخطط حتى يوم الإطلاق.",
    p2: "تتعامل معي مباشرة، فلا وسطاء ولا مفاجآت: شخص واحد يصمم ويبني ويقف خلف شغله.",
    stats: ["مشاريع تم بناؤها", "مجالات", "مكالمة تعارف مجانية"], call: "20 دقيقة", alt: "صورة عمرو الطناني",
  },
  work: {
    marker: "الأعمال المختارة", kicker: "مبني للواقع", h2a: "دراسات حالة", h2b: "بهدف واضح.", viewAll: "عرض كل الأعمال",
    browse: "تصفّح حسب المجال", choose: "اختر اتجاهاً.", tabsLabel: "تصنيفات دراسات الحالة", open: "افتح المشروع", openAria: (t: string) => `افتح ${t}`,
    categories: { Healthcare: "الرعاية الصحية", Construction: "الإنشاءات", "E-commerce": "التجارة الإلكترونية", Business: "الأعمال", Portfolio: "البورتفوليو", "UI/UX": "UI/UX" },
    projects: [
      { type: "رعاية صحية / Full-Stack", title: "TAJ Clinics", description: "منصة متكاملة لإدارة العيادات الحديثة، تضم حجز مواعيد سلساً ومكونات واجهة تفاعلية وخدمات خلفية متكاملة." },
      { type: "إنشاءات / شركات", title: "Meridian", description: "موقع شركات حديث لمكتب هندسة معمارية ودقيقة راقٍ، يضم عرضاً ديناميكياً للمشاريع وخدمات الشركة ونماذج استفسار تفاعلية." },
      { type: "إنشاءات / شركات", title: "SAM Construction", description: "طوّرت منصة ويب لشركة مصرية رائدة في الإنشاءات والاستثمارات العامة، بتصميم WordPress نظيف وحديث يبرز الخدمات المعمارية وأعمال الشركة وإدارة المشاريع." },
      { type: "تجارة إلكترونية / أثاث", title: "Switch On", description: "متجر إلكتروني أنيق ومتجاوب لعلامة أثاث حديثة، يركز على الجمال البسيط والتفاعل السلس وعرض المنتجات بجودة عالية." },
      { type: "تجارة إلكترونية / نشر", title: "Qaro2a", description: "بناء منظومة رقمية معقدة مثل Qaro2a للنشر والتجارة الإلكترونية والبث. أجمع بين هندسة متقدمة وتصميم واجهات أنيق لأقدم منصات سريعة تحقق التحويل." },
      { type: "أعمال / إعلانات خارجية", title: "Display Egypt", description: "طوّرت DisplayEgypt، منصة WordPress ديناميكية لشركة رائدة في الإعلانات الخارجية، تبرز الحملات الميدانية واللوحات الرقمية والإعلانات الحضرية المؤثرة." },
      { type: "أعمال / تفاعلي", title: "Apex//Nine Racing", description: "بورتفوليو سينمائي أصلي لسائق سباقات GT3 مع تجربة تواصل غامرة." },
      { type: "بورتفوليو", title: "بورتفوليو", description: "صممت بورتفوليو ليكون مركزاً سريعاً لأحدث مشاريع الويب، يجمع بين حركات أنيقة وميزات تفاعلية." },
      { type: "بورتفوليو", title: "بورتفوليو", description: "صممت بورتفوليو ليكون مركزاً سريعاً لأحدث مشاريع الويب، يجمع بين حركات أنيقة وميزات تفاعلية." },
      { type: "بورتفوليو", title: "بورتفوليو", description: "موقع واجهة أمامية متجاوب يعرض مشاريع المطوّر ومهاراته وخبرته بتصميم تفاعلي حديث بتبويبات." },
      { type: "واجهة إبداعية", title: "Interactive Masking", description: "قناع بتدرج دائري يتحرك مع الماوس أو اللمس ليكشف طبقة صورة بديلة تحته." },
    ],
  },
  solutions: {
    marker: "ما أبنيه", kicker: "اختر مسارك", h2a: "اتجاهات رقمية", h2b: "أوضح.",
    intro: "كل نشاط يحتاج إثباتاً مختلفاً. اختر اتجاهاً وشاهد كيف أجعل خطوتك التالية واضحة.",
    tracks: [
      { title: "للعيادات", copy: "ابنِ الثقة قبل الموعد الأول برحلة مريض أهدأ، وخدمات أوضح، وحجز بلا عناء.", tags: ["مواقع العيادات", "أنظمة الحجز", "صفحات الخدمات"] },
      { title: "للإنشاءات", copy: "اجعل كل مشروع أسهل في الفهم والاستكشاف والاستفسار، من أول تمرير حتى تسليم المبيعات.", tags: ["إطلاق المشاريع", "قوائم العقارات", "مسارات العملاء"] },
      { title: "للتجارة الإلكترونية", copy: "ابنِ متاجر قابلة للتوسع بمعدلات تحويل عالية، ودفع سريع، وتكامل سلس مع المخزون.", tags: ["التجارة الإلكترونية", "تحسين الدفع", "إدارة المخزون", "بوابات الدفع", "واجهات المخزون"] },
      { title: "للشركات", copy: "حوّل عرضاً معقداً إلى حضور رقمي موثوق وسريع، يمنح الناس خطوة تالية واضحة.", tags: ["مواقع الشركات", "التجارة الإلكترونية", "أنظمة رقمية"] },
      { title: "للبورتفوليو والعلامات الشخصية", copy: "ابنِ بورتفوليو مخصصاً يعرض أعمالك بحركات أنيقة وسرعة.", tags: ["بورتفوليو مخصص", "واجهات تفاعلية", "علامة شخصية", "عرض المشاريع"] },
      { title: "للتصميم وأنظمة الواجهات", copy: "ابنِ أنظمة تصميم قابلة للتوسع والصيانة تضمن الاتساق في كل نقاط التواصل الرقمية.", tags: ["أنظمة التصميم", "مكونات الواجهة", "حركات الواجهة"] },
    ],
  },
  process: {
    marker: "كيف يعمل", kicker: "من أول موجز إلى يوم الإطلاق", h2a: "عملية واضحة", h2b: "تُبقي الأمور تتحرك.",
    steps: [
      ["اكتشاف", "نجد أدق صياغة للمشكلة والجمهور والفرصة."],
      ["تصميم", "نشكّل الاتجاه البصري ورحلة المستخدم حول النتيجة."],
      ["بناء", "أحوّل الاتجاه المعتمد إلى تجربة سريعة ومتجاوبة وجاهزة للإنتاج."],
      ["إطلاق", "نختبر التفاصيل، ونوضح التسليم، ونطلق العمل للعالم."],
    ],
  },
  stack: {
    marker: "الأدوات", h2a: "مبني ليُشعرك بالراحة", h2b: "ويصمد.",
    rows: [["الواجهة الأمامية", "HTML5 / React / TypeScript / Next.js"], ["الواجهة الخلفية", "Asp.Net Core / Node.js / Laravel / APIs / SQL"], ["الحِرفة", "WordPress / SEO / الأداء"], ["الحركة", "حركات CSS / تصميم التفاعل"]],
  },
  faq: {
    marker: "جيد أن تعرف", kicker: "النسخة المختصرة", h2a: "قبل أن", h2b: "نبدأ.",
    items: [
      ["ما نوع المشاريع التي تقبلها؟", "أعمل مع العيادات وشركات الإنشاءات والمتاجر الإلكترونية والأعمال النامية التي تحتاج موقعاً أقوى، أو رحلة عملاء أفضل، أو نظاماً رقمياً محدد الهدف."],
      ["كم تكلفة الموقع؟", "يمكنك استئجار موقع مُدار بدءاً من 500 ج.م شهرياً، أو شراء موقع بدءاً من 3,000 ج.م. المشاريع المخصصة يُحدد سعرها بعد مكالمة قصيرة. كل الأسعار موجودة في هذه الصفحة."],
      ["هل تتولى التصميم والتطوير؟", "نعم. أستطيع أخذ المشروع من اتجاه المحتوى والمخطط الأولي إلى التصميم البصري والتطوير والإطلاق وتحسين الأداء."],
      ["هل تعمل مع علامة موجودة؟", "بالتأكيد. أحافظ على ما ينجح، وأوضح اللغة البصرية، وأبني تجربة ويب تشبهك تماماً."],
      ["كيف نبدأ؟", "أرسل موجزاً قصيراً عبر واتساب أو البريد. سنستخدم مكالمة مركّزة مدتها 20 دقيقة لفهم الهدف والجمهور وأفضل خطوة أولى."],
    ],
  },
  contact: { marker: "لنجعلها واضحة", kicker: "هل لديك مشروع في بالك؟", h2a: "أحضر الموجز.", h2b: "واخرج باتجاه.", call: "احجز مكالمة 20 دقيقة", proposal: "اطلب عرضاً لموقعك" },
  footer: { left: "© 2026 عمرو الطناني", mid: "تصميم + هندسة من مصر" },
};

export const copy = { en, ar };
