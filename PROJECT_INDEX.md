# Project Index: my_portfolio

Generated: 2026-03-28

## 📁 Project Structure

```
my_portfolio/
├── src/
│   ├── App.jsx                          # Root component — renders all sections in order
│   ├── index.jsx                        # React DOM entry point
│   ├── data.jsx                         # All site content (links, skills, projects, experience, socials)
│   ├── imgs/                            # Static images (skills icons, project screenshots)
│   └── components/
│       ├── Nav/           Nav.jsx        # Sticky navigation with anchor links
│       ├── Hero/          Hero.jsx       # Landing hero section
│       ├── AboutMe/       AboutMe.jsx    # About section
│       ├── Skills/        Skills.jsx     # Skills grid (HTML, CSS, JS, React, Node, Next)
│       ├── Services/      Services.jsx   # Services offered (3 cards)
│       ├── Experience/    Experience.jsx # Work experience timeline
│       ├── Portfolio/
│       │   ├── Portfolio.jsx            # Portfolio section wrapper
│       │   ├── Projects.jsx             # Filterable projects grid
│       │   └── Project.jsx              # Single project card
│       ├── Contact/
│       │   ├── Contact.jsx              # Contact section wrapper
│       │   ├── ContactForm.jsx          # EmailJS-powered contact form
│       │   └── Connect.jsx              # Social links display
│       ├── Footer/        Footer.jsx     # Footer
│       ├── Break/         Break.jsx      # Section divider
│       └── common/
│           └── BackgroundElements.jsx   # Shared decorative background blobs
├── public/
│   └── manifest.json
├── package.json
├── vite.config.js
└── vercel.json
```

## 🚀 Entry Points

- **Dev server:** `npm run dev` → Vite on localhost
- **Build:** `npm run build` → Vite production build
- **Preview:** `npm run preview`
- **React mount:** `src/index.jsx` → mounts `<App />` into `#root`

## 📦 Core Modules

### `src/data.jsx`
- **Purpose:** Single source of truth for all content
- **Exports:**
  - `links` — Nav anchor links (7 sections)
  - `skills` — Skill icons array (HTML, CSS, JS, React, Node, Next)
  - `services` — Services offered (3 items)
  - `projectsData` — 11 projects with category, image, demo/GitHub links
  - `projectsNav` — Project filter categories (all, htmlAndCss, js, react, nodejs)
  - `experience` — 2 work entries (Native Code IQ, KAL BNYAN-EL MARSOS)
  - `socialLinks` — LinkedIn, GitHub

### `src/App.jsx`
- **Purpose:** Composes all section components top-to-bottom
- **Order:** Nav → Hero → AboutMe → Skills → Services → Experience → Portfolio → Contact → Footer

### `src/components/Portfolio/`
- **Purpose:** Filterable project gallery
- `Portfolio.jsx` — section shell
- `Projects.jsx` — renders filtered list from `projectsData`
- `Project.jsx` — individual card with demo/GitHub links

### `src/components/Contact/`
- **Purpose:** Contact form + social links
- `ContactForm.jsx` — uses `@emailjs/browser` to send emails
- `Connect.jsx` — renders `socialLinks`

## 🔧 Configuration

- `vite.config.js` — Vite build config with `@vitejs/plugin-react`
- `vercel.json` — Vercel deployment config
- `package.json` — Scripts: dev, build, preview, test (vitest)

## 🔗 Key Dependencies

| Package | Version | Purpose |
|---|---|---|
| react | ^18.2.0 | UI framework |
| react-dom | ^18.2.0 | DOM rendering |
| framer-motion | ^5.6.0 | Animations & transitions |
| react-icons | ^4.4.0 | Icon library (BsGithub, BsLinkedin…) |
| react-intersection-observer | ^9.16.0 | Scroll-triggered animations |
| @emailjs/browser | ^3.7.0 | Contact form email sending |
| react-router-dom | ^6.3.0 | Routing (installed, minimal use) |
| vite | ^6.3.5 | Build tool |
| vitest | ^3.2.2 | Unit testing |

## 🗂️ Section Map (anchor IDs)

| Anchor | Component | Data Source |
|---|---|---|
| `#home` | Hero | hardcoded |
| `#about` | AboutMe | hardcoded |
| `#skills` | Skills | `skills` |
| `#services` | Services | `services` |
| `#experience` | Experience | `experience` |
| `#portfolio` | Portfolio | `projectsData`, `projectsNav` |
| `#contact` | Contact | `socialLinks` |

## 👤 Owner Info

- **Developer:** Youssef Fawzi (Youssef548)
- **GitHub:** https://github.com/Youssef548
- **LinkedIn:** https://www.linkedin.com/in/yousef-fawzy/
- **Git remote:** `git@github-personal:Youssef548/my_portfolio.git`

## 🧪 Tests

- No test files present. Vitest configured but unused.

## 📝 Quick Start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # dist/
```
