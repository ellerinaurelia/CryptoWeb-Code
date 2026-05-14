<div align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="80" height="80" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="Next.js" width="80" height="80" />

  <br />

  <h1 align="center">🌐 CRYPTEX: Modern Crypto Exchange Frontend</h1>

  <p align="center">
    <strong>Buy & Sell Digital Assets With Zero-Latency Rendering</strong>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Framework-Next.js_14-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/Library-React_18-%23004ecc?style=for-the-badge&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/Language-TypeScript-%233178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Status-Active-%2300ba34?style=for-the-badge" alt="Status" />
  </p>
</div>

---

## 🚀 About The Project

**Cryptex** is a highly interactive, component-based frontend architecture designed to look exactly like a multi-million dollar cryptocurrency exchange (while actively hiding the fact that the backend is currently powered by hopes, dreams, and local storage). 

Built with a strict adherence to **Fast Client-Side Rendering**, **Clean Code Principles (DRY)**, and **Seamless User Experience**—mostly because we refuse to suffer through reading our own messy spaghetti code three days after writing it. The platform simulates a high-stakes trading environment featuring dynamic state management, militant route protection, and a session system that genuinely tries its best.

### ✨ Key Features

* 📈 **Zero-Latency Market Filtering:** Non-destructive data filtering using React `useState` and Ternary Operators. Switches categories (NFT, Metaverse, DeFi) instantly, because we know crypto traders have absolutely zero patience for loading spinners.
* 🔒 **Route Protection System:** Simulates backend authentication with a strict digital bouncer. Users must formally pass through the `Login` gateway; trying to forcefully type `/dashboard` into the URL will get you politely kicked back to the login screen.
* 🧩 **Modular Architecture:** The UI is violently decoupled into reusable, independent components (`Header`, `MarketUpdate`, `Preloader`). This ensures high scalability and makes it incredibly easy to pinpoint exactly which file to blame when something breaks.
* ⚡ **Smart Preloader:** Utilizes browser `sessionStorage` to show off our cool loading animation exactly *once* per session. We know the animation looks awesome, but we also know you'd hate us if you had to see it on every single page load.
* 📱 **Fully Responsive:** Smooth DOM manipulation for mobile navigation locks and scroll-event listeners. Because we are fully aware that 90% of users will judge this platform from a 6-inch screen while lying in bed.

---

## 🛠️ Component Blueprint

This project implements strict separation of concerns within the `src/components/` directory. All 9 components work in absolute harmony (most of the time). Here is the anatomy of our logic:

| Component | Role & Technical Highlight |
| :--- | :--- |
| **`MarketUpdate.tsx`** | **The Data Engine.** Utilizes `array.filter()` and `array.map()` to ruthlessly sort your coins into green indicators (financial happiness) and red indicators (margin calls). |
| **`Header.tsx`** | **The Interaction Hub.** Actively stalks your scroll behavior via `useEffect` and uses DOM manipulation (`document.body.classList.add`) to freeze the screen when the mobile menu is open, preventing scrolling chaos. |
| **`Preloader.tsx`** | **The UX Bodyguard.** Employs `sessionStorage` to check your visit history, runs its animation, and then literally destroys itself from the Virtual DOM so it doesn't become a memory burden. |
| **`Instruction.tsx`** | **The DRY Evangelist.** Maps an array of objects directly into beautifully rendered UI cards, saving us from the ultimate developer sin: copy-pasting HTML structures four times. |
| **`Hero.tsx`** | **The Hype Machine.** The welcoming face of the platform that features a massive Call-To-Action button, ruthlessly redirecting users to the `/login` portal because we don't do window shopping here. |
| **`Trend.tsx`** | **The FOMO Generator.** Uses React state and mapping to display shiny crypto cards with active states, ensuring Ethereum always looks visually superior by default. |
| **`About.tsx`** | **The Stateless Salesman.** Pure, unadulterated UI without the burden of React Hooks. Utilizes native HTML5 lazy loading (`loading="lazy"`) so we don't nuke the user's bandwidth with giant banner images. |
| **`AppSection.tsx`** | **The Download Beggar.** A highly optimized static component politely asking users to download our mobile apps. Also features lazy-loaded assets for peak performance. |
| **`Footer.tsx`** | **The TypeScript Rebellion.** Contains a massive, perfectly organized sitemap, our local operational address in Medan, and a literal TypeScript hack (`as any`) to force the compiler to accept Ionicons without throwing a tantrum. |

---

## 💻 Getting Started
To get a local copy up and running, follow these simple steps.

### Prerequisites
* Node.js (v18.0 or higher recommended)
* npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone [https://github.com/yourusername/cryptex-web.git](https://github.com/yourusername/cryptex-web.git)
2. Navigate into the directory
   ```bash
   cd cryptex-web
3. Install NPM packages
   ```bash
   npm install
4. Clear Next.js cache (Recommended for WSL users)
   ```bash
   rm -rf .next
5. Start the development server
   ```bash
   npm run dev
6. Open http://localhost:3000 in your browser.

## 👥 Meet The Team

This frontend architecture was collaboratively engineered to meet modern enterprise standards.

* **Ellerin** - *Frontend Engineer & Core Logic Developer*
* **Davin** - *System Analyst & Quality Assurance*
* **Wilbert** - *UI/UX Integration & Component Structuring*

<p align="center">
  <img src="https://img.shields.io/badge/Made_in-Medan,_Indonesia-%23ff0000?style=flat-square" alt="Made in Medan" />
</p>
