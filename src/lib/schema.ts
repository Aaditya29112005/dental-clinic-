import { clinicConfig } from "@/data/clinicData";

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness", "MedicalClinic"],
    "@id": "https://aligndentofacial.in/#clinic",
    "name": clinicConfig.name,
    "description": clinicConfig.positioningLine + ". " + clinicConfig.tagline,
    "url": "https://aligndentofacial.in",
    "telephone": clinicConfig.phone,
    "email": clinicConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pillar No. 44, East Avenue Grand, Shop No. 6, Dadri Main Road, Kohli Vihar, near Sector 49",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201301",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.5672,
      "longitude": 77.3789
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "10:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [
      clinicConfig.socials.instagram,
      clinicConfig.socials.facebook
    ],
    "medicalSpecialty": [
      "Orthodontics",
      "Dentistry",
      "CosmeticDentistry",
      "Endodontics",
      "Implantology"
    ],
    "founder": {
      "@type": "Person",
      "name": clinicConfig.leadDoctor.name,
      "jobTitle": clinicConfig.leadDoctor.role
    }
  };
};

export const generatePhysicianSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": clinicConfig.leadDoctor.name,
    "jobTitle": clinicConfig.leadDoctor.role,
    "medicalSpecialty": "Orthodontics and Dentofacial Orthopaedics",
    "worksFor": {
      "@type": "MedicalClinic",
      "name": clinicConfig.name
    },
    "description": clinicConfig.leadDoctor.bio,
    "knowsAbout": clinicConfig.leadDoctor.areasOfWork
  };
};

export const generateMedicalProcedureSchema = (name: string, description: string, url: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": name,
    "description": description,
    "procedureType": "Dental Procedure",
    "bodyLocation": "Mouth",
    "mainEntityOfPage": url,
    "howPerformed": "Pain-controlled dental treatment under local anaesthesia by specialist dentist."
  };
};

export const generateFaqSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const generateArticleSchema = (
  title: string,
  description: string,
  url: string,
  publishDate: string,
  authorName: string
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": publishDate,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": clinicConfig.name
    }
  };
};
