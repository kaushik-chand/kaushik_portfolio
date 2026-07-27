# Kaushik Portfolio

Premium personal portfolio — UX/UI Designer & Front-End Developer.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS (design tokens)
- Framer Motion + Lenis + GSAP ScrollTrigger

## Setup

```bash
npm install
python -m pip install pymupdf   # for PDF thumbnails
cp .env.example .env            # add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
npm run thumbnails              # generate case-study previews from PDFs
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development
- `npm run thumbnails` — PDF page-1 → `public/thumbnails/*.jpg`
- `npm run build` — runs thumbnails then production build
- `npm start` — serve production build
