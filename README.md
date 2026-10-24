# Othmar Creative Studio — Official Website

> **Creative Design & Digital Solutions**  
> *"We design and build digital experiences that move businesses forward."*

A production-ready, cinematic, high-performance portfolio website for **Othmar Creative Studio**, built to convert visitors from outreach campaigns into qualified client inquiries.

---

## 1. Quick Start & Local Development

### Installation
```bash
npm install
```

### Run Dev Server
```bash
npm run dev
```
The application will launch on `http://localhost:3000`.

### Production Build
```bash
npm run build
```

---

## 2. Server-Side Email Notifications (Resend)

The studio utilizes **Resend** as the exclusive transactional email provider for delivering inquiry notifications directly to **`othmarphilip@gmail.com`**.

Configure the following variables in your `.env` file (see `.env.example`):

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | *(Required for live email delivery)* API key from [Resend](https://resend.com) | `re_...` |
| `NOTIFICATION_EMAIL` | Inbox where client inquiries and orders are forwarded | `othmarphilip@gmail.com` |
| `FROM_EMAIL` | Verified sender email address configured in your Resend account | `Othmar Studio Inquiries <onboarding@resend.dev>` |
| `APP_URL` | Canonical public URL of your website | `https://othmarcreative.com` |

### Email Delivery Behavior
- **Subject Line**: All project inquiry notifications are sent with the exact subject:  
  `New Project Inquiry — Othmar Creative Studio`
- **Reply-To**: Automatically set to the client's validated email address for 1-click email replies.
- **Reference Tracking**: Inquiries are assigned an automated reference ID (e.g., `INQ-2026-4821`).
- **No Simulated Delivery**: If `RESEND_API_KEY` is not configured in server environment variables, the form returns an unconfigured status code (501) and presents a 1-click direct email transmission link to `othmarphilip@gmail.com` with the pre-formatted scope.

---

## 3. Centralized Configuration & Data Models

All studio data is centralized in **`/src/data/config.ts`**, enabling quick updates without touching component layouts:

### A. Studio Contact Information
- Single source of truth for the studio email: **`othmarphilip@gmail.com`**.
- WhatsApp direct contact has been completely removed to maintain an uncluttered executive communication channel.

### B. Portfolio Projects (12 Distinct Works Across 6 Categories)
The portfolio contains 12 projects with individual color identities (no electric lime dominance on project artwork) and distributed dates (**2025 and 2026**):
1. **Business Websites (2 projects)**:
   - *Kallisto Capital Advisory* (2026, Corporate Sky Blue `#38BDF8`)
   - *Vanguard Freight & Logistics* (2025, Marine Ocean Blue `#60A5FA`)
2. **Cinematic & Premium Websites (2 projects)**:
   - *Architectura Spatial Monograph* (2025, Platinum Stone `#E2E8F0`)
   - *Aura Villa Santorini Reserve* (2026, Mediterranean Amber Bronze `#F59E0B`)
3. **Web Applications & SaaS Dashboards (2 projects)**:
   - *Apex Financial Analytics Portal* (2025, Emerald Telemetry `#34D399`)
   - *Cortex Velocity Project Ops* (2026, Indigo Violet `#818CF8`)
4. **E-commerce Websites (2 projects)**:
   - *Aurélien Maison Fashion Lookbook* (2025, Couture Rose Taupe `#FB7185`)
   - *Aura Botanica Organics* (2026, Botanical Sage `#34D399`)
5. **SaaS Landing Pages (2 projects)**:
   - *ScaleTrack Cloud Observability* (2026, Edge Cyan `#06B6D4`)
   - *SyncPulse Asynchronous Team Flow* (2025, Forest Mint `#10B981`)
6. **Creator Portfolios & Media Kits (2 projects)**:
   - *Eliza Reed UGC Creator Media Kit* (2026, Warm Terracotta `#FB923C`)
   - *Avenir Architects Identity & Monograph* (2025, Architectural Silver `#CBD5E1`)

> **Label Integrity**: Prominent "Concept Project" wording has been replaced with **`FEATURED PROJECT`** and **`STUDIO PROJECT`** labels.

### C. Fifteen (15) Editable Testimonials in an Accessible Carousel
- Includes 15 starter review entries covering business web design, e-commerce, web apps, cinematic motion, UI/UX, branding, creator kits, performance optimization, and troubleshooting.
- **Production Integrity**: Starter reviews are marked `isApproved: false` by default and are hidden from live production visitors until replaced with genuine customer reviews and enabled via `isApproved: true`. An editorial preview toggle is provided for review.
- Accessible carousel controls: keyboard arrow keys (`←`, `→`), touch swipe on mobile, and a clear "Discuss Your Project" CTA.

### D. Editable Statistics
- Metrics: Global Clients (`24+`), Live Projects (`12+`), Design Awards (`6`), Client Satisfaction (`98%`).
- By default in production, verified studio operating standards are displayed to maintain strict authenticity. The demonstration targets can be enabled via `SHOW_UNVERIFIED_STATS_IN_PRODUCTION` in `/src/data/config.ts`.

---

## 4. Deploying to Vercel

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com), click **"Add New Project"** and select the repository.
3. In the **Environment Variables** section, add:
   - `RESEND_API_KEY`: Your Resend API key (`re_...`).
   - `NOTIFICATION_EMAIL`: `othmarphilip@gmail.com`
   - `FROM_EMAIL`: Your verified sender address (e.g. `Othmar Studio Inquiries <onboarding@resend.dev>` or your domain).
4. Click **"Deploy"**.
5. The included `vercel.json` rewrite file ensures all client-side routes (`/work`, `/work/:slug`, `/services`, `/pricing`, `/about`, `/contact`, `/privacy`) and the `/api/inquiry` serverless endpoint resolve properly.
