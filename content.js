/* =====================================================================
   WEBSITE CONTENT
   Edit this file on GitHub to change the words, links and pictures.
   Open it, click the pencil icon, make the change, then "Commit changes".
   The site updates by itself in a minute or two.

   Rules so nothing breaks:
   - Keep text inside "double quotes".
   - Keep the comma at the end of each line or block, like the ones above it.
   - To add an item to a list, copy a whole line or block and paste it below.
   - Pictures: upload them first (see README.md), then type their path here.
   ===================================================================== */

window.SITE = {

  /* ---------- Top of the page ----------
     Words between <em> and </em> show in orange italics. <br> starts a new line. */
  intro: "I'm Aquib, a visual designer from Mumbai working in <em>graphic design and motion</em> since 2018. I tell brand stories across fintech, media and marketing, lead campaigns end to end in digital and print, and use GenAI tools to move faster.",
  availability: "Available for<br>full time",

  /* ---------- Contact and links ---------- */
  whatsapp: "919911611956",              // country code + number, no + or spaces
  email: "aquib99116@gmail.com",
  behance: "https://www.behance.net/aquib",
  vimeo: "https://vimeo.com/user167879510",
  linkedin: "https://www.linkedin.com/in/imcrazy/",
  resume: "https://drive.google.com/file/d/1OALwhe5fsCcVFWB88EsGUzT_iCv5m2rg/view?usp=drive_link",                  // upload resume.pdf, or paste a Google Drive / Dropbox link

  /* ---------- Scrolling words under the top section ---------- */
  marquee: ["Graphic design", "Motion graphics", "Static designs", "Dynamic videos", "Visual concepts", "Art direction"],

  /* ---------- Selected work ----------
     Each block is one project card. Order here = order on the site.
     Pictures: upload to the work folder, then set cover and gallery. */
  projects: [
  {
    key: "gfps",
    title: "Global Financial Planners Summit",
    size: "big",          // big, half or normal
    filter: "space",      // identity, space, motion, print or digital
    tag: "Event identity",
    badge: "Event",
    short: "A full venue world for a one-day financial planning summit.",
    story: "A one-day summit at JW Marriott Mumbai needed to feel bigger than a conference. I worked on the visual world from the entrance to the main stage.",
    role: "Art direction, venue branding",
    year: "2026",
    where: "Mumbai",
    points: [
      "Design language for the whole venue",
      "Two main stage options",
      "Photobooth and creative standees",
      "Experience zones and walkthroughs",
      "Legacy wall at the entrance",
      "Stationery and identity collateral"
    ],
    cover: "",        // e.g. "work/gfps.jpg"  (leave "" to use work/gfps.jpg automatically, or the animated cover if there is none)
    gallery: []       // e.g. ["work/gfps-2.jpg", "work/gfps-3.jpg"]  (leave [] to pick up work/gfps-2.jpg, -3.jpg ... automatically)
  },
  {
    key: "studio",
    title: "The podcast studio",
    size: "normal",          // big, half or normal
    filter: "space",      // identity, space, motion, print or digital
    tag: "Set design",
    badge: "Set",
    short: "A studio room designed from bare walls, lit for a three-camera setup.",
    story: "A new office floor and one empty room. I planned how it looks on camera, then shot in it every week.",
    role: "Set design, lighting, shoot direction",
    year: "2026",
    where: "Mumbai",
    points: [
      "Backdrop, bookshelf and seating plan",
      "Lighting and colour temperature",
      "Curtains and soundproofing",
      "Three-camera blocking: master and wing",
      "A full spec sheet the team built from"
    ],
    cover: "",        // e.g. "work/studio.jpg"  (leave "" to use work/studio.jpg automatically, or the animated cover if there is none)
    gallery: []       // e.g. ["work/studio-2.jpg", "work/studio-3.jpg"]  (leave [] to pick up work/studio-2.jpg, -3.jpg ... automatically)
  },
  {
    key: "imi",
    title: "India Macro Indicators",
    size: "normal",          // big, half or normal
    filter: "motion",      // identity, space, motion, print or digital
    tag: "Motion system",
    badge: "Weekly",
    short: "A weekly motion language for macro data. Bars, flows and the rupee.",
    story: "Economic data is dry until it moves. I directed a data-card motion system that makes one number land per beat.",
    role: "Motion direction, data design",
    year: "2026",
    where: "Weekly series",
    points: [
      "Illustrated data-card style",
      "Colour that changes by topic",
      "Count-ups, comparisons and reveals",
      "Transparent overlays for the edit",
      "Editorial collage beats for big stories"
    ],
    cover: "",        // e.g. "work/imi.jpg"  (leave "" to use work/imi.jpg automatically, or the animated cover if there is none)
    gallery: []       // e.g. ["work/imi-2.jpg", "work/imi-3.jpg"]  (leave [] to pick up work/imi-2.jpg, -3.jpg ... automatically)
  },
  {
    key: "mag",
    title: "Magazine covers",
    size: "big",          // big, half or normal
    filter: "print",      // identity, space, motion, print or digital
    tag: "Editorial",
    badge: "Editorial",
    short: "Covers for a quarterly finance magazine. One question, one image.",
    story: "A cover has two seconds. For the real estate issue the whole cover asks one thing: is a house actually an investment?",
    role: "Cover design, art direction",
    year: "2026",
    where: "Quarterly print and PDF",
    points: [
      "Cover concept and typography",
      "Real building imagery over illustration",
      "Hierarchy built around the question",
      "Layout system for inside spreads"
    ],
    cover: "",        // e.g. "work/mag.jpg"  (leave "" to use work/mag.jpg automatically, or the animated cover if there is none)
    gallery: []       // e.g. ["work/mag-2.jpg", "work/mag-3.jpg"]  (leave [] to pick up work/mag-2.jpg, -3.jpg ... automatically)
  },
  {
    key: "iid",
    title: "India in Data",
    size: "half",          // big, half or normal
    filter: "identity",      // identity, space, motion, print or digital
    tag: "Identity",
    badge: "Own venture",
    short: "Identity for a data journalism site. A country measured on a ruler.",
    story: "A data journalism site about India needed a mark that felt measured, not decorated. Black, white and a ruler.",
    role: "Logo and identity",
    year: "2026",
    where: "indiaindata.online",
    points: [
      "India silhouette on a numbered ruler",
      "Plain black and white palette",
      "Textured kraft-paper variant",
      "Full asset set for web and social"
    ],
    cover: "",        // e.g. "work/iid.jpg"  (leave "" to use work/iid.jpg automatically, or the animated cover if there is none)
    gallery: []       // e.g. ["work/iid-2.jpg", "work/iid-3.jpg"]  (leave [] to pick up work/iid-2.jpg, -3.jpg ... automatically)
  },
  {
    key: "game",
    title: "Accept or Reject",
    size: "half",          // big, half or normal
    filter: "digital",      // identity, space, motion, print or digital
    tag: "Interactive",
    badge: "Kiosk",
    short: "A money game for touch screens in malls. Swipe, decide, see what happens.",
    story: "People in a mall give you ten seconds. The game asks one money question at a time and answers it with a consequence.",
    role: "Concept, UI and interaction",
    year: "2026",
    where: "Mall touch screens",
    points: [
      "Two-button decision mechanic",
      "Big type for a standing audience",
      "Instant feedback after every choice",
      "Built to run on a kiosk all day"
    ],
    cover: "",        // e.g. "work/game.jpg"  (leave "" to use work/game.jpg automatically, or the animated cover if there is none)
    gallery: []       // e.g. ["work/game-2.jpg", "work/game-3.jpg"]  (leave [] to pick up work/game-2.jpg, -3.jpg ... automatically)
  },
  {
    key: "ebco",
    title: "Room scenes for a fittings catalogue",
    size: "normal",          // big, half or normal
    filter: "print",      // identity, space, motion, print or digital
    tag: "Catalogue",
    badge: "In progress",
    short: "36 print-quality room scenes framed to hold furniture fittings.",
    story: "A furniture fittings catalogue sells the room, not the hinge. Every scene is framed so the product can drop in later.",
    role: "Art direction, scene planning",
    year: "2026",
    where: "Print catalogue",
    points: [
      "Living room, bedroom, kitchen and washroom",
      "Framing planned around product placement",
      "High resolution for print",
      "Consistent light across all 36 scenes"
    ],
    cover: "",        // e.g. "work/ebco.jpg"  (leave "" to use work/ebco.jpg automatically, or the animated cover if there is none)
    gallery: []       // e.g. ["work/ebco-2.jpg", "work/ebco-3.jpg"]  (leave [] to pick up work/ebco-2.jpg, -3.jpg ... automatically)
  },
  {
    key: "boat",
    title: "A music voyage",
    size: "normal",          // big, half or normal
    filter: "identity",      // identity, space, motion, print or digital
    tag: "Experience concept",
    badge: "Concept",
    short: "A concept for a yearly three-day music journey on a boat.",
    story: "A concept for an audio brand: take its community out to sea for three days of music and switching off.",
    role: "Concept, experience design",
    year: "2026",
    where: "Pitch",
    points: [
      "Application by song and short story",
      "Round trip, three days at sea",
      "Non-transferable passes",
      "An opening activity built on imagination"
    ],
    cover: "",        // e.g. "work/boat.jpg"  (leave "" to use work/boat.jpg automatically, or the animated cover if there is none)
    gallery: []       // e.g. ["work/boat-2.jpg", "work/boat-3.jpg"]  (leave [] to pick up work/boat-2.jpg, -3.jpg ... automatically)
  },
  {
    key: "printz",
    title: "India Printz",
    size: "normal",          // big, half or normal
    filter: "digital",      // identity, space, motion, print or digital
    tag: "Web and brand",
    badge: "Own venture",
    short: "My own prints and stitches business, rebuilt for search and for scroll.",
    story: "Printing is a craft business. The site had to look as sharp as the print and still rank on search.",
    role: "Brand, web design, SEO",
    year: "2026",
    where: "indiaprintz.com",
    points: [
      "Halftone and stitch visual language",
      "SEO-first page structure",
      "Product categories that read in one glance",
      "Mobile-first layout"
    ],
    cover: "",        // e.g. "work/printz.jpg"  (leave "" to use work/printz.jpg automatically, or the animated cover if there is none)
    gallery: []       // e.g. ["work/printz-2.jpg", "work/printz-3.jpg"]  (leave [] to pick up work/printz-2.jpg, -3.jpg ... automatically)
  }
  ],

  /* ---------- Tool icons on the Direction board ----------
     Upload the icon files to the icons folder. */
  apps: [
    { name: "Photoshop", icon: "icons/photoshop.png", use: "Retouching and compositing" },
    { name: "Illustrator", icon: "icons/illustrator.png", use: "Vector graphics and identity" },
    { name: "Premiere Pro", icon: "icons/premiere-pro.png", use: "Video editing" },
    { name: "Lightroom", icon: "icons/lightroom.png", use: "Photo colour and grading" },
    { name: "Acrobat", icon: "icons/acrobat.png", use: "PDFs, proofing and print files" },
    { name: "After Effects", icon: "icons/after-effects.png", use: "Motion graphics" },
    { name: "InDesign", icon: "icons/indesign.png", use: "Layouts and print" },
    { name: "Figma", icon: "icons/figma.png", use: "UI design and prototyping" }
  ],

  /* ---------- My experience (newest first) ---------- */
  experienceNote: "Since 2018 · 7 teams",
  experience: [
    { years: "2025 to Now", role: "Graphic Design Manager", company: "1 Finance", note: "Leads design across events, studio sets, motion, the magazine and social.", current: true },
    { years: "2022 to 2025", role: "Graphic Designer", company: "Attentive", note: "" },
    { years: "2021 to 2022", role: "Senior Graphic Designer and Visualizer", company: "MEDIAMIX", note: "" },
    { years: "2020 to 2021", role: "Senior Graphic Designer", company: "Loanwalle", note: "" },
    { years: "2020 to 2020", role: "Senior Graphic Designer", company: "Cureos", note: "" },
    { years: "2019 to 2020", role: "Graphic Designer", company: "NITD", note: "" },
    { years: "2018 to 2019", role: "Graphic Designer", company: "creativend", note: "" }
  ],

  /* ---------- My skills ---------- */
  skills: ["Photoshop", "Illustrator", "After Effects", "Figma", "InDesign", "Gen AI", "Visual design", "Offline creatives", "Art direction", "Team leadership", "Problem solving"],

  /* ---------- What I do ---------- */
  whatIDoIntro: "Brand-aligned visuals with a clear business goal behind them, shaped around each brand's voice, from the first concept to the final file.",
  whatIDo: [
    { title: "Graphic design", line: "Identity, social, print and campaign creatives" },
    { title: "Motion graphics", line: "Animated stories, data and brand motion" },
    { title: "Static designs", line: "Posts, covers, ads and layouts" },
    { title: "Dynamic videos", line: "Edits and video pieces for social and events" },
    { title: "Visual concepts", line: "Ideas taken from a brief to a finished look" }
  ]
};
