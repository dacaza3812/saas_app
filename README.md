# Companion Builder

Companion Builder is a modern SaaS web application that enables users to create topic‑specific AI companions. Users can choose a theme and interact with the companion through voice‑powered chat. The system integrates authentication, billing, real‑time data, and observability to deliver a secure, scalable, and enhanced user experience.

## ✨ Features

* **Next.js App Router** for a performant full‑stack experience
* **Clerk Authentication** (Sign‑in/Sign‑up/Session management)
* **Clerk Billing** for subscription management
* **Supabase** for database and storage
* **ShadCN/UI** for component styling
* **VAPI AI** for voice + text models
* **Sentry** for full error logging and monitoring
* **Fully typed application with TypeScript**

## 🧠 How It Works

1. Users authenticate via Clerk.
2. Authenticated users can create or select a Companion theme.
3. A voice‑enabled assistant (VAPI AI) interacts with the user to build and refine the companion.
4. Core application data is persisted in Supabase.
5. Billing is handled via Clerk Billing.
6. All system errors and edge cases are reported to Sentry.

## 🏗 Tech Stack

* **Framework:** Next.js
* **Auth + Billing:** Clerk + Clerk Billing
* **Database:** Supabase
* **UI:** ShadCN/UI
* **AI Runtime:** VAPI AI (voice + text)
* **Monitoring:** Sentry
* **Language:** TypeScript

## 🔐 Required Environment Variables

The following environment variables must be set for the app to function correctly:

```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# VAPI
NEXT_PUBLIC_VAPI_WEB_TOKEN=

# Sentry
SENTRY_AUTH_TOKEN=
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repo-url>
cd companion-builder
```

### 2. Install Dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create `.env.local` and add the values above.

### 4. Run the Development Server

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open the app at: [http://localhost:3000](http://localhost:3000)

## ✅ Production Build

```bash
pnpm build
pnpm start
```

## 📦 Deployment

Companion Builder can be deployed on:

* Vercel (recommended)
* Any Next.js‑compatible hosting provider

Ensure all required environment variables are configured in your hosting provider.

## 📊 Error Tracking

Sentry is used to track runtime and build‑time errors across environments.

## 📝 License

Proprietary — All rights reserved.

---

Created with ❤️ for AI‑driven companion building.
