# AdInvent Creations — Portfolio Site

A React + Vite site for Adhithya Prabhu / AdInvent Creations.

## Opening in StackBlitz

1. Go to https://stackblitz.com and choose **"Import from GitHub"** if you push this
   to a repo, or start a **new Vite + React project** and copy these files in,
   replacing the defaults.
2. StackBlitz will run `npm install` automatically. If not, open the terminal and run:
   ```
   npm install
   npm run dev
   ```

## Before you deploy — replace these placeholders

- **`src/components/Work.jsx`** — swap the 3 placeholder case studies for your
  real clients (name, industry, what you did, result).
- **`src/components/Testimonials.jsx`** — swap in real client quotes.
- **`src/components/Contact.jsx`** — replace the `mailto:` email and the
  `#` booking link with your real Calendly/booking URL.
- **`src/components/Footer.jsx`** — replace the Instagram/LinkedIn/WhatsApp
  links with your real handles.
- **`index.html`** — update the meta description if needed.

## Deploying to Vercel

1. Push this project to a GitHub repo (or drag-and-drop export from StackBlitz).
2. Go to https://vercel.com → **Add New Project** → import the repo.
3. Vercel auto-detects Vite. Framework preset: **Vite**, build command
   `npm run build`, output directory `dist`. Click **Deploy**.
4. Add your custom domain under Project → Settings → Domains once it's live.

## Structure

```
src/
  components/
    Header.jsx       nav bar
    Hero.jsx          headline + animated growth-line graphic
    Services.jsx      what you do (3 columns)
    Work.jsx          case studies (PLACEHOLDER content)
    Process.jsx       how you work (navy section, 4 steps)
    Testimonials.jsx  client quotes (PLACEHOLDER content)
    WorkWithMe.jsx    engagement options / pricing
    FAQ.jsx           accordion
    Contact.jsx       CTA (navy, PLACEHOLDER links)
    Footer.jsx        (PLACEHOLDER social links)
  index.css           design tokens (colors, fonts, shared styles)
  App.jsx
public/
  logo-navy.png
  logo-white.png
```
