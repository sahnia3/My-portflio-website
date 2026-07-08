import type {
  ExperienceEntry,
  Project,
  SiteConfig,
  SkillGroup,
} from "./types";

export const site: SiteConfig = {
  name: "Aditya Sahni",
  role: "Full-Stack Developer",
  location: "Hamilton, ON — Canada",
  email: "sahni.aditya5096@gmail.com",
  headline: "I build systems that trade, optimize & keep score.",
  intro:
    "Full-stack developer and CS undergrad at McMaster University. I ship end-to-end products — from a Go-powered Canadian rewards optimizer to an autonomous 13-agent prediction-market trader. Previously Software Engineer Co-op at TD Bank.",
  currently: [
    "building MapleRewards — 92+ cards, 19 loyalty programs",
    "running 13 agents on Polymarket prediction markets",
    "studying Computer Science @ McMaster University",
    "shipping freelance web + AI projects",
  ],
  availability: "Open to freelance & collaboration",
  resume: "/Aditya_Sahni_Resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/sahnia3" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sahniaditya/" },
    { label: "Instagram", href: "https://www.instagram.com/aditya_sahniii/" },
  ],
};

export const projects: Project[] = [
  {
    slug: "maplerewards",
    title: "MapleRewards",
    tagline:
      "The first native Canadian credit card rewards optimizer, live at maplerewards.app. Maximize your cashback and points across 94 cards and 41 loyalty programs — ranked by real dollar value, not just points.",
    year: "2025–2026",
    status: "in-development",
    featured: true,
    summary:
      "The first native Canadian credit card rewards optimizer, live at maplerewards.app — Go + Next.js, with an AI assistant, trip planner, and portfolio analytics across 94 cards.",
    metrics: [
      { label: "Canadian cards", value: "94" },
      { label: "Loyalty programs", value: "41" },
      { label: "Spend categories", value: "14" },
      { label: "REST endpoints", value: "35+" },
    ],
    sections: [
      {
        heading: "The problem",
        body: "Canadian credit card holders have no native tool to compare rewards across cards. American tools like The Points Guy don't support Canadian loyalty programs, and existing comparison sites only show earn rates — not real dollar values. MapleRewards fills this gap by being the first platform built specifically for the Canadian market.",
      },
      {
        heading: "Architecture",
        body: "The backend is built in Go with the Chi router, chosen for its performance with concurrent API calls. PostgreSQL stores card data, user wallets, and spending profiles. Redis provides sub-millisecond caching for card lookups and optimization results. The frontend uses Next.js 16 with React 19 and server components for fast initial loads. 27,760 lines of code across Go (10,717 LOC) and TypeScript (17,043 LOC), with 35+ REST API endpoints, 12+ PostgreSQL tables, and JWT authentication.",
      },
      {
        heading: "The optimizer",
        body: "The optimization engine calculates the effective return for every card across each spending category. It accounts for earn rates, point valuations (using both base and premium redemption values like business class flights), annual fees, and welcome bonuses. Users see a ranked list showing exactly how much real dollar value each card returns for their specific spending pattern.",
      },
      {
        heading: "AI rewards assistant",
        body: "Powered by Claude Sonnet, the AI assistant answers any question about credit card rewards — from 'best way to fly business class to London' to 'maximize my points value.' It understands your wallet and gives personalized advice. A travel redemption calculator supports Aeroplan, Amex MR, Avios, Marriott, Hyatt, Hilton, and IHG with real-time award availability.",
      },
      {
        heading: "Market opportunity",
        body: "No direct competitors exist in the Canadian market. The platform covers 94 credit cards across all major issuers (TD, RBC, CIBC, BMO, Scotiabank, AMEX, HSBC) and 41 loyalty programs including Aeroplan, Scene+, PC Optimum, and Marriott Bonvoy. The SaaS model uses Stripe for premium features including advanced analytics and AI chat.",
      },
    ],
    stack: [
      "Go",
      "Chi",
      "PostgreSQL",
      "Redis",
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Claude API",
      "Stripe",
      "JWT",
    ],
    links: [
      { label: "Visit maplerewards.app", href: "https://maplerewards.app" },
      { label: "GitHub", href: "https://github.com/sahnia3/maplerewards" },
    ],
    images: [
      { src: "/maplerewards-live-home.png", alt: "MapleRewards — know what to swipe, before you swipe" },
      { src: "/maplerewards-live-optimizer.png", alt: "The Optimizer — best card for the next swipe, ranked in real CAD" },
    ],
    cover: "/maplerewards-live-home.png",
  },
  {
    slug: "polymarket-bot",
    title: "Polymarket Trading Agent",
    tagline:
      "An autonomous multi-agent prediction market trading system. Claude as a research brain, 4 independent probability estimators, and a 139-member weather ensemble to identify and trade mispriced bets on Polymarket.",
    year: "2025–2026",
    status: "live",
    featured: true,
    summary:
      "Autonomous AI trading bot with 13-agent orchestration, a 139-member weather ensemble, and 11 pre-trade risk checks. Net-positive realized P&L on live prediction markets.",
    metrics: [
      { label: "Active agents", value: "13" },
      { label: "Ensemble members", value: "139" },
      { label: "Pre-trade risk checks", value: "11" },
      { label: "Open positions", value: "92" },
    ],
    sections: [
      {
        heading: "The concept",
        body: "Prediction markets price real-world events as tradeable contracts. When the market price diverges from the true probability, there's an edge to exploit. This bot autonomously identifies these mispricings, researches the underlying events, estimates true probabilities, and executes trades — all without human intervention.",
      },
      {
        heading: "13-agent orchestration",
        body: "The system orchestrates 13 specialized agents — market scanner, 3 researchers (web, news, data), 4 independent estimators (base, contrarian, calibration, Bayesian), an aggregator, risk manager, trader, orchestrator, and portfolio monitor. Each agent has a focused responsibility and communicates through structured interfaces. Every trade flows through a 5-stage pipeline ending in execution via the Polymarket CLOB API with slippage protection.",
      },
      {
        heading: "Evolution: V1 to V4",
        body: "The system evolved through 4 major versions. V1 used a single LLM estimator and lost money. V2 introduced multi-estimator consensus. V3 added Platt calibration to fix systematic overconfidence. V4 pivoted to weather ensemble trading — using 139 numerical weather model members instead of LLM estimation for weather markets, dramatically improving accuracy on the highest-volume market category.",
      },
      {
        heading: "Weather ensemble",
        body: "The weather trading module queries 139 ensemble members across 4 major forecast systems: GFS (30 members), ECMWF (50 members), ICON (39 members), and GEM (20 members). By counting what fraction of ensemble members predict a given outcome, the system generates calibrated probability estimates for temperature, precipitation, and extreme weather markets — without relying on LLM estimation at all.",
      },
      {
        heading: "Risk management",
        body: "Every trade must pass 11 independent risk checks before execution — maximum drawdown limits, concentration caps, correlation prevention, daily loss limits, cooldown periods after losses, and position count caps. The quarter-Kelly criterion keeps position sizes conservative, betting only 25% of the theoretically optimal amount.",
      },
    ],
    stack: [
      "Python 3.12",
      "Claude API",
      "Polymarket CLOB",
      "SQLite",
      "PostgreSQL",
      "Open-Meteo",
      "GDELT",
      "Binance API",
    ],
    links: [{ label: "GitHub", href: "https://github.com/sahnia3/polymarket-agent" }],
    images: [
      { src: "/polymarket-agents.webp", alt: "13 agents networked above a mission-control desk of forecasts and orderbooks" },
      { src: "/polymarket-pipeline.png", alt: "5-stage trading pipeline from scan to execution" },
    ],
    cover: "/polymarket-agents.webp",
  },
  {
    slug: "life-os",
    title: "Life-OS",
    tagline:
      "A centralized personal operating system with gamification. Tracks tasks, fitness, habits, and ideas with XP progression, streak mechanics, and energy-level tracking — all in one dashboard.",
    year: "2026",
    status: "live",
    featured: true,
    summary:
      "Personal operating system with gamification — tasks, fitness, habits, and ideas with XP progression, streak mechanics, and a Claude-powered assistant across 8 modules.",
    metrics: [
      { label: "Modules", value: "8" },
      { label: "Gamification", value: "XP · badges · streaks" },
      { label: "Sync", value: "Supabase realtime" },
      { label: "Interfaces", value: "Web + Telegram" },
    ],
    sections: [
      {
        heading: "Why build this?",
        body: "Existing productivity tools are fragmented — tasks in Todoist, fitness in Strong, habits in Streaks, notes in Notion. Life-OS unifies everything into a single dashboard with a gamification layer that makes daily consistency feel rewarding. As a student balancing academics, side projects, and fitness, having one source of truth for everything saves context-switching overhead.",
      },
      {
        heading: "Command center",
        body: "The home dashboard shows everything at a glance — today's focus tasks, daily habits with completion tracking, a Pomodoro focus timer, upcoming deadlines, weekly stats, and an AI assistant. Real-time data updates via Supabase subscriptions keep everything synced. Eight self-contained modules cover tasks, fitness, habits, ideas, calendar, AI assistant, Telegram bot, and markets.",
      },
      {
        heading: "Gamification system",
        body: "Every action earns XP — completing tasks, maintaining streaks, logging workouts, and capturing ideas. XP accumulates into levels with milestone badges. Streaks are the core mechanic: consecutive days of habit completion build multipliers. The system also tracks daily energy levels (1–10) and correlates them with productivity metrics, helping identify patterns like 'I'm most productive after morning workouts.'",
      },
      {
        heading: "Architecture decisions",
        body: "Supabase was chosen over a custom backend for speed of development — it provides PostgreSQL, auth, real-time subscriptions, and row-level security with minimal setup. The modular architecture means each feature (tasks, fitness, ideas) is a self-contained module with its own schema, components, and API layer. This makes it easy to build and ship one module at a time.",
      },
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Framer Motion",
      "Claude API",
      "Vercel",
    ],
    links: [{ label: "GitHub", href: "https://github.com/sahnia3/life-os" }],
    images: [
      { src: "/lifeos-live.png", alt: "Life-OS command center dashboard" },
      { src: "/lifeos-tasks.png", alt: "Kanban task board with XP integration" },
      { src: "/lifeos-fitness.png", alt: "Fitness tracking with GitHub-style heatmaps" },
      { src: "/lifeos-ideas.png", alt: "Pinterest-style ideas grid" },
    ],
    cover: "/lifeos-live.png",
  },
  {
    slug: "aeon",
    title: "AEON",
    tagline:
      "A god simulator built completely from scratch — no engine, no libraries. Civilizations rise, war, worship, and fall on their own; you raise mountains, bless harvests, and unleash the heavens.",
    year: "2026",
    status: "in-development",
    featured: true,
    summary:
      "A WorldBox-style god simulator hand-built in vanilla JavaScript, Canvas, and WebGL2. Every soul is born, every empire emerges organically from two founders, and the world writes its own history.",
    metrics: [
      { label: "Game engine", value: "None — built from scratch" },
      { label: "Population", value: "Birth-only souls" },
      { label: "Era arc", value: "Stone Age → Space" },
      { label: "Simulation code", value: "6,687 lines" },
    ],
    sections: [
      {
        heading: "The premise",
        body: "Every world starts as empty land and exactly two people. There is no scripted spawning: population grows only through birth, tribes form when kin-groups settle fertile land, and empires emerge organically from there — with procedural names, heraldry that ennobles with rank, and dynasties that pass power by blood succession. A 'Chronicle of Ages' records the history the world writes for itself: first city, first mine, first war, living legends chronicled on death.",
      },
      {
        heading: "What I'm trying to achieve",
        body: "The design principle that reshaped the whole project is causality over spectacle. Midway through, the sim felt hollow — 'there is no real reason why anything is happening' — so everything was rebuilt around cause and effect. When a performance win abstracted the population to 100k statistical souls, it severed the link between events and people, and I reverted it: integrity over raw scale. The current goal is turning a deep simulation into an actual game — a resource economy, meaningful stakes, and an endgame where a civilization ascends to the stars.",
      },
      {
        heading: "A living world",
        body: "Wars end through exhaustion, treaties, and annexation rather than running forever. Village limits, loyalty and rebellion, tech diffusion, and imperial decadence form negative-feedback loops so no empire dominates permanently. Sixteen resources drive scarcity, trade routes, and wars; faiths spread, schism, and fight holy wars; seasons and climate cause famines and migrations; disasters chain causally — a plague follows the war that crowded the refugees into one city.",
      },
      {
        heading: "Engineering",
        body: "No engine, no runtime dependencies — an Electron shell around hand-written HTML5 Canvas 2D and a from-scratch WebGL2 instanced renderer that draws entire crowds in a single draw call. Audio is fully synthesized with the Web Audio API (no audio files). Terrain is procedurally baked with dual-grid coastline smoothing; portraits, skylines, and coats of arms are procedural SVG that evolve with era and rank. 6,687 lines of simulation across 17 modules.",
      },
    ],
    stack: [
      "Vanilla JavaScript",
      "Canvas 2D",
      "WebGL2",
      "Web Audio",
      "Electron",
    ],
    links: [],
    images: [
      { src: "/aeon-world.png", alt: "Year 216 — five realms, 22 cities, a plague and an earthquake in the same season" },
      { src: "/aeon-title.png", alt: "AEON title screen — raise mountains, breathe life into the dust" },
    ],
    cover: "/aeon-world.png",
  },
  {
    slug: "flux-trading",
    title: "Flux Trading",
    tagline:
      "A high-frequency paper trading platform for simulating trades across cryptocurrencies, stocks, futures, forex, and commodities — with real-time data, an academy, and an AI lab.",
    year: "2025",
    status: "live",
    featured: true,
    summary:
      "Paper trading platform with real-time WebSocket market data, order matching, portfolio analytics, and a gamified trading academy across five asset classes.",
    metrics: [
      { label: "Asset classes", value: "5" },
      { label: "Market data", value: "Real-time WebSockets" },
      { label: "Search latency", value: "Sub-millisecond" },
      { label: "Learning", value: "Academy + AI lab" },
    ],
    sections: [
      {
        heading: "Overview",
        body: "Flux Trading is a paper trading simulation platform designed to bridge the gap between theoretical knowledge and practical market experience. It provides a risk-free environment where aspiring traders can execute trades across multiple asset classes — cryptocurrencies, stocks, forex, and futures — using real-time market data.",
      },
      {
        heading: "The challenge",
        body: "Building a trading platform requires handling massive amounts of data with minimal latency. A delay of a few seconds can mean the difference between profit and loss in the real world. The goal was to replicate this high-stakes environment in a browser-based application, requiring optimized data fetching, state management, and re-rendering strategies.",
      },
      {
        heading: "Technical implementation",
        body: "The application uses Next.js server-side rendering for initial load and SEO, with multiple financial APIs and WebSockets pushing real-time updates to the client so charts and order books stay synchronized with the global market. The backend handles order matching: when a user places a limit order or stop loss, the server continuously monitors the price feed and executes instantly once conditions are met, updating portfolio balance and transaction history.",
      },
      {
        heading: "Academy & AI lab",
        body: "The Flux Academy offers a structured, gamified curriculum from market fundamentals to advanced technical analysis, with interactive visualizers reinforcing each concept. The AI Lab simulates specific market scenarios for risk-free strategy testing, and an AI chatbot answers questions about stocks, trends, and financial data — a 24/7 mentor.",
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "WebSockets",
      "Redux",
      "PostgreSQL",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/sahnia3/Flux-Trading" },
      {
        label: "Live site",
        href: "https://flux-trading-klmw0ddei-aditya-sahnis-projects.vercel.app",
      },
    ],
    images: [
      { src: "/flux-dashboard-main.png", alt: "Flux Trading market overview dashboard" },
      { src: "/flux-search.png", alt: "Instant asset lookup across thousands of assets" },
      { src: "/flux-assets.png", alt: "Portfolio management with P&L breakdown" },
      { src: "/flux-academy.png", alt: "Flux Academy learning modules" },
      { src: "/flux-ai-lab.png", alt: "Flux AI Lab scenario simulation" },
    ],
    cover: "/flux-dashboard-main.png",
  },
  {
    slug: "axesouar",
    title: "Axesouar.in",
    tagline:
      "A premium e-commerce experience for a unique jewelry brand — 120+ exclusive SKUs with a focus on visual storytelling and seamless navigation.",
    year: "2024–2025",
    status: "live",
    featured: false,
    summary:
      "Freelance e-commerce build for a jewelry brand: 120+ SKUs, instant filtering and search, and a lightweight frontend that lets product imagery take center stage.",
    metrics: [
      { label: "Unique SKUs", value: "120+" },
      { label: "Engagement", value: "+60% site flow" },
      { label: "Type", value: "Freelance client" },
    ],
    sections: [
      {
        heading: "Development story",
        body: "For Axesouar, the challenge was to translate a diverse collection of jewelry into a digital format that felt as premium as the products themselves. The frontend is architected to be modular, ensuring that adding new stock or changing collections is straightforward.",
      },
      {
        heading: "Performance & UX",
        body: "Accessibility and speed were paramount. Modern React practices manage state efficiently, so filtering and searching through the 120+ SKUs feels instant. Optimized image loading and caching keep it fast, and the responsive layout guarantees a flawless shopping experience on phone, tablet, or laptop.",
      },
    ],
    stack: ["React", "JavaScript", "CSS3", "Firebase", "Node.js"],
    links: [{ label: "Visit website", href: "https://axesouar.in" }],
    images: [{ src: "/axesouar.png", alt: "Axesouar jewelry storefront" }],
    cover: "/axesouar.png",
  },
  {
    slug: "portfolio",
    title: "This Website",
    tagline:
      "Portfolio v2 — rebuilt from the ground up. Next.js 16, React 19, Tailwind 4, and Framer Motion, with a command palette and a data-driven content layer.",
    year: "2026",
    status: "live",
    featured: false,
    summary:
      "This site. A ground-up rebuild: data-driven pages, a ⌘K command palette, and a Swiss-modernist design system on warm paper — no templates.",
    metrics: [
      { label: "Framework", value: "Next.js 16" },
      { label: "Styling", value: "Tailwind 4 (OKLCH)" },
      { label: "Motion", value: "Framer Motion 12" },
      { label: "Content", value: "Single data source" },
    ],
    sections: [
      {
        heading: "Concept & design",
        body: "A portfolio should read like a printed monograph of the work: warm paper surfaces, ink-black grotesque type at poster scale, hairline rules, and a single vermilion accent. The system borrows from Swiss modernist print design rather than from other websites. Every page renders from one typed data file, so content changes never touch layout code.",
      },
      {
        heading: "Mechanics",
        body: "A ⌘K command palette navigates the whole site from the keyboard. Pages transition with staggered reveals, screenshots settle into place as they scroll into view, and everything respects prefers-reduced-motion. The previous version was a space-themed template with a three.js starfield; this one is a handcrafted system a third of the size.",
      },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Framer Motion"],
    links: [
      { label: "GitHub", href: "https://github.com/sahnia3/My-portflio-website" },
    ],
    images: [
      {
        src: "/spaceportfolio.png",
        alt: "v1 — the space template this site replaced",
      },
    ],
    cover: undefined,
  },
];

export const labProjects = [
  {
    title: "SonicID",
    description:
      "Shazam-style audio fingerprinting engine — the Wang 2003 algorithm built from scratch.",
    stack: ["Go", "Python", "Next.js"],
    href: "https://github.com/sahnia3/sonicid",
    year: "2025",
  },
  {
    title: "raft-go",
    description:
      "From-scratch implementation of the Raft consensus algorithm with a replicated KV store — Ongaro & Ousterhout 2014 §5.1–§5.4 in pure Go.",
    stack: ["Go"],
    href: "https://github.com/sahnia3/raft-go",
    year: "2025",
  },
  {
    title: "sae-gpt2",
    description:
      "Sparse autoencoder for interpreting GPT-2 residual-stream activations — Bricken et al. 2023 reproduction in PyTorch.",
    stack: ["Python", "PyTorch"],
    href: "https://github.com/sahnia3/sae-gpt2",
    year: "2025",
  },
  {
    title: "polymarket-analytics",
    description:
      "Modern data-stack analytics over the Polymarket trading bot — dbt + DuckDB + Streamlit.",
    stack: ["dbt", "DuckDB", "Streamlit"],
    href: "https://github.com/sahnia3/polymarket-analytics",
    year: "2025",
  },
];

export const experience: ExperienceEntry[] = [
  {
    company: "TD Bank",
    role: "Software Engineer Co-op",
    period: "Sep 2025 — Dec 2025",
    location: "Toronto, ON",
    bullets: [
      "Engineered an automated ETL pipeline with Power Automate to extract unstructured Confluence data into SQL-ready CSVs, cutting manual entry latency by 90%.",
      "Built SQL stored procedures that processed TMX user requests and categorized users into Blocklist, Watchlist, and Safelist based on real-time security logic.",
      "Eliminated 5+ hours of weekly manual QA by implementing validation scripts that enforced data integrity prior to ingestion.",
      "Designed a high-availability Power BI dashboard to monitor aggregator logins and SLA metrics, optimizing DAX for faster refresh and query performance.",
    ],
    stack: ["SQL", "Power Automate", "Power BI", "DAX"],
  },
  {
    company: "Axesouár",
    role: "Full-Stack Web Developer — Freelance",
    period: "2025",
    location: "Hamilton, ON",
    bullets: [
      "Built a fully responsive e-commerce website in React showcasing 120+ unique jewelry SKUs, providing an intuitive browsing and shopping experience.",
      "Leveraged React, Node.js, REST APIs, Firebase, and MongoDB to build a scalable full-stack platform, increasing site-wide flow by 60%.",
    ],
    stack: ["React", "Node.js", "Firebase", "MongoDB"],
  },
  {
    company: "DocOnline Health India",
    role: "Assistant Software Developer",
    period: "May 2024 — Sep 2024",
    location: "Mumbai, India",
    bullets: [
      "Collaborated within an Agile team to build and deploy a scalable platform aggregating medical data from live external sources.",
      "Engineered and integrated REST APIs handling real-time data ingestion, validation, and processing, improving the accuracy of healthcare insights.",
      "Architected a cloud-native workflow on AWS (EC2, S3, Lambda) delivering cost-efficient serverless infrastructure that reduced operational overhead.",
    ],
    stack: ["AWS", "REST APIs", "EC2", "Lambda", "S3"],
  },
];

export const education = {
  degree: "B.A.Sc. Honors Computer Science — Minor in Statistics",
  school: "McMaster University",
  period: "2022 — 2027",
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Go", "Python", "TypeScript", "JavaScript", "Java", "C++", "SQL", "Swift"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Redux", "Vue.js"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Chi (Go)", "Express", "Flask", "PostgreSQL", "Redis", "MongoDB", "Supabase", "Firebase"],
  },
  {
    label: "ML & Data",
    items: ["PyTorch", "TensorFlow", "pandas", "scikit-learn", "dbt", "DuckDB"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS (EC2 · Lambda · S3)", "Docker", "Vercel", "Stripe"],
  },
  {
    label: "Concepts",
    items: ["System design", "Distributed systems", "DS & algorithms", "API design", "Security"],
  },
];

export const about = {
  lead: "I build systems that make decisions.",
  quote:
    "I'm someone who hates inefficiency. I see a manual process and immediately think: how do we automate this?",
  paragraphs: [
    "It started with a spreadsheet. I was tracking six credit cards and about 60,000 Aeroplan points by hand, trying to work out which card to swipe for what. No Canadian tool did the math, so I built one. That became MapleRewards, now live at maplerewards.app: the first native Canadian rewards optimizer, ranking 94 cards and 41 loyalty programs by real dollars returned.",
    "That is the pattern for most of what I make. I hate inefficiency, so I build the thing that removes it. At TD Bank I found a manual data-entry process in security operations, rebuilt it in Power Automate, and cut the latency by 90 percent. When I got interested in prediction markets, I built an autonomous agent that trades them with real money and its own risk limits. When I wanted a world worth watching, I wrote a god simulator from scratch.",
    "Somewhere in there is the Computer Science degree at McMaster (Honours, minor in Statistics), but the credential is not the point. I reach for Go when performance matters and Next.js when iteration speed does, and I build the hard parts myself: a Raft consensus implementation, an audio-fingerprinting engine, a game engine with no engine. What I care about is shipping things real people use, and keeping them honest once they work.",
  ],
  principles: [
    {
      title: "Ship real products",
      body: "Not demos, not screenshots. MapleRewards is live with real users; the trading agent runs on live markets. A thing that works in production teaches you more than ten that work in a slide.",
    },
    {
      title: "Causality over spectacle",
      body: "The rule that reshaped my god simulator: nothing should happen without a reason. Every soul is born, every empire is earned. I think about systems the same way. Effects trace back to causes, not to magic.",
    },
    {
      title: "Automate the inefficiency",
      body: "If I am doing something twice by hand, I am building the thing that does it a thousand times. Most of what I make starts as a personal annoyance I refused to keep tolerating.",
    },
    {
      title: "Integrity over scale",
      body: "I once abstracted a simulation up to 100,000 statistical souls for performance, then took it back out, because it severed the link between events and real agents. Bigger numbers are not worth a hollow system.",
    },
  ],
  beyond: [
    {
      label: "Points & rewards",
      body: "The hobby that became a product. Six cards, a spreadsheet, and a genuine obsession with squeezing real value out of loyalty programs.",
    },
    {
      label: "Prediction markets",
      body: "I trade Polymarket with real money, and think in Bayesian calibration, Brier scores, and Kelly sizing more than I probably should.",
    },
    {
      label: "Building games",
      body: "AEON, my god simulator, is a pure passion project. No deadline, no roadmap, just the challenge of making a world feel alive.",
    },
    {
      label: "Creative & marketing",
      body: "Freelance work on the other side of the brain: ad breakdowns, short-form scripts, and AI-assisted video production.",
    },
  ],
  receipts: [
    { value: "90%", label: "manual latency cut at TD Bank" },
    { value: "94", label: "Canadian cards modelled, live" },
    { value: "60K", label: "Aeroplan points, tracked by hand" },
    { value: "7", label: "projects shipped on GitHub" },
  ],
  timeline: [
    {
      year: "2022",
      title: "Started at McMaster",
      body: "Began a B.A.Sc. in Honours Computer Science with a minor in Statistics.",
    },
    {
      year: "2024",
      title: "DocOnline Health, Mumbai",
      body: "Assistant Software Developer. REST APIs and a cloud-native AWS workflow for a live medical-data platform.",
    },
    {
      year: "2025",
      title: "Freelance & Flux Trading",
      body: "Built Axesouár's 120+ SKU storefront and shipped Flux, a real-time paper-trading platform.",
    },
    {
      year: "2025",
      title: "Software Engineer Co-op, TD Bank",
      body: "Automated security-operations ETL and reporting across the Microsoft stack in Toronto.",
    },
    {
      year: "2025–26",
      title: "Building in the open",
      body: "MapleRewards went live, alongside an autonomous Polymarket agent, Life-OS, and AEON.",
    },
    {
      year: "2026",
      title: "Looking ahead",
      body: "Targeting a Fall 2026 co-op back in Ontario, taking freelance work in parallel, and hunting the next hard problem.",
    },
  ],
};

export const emailjs = {
  publicKey: "qZSzaRNwwK1KvAXli",
  serviceId: "service_2r2e2pn",
  templateId: "template_88cb4mt",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
