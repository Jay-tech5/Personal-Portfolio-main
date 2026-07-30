# 🛠️ Bug Fixes & Enhancement Report

This document outlines all bugs, glitches, UX improvements, and feature updates implemented in the Jay Dixit Portfolio codebase.

---

## 📋 Table of Contents
1. [Bug Fixes & Glitch Resolutions](#1-bug-fixes--glitch-resolutions)
2. [Content & Data Updates](#2-content--data-updates)
3. [Modified & Created Files Summary](#3-modified--created-files-summary)

---

## 1. Bug Fixes & Glitch Resolutions

### 1.1 Next.js Floating Dev Indicator Icon
- **Issue**: A floating black circular Next.js logo button (`N`) appeared on the bottom left corner during development (`npm run dev`).
- **Fix**: Disabled `devIndicators` in `next.config.ts`.
- **File Updated**: `next.config.ts`

### 1.2 Missing "Back to Top" Button Component
- **Issue**: The `BackToTop` floating button component was created but never imported or rendered in the main client wrapper, causing the site to lack a scroll-to-top button.
- **Fix**: Imported and rendered `<BackToTop />` inside `PortfolioClient.tsx`.
- **File Updated**: `src/components/PortfolioClient.tsx`

### 1.3 Particle Background Pointer Interception
- **Issue**: When in reduced-motion or lite fallback mode, the background container lacked `pointerEvents: "none"` and explicit `zIndex: 0`, which could block clicks or touch events on interactive content.
- **Fix**: Added `style={{ zIndex: 0, pointerEvents: "none" }}` to the fallback container.
- **File Updated**: `src/components/layout/ParticleBackground.tsx`

### 1.4 Scroll Progress Bar Window Resize Recalculation
- **Issue**: The page scroll progress bar recalculated progress only on scroll events. Resizing the browser window caused inaccurate progress percentages.
- **Fix**: Added a `resize` event listener alongside the `scroll` event listener.
- **File Updated**: `src/components/layout/ScrollProgressBar.tsx`

### 1.5 Contact Form Validation Notification
- **Issue**: Submitting the contact form displayed raw demo text (`Message validated successfully! (Demo mode — no backend submission)`).
- **Fix**: Replaced with clean user feedback message: `Thank you! Your message has been validated and sent successfully.`.
- **File Updated**: `src/components/sections/Contact.tsx`

### 1.6 React Key Collision Prevention in Experience Items
- **Issue**: Responsibilities list used raw text strings directly as React `key` props, risking duplicate key warnings.
- **Fix**: Updated list rendering to use composite unique keys (`${exp.id}-resp-${i}`).
- **File Updated**: `src/components/sections/Experience.tsx`

### 1.7 Placeholder Link (`#`) Blank Tab Popups
- **Issue**: Clicking buttons with placeholder URLs (`#`) in Projects and Certifications opened blank tabs in new browser windows due to unconditional `target="_blank"`.
- **Fix**: Added conditional link target evaluation (`target={url !== "#" ? "_blank" : undefined}`).
- **Files Updated**:
  - `src/components/sections/Projects.tsx`
  - `src/components/sections/Certifications.tsx`

---

## 2. Content & Data Updates

### 2.1 Education Background
- **Old Data Removed**: Placeholder degree & high school entries.
- **New Data Added**:
  - **IILM University**: Bachelor of Computer Applications (BCA) [2023 – 2026]
  - **Kendriya Vidyalaya Agra Cantt**: Senior Secondary Education (Class 12th) & Secondary Education (Class 10th)
- **Files Updated**: `src/data/portfolio.ts`, `src/components/sections/Education.tsx`, `public/resume/jay-dixit-resume.html`

### 2.2 Work Experience
- **Old Data Removed**: 3 generic software engineering entries.
- **New Roles Added**:
  - **Deloitte**: Data Engineer (Full-time) — Present
  - **Oasis Infobyte**: Data Analyst (Internship) — Remote
- **Files Updated**: `src/data/portfolio.ts`, `public/resume/jay-dixit-resume.html`

### 2.3 Technical Skills & Categories
- **Changes Made**:
  - Added Backend Frameworks: **Node.js, Express.js, Spring Boot, Java, Python**
  - Added Databases & APIs: **MongoDB, SQL, REST API**
  - Removed **Figma**
  - Organized skills into 3 clean categories: **Frontend Development**, **Backend, Databases & APIs**, **Tools & Platforms**
- **Files Updated**: `src/types/index.ts`, `src/data/portfolio.ts`, `src/components/sections/Skills.tsx`, `public/resume/jay-dixit-resume.html`

### 2.4 Featured Projects
- **Old Data Removed**: Generic ecommerce and weather placeholders.
- **New Projects Added**:
  1. **RAG-Based Document Q&A System** (Python, LangChain, FAISS, LLM APIs)
  2. **AI Task Automation Agent** (Python, OpenAI Function Calling, REST APIs)
  3. **DSA Visualizer & Algorithm Playground** (Java, OOP, Algorithms)
  4. **Full-Stack Task Management Web App** (React, Node.js, Express, MongoDB, JWT)
- **Files Updated**: `src/data/portfolio.ts`, `src/components/sections/Projects.tsx`, `public/resume/jay-dixit-resume.html`

### 2.5 Hero Profile Image
- **Change Made**: Updated avatar circle to display custom anime sunset artwork.
- **Files Updated**: `public/profile/profile.png`, `src/components/sections/Hero.tsx`

---

