<div align="center">
  <!-- Banners Gelombang Animasi -->
  <img src="https://capsule-render.vercel.app/api?type=waving&color=timeGradient&height=200&section=header&text=CRYPTEX&fontSize=80&fontColor=ffffff&animation=fadeIn&desc=The%20Next-Gen%20Crypto%20Exchange&descAlignY=75&descAlign=60" alt="Cryptex Banner" />

  <br/>

  <!-- Efek Ngetik Dinamis (Warna Biru Crypto) -->
  <a href="https://github.com/ellerinaurelia/CryptoWeb-Code">
    <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=22&pause=1000&color=00D8FF&center=true&vCenter=true&width=600&lines=Trading+crypto+made+beautiful.;Say+goodbye+to+ugly+dashboards!;Smooth+UI,+Fast+Execution.+🚀" alt="Typing Effect" />
  </a>

  <br/>
  
  <!-- Logo Tech Stack -->
  <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next JS"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>
  
  <br/><br/>
</div>

---

## 🌍 What on Earth is Cryptex?

Welcome to the **Cryptex Frontend**! This isn't just another boring crypto tracker. Cryptex is a hyper-modern, buttery-smooth web interface designed for traders who value aesthetics as much as their portfolios. 

We built this because we believe that even if you're losing money in a bear market, the UI you're staring at should at least look beautiful. 💸✨

## 🧩 Anatomy of Cryptex (The 9 Pillars)

We didn't just throw code at the wall; we crafted every single pixel. Here are the 9 core components running the show under the hood:

1. **`Preloader.tsx` (The Gatekeeper):** We killed the ugly Next.js loading flash. This state-intercepting loader forces the browser to wait, ensuring you only see the UI when it's perfectly dressed and ready.
2. **`Header.tsx` (The Command Center):** A fully responsive, sleek navigation bar. It’s the steering wheel of the Cryptex spaceship.
3. **`Hero.tsx` (The Hook):** The massive, eye-catching landing section that screams *"give us your money"* elegantly. First impressions matter!
4. **`MarketUpdate.tsx` (The Heart Attack Machine):** Dynamically displays the latest market trends. Watch your favorite coins go to the moon 📈 (or crash to zero 📉) in glorious high definition.
5. **`CryptoTable.tsx` (The Ledger of Truth):** A beautifully sorted, easily scannable list of coins, market caps, and 24h volume. No more squinting at raw data.
6. **`Features.tsx` (The Flex Zone):** The section where we brag about why our platform is fundamentally better than the competition. 
7. **`CallToAction.tsx` (The FOMO Injector):** Strategically placed buttons and forms to convert window-shoppers into hardcore crypto traders.
8. **`Testimonials.tsx` (The Hopium Den):** Because nothing builds trust like beautifully designed review cards.
9. **`Footer.tsx` (The Basement):** The perfectly structured bottom layer holding all the legal jargon, social links, and copyrights nobody actually reads but everyone needs.

## 🛠️ The Holy Tech Stack

We chose the best tools so our app doesn't break every time Elon Musk tweets.
* **Next.js:** For that lightning-fast, server-side rendering goodness.
* **TypeScript:** Because debugging vanilla JavaScript is a form of self-harm.
* **Monorepo Architecture:** Keeping our frontend and backend elegantly separated so our repository doesn't look like a messy bedroom.

## 🦸‍♂️ The Cryptex Avengers

```typescript
interface Developer {
  name: string;
  role: string;
  superpower: string;
}

const team: Developer[] = [
  {
    name: "Ellerin",
    role: "UI/UX Visionary & Monorepo Architect",
    superpower: "Pre-loader Glitch Slayer & WSL Whisperer"
  },
  {
    name: "Davin",
    role: "Front-end Ninja",
    superpower: "Weaving UI components flawlessly"
  },
  {
    name: "Wilbert",
    role: "Logic Guru",
    superpower: "Making sure the code actually makes sense"
  }
];

// Initialize project
team.forEach(dev => dev.code());
console.log("Cryptex Frontend ready to deploy! 🚀");

