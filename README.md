# 👑 Faiza Khan | SEO Specialist & Digital Creator Portfolio

<div align="center">

[![Lighthouse Performance](https://img.shields.io/badge/Lighthouse-90%2B-emerald.svg?style=for-the-badge&logo=lighthouse&logoColor=white)]()
[![React](https://img.shields.io/badge/React-19.2-blue.svg?style=for-the-badge&logo=react&logoColor=white)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue.svg?style=for-the-badge&logo=typescript&logoColor=white)]()
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)]()
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)]()

**A state-of-the-art, high-performance, premium digital portfolio custom-built for Faiza Khan (SEO Specialist & Digital Creator).**

[Explore Live Demo](#) • [Report Bug](https://github.com/Eshbanoliver/faizaportfolio/issues) • [Request Feature](https://github.com/Eshbanoliver/faizaportfolio/issues)

</div>

---

## 📖 Overview

This portfolio is an ultra-modern React single-page application engineered to highlight the professional work, stats, and achievements of **Faiza Khan**, an SEO Specialist and Content Creator based in Udaipur, Rajasthan, India. 

Designed with a high-end luxury aesthetic, the project features state-of-the-art interactive micro-interactions, flawless responsive grids, and advanced rendering pipelines built specifically to pass strict core web vitals and achieve **90+ Lighthouse performance scores** under all network conditions.

---

## ✨ Key Features

*   **🚀 Ultra-Performance Engineering**:
    *   **Zero-Delay First Paint**: Completely eliminated artificial delay screens for instant content delivery.
    *   **Resource Preloading**: High-priority font and critical asset preloading to prevent Flash of Unstyled Text (FOUT).
    *   **Optimized SVG System**: Switched from massive rasterized graphics to compact vector SVGs (LCP elements reduced from 466KB to 9KB).
*   **💎 High-End Modern Aesthetics**:
    *   **Dynamic Glassmorphism**: Tailored translucent layers using vanilla CSS backdrop-filters.
    *   **Interactive Motion Systems**: Physics-based 3D card tilt triggers and custom cursor animations via Framer Motion.
    *   **Vibrant Themed Layouts**: Color-coded premium gradients matching specific content sections.
*   **📈 Built-in Conversion Paths**:
    *   Dynamic stats tracker for social platforms (Instagram, YouTube, Brand collaborations).
    *   Custom-built responsive contact systems and service-specific navigation flows.

---

## 🛠️ Tech Stack

*   **Core Framework**: [React 19.2](https://react.dev/) & [TypeScript 6.0](https://www.typescriptlang.org/)
*   **Build System**: [Vite 8.0](https://vite.dev/) & [Rolldown](https://rolldown.rs/)
*   **Styling Engine**: Pure Vanilla CSS (Custom Token-driven Utility System)
*   **Animation System**: [Framer Motion 12.3](https://www.framer.com/motion/) & [React Icons](https://react-icons.github.io/react-icons/)
*   **Routing Architecture**: [React Router DOM 7.1](https://reactrouter.com/)

---

## 📂 Project Architecture

The codebase implements a clean, modular component-driven architecture:

```text
faizaportfolio/
├── public/                 # Static assets & SEO files
├── src/
│   ├── assets/            # Global brand images & vector SVGs
│   ├── components/        # Reusable global layout items
│   │   ├── Footer/        # Custom-branded footer
│   │   ├── LoadingScreen/ # Smooth exit transition overlay
│   │   ├── Navbar/        # Interactive floating header
│   │   ├── ScrollToTop/   # Dynamic page-scroll reset helper
│   │   └── sections/      # Home section blocks
│   │       ├── CTASection/
│   │       ├── HeroSection/
│   │       ├── ServicesSection/
│   │       ├── SkillsSection/
│   │       ├── SocialPresenceSection/
│   │       └── TestimonialsSection/
│   ├── hooks/             # Custom utility hooks (e.g. useScrollReveal)
│   ├── pages/             # Distinct routable views (CSS + TSX)
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Education/
│   │   └── Experience/
│   ├── App.tsx            # Main layout router
│   ├── main.tsx           # Entry mounting logic
│   └── index.css          # Global styling token sheet
├── tsconfig.json          # TypeScript workspace settings
└── vite.config.ts         # High-speed Vite environment settings
```

---

## ⚡ High-Performance Code Splitting

In **[vite.config.ts](file:///d:/faizaportfolio/vite.config.ts)**, we use a custom dynamic [manualChunks](file:///d:/faizaportfolio/vite.config.ts#L11) function to isolate large vendor dependencies into separate asynchronous chunks. This keeps the initial main bundle size under **60KB**!

```ts
manualChunks(id) {
  if (id.includes('node_modules')) {
    if (id.includes('react-router-dom') || id.includes('react-dom') || id.includes('react/')) {
      return 'vendor-react';
    }
    if (id.includes('framer-motion')) {
      return 'vendor-motion';
    }
    if (id.includes('react-icons')) {
      return 'vendor-icons';
    }
  }
}
```

---

## 🚀 Getting Started

Follow these steps to run a local development workspace or compile a production-ready package:

### Prerequisites

*   **Node.js**: `v18.x` or newer (Recommended: `v20.x`)
*   **npm**: `v9.x` or newer

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Eshbanoliver/faizaportfolio.git
   cd faizaportfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development & Production Build

*   **Run Development Server**:
    ```bash
    npm run dev
    ```
*   **Type-Check Codebase**:
    ```bash
    npx tsc --noEmit
    ```
*   **Compile Production Package**:
    ```bash
    npm run build
    ```
*   **Preview Local Build**:
    ```bash
    npm run preview
    ```

---

## 📬 Contact & Brand Channels

*   **Name**: Faiza Khan Pathan
*   **Role**: SEO Specialist & Digital Content Creator
*   **Base Location**: Udaipur, Rajasthan, India
*   **LinkedIn**: [Faiza Khan](https://in.linkedin.com/in/faiza-khan-b61639359)
*   **Instagram**: [@kfaiza7277](https://www.instagram.com/kfaiza7277)

---
<div align="center">
Designed and developed with ❤️ for modern speed, visual perfection, and maximum digital reach.
</div>
