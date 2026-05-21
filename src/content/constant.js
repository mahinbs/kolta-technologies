import logo from "../assets/logo/logo.png";
import circleImg from "../assets/images/circle.png";
import moonShapeImg from "../assets/images/yellow-moon-shape.png";
import { IoChatbubblesOutline, IoDiamondOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline, IoMdGlobe } from "react-icons/io";
import { LuBrainCircuit } from "react-icons/lu";

export { logo, circleImg, moonShapeImg };

export const companyDetails = {
  email: "kolta.technologies@gmail.com",
  location: "Flat 304/B, Telco Colony , Lane 5 , Ambegaon BK , Pune - 411046",
  phone: "919604042725",
  whatsapp: "https://wa.me/919604042725",
  instagram: "https://www.instagram.com/KOLTA TECHNOLOGIES",
  linkedin: "https://www.linkedin.com/company/KOLTA TECHNOLOGIES/",
  youtube: "https://www.youtube.com/@KOLTA TECHNOLOGIES",
  x: "https://x.com/KOLTA TECHNOLOGIES",
  facebook: "https://www.facebook.com/KOLTA TECHNOLOGIES",
};
// industries
export const industries = [
  {
    id: 1,
    title: "FinTech and Banking",
    image: "/assets/images/icons/FinTech and Banking.png",
    desc: "Ledger-grade APIs, risk dashboards, and customer journeys that stay fast under regulatory scrutiny.",
  },
  {
    id: 2,
    title: "Healthcare and Biotech",
    image: "/assets/images/icons/Healthcare and Biotech.png",
    desc: "Secure portals, telehealth flows, and data pipelines that respect privacy while speeding clinical ops.",
  },
  {
    id: 3,
    title: "E-commerce and Retail",
    image: "/assets/images/icons/E-commerce and Retail.png",
    desc: "Composable storefronts, inventory intelligence, and checkout paths tuned for conversion, not clutter.",
  },
  {
    id: 4,
    title: "Gaming and Entertainment",
    image: "/assets/images/icons/Gaming and Entertainment.png",
    desc: "Multiplayer backends, live-ops tooling, and performance budgets that keep players in the session.",
  },
  {
    id: 5,
    title: "Logistics and Supply Chain Management",
    image: "/assets/images/icons/Logistics and Supply Chain Management.png",
    desc: "Real-time tracking, exception alerts, and forecasting models aligned with warehouse and fleet reality.",
  },
  {
    id: 6,
    title: "Education and E-Learning",
    image: "/assets/images/icons/Education and E-Learning.png",
    desc: "Accessible learning surfaces, cohort analytics, and content systems teams can update without developers.",
  },
  {
    id: 7,
    title: "Restaurants and Hotels",
    image: "/assets/images/icons/Restaurants and Hotels.png",
    desc: "Ordering, staffing, and guest-experience apps that feel on-brand from kiosk to back office.",
  },
];

export const testimonials = [
  {
    name: "Elena Marchetti",
    image: require("../assets/images/testimonial/2.jpg"),
    review:
      "They rebuilt our marketing site and docs stack around koltatech.ai-level performance targets—Lighthouse scores jumped and our sales team finally trusts the demo environment.",
    position: "VP Marketing",
    company: "NORTHLINE ANALYTICS",
  },
  {
    name: "Jordan Okonkwo",
    image: require("../assets/images/testimonial/3.jpg"),
    review:
      "Our field crews went from spreadsheets to an offline-capable app in one release train. Communication was blunt in the best way—no surprise scope on Fridays.",
    position: "Head of Operations",
    company: "RIDGEWAY LOGISTICS",
  },
  {
    name: "Meera Shah",
    image: require("../assets/images/testimonial/1.jpg"),
    review:
      "Data engineering was the bottleneck; now pipelines are monitored, documented, and owned. Finance and product finally argue over the same numbers.",
    position: "Director of Data",
    company: "HELIX RETAIL GROUP",
  },
];

export const futureGoals = [
  {
    icon: <IoChatbubblesOutline size={30} />,
    title: "Deeper platform partnerships",
    description:
      "Co-invest in long-term roadmaps across app, web, cloud, and data so releases stay predictable as your user base doubles.",
  },
  {
    icon: <RiTeamLine size={30} />,
    title: "Sustainable delivery cadence",
    description:
      "Right-size cloud spend, automate toil, and document runbooks so teams scale without burning out maintainers.",
  },
  {
    icon: <IoDiamondOutline size={30} />,
    title: "Specification-led craftsmanship",
    description:
      "Keep your requirements, constraints, and success metrics at the center of design reviews and sprint goals.",
  },
  {
    icon: <IoMdGlobe size={30} />,
    title: "Global-ready, locale-aware",
    description:
      "Ship interfaces, content, and compliance patterns that work across regions without forked codebases.",
  },
  {
    icon: <IoMdCheckmarkCircleOutline size={30} />,
    title: "Measurable product quality",
    description:
      "Instrument UX, reliability, and performance so improvements show up in dashboards—not only in anecdotes.",
  },
  {
    icon: <LuBrainCircuit size={30} />,
    title: "Responsible intelligence",
    description:
      "Pair machine learning and analytics with governance, monitoring, and human review where stakes are high.",
  },
];

// frequently asked questions
export const faqs = [
  {
    id: 1,
    question: "What does “Web Development+” include compared to a basic site?",
    answer:
      "Beyond marketing pages, we engineer authenticated areas, integrations, SEO-aware rendering, performance budgets, and deployment pipelines—so your web property behaves like a product, not a static brochure. The “plus” is the operational glue: previews, monitoring, and handoffs your team can run.",
  },
  {
    id: 2,
    question: "How do you approach cloud migrations without stopping feature work?",
    answer:
      "We carve out landing zones and move workloads in slices—parallel runs, traffic shifting, and reconciliation dashboards—so engineers keep shipping. Guardrails (IAM, logging, cost tags) land first; lift-and-shift or refactor decisions follow per service.",
  },
  {
    id: 3,
    question: "When should we invest in data engineering before data science?",
    answer:
      "If analysts spend more time fixing joins than answering questions, pipelines come first. Reliable ingestion, contracts, and testing create the foundation models and dashboards actually need—otherwise ML inherits garbage and nobody trusts the output.",
  },
  {
    id: 4,
    question: "Can you support both game prototypes and live titles?",
    answer:
      "Yes. Early on we focus on mechanics, feel, and a vertical slice; for live games we emphasize telemetry, content tooling, patch pipelines, and performance profiling on target hardware. Scope and engine choice follow your monetization and platform plan.",
  },
  {
    id: 5,
    question: "How do you keep UI/UX and engineering aligned?",
    answer:
      "Shared design systems, annotated states, and accessibility criteria travel with the ticket. Developers get specs for edge cases—not only happy paths—and we review builds against the same usability goals defined in discovery.",
  },
  {
    id: 6,
    question: "Do you offer ongoing support after launch?",
    answer:
      "We provide retainers for monitoring, incident response, roadmap grooming, and incremental releases across apps, web, cloud, and data stacks—so security patches, OS updates, and dependency drift do not become surprise projects.",
  },
];

// digital capability highlights
export const healthcareWebSolutions = [
  {
    id: 1,
    image: require("../assets/images/healthcare web solutions/1.png"),
    html: `
    <div>
      <p class="mb-8">
       <span class="text4 text-primary1">1. Product discovery that sticks : </span>
        Before a single sprint, KOLTA TECHNOLOGIES aligns on outcomes, risks, and success signals so apps, sites, and data workstreams stay tied to revenue and retention.
      </p>
      <ul class="list-disc list-inside space-y-2">
        <li>Stakeholder workshops mapped to measurable KPIs</li>
        <li>Technical spikes when integrations or compliance need proof</li>
        <li>Roadmaps that separate must-haves from phase-two experiments</li>
      </ul>
    </div>`,
  },
  {
    id: 2,
    image: require("../assets/images/healthcare web solutions/2.jpeg"),
    html: `<div>
  <p class="mb-8">
    <span class="text4 text-primary1">2. Engineering with observability baked in</span>
    <br />
    From koltatech.ai properties to client production systems, we ship with logging, tracing, and alerts that make incidents diagnosable—not mysterious.
  </p>
  <ul class="space-y-4">
    <li>CI pipelines with automated checks on critical user paths</li>
    <li>Environment parity between staging and production</li>
    <li>Runbooks your team can follow without paging the original authors</li>
  </ul>
</div>`,
  },
  {
    id: 3,
    image: require("../assets/images/healthcare web solutions/3.png"),
    html: `
    <div>
  <p class="mb-8">
    <span class="text4 text-primary1">3. Data, cloud, and design under one roof</span>
    <br />
    Pipelines feed warehouses, models feed dashboards, and UI/UX keeps humans in the loop—so analytics and interfaces evolve together instead of drifting apart.
  </p>
  <ul class="list-disc list-inside space-y-2">
    <li>Contracts between producers and consumers of data</li>
    <li>Cloud foundations that scale with your squads, not against them</li>
    <li>Design systems that developers can implement without guesswork</li>
  </ul>
</div>`,
  },
];

// web development portfolio
export const webDevelopmentPortfolio = [
  {
    id: 1,
    title: "Aurora Fiber Homes",
    image: require("../assets/images/portfolio/web development/5ghomes.webp"),
  },
  {
    id: 2,
    title: "VectorPilot CRM",
    image: require("../assets/images/portfolio/web development/Autopilot.png"),
  },
  {
    id: 3,
    title: "DesertSky Properties",
    image: require("../assets/images/portfolio/web development/bayut.webp"),
  },
  {
    id: 4,
    title: "Granite Peak Capital",
    image: require("../assets/images/portfolio/web development/cold creekcap.webp"),
  },
  {
    id: 5,
    title: "CampusFuel Nutrition",
    image: require("../assets/images/portfolio/web development/collegenutritionist.png"),
  },
  {
    id: 6,
    title: "SummitLead Academy",
    image: require("../assets/images/portfolio/web development/leadership.net.png"),
  },
  {
    id: 7,
    title: "VerdeMint Events",
    image: require("../assets/images/portfolio/web development/menissa caterings.webp"),
  },
  {
    id: 8,
    title: "LatticeSpace VR Tours",
    image: require("../assets/images/portfolio/web development/think reality.webp"),
  },
];

// app development portfolio
export const appDevelopmentPortfolio = [
  {
    id: 1,
    title: "VaultMint Wallet",
    image: require("../assets/images/portfolio/app development/cryptopadie.png"),
  },
  {
    id: 2,
    title: "CareBridge Clinics",
    image: require("../assets/images/portfolio/app development/doctorplus.png"),
  },
  {
    id: 3,
    title: "EmberCity Explorer",
    image: require("../assets/images/portfolio/app development/dubai travel guide.webp"),
  },
  {
    id: 4,
    title: "StudioLumen Booking",
    image: require("../assets/images/portfolio/app development/elora hair palour.webp"),
  },
  {
    id: 5,
    title: "HarborNote Audio",
    image: require("../assets/images/portfolio/app development/evans francis.webp"),
  },
  {
    id: 6,
    title: "BeaconFaith Community",
    image: require("../assets/images/portfolio/app development/house of deliverance.png"),
  },
  {
    id: 7,
    title: "PixelBazaar Market",
    image: require("../assets/images/portfolio/app development/mybitsshop.webp"),
  },
  {
    id: 8,
    title: "SalahTrack Daily",
    image: require("../assets/images/portfolio/app development/namaz.webp"),
  },
  {
    id: 9,
    title: "BrewCraft Social",
    image: require("../assets/images/portfolio/app development/potea.webp"),
  },
  {
    id: 10,
    title: "KeyNest Rentals",
    image: require("../assets/images/portfolio/app development/rentop.png"),
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "Custom Website Design",
    image: require("../assets/images/landing page/Custom Website Design.jpg"),
    description:
      "Brand systems, responsive layouts, and component libraries that marketing can extend—paired with performance budgets so your public site stays fast on real devices, not only in mockups.",
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    image: require("../assets/images/landing page/E-commerce Solutions.jpg"),
    description:
      "Checkout flows, tax and fulfillment hooks, and webhook-hardened order processing—architected for peak traffic and reconciled reporting so finance and ops stay in sync.",
  },
  {
    id: 3,
    title: "Content Management Systems",
    image: require("../assets/images/landing page/Content Management Systems.jpg"),
    description:
      "Headless or hybrid CMS setups with previews, roles, and structured fields—so editors publish confidently while developers keep schema and front-end contracts explicit.",
  },
  {
    id: 4,
    title: "API Integration",
    image: require("../assets/images/landing page/API Integration.jpg"),
    description:
      "Connect payments, CRMs, identity, and internal microservices with retries, observability, and clear failure modes—reducing silent breakage when vendors change payloads.",
  },
  {
    id: 5,
    title: "Website Maintenance & Support",
    image: require("../assets/images/landing page/Website Maintenance & Support.jpg"),
    description:
      "Dependency updates, security patches, uptime checks, and performance regressions caught in CI—plus a prioritized backlog so improvements continue after launch week.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    image: require("../assets/images/landing page/iOS App Development.jpg"),
    description:
      "Swift-first builds with Human Interface Guidelines in mind—background tasks, widgets, and sign-in flows that survive App Review and stay maintainable across OS upgrades.",
  },
  {
    id: 2,
    title: "Android App Development",
    image: require("../assets/images/landing page/Android App Development.jpg"),
    description:
      "Kotlin-centric apps tuned for fragmentation—adaptive UI, Play feature delivery where it helps, and battery-conscious background work aligned with OEM quirks.",
  },
  {
    id: 3,
    title: "Cross-Platform App Development",
    image: require("../assets/images/landing page/Cross-Platform App Development.jpg"),
    description:
      "Flutter or React Native when shared UI and velocity beat marginal native gains—shared design tokens, platform channels only where needed, and store pipelines for both ecosystems.",
  },
  {
    id: 4,
    title: "UI/UX Design for Apps",
    image: require("../assets/images/landing page/UIUX Design for Apps.jpg"),
    description:
      "Research-backed flows, motion that communicates state, and accessibility baked into acceptance criteria—so engineering ships pixels that match intent, not approximations.",
  },
  {
    id: 5,
    title: "App Testing & Deployment",
    image: require("../assets/images/landing page/App Testing & Deployment.jpg"),
    description:
      "Automated regression on critical paths, device lab coverage for top segments, phased rollouts, and crash analytics wired before day one—so launches are boring in the best way.",
  },
];
