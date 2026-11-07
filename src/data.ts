// All the text on the site lives here. Edit this file to update content.
// Anything written as "[ ... ]" shows up in amber on the site as a spot to fill in.

export const profile = {
  name: "Satwik Dubey",
  role: "Fullstack developer",
  about:
    "Undergrad in AI & ML. I build full-stack products that solve real problems, most of them real-time, a few of them AI.",
  status: "open to internships & collaborations",
  email: "dubeysatwik0@gmail.com",
  resume: "https://drive.google.com/file/d/1Qj_9pBMPQRs198vVPL0uzmIZWX4Ic9iO/view?usp=sharing",
}

export const socials = [
  { label: "GitHub", href: "https://github.com/Satwik-Dubey" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/satwikdubey10/" },
  // { label: "X", href: "https://x.com/its_satwik" },
]

export const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
]

export type Project = {
  file: string
  kind: string
  title: string
  tagline: string
  desc: string
  stack: string[]
  img: string
  links: { label: string; href: string }[]
  isNew?: boolean
}

export const projects: Project[] = [
  {
    file: "handsup.exe",
    kind: "Web app",
    isNew: true,
    title: "HandsUp",
    tagline: "Know the moment your class gets lost.",
    desc: "Live classroom feedback. Students tap “I'm lost” from their phone with no account, the teacher watches an Understanding score move in real time, and AI flags confusing moments and writes the after-class report.",
    stack: ["Next.js", "Socket.IO", "Redis", "Postgres", "Groq"],
    img: "/projects/handsup.jpg",
    links: [
      { label: "Live", href: "https://hands-up-alpha.vercel.app" },
      // { label: "Code", href: "https://github.com/Satwik-Dubey/<handsup-repo>" },
    ],
  },
  {
    file: "votethebeat.exe",
    kind: "Web app",
    title: "VoteTheBeat",
    tagline: "Let the crowd decide the music.",
    desc: "A real-time music voting platform. Groups create a shared session, add songs and vote live, and the top-voted track plays next. WebSockets keep every phone in sync.",
    stack: ["React", "Node", "Socket.IO", "Postgres", "Docker"],
    img: "/projects/votethebeat.jpg",
    links: [
      { label: "Live", href: "https://vote-the-beat-app.vercel.app/" },
      { label: "Code", href: "https://github.com/Satwik-Dubey/VoteTheBeat" },
      { label: "Demo", href: "https://youtu.be/nXKknfs2YVc" },
    ],
  },
  {
    file: "nextgig.exe",
    kind: "AI web app",
    title: "NextGig",
    tagline: "AI tools to build careers, not just resumes.",
    desc: "An AI career platform that builds resumes, writes cover letters, runs skill assessments and surfaces industry insights, personalised to each user.",
    stack: [],
    img: "/projects/nextgig.jpg",
    links: [
      { label: "Live", href: "https://nextgigg.vercel.app/" },
      { label: "Code", href: "https://github.com/Satwik-Dubey/nextgig" },
    ],
  },
  {
    file: "schedulo.exe",
    kind: "Web app",
    title: "Schedulo",
    tagline: "Plan smarter. Stay consistent.",
    desc: "Daily planning with smart scheduling, reminders and productivity analytics in one place, so goals turn into habits.",
    stack: [],
    img: "/projects/schedulo.jpg",
    links: [
      { label: "Live", href: "https://schedulo-pi.vercel.app/" },
      { label: "Code", href: "https://github.com/Satwik-Dubey/Schedulo" },
    ],
  },
  {
    file: "hosteldekho.exe",
    kind: "Web app",
    title: "Hostel Dekho",
    tagline: "Find your next stay near campus.",
    desc: "A student accommodation platform to discover, contact and book hostels and PGs near college, from search to booking.",
    stack: [],
    img: "/projects/hosteldekho.jpg",
    links: [
      { label: "Demo", href: "https://drive.google.com/file/d/127QHASuEZUnMFISua5LYyQj5jONyRrOd/view?usp=sharing" },
      { label: "Code", href: "https://github.com/Satwik-Dubey/hosteldekho/tree/main" },
    ],
  },
  {
    file: "voicebridge.exe",
    kind: "AI web app",
    title: "Voice Bridge",
    tagline: "Instant translation across text, voice and images.",
    desc: "Real-time multilingual translation for text, audio and photos, built on Groq so replies come back fast enough for a live conversation.",
    stack: ["Groq"],
    img: "/projects/voicebridge.jpg",
    links: [
      { label: "Demo", href: "https://youtu.be/W5h3b5eoeSU?si=-QVBgrqkH5myAMwI" },
      { label: "Code", href: "https://github.com/Satwik-Dubey/MultilingualCommunicator" },
    ],
  },
  {
    file: "smartsnip.crx",
    kind: "Chrome extension",
    title: "SmartSnip",
    tagline: "Read less. Understand more.",
    desc: "A lightweight Chrome extension that summarises any web page with AI, in several formats, with a privacy-first minimal UI.",
    stack: [],
    img: "/projects/smartsnip.jpg",
    links: [{ label: "Code", href: "https://github.com/Satwik-Dubey/SmartSnip" }],
  },
]

export const stack: Record<string, string[]> = {
  frontend: ["HTML", "CSS", "Tailwind", "JavaScript", "TypeScript", "React", "Next.js"],
  backend: ["Java", "Spring Boot", "Node.js", "Express", "Prisma"],
  databases: ["PostgreSQL", "MongoDB", "Firebase", "Supabase", "Redis"],
  devops: ["Docker", "Nginx", "AWS", "Vercel"],
  tools: ["Git", "GitHub", "Android Studio", "Figma"],
}

export const facts: { label: string; value: string }[] = [
  { label: "Name", value: "Satwik Dubey" },
  { label: "Role", value: "Fullstack developer" },
  { label: "Study", value: "B.Tech in Computer Science [ Artificial Intelligence & Machine Learning ]" },
  { label: "Location", value: "even i dont know" },
]

// Newest first. Replace the [ ... ] rows with real entries, or delete them.
export const journey: { what: string; when: string }[] = [
  // { what: "Shipped HandsUp, live classroom feedback", when: "2026" },
  // { what: "[ MuSigma ]", when: "[ Present ]" },
  { what: "[ AU Small Finance Bank ]", when: "[ Jun 2025 - Aug 2025 ]" },
  { what: "[ Manipal University Jaipur ]", when: "[ 2023-2027 ]" },
]

export const ticker = [
  ["Now shipping", "HandsUp, live feedback for classrooms"],
  ["Stack", "React · Next.js · Node · Postgres · Docker"],
  ["Status", "open to internships"],
  ["Projects shipped", String(projects.length)],
]
