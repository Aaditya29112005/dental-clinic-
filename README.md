# Align Dentofacial Clinic Website

A Next.js (App Router), Tailwind CSS, and TypeScript website rebuild for **Align Dentofacial Clinic**, Noida.

---

## Central Configuration (`src/data/clinicData.ts`)

All clinic data, facts, contact numbers, doctor info, services, FAQs, blog articles, and location pages are stored in a single source of truth: `src/data/clinicData.ts`.

### 1. Toggle Invisalign® Certification Wording
To switch between **"Clear Aligners"** and **"Invisalign®"** globally:
```typescript
export const clinicConfig = {
  isCertifiedInvisalignProvider: false, // Set to true if certified by clinic
  // ...
};
```

### 2. How to Edit Services
Open `src/data/clinicData.ts` and locate `servicesData`. Each service item includes:
- `title`, `tagline`, `cardLine`
- `fullDesc` (paragraphs)
- `whoNeedsIt` (bullet list)
- `benefits` (bullet list)
- `procedureSteps` (timeline steps)
- `aftercare` (tips)
- `faqs` (service-specific questions)

### 3. How to Edit FAQs
- **Master FAQ Bank**: Edit `masterFaqBank` array in `clinicData.ts`.
- **Service FAQs**: Edit `faqs` property inside each service object in `servicesData`.
- **Location FAQs**: Edit `faqs` inside `locationsData`.

### 4. How to Edit Patient Reviews & Stats
- **Google Reviews**: Update the `patientReviews` array in `clinicData.ts`.
- **Stats Counter**: Update the `clinicConfig.stats` array in `clinicData.ts`.

### 5. Managing Content Placeholders
The codebase contains clearly marked placeholders for client assets:
- `[CLIENT TO PROVIDE: Dr. Jyoti Chauhan Professional Portrait]`
- `[CLIENT TO PROVIDE: Clinic Photo - Waiting Lounge]`
- `[CLIENT TO PROVIDE: Patient Before/After Photos - Consent Signed]`
- `[CLIENT TO PROVIDE: Certificate PDFs and Badge Images]`
- `[CLIENT TO PROVIDE: Google Business Profile Link]`

Replace these placeholders with real image URLs or Next.js `<Image />` components in `src/components/BeforeAfterSlider.tsx`, `src/components/ClinicTour.tsx`, and `src/app/page.tsx`.

---

## Local Development & Production Build

### Run Development Server
```bash
npm run dev
```

### Production Build & Static Generation Verification
```bash
npm run build
npm run start
```
