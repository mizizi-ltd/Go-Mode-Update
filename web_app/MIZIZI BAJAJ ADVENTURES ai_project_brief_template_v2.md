# Web App Project Brief

### Complete specification guide for producing a well-structured, production-ready web app

\---

SECTION 1 — PROJECT IDENTITY

---

**Brand Name:** \[Mizizi]
**App Name:** \[Mizizi Bajaj Adventures]  
**One-Line Description:** \[Mizizi Bajaj Adventures provides locally planned and sourced, self-guided one-day city itineraries in major African hubs designed for international tourists. The experience balances local texture (curated Bajaj/Tuk-Tuk transit instructions) with premium, vetted establishment stops.]  
**Target Audience:** \[International tourists looking for local knowledge and authentic connection to a city]  
**Business Goal:** \[We sell access to the curated routes in each city at roughly £6 (approx. $9). Allowing ]  
**Inspiration / Reference Apps:** \[List 2–3 apps with links that capture the look, feel, or functionality you're going for]

\---

## SECTION 2 — TECH STACK \& ENVIRONMENT

**Framework:** \[React / Vue / Vanilla HTML+CSS+JS / Next.js / etc.]  
**Styling:** \[Tailwind / CSS Modules / Plain CSS / SCSS]  
**Backend / Data:** \[None (frontend-only) / Supabase / Firebase / Custom API / Node.js]  
**Auth Required:** \[Yes / No — if yes, specify provider: Clerk / Supabase Auth / NextAuth / Firebase Auth]  
**Auth Note:** Do not implement custom JWT logic — use the specified provider only  
**Hosting Target:** \[Vercel / Netlify / Cloudflare Pages / self-hosted / Claude Code preview]  
**Package Manager:** \[npm / yarn / pnpm]  
**Node Version Requirement:** \[e.g. ≥18]  
**AI Integration:** \[Claude API / OpenAI / None — if Claude, confirm model: claude-sonnet-4-20250514]

\---

## SECTION 3 — CORE FEATURES (Prioritised)

List every feature the app must have. Mark each with a priority tier:

|#|Feature|Priority|Notes|
|-|-|-|-|
|1|\[e.g. Booking form with date picker]|Must-have|\[Any constraints]|
|2|\[e.g. Email confirmation on submit]|Must-have|\[Via which service?]|
|3|\[e.g. Admin dashboard to view bookings]|Should-have|\[Read-only or editable?]|
|4|\[e.g. Export to CSV]|Nice-to-have||

**Out of Scope (explicitly excluded):**

* \[e.g. Payment processing]
* \[e.g. Mobile app version]

\---

## SECTION 4 — USER FLOWS \& SCREENS

For each major screen or view, describe:

### Screen: \[Name, e.g. "Home / Landing"]

* **Purpose:** \[What the user does here]
* **Entry Point:** \[How they arrive — direct URL, redirect, login]
* **Key Actions:** \[What they can click/submit/trigger]
* **Exit:** \[Where they go after — next screen or outcome]
* **Validation / Error States:** \[What can go wrong and how it's shown]
* **Auth Required:** \[Yes / No — unauthenticated users should be redirected to login]

### Screen: \[Name, e.g. "Booking Form"]

* **Purpose:**
* **Entry Point:**
* **Fields:** \[List every field: name, type, required/optional, validation rules]
* **Key Actions:**
* **Success State:** \[What happens after submit]
* **Error States:**
* **Auth Required:** \[Yes / No]

*(Repeat for each screen)*

\---

## SECTION 5 — DATA MODELS

Define every data entity the app works with:

```
Entity: Booking
Fields:
  - id: string (auto-generated, never expose raw DB IDs to client)
  - user\_id: string (FK to User — reference by ID, do not embed PII)
  - check\_in: date (required, must be future)
  - check\_out: date (required, must be after check\_in)
  - room\_type: enum \["standard", "deluxe", "suite"]
  - status: enum \["pending", "confirmed", "cancelled"]
  - created\_at: timestamp

Entity: User (PII — handle with care)
Fields:
  - id: string (auto-generated)
  - name: string (required)
  - email: string (required, valid email — store hashed if not needed in plain text)
  - role: enum \["guest", "admin"] (never return admin flags to non-admin API calls)
  - created\_at: timestamp

Entity: Room
Fields:
  - id: string
  - name: string
  - type: enum \["standard", "deluxe", "suite"]
  - capacity: integer
  - price\_per\_night: float
  - available: boolean
```

**Data handling rules:**

* Separate PII (names, emails) from operational data where possible — reference by `user\_id`
* Never return password hashes, internal role flags, or admin fields to client-facing API responses
* Only collect fields you actually use — no speculative data collection

\---

## SECTION 6 — DESIGN \& VISUAL DIRECTION

**Overall Aesthetic:** \[e.g. Clean \& professional / Warm \& hospitality-focused / Bold \& modern / Minimalist]  
**Mood / Feel:** \[e.g. "Trustworthy, efficient, calm — like a 5-star reception"]  
**Color Palette:** \[Primary, secondary, accent — hex codes if known, or describe: "earthy greens and warm neutrals"]  
**Typography Preferences:** \[Serif / sans-serif / specific fonts if known]  
**Dark Mode Required:** \[Yes / No / Optional]  
**Existing Brand Assets:** \[Logo file paths, brand guidelines doc, style guide URL]  
**Responsive Requirements:** \[Desktop-first / Mobile-first / Both — specify breakpoints if known]

**Visual References:**

* \[Screenshot or URL showing a layout you like]
* \[Screenshot or URL showing a color palette you like]
* \[Screenshot or URL showing a component style you like]

\---

## SECTION 7 — CONTENT \& COPY

**Language:** \[English / Other]  
**Tone of Voice:** \[Formal / Friendly / Concise / Descriptive]  
**Provide Copy?** \[Yes — attached below / No — AI should generate placeholder copy]

**Key Content Blocks (if providing):**

* Hero headline: \[Text]
* CTA button label: \[Text]
* Form labels: \[List]
* Error messages: \[List]
* Confirmation messages: \[Text]
* Empty state messages: \[Text]

\---

## SECTION 8 — INTEGRATIONS \& THIRD-PARTY SERVICES

|Service|Purpose|Credentials Available?|Notes|
|-|-|-|-|
|\[e.g. SendGrid]|Email confirmations|Yes — API key in .env|Server-side only|
|\[e.g. Google Calendar]|Add bookings to calendar|No — mock for now||
|\[e.g. Stripe]|Payments|No — out of scope||
|\[e.g. Claude API]|AI-powered responses|Yes — key in .env|Model: claude-sonnet-4-20250514 — server-side only|

**Integration security rule:** All third-party API calls must be made server-side only. API keys must never appear in client-side/browser-executed code.

\---

## SECTION 9 — PROJECT FILE STRUCTURE

Specify how you want the project organised:

```
/project-root
  /src
    /components         ← Reusable UI components
    /pages              ← Route-level views
      /api              ← Server-side API routes (Next.js) — auth-gated
    /hooks              ← Custom React hooks
    /utils              ← Helper functions
    /services           ← API/integration logic (server-side only)
    /types              ← TypeScript types/interfaces
    /styles             ← Global styles
    /middleware         ← Auth middleware, rate limiting, CORS config
    /validators         ← Zod schemas for all form and API inputs
  /public               ← Static assets (images, icons, favicon)
  /tests                ← Unit/integration tests
  .env                  ← Local secrets — NEVER commit
  .env.example          ← Variable names only — safe to commit
  .gitignore            ← Must include .env on line 1
  README.md             ← Setup and run instructions
  package.json
```

\---

## SECTION 10 — ENVIRONMENT VARIABLES

List every env variable the app needs (values will be provided separately).

**Rule:** Variables prefixed `NEXT\_PUBLIC\_` (or framework equivalent) are exposed to the browser. Only non-sensitive values (e.g. public app URL) may use this prefix. All API keys, database credentials, and secrets must be unprefixed — server-side only.

```env
# Claude / Anthropic — server-side only
ANTHROPIC\_API\_KEY=

# Database — server-side only
DATABASE\_URL=
DATABASE\_PUBLIC\_KEY=

# Auth provider — server-side only
AUTH\_SECRET=
AUTH\_PROVIDER\_CLIENT\_ID=
AUTH\_PROVIDER\_CLIENT\_SECRET=

# Email — server-side only
SENDGRID\_API\_KEY=
FROM\_EMAIL=

# App — safe for client exposure
NEXT\_PUBLIC\_APP\_URL=
```

\---

## SECTION 11 — PERFORMANCE \& QUALITY REQUIREMENTS

**Loading Speed:** \[e.g. First meaningful paint < 2s / Not critical for internal tool]  
**Accessibility:** \[WCAG AA compliance required / Basic semantic HTML / Not specified]  
**Browser Support:** \[Chrome + Firefox + Safari latest / All major browsers / Chrome only]  
**Error Handling:** \[Toast notifications / Inline errors / Console logs acceptable]  
**Loading States:** \[Skeleton screens / Spinners / Disabled buttons during loading]  
**Empty States:** \[Show helpful message and CTA when no data]

**Input validation standard:** All form inputs and API request bodies must be validated using Zod schemas defined in `/src/validators`. Validation runs on both client (UX) and server (security). No raw string concatenation in database queries — use ORM (Prisma / Drizzle) or parameterised queries only.

\---

## SECTION 12 — TESTING EXPECTATIONS

**Unit Tests:** \[Required / Optional / None]  
**Testing Framework:** \[Jest / Vitest / None]  
**Manual Test Scenarios to Include in README:**

1. \[e.g. Submit booking form with valid data → expect confirmation email]
2. \[e.g. Submit with past check-in date → expect validation error]
3. \[e.g. Load admin dashboard with no bookings → expect empty state message]
4. \[e.g. Access protected route without auth → expect redirect to login]
5. \[e.g. Submit malformed/oversized input → expect server-side rejection, not crash]

\---

## SECTION 13 — DOCUMENTATION REQUIREMENTS

**README Must Include:**

* \[ ] Project description
* \[ ] Prerequisites (Node version, etc.)
* \[ ] Installation steps (`npm install`)
* \[ ] Environment setup (`.env` instructions — reference `.env.example`)
* \[ ] Run locally (`npm run dev`)
* \[ ] Build for production (`npm run build`)
* \[ ] Deployment instructions
* \[ ] Feature overview
* \[ ] Security notes (what auth provider is used, what data is stored)
* \[ ] Known limitations

**Code Comments:** \[Minimal / Explain non-obvious logic / Fully commented]

\---

## SECTION 14 — CONSTRAINTS \& KNOWN LIMITATIONS

* \[e.g. No backend available — all data must be stored in localStorage for now]
* \[e.g. Claude API has 100k token limit per request]
* \[e.g. App will be used on slow internet — keep bundle size under 500KB]
* \[e.g. Single-user only — no multi-tenancy needed]

\---

## SECTION 15 — EXAMPLE DATA / SEED DATA

Provide realistic sample data the AI can use to populate the UI during development.  
**Note:** Use fictional names and emails only — never include real guest or client data in briefs.

```json
{
  "bookings": \[
    {
      "id": "bk\_001",
      "user\_id": "usr\_abc123",
      "check\_in": "2026-06-15",
      "check\_out": "2026-06-18",
      "room\_type": "deluxe",
      "status": "confirmed"
    }
  ],
  "users": \[
    {
      "id": "usr\_abc123",
      "name": "Sarah Mwangi",
      "email": "sarah@example.com",
      "role": "guest"
    }
  ]
}
```

\---

## SECTION 16 — ATTACHED ASSETS

List every file you are providing alongside this brief:

|File|Type|Purpose|
|-|-|-|
|`logo.svg`|Image|App logo for header|
|`brand-guide.pdf`|Document|Colors, fonts, tone|
|`wireframes.fig`|Figma|Screen layouts|
|`existing-db-schema.sql`|SQL|Current database structure|
|`api-docs.md`|Markdown|Existing API reference|

\---

## SECTION 17 — SECURITY REQUIREMENTS

### Authentication \& Sessions

* **Auth provider:** \[Clerk / Supabase Auth / NextAuth — no custom JWT implementation]
* **Session expiry:** \[e.g. Access token: 60 minutes / Refresh token: 7 days]
* **Cookie flags:** Sessions must use `HttpOnly` + `Secure` + `SameSite=Strict` — no tokens in localStorage
* **Protected routes:** List every route that requires authentication:

  * \[e.g. `/dashboard` — redirect to `/login` if unauthenticated]
  * \[e.g. `/admin/\*` — redirect to `/` if role ≠ "admin"]

### Input Handling

* **Validation library:** Zod — all forms and API inputs have defined schemas in `/src/validators`
* **Sanitisation:** Strip HTML tags from all free-text fields before storing or rendering
* **Database queries:** No raw string concatenation — ORM or parameterised queries only
* **File uploads (if applicable):** Validate file type and size server-side; scan for malicious content

### API Security

* **Rate limiting:** \[Upstash Rate Limit / hosting-level / not required for MVP — specify]
* **CORS:** Whitelist `\[your-domain.com]` only — no wildcard `\*` in production
* **Auth middleware:** All `/api/\*` routes check authentication before processing — no silent data leaks
* **Response filtering:** API responses return only the fields the requesting user's role is permitted to see — never return password hashes, internal flags, or other users' data

### Secrets \& Environment

* `.env` added to `.gitignore` before first commit
* All API keys and secrets are unprefixed env variables (server-side only)
* No secrets hardcoded anywhere in source files
* `.env.example` committed with variable names but no values

### Frontend Security

* **No sensitive data in localStorage** — use HttpOnly cookies for session tokens
* **Content Security Policy (CSP):** Configure response headers to whitelist approved script/style sources
* **HTTPS only:** Configure hosting to redirect HTTP → HTTPS and set HSTS header
* **Dependency audit:** Run `npm audit` before deployment — resolve high/critical vulnerabilities

### Data Privacy \& Compliance

* **Applicable regulations:** \[GDPR / POPIA / other — specify what applies to your users' region]
* **PII fields:** \[List fields containing personally identifiable information — name, email, passport, phone]
* **Data retention policy:** \[e.g. Guest PII retained for 2 years post-checkout, then deleted]
* **Right to deletion:** \[Yes — implement account/data deletion flow / No — not required for MVP]
* **Data minimisation:** Collect only fields actively used by the application — no speculative fields

\---

## SECTION 18 — DELIVERY CHECKLIST

Before handing off, the AI must confirm all items are complete:

**Features \& Functionality**

* \[ ] All must-have features are implemented
* \[ ] All screens are built and navigable
* \[ ] Form validation works with clear error messages on both client and server
* \[ ] Loading, error, and empty states are handled on every data-dependent view
* \[ ] Mobile/responsive layout works (if required)

**Security**

* \[ ] `.env` is in `.gitignore` — verified before first commit
* \[ ] `.env.example` is present with all variable names and no values
* \[ ] No API keys, secrets, or credentials hardcoded anywhere in source files
* \[ ] All API routes are auth-gated with middleware — unauthenticated requests rejected
* \[ ] All form and API inputs validated with Zod schemas
* \[ ] No sensitive data stored in localStorage or exposed in client-side code
* \[ ] CORS configured to whitelist specific domains only
* \[ ] `npm audit` run — no high or critical vulnerabilities unresolved
* \[ ] HTTPS enforced at hosting level

**Code Quality**

* \[ ] Console is free of errors in normal usage
* \[ ] App builds successfully (`npm run build`)
* \[ ] No unused dependencies in `package.json`
* \[ ] TypeScript (if used) — no type errors on build

**Documentation**

* \[ ] README is complete with setup, env, run, and deploy instructions
* \[ ] Security notes included in README (auth provider, data stored, retention)
* \[ ] Manual test scenarios documented and passing

\---

*Template v2 by Mizizi AI · Built for hospitality-focused web app development with Claude Code*

