const stream = document.getElementById("stream");
const loading = document.getElementById("loading");
const cardTemplate = document.getElementById("card-template");
const rowTemplate = document.getElementById("row-template");
const introEyebrow = document.getElementById("intro-eyebrow");
const introTitle = document.getElementById("intro-title");
const introCopy = document.getElementById("intro-copy");
const editionSelect = document.getElementById("edition-select") || document.getElementById("edition-select-header");

const editions = {
  radiant: {
    theme: "theme-radiant",
    intro: {
      eyebrow: "Daily drop",
      title: "Endless signals from rising founders",
      copy:
        "Scroll through a living moodboard of venture-backed visionaries, styled with the bright energy of a Venn cover story built for nonstop inspiration hunting.",
    },
    founders: [
      ["Aaliyah Chen", "Marcos Patel"],
      ["Dawn Everett", "Luis Romero"],
      ["Zoë Kim", "Fatima Sule"],
      ["Finn Gallagher", "Amir Rahman"],
      ["Nova Singh", "Jasper Cole"],
      ["Priya Das", "Theo Laurent"],
      ["Isaiah Moore", "Rin Ito"],
      ["Lena Bae", "Mateo Ortiz"],
      ["Suri Park", "Idris Okonkwo"],
      ["Anya Ivanova", "Leo Martins"],
    ],
    startups: [
      {
        name: "Voltline",
        tagline: "Realtime ops co-pilot for hardware startups",
        category: "Operations",
        description:
          "Voltline syncs factory telemetry with live war rooms so hardware founders can predict blockers before they hit production.",
        highlights: ["Seeded by Alloy Angels", "Trusted by 32 robotics teams"],
      },
      {
        name: "Beam",
        tagline: "Video-first sales showrooms for DTC founders",
        category: "Sales",
        description:
          "Beam turns every product drop into an immersive live studio with shoppable scenes, hosts, and real-time analytics.",
        highlights: ["Shopify integration", "Avg. conversion lift 24%"],
      },
      {
        name: "Halo",
        tagline: "No-code loyalty programs for consumer apps",
        category: "Marketing",
        description: "Halo lets product teams launch tiered rewards, streaks, and perks without writing a single line of code.",
        highlights: ["YC W23", "3M monthly active members"],
      },
      {
        name: "Orbit",
        tagline: "Community hub for pre-seed founders",
        category: "Community",
        description:
          "Orbit curates mastermind circles, async coaching, and capital intros tailored for the earliest-stage teams.",
        highlights: ["Global founder network", "Weekly investor office hours"],
      },
      {
        name: "Outlier",
        tagline: "AI briefs for product marketing teams",
        category: "AI",
        description:
          "Outlier generates on-brand launch briefs, positioning, and content calendars in seconds with human-in-the-loop controls.",
        highlights: ["SOC2 Type I", "Figma & Notion native"],
      },
      {
        name: "Signal",
        tagline: "Pulse checks across distributed startups",
        category: "Analytics",
        description:
          "Signal aggregates sentiment, roadmap risk, and retention health into a single dashboard for remote-first leadership teams.",
        highlights: ["Async-first", "Slack automations"],
      },
      {
        name: "Launchpad",
        tagline: "Embedded venture studio for creators",
        category: "Venture",
        description:
          "Launchpad helps breakout creators spin up product lines with fractional ops, funding, and shared GTM playbooks.",
        highlights: ["Backed by Night Ventures", "Creator revenue share"],
      },
      {
        name: "Neon Garden",
        tagline: "Hybrid events for the future of work",
        category: "Events",
        description:
          "Neon Garden designs pop-up HQs where distributed teams gather for launches, offsites, and investor showcases.",
        highlights: ["Carbon neutral", "Production in 12 cities"],
      },
      {
        name: "Afterglow",
        tagline: "Shopable livestream studios for founders",
        category: "Commerce",
        description:
          "Afterglow packages lighting, scripting, and commerce overlays so founders can host compelling drops from anywhere.",
        highlights: ["Creator agency partners", "Integrated fulfillment"],
      },
      {
        name: "Papertrail",
        tagline: "Automated data rooms for fundraising",
        category: "Finance",
        description:
          "Papertrail assembles diligence-ready data rooms with live metrics, stakeholder updates, and granular permissions.",
        highlights: ["SOC2 Type II", "One-click investor sync"],
      },
      {
        name: "Runway",
        tagline: "Hiring pods for breakout startups",
        category: "Talent",
        description:
          "Runway embeds curated talent partners who spin up full-stack hiring squads for the fastest growing companies.",
        highlights: ["NPS 82", "Avg. time-to-offer 21 days"],
      },
      {
        name: "Palette",
        tagline: "Brand identity kits generated by AI",
        category: "Design",
        description:
          "Palette crafts full brand identities, from logo to motion, using an AI engine trained on world-class creative direction.",
        highlights: ["Creative suite plugins", "HD export-ready"],
      },
      {
        name: "Synced",
        tagline: "Async collaboration feed for product squads",
        category: "Collaboration",
        description:
          "Synced keeps every decision, update, and handoff in a living feed built for teams who sprint across timezones.",
        highlights: ["Linear + Jira integrations", "Auto-summary digests"],
      },
      {
        name: "Zephyr",
        tagline: "Predictive insights for climate hardware",
        category: "Climate",
        description:
          "Zephyr models climate hardware performance and financing scenarios so teams can de-risk deployments pre-build.",
        highlights: ["Backed by Elemental", "DOE pilot ready"],
      },
      {
        name: "Alloy",
        tagline: "Modular manufacturing marketplace",
        category: "Industry",
        description:
          "Alloy connects product teams with modular manufacturing cells and instant capacity forecasting.",
        highlights: ["Global supplier grid", "Dynamic pricing"],
      },
      {
        name: "Prism",
        tagline: "Analytics for creator monetization",
        category: "Creator",
        description:
          "Prism visualizes conversion funnels, sponsorship revenue, and merch performance for modern creator businesses.",
        highlights: ["Cross-platform dashboards", "Auto payouts"],
      },
      {
        name: "Dash",
        tagline: "Decision OS for GTM teams",
        category: "SaaS",
        description: "Dash unifies forecasting, enablement, and deal support so revenue teams scale with clarity.",
        highlights: ["Enterprise ready", "AI pipeline coach"],
      },
      {
        name: "Skyline",
        tagline: "AI property intel for flexible offices",
        category: "Proptech",
        description:
          "Skyline scans global lease data and sentiment to pinpoint the best flexible office inventory for scaling teams.",
        highlights: ["Data refreshed hourly", "Preferred broker network"],
      },
      {
        name: "Driftspace",
        tagline: "Immersive demo environments for launches",
        category: "XR",
        description:
          "Driftspace spins up interactive demo worlds where launches and investor walkthroughs feel tactile and cinematic.",
        highlights: ["WebXR native", "Production partner suite"],
      },
      {
        name: "Relay",
        tagline: "Customer storytelling platform",
        category: "Marketing",
        description:
          "Relay packages customer stories into episodic drops with cinematic editing and distribution workflows.",
        highlights: ["Studios in LA & NYC", "Narrative strategy team"],
      },
      {
        name: "Cipher",
        tagline: "Security autopilot for modern startups",
        category: "Security",
        description:
          "Cipher hardens cloud infra with continuous monitoring, automated policy remediation, and human experts on call.",
        highlights: ["SOC2 automation", "PagerDuty escalation"],
      },
      {
        name: "Hyperion",
        tagline: "Revenue forecasting autopilot",
        category: "Finance",
        description:
          "Hyperion blends CRM, billing, and product telemetry into predictive revenue models for leadership teams.",
        highlights: ["Multi-scenario planning", "Dynamic board reports"],
      },
      {
        name: "Amplify",
        tagline: "Influencer deal flow CRM",
        category: "Influencer",
        description:
          "Amplify tracks creator relationships, sends offers, and automates payouts for brand collab teams.",
        highlights: ["30+ payment currencies", "Performance-based contracts"],
      },
      {
        name: "NovaDesk",
        tagline: "AI support agent for SaaS founders",
        category: "Support",
        description: "NovaDesk triages every ticket, drafts responses, and detects churn risk inside your help desk.",
        highlights: ["Zendesk & Intercom", "On-brand voice controls"],
      },
      {
        name: "Summit",
        tagline: "Comp planning for scaling teams",
        category: "HR",
        description:
          "Summit models comp scenarios across regions, equity bands, and growth plans so people teams stay ahead.",
        highlights: ["Equity refresh wizard", "HRIS sync"],
      },
      {
        name: "Momentum",
        tagline: "Investor update automation",
        category: "Productivity",
        description:
          "Momentum automates data pulls, narrative drafts, and stakeholder reminders for always-on investor comms.",
        highlights: ["GTM template library", "LP analytics"],
      },
      {
        name: "Vista",
        tagline: "Data layer for consumer insights",
        category: "Data",
        description:
          "Vista merges surveys, commerce, and social data into a single lens so brands know what to build next.",
        highlights: ["API-first", "Privacy built-in"],
      },
      {
        name: "Echo",
        tagline: "Audience testing for short form video",
        category: "Media",
        description:
          "Echo runs rapid-fire creative tests across TikTok, Shorts, and Reels with AI clips that self-optimize.",
        highlights: ["Creator network ready", "Auto A/B labeling"],
      },
      {
        name: "Flux",
        tagline: "DevOps autopilot for fast shipping",
        category: "DevTools",
        description:
          "Flux keeps deploys green with predictive alerts, rollback recipes, and AI fix suggestions for on-call teams.",
        highlights: ["Works with any CI", "Incident retros auto-drafted"],
      },
      {
        name: "Beacon",
        tagline: "Signals marketplace for emerging founders",
        category: "Community",
        description:
          "Beacon pairs scouts with founders through curated signal drops, live matches, and shared diligence notes.",
        highlights: ["Weekly deal flow drops", "Scouts in 14 cities"],
      },
    ],
    photos: [
      "https://images.unsplash.com/photo-1519455953755-af066f52f1ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509098681029-b45e9c845022?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1471253784676-0f039a6aae4b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80",
    ],
  },
  noir: {
    theme: "theme-noir",
    intro: {
      eyebrow: "After-hours tape",
      title: "Shadow drops from founders building in the dark",
      copy:
        "Dial into a moody reel of stealth launches, encrypted communities, and night-shift operators trading signal under the radar.",
    },
    founders: [
      ["Sage Morgan", "Ida Laurent"],
      ["Kairo Bennett", "Jun Park"],
      ["Mara Vega", "Holt Ramirez"],
      ["Ines Duarte", "Cole Maddox"],
      ["Rhea Mercer", "Eli Navarro"],
      ["Nadia Quinn", "Soren Blake"],
      ["Aria Holt", "Lukas Feray"],
      ["Juno Wilder", "Pietro Leone"],
      ["Milan Reyes", "Artem Voss"],
      ["Tamsin Cole", "Noah Idris"],
    ],
    startups: [
      {
        name: "Midnight Works",
        tagline: "Shadow-brand labs for stealth founders",
        category: "Brand",
        description:
          "Midnight Works convenes midnight oil creative teams that craft logo systems, deck polish, and voice kits under NDA while you stay heads-down on product.",
        highlights: ["Launch decks in 72 hours", "Ex-agency partner collective"],
      },
      {
        name: "Vesper Syndicate",
        tagline: "Late-night deal flow intelligence",
        category: "Capital",
        description:
          "Vesper Syndicate pipes encrypted scout tips, private data rooms, and closing intel so emerging funds can strike before the market wakes up.",
        highlights: ["Encrypted scout network", "Realtime closing dashboards"],
      },
      {
        name: "Blacklight",
        tagline: "Signal scraping for frontier markets",
        category: "Research",
        description:
          "Blacklight surfaces under-the-radar traction, hiring bursts, and filings across deep tech verticals with a dark interface tuned for analysts.",
        highlights: ["Tracks 12K stealth teams", "Export-ready dossiers"],
      },
      {
        name: "Backchannel",
        tagline: "Private operators circle for second-time founders",
        category: "Community",
        description:
          "Backchannel hosts encrypted AMAs, redacted teardown swaps, and curated DMs so serial founders can problem-solve without leaks.",
        highlights: ["Invite-only nodes", "Weekly off-record salons"],
      },
      {
        name: "Obsidian Ops",
        tagline: "War-room automation for critical launches",
        category: "Operations",
        description:
          "Obsidian Ops maps every launch dependency into a midnight dashboard with predictive alerts and on-call specialists on standby.",
        highlights: ["24/7 launch captains", "Incident playbooks baked-in"],
      },
      {
        name: "Signal Noir",
        tagline: "Retention forecasts for stealth SaaS",
        category: "Analytics",
        description:
          "Signal Noir fuses product usage, billing signals, and sentiment to predict churn risk before it escapes into the daylight.",
        highlights: ["Dark-mode cockpit", "Segment alerts over Matrix"],
      },
      {
        name: "Nightshift",
        tagline: "Fractional operator marketplace after dark",
        category: "Talent",
        description:
          "Nightshift connects founders to veteran operators who prefer off-hour sprints, pairing timezone edges with rapid deliverables.",
        highlights: ["Global midnight roster", "Delivery SLAs guaranteed"],
      },
      {
        name: "Cipherhaus",
        tagline: "Zero-trust stacks for covert companies",
        category: "Security",
        description:
          "Cipherhaus deploys zero-trust identity, device attestation, and adversarial monitoring tuned for pre-launch startups.",
        highlights: ["Off-the-record audits", "Hardware keys shipped overnight"],
      },
      {
        name: "Ghostline",
        tagline: "Narrative co-pilots for founders in stealth",
        category: "AI",
        description:
          "Ghostline drafts investor narratives, blackout press kits, and encrypted talking points in a private workspace.",
        highlights: ["Redacted share links", "Trained on founder decks"],
      },
      {
        name: "Sable Studio",
        tagline: "Dark UI kits for premium products",
        category: "Design",
        description:
          "Sable Studio curates moody design systems, motion samples, and photo treatments tailored to high-end launches.",
        highlights: ["Ready-to-ship Figma files", "Motion presets included"],
      },
      {
        name: "Afterimage",
        tagline: "Cinematic teasers for covert reveals",
        category: "Media",
        description:
          "Afterimage produces teaser films, audio trailers, and atmospheric stills without exposing your roadmap.",
        highlights: ["In-house stealth crews", "Delivery under watermark"],
      },
      {
        name: "Gravitas",
        tagline: "Board prep rituals for late-night reviews",
        category: "Finance",
        description:
          "Gravitas assembles midnight board packets with dynamic metrics, redline tracking, and scenario toggles.",
        highlights: ["Secure LP portal", "Scenario sandboxing"],
      },
      {
        name: "Vantablend",
        tagline: "Launch strategy ghostwriters",
        category: "Marketing",
        description:
          "Vantablend ghostwrites positioning, battlecards, and drip sequences that feel handcrafted for your first reveal.",
        highlights: ["Voice cloning workbench", "NDAs baked into workspace"],
      },
      {
        name: "Nightwave",
        tagline: "Pop-up speakeasy launch venues",
        category: "Events",
        description:
          "Nightwave curates hush-hush launch venues, sonic branding, and ambient lighting packages for exclusive reveals.",
        highlights: ["12-city venue network", "Sound + lighting crews"],
      },
      {
        name: "Nullspace",
        tagline: "Dark terminal for AI code reviews",
        category: "DevTools",
        description:
          "Nullspace pairs AI reviewers with human security engineers to comb through repos without leaving traceable metadata.",
        highlights: ["Ephemeral workspaces", "Self-destructing audit logs"],
      },
      {
        name: "Pulseveil",
        tagline: "Biometric calm for founder night shifts",
        category: "Health",
        description:
          "Pulseveil keeps founders regulated with biofeedback wearables, guided decompression, and sleep shift protocols.",
        highlights: ["Hardware + coach bundle", "Sleep lab partnerships"],
      },
      {
        name: "Obscura Labs",
        tagline: "Immersive investor walk-throughs",
        category: "XR",
        description:
          "Obscura Labs builds VR walk-throughs of stealth products so backers can explore without screenshots leaking.",
        highlights: ["WebXR secure rooms", "Timed access links"],
      },
      {
        name: "Lateline",
        tagline: "Encrypted investor comms concierge",
        category: "Comms",
        description:
          "Lateline orchestrates voice-notes, transcripts, and midnight updates across your backers with traceable delivery.",
        highlights: ["Auto-encrypted digests", "Multi-channel reachouts"],
      },
    ],
    photos: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526481280695-3c46953daab3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1482192597420-4817fdd7e8b0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80",
    ],
  },
  tropic: {
    theme: "theme-tropic",
    intro: {
      eyebrow: "Sunrise lineup",
      title: "Color-drenched hype from coastal builders",
      copy:
        "Ride a tropical carousel of founders turning surf, sand, and sun into the next wave of consumer obsessions.",
    },
    founders: [
      ["Pia Solano", "Kai Rivers"],
      ["Mira Chen", "Diego Flores"],
      ["Ilan Vega", "Noemi Cruz"],
      ["Sasha Adebayo", "Luka Marin"],
      ["Callie Hart", "Juniper Noel"],
      ["Marin Fox", "Téo Carvalho"],
      ["Isla Bennett", "Rafi Calderon"],
      ["Nyla Brooks", "Ocean Navarro"],
      ["Tahiti Rao", "Leo Ventura"],
      ["Chloe Ibarra", "Mateo Sands"],
    ],
    startups: [
      {
        name: "Sunwave",
        tagline: "Vitamin-sea offsites for remote teams",
        category: "Retreats",
        description:
          "Sunwave curates saltwater recharge weeks with oceanfront villas, sound-bath nights, and async-friendly planning for global teams.",
        highlights: ["Wellness hosts on call", "14 coastal hubs live"],
      },
      {
        name: "Coral Club",
        tagline: "Beachside residencies for early founders",
        category: "Community",
        description:
          "Coral Club pairs founders with tropical co-living, mentor dinners, and investor field trips anchored near surf breaks.",
        highlights: ["6-week rotating cohorts", "Ocean-view workspace"],
      },
      {
        name: "Palma",
        tagline: "Resortwear collabs with creator-led brands",
        category: "Commerce",
        description:
          "Palma spins up capsule collections with island artisans, digital showrooms, and carbon-neutral fulfillment.",
        highlights: ["Limited runs every full moon", "Partnered with 80 makers"],
      },
      {
        name: "Tidal Bloom",
        tagline: "Sea-to-table snack subscriptions",
        category: "Food",
        description:
          "Tidal Bloom ships sun-dried fruit, kelp crisps, and botanical tonics sourced from regenerative coastal farms.",
        highlights: ["Ships worldwide cold", "Farm network across 5 reefs"],
      },
      {
        name: "Solaria",
        tagline: "Solar kits for boutique hotels",
        category: "Climate",
        description:
          "Solaria outfits boutique hotels with modular solar awnings, storage, and guest dashboards shaped for design lovers.",
        highlights: ["Install in 2 days", "ROI calculator built-in"],
      },
      {
        name: "Lagoon",
        tagline: "Tropical livestream studios",
        category: "Media",
        description:
          "Lagoon builds breezy streaming sets with misting rigs, ambient lighting, and shoppable overlays for beachfront launches.",
        highlights: ["Surf-safe equipment", "Livestream crew network"],
      },
      {
        name: "Aloe Drift",
        tagline: "Recovery pods for beach athletes",
        category: "Wellness",
        description:
          "Aloe Drift stations cryo-saunas, hydration lounges, and physiotherapy staff next to pop-up competitions.",
        highlights: ["Mobile spa fleet", "Licensed sports therapists"],
      },
      {
        name: "Citrus Press",
        tagline: "Bright branding for beverage founders",
        category: "Marketing",
        description:
          "Citrus Press juices color palettes, packaging, and launch stunts that taste like summer for new beverage lines.",
        highlights: ["Packaging sprint in 10 days", "Photo ops included"],
      },
      {
        name: "Sundial",
        tagline: "Daylight scheduling for distributed crews",
        category: "Productivity",
        description:
          "Sundial auto-balances meetings around sunshine windows, surf forecasts, and timezone overlaps.",
        highlights: ["iCal + Slack integration", "Forecast-driven nudges"],
      },
      {
        name: "Marina Ledger",
        tagline: "Cashflow tools for coastal hospitality",
        category: "Finance",
        description:
          "Marina Ledger projects seasonal cash, tide-driven foot traffic, and booking flows for boutique stays.",
        highlights: ["Occupancy anomaly alerts", "Resort PMS integrations"],
      },
      {
        name: "Drift Cart",
        tagline: "EV beach cruisers for resort campuses",
        category: "Mobility",
        description:
          "Drift Cart deploys electric carts with swappable batteries, guest playlists, and revenue sharing for resorts.",
        highlights: ["Fleet telemetry dashboard", "Delivered in 30 days"],
      },
      {
        name: "Breezeline",
        tagline: "Pop-up mesh internet for festivals",
        category: "Connectivity",
        description:
          "Breezeline sets up mesh internet, ticketing beacons, and guest analytics across beachfront festivals.",
        highlights: ["Weatherproof nodes", "24/7 on-call engineers"],
      },
      {
        name: "Nectar Lab",
        tagline: "Mocktail concentrates for summer bars",
        category: "Food",
        description:
          "Nectar Lab formulates tropical mocktail bases with shelf-stable ingredients and traceable sourcing.",
        highlights: ["Zero-proof expert team", "Seasonal flavor drops"],
      },
      {
        name: "Waveform",
        tagline: "Music licensing for surf edits",
        category: "Media",
        description:
          "Waveform clears sun-soaked tracks and loops for creators filming wave edits and coastal content.",
        highlights: ["Instant sync rights", "Curated tropical playlists"],
      },
      {
        name: "Hammock HQ",
        tagline: "Smart loungers for hotel rooftops",
        category: "Hardware",
        description:
          "Hammock HQ manufactures IoT loungers with occupancy sensors, mist control, and upsell prompts.",
        highlights: ["Weatherproof fabric", "Connected upsell triggers"],
      },
      {
        name: "Splashline",
        tagline: "Floating stages for brand launches",
        category: "Events",
        description:
          "Splashline engineers modular floating stages, LED docks, and drone cinematography for splashy reveals.",
        highlights: ["Deploys in under 6 hours", "Crewed by marine experts"],
      },
      {
        name: "Coconut Cloud",
        tagline: "Creator houseboats for content crews",
        category: "Creator",
        description:
          "Coconut Cloud charters houseboats with editing bays, drone docks, and brand-ready sets along tropical coasts.",
        highlights: ["Crewed captains + chefs", "Sponsorship placement deck"],
      },
      {
        name: "Vista Azul",
        tagline: "Investment co-ops for surf towns",
        category: "Real Estate",
        description:
          "Vista Azul organizes fractional ownership for eco-stays, aligning locals, investors, and founders on revitalizing surf towns.",
        highlights: ["Legal + finance stack", "Impact reporting dashboards"],
      },
    ],
    photos: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521292270410-a8c7a5f8f5c4?auto=format&fit=crop&w=800&q=80",
    ],
  },
};

const editionKeys = Object.keys(editions);
const themeClasses = editionKeys.map((key) => editions[key].theme);

let currentEditionKey = editionSelect && editions[editionSelect.value] ? editionSelect.value : editionKeys[0];
let currentEdition = editions[currentEditionKey];

if (editionSelect && editionSelect.value !== currentEditionKey) {
  editionSelect.value = currentEditionKey;
}

const batchSize = 12;
let cursor = 0;
let totalRendered = 0;
let isLoading = false;

function applyTheme(theme) {
  document.body.classList.remove(...themeClasses);
  document.body.classList.add(theme);
}

// Filter bar state and elements
const filterChips = document.getElementById("filter-chips");
const filterbarEl = document.querySelector(".filterbar");
const filterSearch = document.getElementById("filter-search");
const filterGo = document.getElementById("filter-go");
const viewButtons = document.querySelectorAll(".view__btn");

let activeDataset = currentEdition.startups;
let currentCategory = "All";
let currentQuery = "";
let currentView = "grid"; // 'grid' | 'list'

function getCategories() {
  const set = new Set((currentEdition.startups || []).map((s) => s.category));
  return ["All", ...Array.from(set).sort()];
}

function buildChips() {
  if (!filterChips) return;
  filterChips.innerHTML = "";
  getCategories().forEach((cat) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip" + (cat === currentCategory ? " is-active" : "");
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      currentCategory = cat;
      buildChips();
      applyFilters();
    });
    filterChips.appendChild(btn);
  });
}

function applyFilters() {
  const q = (currentQuery || "").toLowerCase();
  const src = currentEdition.startups || [];
  activeDataset = src.filter((s) => {
    const inCat = currentCategory === "All" || s.category === currentCategory;
    if (!q) return inCat;
    const text = `${s.name} ${s.tagline} ${s.description}`.toLowerCase();
    return inCat && text.includes(q);
  });
  resetFeed();
  renderInitialBatches();
}

function setView(mode) {
  if (!stream) return;
  currentView = mode === "list" ? "list" : "grid";
  const isList = currentView === "list";
  stream.classList.toggle("stream--list", isList);
  viewButtons.forEach((btn) => {
    const active = btn.dataset.view === currentView;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-selected", String(active));
  });
  // Re-render in the new view
  resetFeed();
  renderInitialBatches();
}

function updateIntro(intro) {
  if (introEyebrow) {
    introEyebrow.textContent = intro.eyebrow;
  }
  if (introTitle) {
    introTitle.textContent = intro.title;
  }
  if (introCopy) {
    introCopy.textContent = intro.copy;
  }
}

function resetFeed() {
  stream.innerHTML = "";
  cursor = 0;
  totalRendered = 0;
}

function createCard(data, seed) {
  const card = cardTemplate.content.firstElementChild.cloneNode(true);
  const media = card.querySelector(".card__media");
  const title = card.querySelector(".card__title");
  const category = card.querySelector(".card__category");
  const founderLine = card.querySelector(".card__founder");
  const tagline = card.querySelector(".card__tagline");
  const backTitle = card.querySelector(".card__back-title");
  const backCopy = card.querySelector(".card__back-copy");
  const highlightsList = card.querySelector(".card__highlights");
  const frontFace = card.querySelector(".card__face--front");
  const backFace = card.querySelector(".card__face--back");

  const photos = currentEdition.photos;
  if (photos.length) {
    const photo = photos[seed % photos.length];
    media.style.backgroundImage = `url(${photo})`;
  }

  title.textContent = data.name;
  category.textContent = data.category;
  tagline.textContent = data.tagline;

  const founderSet = currentEdition.founders[seed % currentEdition.founders.length];
  founderLine.textContent = founderSet.join(" · ");

  backTitle.textContent = data.name;
  backCopy.textContent = data.description;
  highlightsList.innerHTML = "";
  data.highlights.forEach((highlight) => {
    const item = document.createElement("li");
    item.textContent = highlight;
    highlightsList.appendChild(item);
  });

  frontFace.setAttribute("aria-hidden", "false");
  backFace.setAttribute("aria-hidden", "true");

  function toggleFlip() {
    const isFlipped = card.classList.toggle("card--flipped");
    card.setAttribute("aria-expanded", isFlipped ? "true" : "false");
    frontFace.setAttribute("aria-hidden", isFlipped ? "true" : "false");
    backFace.setAttribute("aria-hidden", isFlipped ? "false" : "true");
  }

  card.addEventListener("click", toggleFlip);
  const activatorKeys = ["Enter", " ", "Spacebar", "Space"];

  card.addEventListener("keydown", (event) => {
    if (activatorKeys.includes(event.key)) {
      event.preventDefault();
      toggleFlip();
    }
  });

  return card;
}

function getNextBatch() {
  const dataset = activeDataset || currentEdition.startups;
  if (!dataset.length) {
    return [];
  }
  const batch = [];
  for (let i = 0; i < batchSize; i++) {
    const index = (cursor + i) % dataset.length;
    batch.push(dataset[index]);
  }
  cursor += batchSize;
  return batch;
}

function createRow(data, seed) {
  const row = rowTemplate.content.firstElementChild.cloneNode(true);
  const media = row.querySelector(".row__media");
  const title = row.querySelector(".row__title");
  const founder = row.querySelector(".row__founder");
  const category = row.querySelector(".row__category");
  // Pick a photo
  const photos = currentEdition.photos || [];
  if (photos.length) {
    media.style.backgroundImage = `url(${photos[seed % photos.length]})`;
  }
  title.textContent = data.name;
  const founderSet = currentEdition.founders[seed % currentEdition.founders.length];
  founder.textContent = founderSet.join(", ");
  category.textContent = data.category;
  return row;
}

function renderBatch() {
  const batch = getNextBatch();
  if (!batch.length) {
    return;
  }

  const fragment = document.createDocumentFragment();
  batch.forEach((startup, idx) => {
    const seed = totalRendered + idx;
    const node = currentView === "list" ? createRow(startup, seed) : createCard(startup, seed);
    fragment.appendChild(node);
  });

  totalRendered += batch.length;
  stream.appendChild(fragment);
}

function renderInitialBatches() {
  for (let i = 0; i < 3; i++) {
    renderBatch();
  }
}

function showLoading(show) {
  loading.setAttribute("aria-hidden", show ? "false" : "true");
}

async function loadMore() {
  if (isLoading) return;
  isLoading = true;
  showLoading(true);

  await new Promise((resolve) => setTimeout(resolve, 450));
  renderBatch();
  showLoading(false);
  isLoading = false;
}

function handleScroll() {
  const scrollPosition = window.innerHeight + window.scrollY;
  const threshold = document.body.offsetHeight - window.innerHeight * 1.2;
  if (scrollPosition >= threshold) {
    loadMore();
  }

  // Auto-hide filter bar on scroll down, show on scroll up/near top
  if (filterbarEl) {
    handleHideBarOnScroll();
  }
}

let __lastY = window.scrollY || 0;
function handleHideBarOnScroll() {
  const y = window.scrollY || 0;
  const goingDown = y > __lastY;
  if (y <= 8) {
    filterbarEl.classList.remove("filterbar--hidden");
  } else if (goingDown && y > 120) {
    filterbarEl.classList.add("filterbar--hidden");
  } else {
    filterbarEl.classList.remove("filterbar--hidden");
  }
  __lastY = y;
}

function setEdition(key) {
  if (!editions[key]) {
    return;
  }
  if (key === currentEditionKey) {
    return;
  }

  currentEditionKey = key;
  currentEdition = editions[key];
  if (editionSelect && editionSelect.value !== key) {
    editionSelect.value = key;
  }

  applyTheme(currentEdition.theme);
  updateIntro(currentEdition.intro);
  // Reset filters for new edition
  activeDataset = currentEdition.startups;
  currentCategory = "All";
  currentQuery = "";
  if (filterSearch) filterSearch.value = "";
  buildChips();
  resetFeed();
  showLoading(false);
  isLoading = false;
  renderInitialBatches();
  handleScroll();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

applyTheme(currentEdition.theme);
updateIntro(currentEdition.intro);
// Initialize filters and view
activeDataset = currentEdition.startups;
buildChips();
renderInitialBatches();
handleScroll();
// Ensure correct initial visibility
if (filterbarEl) handleHideBarOnScroll();

window.addEventListener("scroll", handleScroll, { passive: true });
window.addEventListener("resize", handleScroll);

if (editionSelect) {
  editionSelect.addEventListener("change", (event) => {
    setEdition(event.target.value);
  });
}

// Wire up search and view controls
if (filterGo) {
  filterGo.addEventListener("click", () => {
    currentQuery = (filterSearch && filterSearch.value ? filterSearch.value : "").trim();
    applyFilters();
  });
}
if (filterSearch) {
  filterSearch.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      currentQuery = (filterSearch.value || "").trim();
      applyFilters();
    }
  });
}
if (viewButtons && viewButtons.length) {
  viewButtons.forEach((btn) => {
    btn.addEventListener("click", () => setView(btn.dataset.view));
  });
}
