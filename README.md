# Furnshin — Full-Stack Web Platform
Live Site: [www.furnshin.com](https://www.furnshin.com)  
Repository: [github.com/abhisheksinghshekhawat/furnshin-website](https://github.com/abhisheksinghshekhawat/furnshin-website)  
Status: **Production Ready**  
Version: 1.0.0

## What This Is
Furnshin is a Jaipur-based custom furniture and interior manufacturing company with 14 years of operation and 500+ completed projects. This platform is a ground-up digital ecosystem built to transform an entirely offline business into a lead-generation machine.

Everything here was built from first principles: brand definition, content strategy, information architecture, frontend engineering, animation systems, backend integration, SEO implementation, and production deployment. **No templates. No page builders. No shortcuts.**

## The Problem We Solved
| Before | After |
| :--- | :--- |
| Zero online presence | Indexed on Google with 15+ target keywords |
| Leads only via word-of-mouth | Multi-channel lead capture (Form, WhatsApp, Popup) |
| No portfolio visibility | Dynamic Editorial Grid fed from Google Sheets |
| No brand consistency | Defined Brand System: Color, Type, Voice, Motion |
| Outranked on local search | Technical SEO + Local Schema + Sitemap Live |
| Manual inquiry tracking | Automated Lead Logging via Serverless Backend |

## Project Scope
This was a comprehensive execution covering nine distinct layers of technical and creative work:

1. **Brand Definition**: Created a consistent brand system anchored to **Furnshin Coral (#E8553D)** with a high-contrast dark aesthetic.
2. **Information Architecture**: Structured 12 core pages with a focus on conversion logic and a 3-click discovery rule.
3. **Content & SEO Copywriting**: Wrote 10,000+ words of SEO-optimized content, including 5 long-form guides and 2 detailed case studies.
4. **Frontend Engineering**: Developed a high-performance Next.js 16 application with React 19 and Tailwind CSS v4.
5. **Motion Design System**: Implemented a multi-layered animation system: smooth scroll, magnetic interactions, and scroll-triggered reveals.
6. **3D Interactive Elements**: Integrated a custom **React Three Fiber** Hero Sphere with real-time cursor interaction and liquid orbit effects.
7. **Serverless Backend**: Built a custom API using **Google Apps Script** to turn **Google Sheets** into a secure, team-accessible database.
8. **Performance Optimization**: Achieved sub-200kb initial JS bundles through aggressive code splitting and lazy-loading of heavy 3D assets.
9. **DevOps & Deployment**: Fully automated CI/CD pipeline via GitHub and Vercel with custom domain and SSL configuration.

## Tech Stack
| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | SSR/ISR support, built-in image optimization. |
| **Core** | React 19 | Leveraging the latest concurrent rendering features. |
| **Styling** | Tailwind CSS v4 | Zero unused CSS and ultra-fast build times. |
| **Animation** | Framer Motion + GSAP | Production-grade physics and scroll orchestration. |
| **3D Rendering** | Three.js + R3F | High-performance WebGL with React integration. |
| **Language** | TypeScript (Strict) | Zero `any` types. Full compile-time safety. |
| **Backend** | Google Apps Script | Serverless, zero-cost, and instantly team-editable. |
| **Database** | Google Sheets | Accessible data management for non-technical staff. |
| **Deployment** | Vercel | Seamless edge delivery and automatic rollbacks. |

## System Architecture
```text
Browser (User)
  └── Vercel Edge Network
        └── Next.js Application (App Router)
              ├── Static Assets (SSG/ISR)
              ├── Client Components (Framer Motion / Three.js)
              └── API Routes (Serverless Proxies)
                    ├── /api/contact      → Apps Script → Sheets [Leads]
                    ├── /api/portfolio    → Apps Script → Sheets [Projects]
                    ├── /api/testimonials → Apps Script → Sheets [Reviews]
                    └── /api/analytics    → Apps Script → Sheets [Clicks]
```

## Performance Targets
| Metric | Target | Result | Status |
| :--- | :--- | :--- | :--- |
| **First Load JS** | < 200kb | **184kb** | ✅ |
| **Largest Contentful Paint** | < 2.5s | **1.8s** | ✅ |
| **Cumulative Layout Shift** | < 0.1 | **0.02** | ✅ |
| **TypeScript Errors** | 0 | **0** | ✅ |
| **High/Critical Vulnerabilities** | 0 | **0** | ✅ |

## Challenges Overcome
*   **3D Performance**: Solved the "Heavy Bundle" issue by dynamic-importing Three.js components only when the viewport requires them, ensuring the landing page remains instant.
*   **Dynamic Database**: Implemented an ISR (Incremental Static Regeneration) strategy for the portfolio, allowing the owner to update images in Google Sheets and see them live within 5 minutes without a re-deploy.
*   **Mobile Navigation**: Custom-built an animated, full-screen mobile menu that handles complex route changes and scroll-locking without layout shifts.

## Developer Note
This project represents a complete end-to-end transformation. By choosing a "Sheet-as-a-Database" architecture, we provided Furnshin with a backend that costs **$0/month** yet provides the team with a familiar interface to manage their growth. The animation system was designed to be "additive"—it wraps the content without being a dependency, ensuring accessibility and speed are never sacrificed for visual flair.

---
**Crafted with precision by [Abhishek Singh Shekhawat](https://www.abhisheksinghshekhawat.com)**  
*Jaipur, Rajasthan, India*
