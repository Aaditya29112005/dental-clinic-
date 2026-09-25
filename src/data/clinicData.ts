export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  cardLine: string;
  shortDesc: string;
  aeoAnswer: string;
  image?: string;
  fullDesc: string[];
  whoNeedsIt: string[];
  benefits: string[];
  procedureSteps: { title: string; desc: string }[];
  aftercare: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export interface OrthodonticProblemItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  aeoAnswer: string;
  image?: string;
  causes: string[];
  effects: string[];
  treatments: string[];
  idealAge: string;
  durationRange: string;
  faqs: { question: string; answer: string }[];
}

export interface DentalProblemItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  aeoAnswer: string;
  image?: string;
  symptoms: string[];
  commonCauses: string[];
  whenToSeeDentist: string[];
  treatmentsOffered: { title: string; slug: string }[];
  homeCareTips: string[];
  faqs: { question: string; answer: string }[];
}

export interface LocationItem {
  id: string;
  slug: string;
  areaName: string;
  landmark: string;
  distanceFromClinic: string;
  drivingTime: string;
  routeDirections: string;
  popularTreatments: string[];
  faqs: { question: string; answer: string }[];
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    role: string;
  };
  contentBlocks: { heading?: string; text: string }[];
  toc: string[];
  relatedServiceSlugs: string[];
}

export const clinicConfig = {
  // SINGLE CONFIG FLAG FOR INVISALIGN WORDING (Rule 4)
  isCertifiedInvisalignProvider: true, // Confirmed via clinic waiting lounge photos
  
  name: "Align Dentofacial Clinic",
  positioningLine: "A multispeciality dental care centre",
  tagline: "Where advanced dentistry meets the art of a confident smile.",
  officialTagline: "Healthy Smiles, Happy Lives.",
  logoUrl: "/logo.png",
  
  leadDoctor: {
    name: "Dr. Jyoti Chauhan",
    qualifications: "MDS (Orthodontics and Dentofacial Orthopaedics)",
    role: "Lead Orthodontist & Dental Specialist",
    areasOfWork: [
      "Braces and aligners",
      "Clinical endodontics",
      "Implantology",
      "Clear aligners",
      "Cosmetic dentistry"
    ],
    certifications: [
      "Advanced Endodontics Certification",
      "Dental Implants Specialist Certification",
      "Invisalign Provider Certification [CLIENT TO VERIFY]"
    ],
    bio: "Dr. Jyoti Chauhan is an experienced MDS Orthodontist dedicated to creating healthy, harmonious smiles. Specialising in braces, clear aligners, and comprehensive dentofacial orthopaedics, she combines clinical precision with a gentle touch. Her practice is built on individualised care plans, evidence-based treatments, and a commitment to keeping every procedure comfortable for patients of all ages."
  },

  yearStarted: 2024,
  patientsTreated: "700+",
  
  address: "Pillar No. 44, East Avenue Grand, Shop No. 6, Dadri Main Road, Kohli Vihar, near Sector 49, Gautam Buddh Nagar, Noida, Uttar Pradesh 201301",
  shortAddress: "Pillar No. 44, East Avenue Grand, Sector 49, Noida",
  
  mapEmbedUrl: "https://maps.google.com/maps?q=Align+Dentofacial+Clinic,+Pillar+No.+44,+East+Avenue+Grand,+Shop+No.+6,+Dadri+Main+Road,+Kohli+Vihar,+near+Sector+49,+Gautam+Buddh+Nagar,+Noida,+Uttar+Pradesh+201301&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Align+Dentofacial+Clinic+Pillar+No+44+East+Avenue+Grand+Dadri+Main+Road+Sector+49+Noida",
  
  phone: "+91 88604 03089",
  phoneRaw: "+918860403089",
  whatsappRaw: "918860403089",
  email: "contact@aligndentofacial.in",
  
  hours: "Tuesday to Sunday, 10 am to 7 pm. Monday closed.",
  hoursDetail: "Tuesday to Sunday: 10:00 AM to 7:00 PM. Monday: Closed. By appointment, walk-ins welcome.",
  
  serviceArea: "In-clinic care in Noida",
  
  socials: {
    instagram: "https://www.instagram.com/align_dentofacial_clinic_noida/",
    facebook: "https://www.facebook.com/share/1B7krdyp22/",
    googleBusiness: "https://www.google.com/maps/search/?api=1&query=Align+Dentofacial+Clinic+Pillar+No+44+East+Avenue+Grand+Dadri+Main+Road+Sector+49+Noida",
  },

  facilities: [
    "Calm home-style waiting area",
    "Private consultation room",
    "Separate dedicated operatory",
    "Dedicated sterilisation room",
    "Organised clinical storage",
    "Digital X-ray imaging",
    "Modern ergonomic dental chair and equipment"
  ],

  patientPromise: [
    "Calm, boutique clinic environment",
    "Advanced, sterilised, technology-driven care",
    "Pain-controlled procedures with local anaesthesia",
    "Transparent communication and ethical treatment planning"
  ],

  stats: [
    { label: "Happy Patients", value: "700+", sub: "Treated with care" },
    { label: "Dental Treatments", value: "10+", sub: "Specialised procedures" },
    { label: "Established", value: "2024", sub: "Modern Noida centre" },
    { label: "Google Rating", value: "5.0 ★", sub: "Based on real patient reviews" }
  ]
};

// Helper function to return aligner wording based on config flag
export const getAlignerTerm = (capitalized = false) => {
  if (clinicConfig.isCertifiedInvisalignProvider) {
    return capitalized ? "Invisalign®" : "Invisalign® clear aligners";
  }
  return capitalized ? "Clear Aligners" : "clear aligners";
};

// All 10 Services Data
export const servicesData: ServiceItem[] = [
  {
    id: "checkup",
    slug: "dental-checkups-and-digital-x-rays-noida",
    title: "Dental Check-ups and Digital X-Rays",
    tagline: "Prevention perfected through precision.",
    cardLine: "Precision-led dental evaluations",
    shortDesc: "Comprehensive oral health assessments using low-radiation digital imaging for early diagnosis and long-term tooth preservation.",
    aeoAnswer: "Comprehensive dental check-ups at Align Dentofacial Clinic in Noida combine thorough clinical examinations with ultra-low radiation digital X-rays. Early detection prevents complex dental problems, ensuring pain-controlled, cost-effective oral care.",
    image: "/images/dental-checkups-and-digital-x-rays-noida.jpg",
    fullDesc: [
      "A routine dental check-up is the foundation of lifelong oral health. At Align Dentofacial Clinic, near Sector 49 Noida, our detailed evaluation includes a visual teeth inspection, gum health check, bite assessment, and oral cancer screening.",
      "Digital X-rays provide clear views of hidden tooth decay between teeth, bone structure around roots, and developing wisdom teeth. Digital sensor technology reduces radiation exposure by up to 80% compared to traditional film X-rays."
    ],
    whoNeedsIt: [
      "Anyone who has not visited a dentist in the last 6 months",
      "Patients experiencing tooth sensitivity, mild pain, or gum bleeding",
      "Individuals planning orthodontic treatment or cosmetic smile procedures",
      "Children and adults looking for preventive oral healthcare"
    ],
    benefits: [
      "Catches cavities before they turn into painful tooth infections",
      "Low-radiation digital X-rays for safe and fast diagnostic results",
      "Detailed explanation of your oral health with transparent advice",
      "Paves the way for simple, minimally invasive treatments"
    ],
    procedureSteps: [
      { title: "Consultation and History", desc: "Dr. Jyoti Chauhan discusses your oral health history and any current concerns." },
      { title: "Digital Imaging", desc: "Quick, painless digital X-rays are taken using safe electronic sensors." },
      { title: "Clinical Examination", desc: "Thorough inspection of teeth, gums, tongue, and jaw joint movement." },
      { title: "Personalised Care Plan", desc: "Clear recommendations with itemised advice tailored to your goals." }
    ],
    aftercare: [
      "Maintain twice-daily brushing with a soft-bristled toothbrush",
      "Floss daily to remove plaque from between teeth",
      "Schedule your next routine preventive check-up in 6 months"
    ],
    faqs: [
      { question: "How often should I visit the dentist?", answer: "Every 6 months for routine check-ups and preventive care." },
      { question: "Are dental X-rays safe?", answer: "Yes. Digital X-rays use very low radiation, making them extremely safe for children and adults." },
      { question: "How long does a check-up take?", answer: "A routine check-up with digital X-rays usually takes 20 to 30 minutes." }
    ],
    relatedSlugs: ["teeth-cleaning-polishing-whitening-noida", "tooth-fillings-cavity-treatment-noida", "braces-noida"]
  },
  {
    id: "fillings",
    slug: "tooth-fillings-cavity-treatment-noida",
    title: "Tooth Fillings and Cavity Treatment",
    tagline: "Restoring strength. Preserving beauty.",
    cardLine: "Natural-looking cavity restorations",
    shortDesc: "Painless composite restorations that repair tooth decay and match the natural shade of your natural teeth.",
    aeoAnswer: "Tooth fillings at Align Dentofacial Clinic repair decay using shade-matched composite resin. The procedure preserves natural tooth structure, restores chewing function, and prevents deep nerve infection.",
    image: "/images/tooth-fillings-cavity-treatment-noida.jpg",
    fullDesc: [
      "When tooth decay creates a cavity, early treatment restores the tooth before nerve damage occurs. We use high-quality tooth-coloured composite resins that bond directly to your tooth enamel.",
      "Unlike old silver fillings, composite restorations blend seamlessly with your smile, require minimal tooth removal, and offer strong resistance against daily chewing pressure."
    ],
    whoNeedsIt: [
      "Teeth with visible dark spots, holes, or food trap areas",
      "Sensitivity when eating sweet, hot, or cold foods",
      "Chipped or worn teeth requiring structural reshaping",
      "Replacing old, silver amalgam fillings with aesthetic tooth-coloured material"
    ],
    benefits: [
      "Natural shade matching for an invisible, seamless restoration",
      "Preserves maximum healthy tooth structure",
      "Comfort-focused procedure performed under precise local anaesthesia",
      "Durable material designed to last many years with proper care"
    ],
    procedureSteps: [
      { title: "Comfort Preparation", desc: "Local anaesthesia is administered so the procedure remains comfortable." },
      { title: "Decay Removal", desc: "Gentle cleaning of the affected tooth structure." },
      { title: "Composite Layering", desc: "Application of shade-matched resin layer by layer." },
      { title: "Polishing", desc: "Bite adjustment and final polishing for a smooth surface." }
    ],
    aftercare: [
      "Avoid eating very hard foods immediately after your visit",
      "Continue brushing twice daily with fluoride toothpaste",
      "Contact us if your bite feels uneven after the numbing wears off"
    ],
    faqs: [
      { question: "Does getting a filling hurt?", answer: "Most procedures are pain-controlled with local anaesthesia for a comfortable experience." },
      { question: "How long do composite fillings last?", answer: "With good oral hygiene, composite fillings last many years." },
      { question: "Can I eat right after a filling?", answer: "Yes, once the local anaesthesia wears off, usually within 1 to 2 hours." }
    ],
    relatedSlugs: ["dental-checkups-and-digital-x-rays-noida", "root-canal-treatment-noida", "teeth-cleaning-polishing-whitening-noida"]
  },
  {
    id: "rct",
    slug: "root-canal-treatment-noida",
    title: "Root Canal Treatment",
    tagline: "Comfort-focused care that saves your natural tooth.",
    cardLine: "Comfort-focused, tooth-saving treatment",
    shortDesc: "Painless single-sitting or multi-sitting endodontic therapy that relieves toothache and saves infected teeth from extraction.",
    aeoAnswer: "Root canal treatment at Align Dentofacial Clinic in Noida removes infected pulp tissue, cleans the root canals, and seals them safely. Performed under effective local anaesthesia, it relieves severe tooth pain and preserves your natural tooth.",
    image: "/images/root-canal-treatment-noida.jpg",
    fullDesc: [
      "When deep decay or injury reaches the inner nerve pulp of a tooth, severe pain and swelling can result. Root canal treatment is a precise endodontic procedure designed to eliminate infection while preserving your natural tooth structure.",
      "With advanced endodontic technology and rotary instruments, Dr. Jyoti Chauhan ensures root canals are performed with high accuracy and minimal discomfort."
    ],
    whoNeedsIt: [
      "Severe persistent tooth pain or throbbing ache while chewing",
      "Extreme sensitivity to hot or cold drinks that lingers",
      "Swelling or tender bumps on the gums near a painful tooth",
      "Dark discoloration of a single tooth following physical trauma"
    ],
    benefits: [
      "Instant relief from debilitating toothache and nerve pressure",
      "Saves your original tooth, preventing the need for extraction",
      "Restores normal chewing ability and biting force",
      "Protected with a custom crown for long-term structural durability"
    ],
    procedureSteps: [
      { title: "Anaesthesia and Isolation", desc: "Local anaesthesia is applied to ensure a completely pain-controlled session." },
      { title: "Canal Cleaning", desc: "Infected nerve pulp is removed and canals are sterilised thoroughly." },
      { title: "Sealing (Obturation)", desc: "Canals are filled with biocompatible material to prevent reinfection." },
      { title: "Crown Protection", desc: "A custom dental crown is placed to restore strength and appearance." }
    ],
    aftercare: [
      "Take prescribed mild medications as advised by your doctor",
      "Avoid chewing hard food on the treated tooth until the crown is fitted",
      "Maintain clean oral hygiene around the restored tooth"
    ],
    faqs: [
      { question: "Is root canal treatment painful?", answer: "Modern root canal treatment is done under local anaesthesia and is comfortable for most patients." },
      { question: "How long will a root canal procedure take?", answer: "Most root canal treatments take 45 to 60 minutes per sitting." },
      { question: "Do I always need a crown after a root canal?", answer: "Yes, a crown protects the treated tooth from fracturing under chewing pressure." }
    ],
    relatedSlugs: ["crowns-bridges-dentures-noida", "tooth-fillings-cavity-treatment-noida", "dental-implants-noida"]
  },
  {
    id: "implants",
    slug: "dental-implants-noida",
    title: "Dental Implants",
    tagline: "The gold standard in tooth replacement.",
    cardLine: "Permanent, natural-looking tooth replacement",
    shortDesc: "Biocompatible titanium implants that replace missing tooth roots and support custom ceramic crowns for permanent confidence.",
    aeoAnswer: "Dental implants at Align Dentofacial Clinic in Noida replace missing teeth with permanent titanium roots and realistic porcelain crowns. They restore chewing strength, prevent jawbone loss, and look completely natural.",
    image: "/images/dental-implants-noida.jpg",
    fullDesc: [
      "Missing teeth affect more than just your smile: they cause neighboring teeth to drift, alter your bite, and lead to gradual jawbone loss. Dental implants are the closest replacement for natural teeth available in modern dentistry.",
      "A dental implant consists of a small titanium post anchored gently into the jawbone, acting as a root. Once integrated, a custom crown is attached, providing a permanent solution that functions like a natural tooth."
    ],
    whoNeedsIt: [
      "Single or multiple missing teeth due to injury or extraction",
      "Patients looking for a fixed alternative to removable dentures",
      "Individuals experiencing chewing difficulty or speech changes from tooth loss",
      "Patients seeking to preserve jawbone volume and youthful facial contour"
    ],
    benefits: [
      "Looks, feels, and functions like a natural tooth",
      "Prevents adjacent teeth from shifting out of alignment",
      "Preserves facial bone structure and prevents premature aging",
      "High long-term success rate when cared for with regular hygiene"
    ],
    procedureSteps: [
      { title: "Implant Evaluation", desc: "Digital X-rays and bone assessments to plan precise implant placement." },
      { title: "Implant Placement", desc: "Titanium post is gently placed under local anaesthesia." },
      { title: "Osseointegration", desc: "Healing phase where the implant fuses securely with surrounding bone." },
      { title: "Crown Attachment", desc: "Custom ceramic crown is fitted securely onto the implant." }
    ],
    aftercare: [
      "Follow post-procedure care instructions and clean soft foods diet for initial days",
      "Brush twice daily and use non-abrasive toothpaste",
      "Attend regular check-ups every 6 months for professional cleaning"
    ],
    faqs: [
      { question: "Are dental implants painful?", answer: "Implants are placed under local anaesthesia and recovery discomfort is usually mild." },
      { question: "How long do dental implants last?", answer: "With good oral hygiene and regular check-ups, dental implants are designed to last many years." },
      { question: "Am I a suitable candidate for implants?", answer: "Most adults with healthy gums and sufficient jawbone are suitable candidates after evaluation." }
    ],
    relatedSlugs: ["crowns-bridges-dentures-noida", "root-canal-treatment-noida", "smile-designing-noida"]
  },
  {
    id: "aligners",
    slug: "clear-aligners-noida",
    title: "Clear Aligners",
    tagline: "The invisible path to a perfectly aligned smile.",
    cardLine: "Clear aligners for smile alignment",
    shortDesc: "Discreet, removable transparent trays that gently align crooked, spaced, or crowded teeth without metal wires.",
    aeoAnswer: "Clear aligners at Align Dentofacial Clinic offer an invisible, comfortable method to straighten teeth in Noida. Custom-designed by specialist MDS Orthodontist Dr. Jyoti Chauhan, removable clear trays align teeth smoothly without metal brackets.",
    image: "/images/clear-aligners-noida.jpg",
    fullDesc: [
      "Clear aligners represent modern orthodontic innovation. Using custom 3D digital planning, a series of transparent, medical-grade plastic aligners are crafted to move your teeth gradually into ideal position.",
      "Because clear aligners are removable, you can enjoy your favorite foods, brush and floss normally, and maintain your professional appearance without visible metal wires or brackets."
    ],
    whoNeedsIt: [
      "Adults and teens looking for discreet tooth straightening",
      "Crooked, overlapped, or crowded teeth",
      "Gaps or spacing between front teeth",
      "Mild to moderate bite misalignments including overbites or crossbites"
    ],
    benefits: [
      "Virtually invisible while speaking, smiling, and working",
      "Removable for meals, photos, brushing, and special occasions",
      "No food restrictions or sharp bracket irritation against cheeks",
      "Fewer emergency visits compared to traditional fixed braces"
    ],
    procedureSteps: [
      { title: "Orthodontic Assessment", desc: "Detailed examination by MDS Orthodontist Dr. Jyoti Chauhan." },
      { title: "3D Digital Scan & Plan", desc: "Virtual treatment simulation showing predicted step-by-step tooth movement." },
      { title: "Aligner Delivery", desc: "Receiving your custom aligner sets with precise wear guidance." },
      { title: "Progress Monitoring", desc: "Brief check-ins every 4 to 8 weeks to track your smile transformation." }
    ],
    aftercare: [
      "Wear your aligners for 20 to 22 hours every day",
      "Rinse aligners with cold water and clean gently with a soft toothbrush",
      "Store aligners in their protective case whenever removed"
    ],
    faqs: [
      { question: "How long does clear aligner treatment take?", answer: "Usually 6 to 18 months, depending on your individual case complexity." },
      { question: "Are clear aligners visible to others?", answer: "Clear aligners are transparent and discreet, making them very hard to notice." },
      { question: "Can I eat while wearing aligners?", answer: "Remove aligners before eating or drinking anything other than plain water." }
    ],
    relatedSlugs: ["braces-noida", "smile-designing-noida", "veneers-noida"]
  },
  {
    id: "braces",
    slug: "braces-noida",
    title: "Braces (Metal & Ceramic)",
    tagline: "Precision alignment for timeless smiles.",
    cardLine: "Complete orthodontic smile correction",
    shortDesc: "Specialist orthodontic braces in metal and tooth-coloured ceramic for precise correction of complex bites and crowding.",
    aeoAnswer: "Orthodontic braces at Align Dentofacial Clinic in Noida provide reliable smile correction for children, teens, and adults. Led by MDS Orthodontist Dr. Jyoti Chauhan, braces fix crooked teeth, gaps, and severe bite misalignments.",
    image: "/images/braces-noida.jpg",
    fullDesc: [
      "Braces remain one of the most effective and time-tested methods for correcting complex orthodontic concerns. Whether choosing classic high-grade metal braces or aesthetic tooth-coloured ceramic options, fixed appliances offer accurate control over individual tooth positions.",
      "As an MDS Orthodontist, Dr. Jyoti Chauhan plans every orthodontic case to improve both facial aesthetics and long-term bite function."
    ],
    whoNeedsIt: [
      "Severe crowding, overlapping, or rotated teeth",
      "Significant gaps between teeth or midline misalignment",
      "Complex bite problems including deep overbite, underbite, or crossbite",
      "Children, teenagers, and adults seeking predictable smile alignment"
    ],
    benefits: [
      "Precise control over complex multi-tooth movements",
      "Ceramic option provides a discreet, subtle appearance",
      "Fixes bite alignment to protect teeth from uneven wear",
      "Improves long-term chewing function and facial symmetry"
    ],
    procedureSteps: [
      { title: "Specialist Consultation", desc: "Comprehensive orthodontic analysis and facial profile assessment." },
      { title: "Brackets Bonding", desc: "Precise attachment of high-grade metal or ceramic brackets." },
      { title: "Monthly Adjustments", desc: "Regular short visits to guide progress smoothly." },
      { title: "Retainer Phase", desc: "Custom retainers to preserve your beautiful newly aligned smile." }
    ],
    aftercare: [
      "Use orthodontic toothbrush and interdental brushes to clean around brackets",
      "Avoid hard, sticky, or crunchy foods like nuts, hard candies, and chewing gum",
      "Wear sports mouthguards during contact athletic activities"
    ],
    faqs: [
      { question: "Are braces visible?", answer: "Metal braces are visible. Ceramic braces use tooth-coloured brackets and are much more discreet." },
      { question: "What is the best age to get braces?", answer: "Orthodontic evaluations are recommended around age 7, though braces are effective for teens and adults." },
      { question: "Do braces cause discomfort?", answer: "Mild tightness is normal for a few days after adjustments and resolves quickly." }
    ],
    relatedSlugs: ["clear-aligners-noida", "smile-designing-noida", "dental-checkups-and-digital-x-rays-noida"]
  },
  {
    id: "veneers",
    slug: "veneers-noida",
    title: "Veneers",
    tagline: "Redefining elegance, one smile at a time.",
    cardLine: "Luxury smile transformations",
    shortDesc: "Custom ultra-thin porcelain or composite shells that conceal stains, gaps, chips, and tooth irregularities.",
    aeoAnswer: "Dental veneers at Align Dentofacial Clinic in Noida are custom porcelain or composite shells crafted to transform discoloured, chipped, or slightly misaligned front teeth into a flawless, natural-looking smile.",
    image: "/images/veneers-noida.jpg",
    fullDesc: [
      "Veneers are the ultimate cosmetic dental procedure for achieving a radiant, symmetrical smile. Ultra-thin shells of durable ceramic are custom-fabricated to bond directly to the front surface of your teeth.",
      "Veneers correct stubborn intrinsic staining, close gaps, fix uneven edges, and reshape teeth with remarkable aesthetic naturalism."
    ],
    whoNeedsIt: [
      "Teeth with permanent deep stains that do not respond to whitening",
      "Chipped, cracked, or worn tooth edges",
      "Small gaps between front teeth",
      "Unevenly shaped or slightly misaligned front teeth"
    ],
    benefits: [
      "Stunning, natural tooth translucency and shade harmony",
      "Resistant to permanent staining from coffee, tea, and food",
      "Minimally invasive preparation preserving maximum enamel",
      "Long-lasting aesthetic result designed to stay radiant for years"
    ],
    procedureSteps: [
      { title: "Smile Design Consultation", desc: "Discussing your aesthetic goals and selecting shade preferences." },
      { title: "Gentle Tooth Preparation", desc: "Micro-shaping of enamel surface for seamless fit." },
      { title: "Custom Crafting", desc: "Precision fabrication in a dental laboratory." },
      { title: "Permanent Bonding", desc: "Meticulous bonding and light-curing for a lasting result." }
    ],
    aftercare: [
      "Avoid using front teeth to bite into very hard objects like ice or hard candy",
      "Brush twice daily with non-abrasive toothpaste",
      "Wear a custom night guard if you tend to grind your teeth during sleep"
    ],
    faqs: [
      { question: "Are veneers permanent?", answer: "Porcelain veneers are long-lasting restorations that can maintain their beauty for many years with proper care." },
      { question: "Do veneers damage natural teeth?", answer: "No. Modern porcelain veneers require minimal tooth shaping, preserving healthy enamel." },
      { question: "What is the difference between porcelain and composite veneers?", answer: "Porcelain veneers are more durable and stain-resistant, while composite veneers are completed in a single visit." }
    ],
    relatedSlugs: ["smile-designing-noida", "teeth-cleaning-polishing-whitening-noida", "clear-aligners-noida"]
  },
  {
    id: "cleaning",
    slug: "teeth-cleaning-polishing-whitening-noida",
    title: "Cleaning, Polishing and Whitening",
    tagline: "Refined care for a radiant smile.",
    cardLine: "Brighter, healthier smiles",
    shortDesc: "Professional ultrasonic scaling to eliminate tartar, micro-polishing for smoothness, and safe whitening treatments.",
    aeoAnswer: "Professional teeth cleaning and whitening at Align Dentofacial Clinic removes stubborn calculus, tartar, and surface stains. It brightens discoloured teeth comfortably while protecting gum health.",
    image: "/images/teeth-cleaning-polishing-whitening-noida.jpg",
    fullDesc: [
      "Even meticulous daily brushing cannot completely prevent tartar accumulation under gums and between teeth. Professional ultrasonic cleaning gently vibrates away hardened plaque and calculus.",
      "Following scaling and polishing, our professional teeth whitening treatments remove years of food, coffee, and tea stains, brightening your smile by several shades safely under dental supervision."
    ],
    whoNeedsIt: [
      "Bleeding gums, bad breath, or yellow tartar buildup near gumlines",
      "Stained or discoloured teeth from coffee, tea, or food pigments",
      "Preparation for special occasions like weddings or professional events",
      "Routine oral hygiene maintenance every 6 months"
    ],
    benefits: [
      "Prevents gum disease, gingivitis, and bad breath",
      "Removes stubborn extrinsic tooth stains safely",
      "Smoothes tooth surfaces to reduce future plaque accumulation",
      "Provides a noticeably brighter and refreshed smile"
    ],
    procedureSteps: [
      { title: "Oral Health Assessment", desc: "Checking gum pockets and enamel health before treatment." },
      { title: "Ultrasonic Scaling", desc: "Gentle removal of tartar and calculus using ultrasonic vibrations." },
      { title: "Prophylaxis Polishing", desc: "Smoothing tooth surfaces with fluoride polishing paste." },
      { title: "Professional Whitening", desc: "Application of dental-grade whitening gel for radiant results." }
    ],
    aftercare: [
      "Avoid deeply pigmented foods and dark beverages for 48 hours after whitening",
      "Maintain twice-daily brushing and daily flossing",
      "Schedule routine professional cleanings every 6 months"
    ],
    faqs: [
      { question: "Is teeth whitening safe?", answer: "Yes, professional teeth whitening is completely safe when performed under dental supervision." },
      { question: "Does teeth cleaning make teeth loose?", answer: "No. Cleaning removes tartar that causes gum disease. It actually protects teeth from becoming loose." },
      { question: "Can crowns or veneers be whitened?", answer: "No. Professional whitening gel works on natural enamel only." }
    ],
    relatedSlugs: ["dental-checkups-and-digital-x-rays-noida", "veneers-noida", "smile-designing-noida"]
  },
  {
    id: "smiledesign",
    slug: "smile-designing-noida",
    title: "Smile Designing and Cosmetic Dentistry",
    tagline: "Where dentistry becomes art.",
    cardLine: "Personalised cosmetic dentistry",
    shortDesc: "Comprehensive aesthetic analysis combining alignment, veneers, gum contouring, and restorations for complete smile enhancement.",
    aeoAnswer: "Digital smile designing at Align Dentofacial Clinic in Noida creates personalised smile transformations. Dr. Jyoti Chauhan evaluates your facial proportions, lips, and teeth to craft a harmonious, aesthetic smile.",
    image: "/images/smile-designing-noida.jpg",
    fullDesc: [
      "Smile designing combines art, science, and facial symmetry. Rather than treating individual teeth in isolation, we evaluate your entire face, lip line, gum display, and tooth proportions to craft your ideal smile.",
      "Using digital planning and multi-specialty care, your smile transformation may include orthodontic aligners, porcelain veneers, gum recontouring, and tooth whitening."
    ],
    whoNeedsIt: [
      "Asymmetrical smiles with uneven tooth lengths or gum lines",
      "Multiple cosmetic concerns including gaps, stains, and worn edges",
      "Patients seeking a comprehensive smile makeover for renewed confidence",
      "Individuals desiring a natural, elegant aesthetic tailored to their facial profile"
    ],
    benefits: [
      "Custom treatment plan aligned with your unique facial features",
      "Preview predicted smile outcomes before starting procedures",
      "Combines aesthetics with long-term bite function",
      "Restores confidence with a radiant, balanced smile"
    ],
    procedureSteps: [
      { title: "Aesthetic Evaluation", desc: "High-resolution photographic and video analysis of your smile dynamics." },
      { title: "Digital Design Plan", desc: "Custom smile mapping based on facial proportions." },
      { title: "Mock-Up Trial", desc: "A physical preview of your proposed smile directly in your mouth." },
      { title: "Precision Execution", desc: "Coordinated application of cosmetic and orthodontic procedures." }
    ],
    aftercare: [
      "Maintain meticulous oral hygiene with soft toothbrushing",
      "Wear custom protective night guards if advised",
      "Attend scheduled cosmetic follow-up visits"
    ],
    faqs: [
      { question: "What procedures are included in smile designing?", answer: "It can include clear aligners, veneers, crowns, gum contouring, and whitening depending on your goals." },
      { question: "How long does a smile makeover take?", answer: "Treatments range from a few days for composite veneers to several months if aligners are included." },
      { question: "Can I preview my new smile beforehand?", answer: "Yes, digital design and mock-up trials allow you to see your smile proposal beforehand." }
    ],
    relatedSlugs: ["veneers-noida", "clear-aligners-noida", "teeth-cleaning-polishing-whitening-noida"]
  },
  {
    id: "crowns",
    slug: "crowns-bridges-dentures-noida",
    title: "Crowns, Bridges and Dentures",
    tagline: "Precision restorations for timeless smiles.",
    cardLine: "Elegant dental restorations",
    shortDesc: "High-strength zircionia crowns, ceramic fixed bridges, and comfortable dentures designed for natural chewing and aesthetics.",
    aeoAnswer: "Dental crowns, bridges, and dentures at Align Dentofacial Clinic in Noida replace damaged or missing teeth with durable zirconia ceramic restorations. They restore natural biting force, speech clarity, and facial support.",
    image: "/images/crowns-bridges-dentures-noida.jpg",
    fullDesc: [
      "When teeth are broken, severely decayed, or missing, custom prosthetics restore full functionality and appearance. A dental crown caps a damaged tooth, a bridge bridges the gap created by missing teeth, and dentures provide comfortable multi-tooth replacements.",
      "We use premium metal-free zirconia and ceramic materials crafted with CAD/CAM digital precision for strength and translucent natural beauty."
    ],
    whoNeedsIt: [
      "Weak or cracked teeth requiring protective coverage",
      "Teeth treated with root canal therapy requiring structural reinforcement",
      "One or more missing teeth where fixed bridges or dentures are preferred",
      "Replacing older metal-based crowns with aesthetic tooth-coloured options"
    ],
    benefits: [
      "High strength zirconia ceramic resistant to chipping and wear",
      "Precise digital fit for optimal bite comfort",
      "Restores complete chewing capability and speech clarity",
      "Seamless color match with surrounding natural teeth"
    ],
    procedureSteps: [
      { title: "Tooth Preparation", desc: "Gentle shaping of the tooth under local anaesthesia." },
      { title: "Digital Impression", desc: "Detailed scan taken for laboratory fabrication." },
      { title: "Temporary Fitting", desc: "Protective temporary crown placed while permanent piece is crafted." },
      { title: "Permanent Cementation", desc: "Final fitting, bite check, and permanent bonding." }
    ],
    aftercare: [
      "Floss carefully around crowns and under bridge pontics daily",
      "Avoid biting extremely hard objects like bottle caps or bone fragments",
      "Visit for routine dental checks to monitor crown margins"
    ],
    faqs: [
      { question: "How long do dental crowns last?", answer: "With proper oral care and regular check-ups, high quality crowns last many years." },
      { question: "What is the difference between a crown and a bridge?", answer: "A crown covers a single damaged tooth, while a bridge replaces one or more missing teeth by anchoring to adjacent teeth." },
      { question: "Are zirconia crowns better than metal ceramic crowns?", answer: "Yes, zirconia crowns are metal-free, stronger, and provide superior natural translucency." }
    ],
    relatedSlugs: ["root-canal-treatment-noida", "dental-implants-noida", "tooth-fillings-cavity-treatment-noida"]
  }
];

// 10 Orthodontic Problems Data
export const orthodonticProblemsData: OrthodonticProblemItem[] = [
  {
    id: "crooked",
    slug: "crooked-teeth-treatment-noida",
    title: "Crooked Teeth",
    shortDesc: "Misaligned or turned teeth that affect smile aesthetics and are difficult to keep clean.",
    aeoAnswer: "Crooked teeth treatment at Align Dentofacial Clinic in Noida uses braces or clear aligners to align misaligned teeth gently. Led by MDS Orthodontist Dr. Jyoti Chauhan, treatment improves smile appearance and oral hygiene.",
    image: "/images/crooked-teeth-treatment-noida.jpg",
    causes: ["Genetics and small jaw size", "Early loss of primary baby teeth", "Habits like thumb sucking in early childhood"],
    effects: ["Increased risk of plaque buildup and cavities", "Uneven chewing pressure causing enamel wear", "Self-consciousness while smiling"],
    treatments: ["Clear Aligners", "Metal or Ceramic Braces", "Interceptive Orthodontics for children"],
    idealAge: "Age 7 and above for evaluation, suitable for teens and adults of all ages.",
    durationRange: "6 to 18 months depending on alignment severity.",
    faqs: [
      { question: "Can crooked teeth be corrected without braces?", answer: "Yes, clear aligners offer a discreet alternative to fixed braces for correcting crooked teeth." },
      { question: "Why should I treat crooked teeth?", answer: "Straight teeth are easier to clean, reduce gum inflammation, and provide a confident smile." }
    ]
  },
  {
    id: "spacing",
    slug: "spaced-teeth-gaps-treatment-noida",
    title: "Spaced Teeth (Gaps)",
    shortDesc: "Noticeable gaps or spaces between teeth caused by extra jaw space or missing teeth.",
    aeoAnswer: "Gap teeth treatment in Noida at Align Dentofacial Clinic closes spaces between teeth comfortably using clear aligners, braces, or cosmetic bonding under specialist orthodontic care.",
    image: "/images/spaced-teeth-gaps-treatment-noida.jpg",
    causes: ["Disproportionate tooth-to-jaw size", "Large labial frenum attachment between front teeth", "Missing or abnormally small teeth"],
    effects: ["Food impaction between teeth leading to gum irritation", "Speech lisps or air leaks while talking", "Dissatisfaction with smile gap"],
    treatments: ["Clear Aligners", "Ceramic Braces", "Composite Bonding or Veneers for single gaps"],
    idealAge: "Teens and adults.",
    durationRange: "4 to 12 months.",
    faqs: [
      { question: "How quickly can gaps between teeth be closed?", answer: "Small gaps can often be closed within 4 to 8 months with clear aligners." },
      { question: "Will the gap reopen after treatment?", answer: "Wearing custom retainers after treatment keeps your teeth securely in place." }
    ]
  },
  {
    id: "protrusion",
    slug: "forward-teeth-protrusion-treatment-noida",
    title: "Forward Teeth (Protrusion)",
    shortDesc: "Upper front teeth that stick out significantly forward relative to the lower jaw.",
    aeoAnswer: "Treatment for protruding upper front teeth in Noida uses dentofacial orthopaedics, braces, or clear aligners to gently bring teeth back into proper alignment and lip closure.",
    image: "/images/before-crooked.jpg",
    causes: ["Skeletal jaw imbalance", "Thumb sucking or prolonged pacifier use", "Narrow upper arch"],
    effects: ["Risk of chipping front teeth in accidental falls", "Inability to comfortably close lips over teeth", "Dry mouth and mouth breathing"],
    treatments: ["Dentofacial Orthopaedics for growing children", "Orthodontic Braces", "Clear Aligners"],
    idealAge: "Best evaluated between ages 8 and 14, effective in adults.",
    durationRange: "12 to 24 months.",
    faqs: [
      { question: "Can protruding teeth be treated without tooth extraction?", answer: "Many cases can be treated non-extractively through arch expansion or IPR depending on clinical evaluation." }
    ]
  },
  {
    id: "deepbite",
    slug: "deep-bite-overbite-treatment-noida",
    title: "Deep Bite (Overbite)",
    shortDesc: "Upper front teeth excessively overlap lower teeth, sometimes biting into the roof of the mouth.",
    aeoAnswer: "Deep bite treatment at Align Dentofacial Clinic in Noida corrects excessive upper tooth overlap, preventing gum trauma and protecting lower teeth from heavy wear.",
    image: "/images/crooked-teeth-treatment-noida.jpg",
    causes: ["Overdevelopment of lower jaw bone or underdevelopment of upper arch", "Loss of back teeth"],
    effects: ["Lower teeth digging into palatal gum tissue", "Accelerated wear of lower front teeth", "Jaw joint (TMJ) discomfort"],
    treatments: ["Bite opening orthodontic appliances", "Braces with bite ramps", "Clear Aligners"],
    idealAge: "Children, teens, and adults.",
    durationRange: "12 to 20 months.",
    faqs: [
      { question: "What happens if a deep bite is left untreated?", answer: "Untreated deep bites can lead to severe tooth wear, gum damage, and jaw joint strain." }
    ]
  },
  {
    id: "underbite",
    slug: "underbite-reverse-bite-treatment-noida",
    title: "Underbite (Reverse Bite)",
    shortDesc: "Lower front teeth sit forward in front of the upper front teeth when closing the mouth.",
    aeoAnswer: "Underbite correction in Noida uses specialized dentofacial orthopaedics or braces to align lower and upper jaw relationships for functional chewing and facial harmony.",
    image: "/images/crooked-teeth-treatment-noida.jpg",
    causes: ["Genetics and lower jaw overgrowth", "Underdeveloped upper jaw bone"],
    effects: ["Difficulty chewing food properly", "Facial profile asymmetry", "Jaw joint pain"],
    treatments: ["Face mask / Reverse pull headgear (early age)", "Orthodontic Braces", "Clear Aligners"],
    idealAge: "Early intervention (age 7 to 10) provides best skeletal results.",
    durationRange: "14 to 24 months.",
    faqs: [
      { question: "Can underbite be treated in young children?", answer: "Yes, early dentofacial orthopaedic treatment between ages 7 and 9 produces excellent non-surgical outcomes." }
    ]
  },
  {
    id: "crossbite",
    slug: "crossbite-treatment-noida",
    title: "Crossbite",
    shortDesc: "One or more upper teeth bite inside the lower teeth instead of outside.",
    aeoAnswer: "Crossbite treatment at Align Dentofacial Clinic expands narrow arches and corrects tooth position using palatal expanders, braces, or clear aligners in Noida.",
    image: "/images/crooked-teeth-treatment-noida.jpg",
    causes: ["Narrow upper jaw bone", "Genetics", "Delayed loss of baby teeth"],
    effects: ["Asymmetrical jaw growth in children", "Uneven tooth wear and gum recession", "Jaw shifting on closure"],
    treatments: ["Palatal Expanders", "Braces", "Clear Aligners"],
    idealAge: "Ages 7 to 14 ideal for palatal expansion, adults can be treated with aligners or braces.",
    durationRange: "9 to 18 months.",
    faqs: [
      { question: "Why is early treatment important for crossbites?", answer: "Early treatment prevents asymmetrical jaw growth and TMJ problems in adulthood." }
    ]
  },
  {
    id: "openbite",
    slug: "open-bite-treatment-noida",
    title: "Open Bite",
    shortDesc: "Front upper and lower teeth do not touch when the back teeth bite together, leaving a vertical gap.",
    aeoAnswer: "Open bite correction in Noida closes front vertical gaps using habit correction appliances, braces, or clear aligners guided by MDS Orthodontist Dr. Jyoti Chauhan.",
    image: "/images/crooked-teeth-treatment-noida.jpg",
    causes: ["Tongue thrusting habit", "Prolonged thumb sucking", "Vertical jaw growth pattern"],
    effects: ["Inability to bite or cut food with front teeth", "Speech difficulty with lisping", "Increased wear on back molar teeth"],
    treatments: ["Habit Breaking Appliances", "Clear Aligners", "Orthodontic Braces"],
    idealAge: "Childhood through adulthood.",
    durationRange: "12 to 24 months.",
    faqs: [
      { question: "Can clear aligners fix an open bite?", answer: "Yes, clear aligners are highly effective at intruding back molars to close open bites." }
    ]
  },
  {
    id: "midline",
    slug: "midline-misalignment-treatment-noida",
    title: "Midline Misalignment",
    shortDesc: "The center line of upper front teeth does not line up with the center line of lower teeth.",
    aeoAnswer: "Midline misalignment treatment in Noida adjusts dental arch centers using precision orthodontic elastics, braces, or aligners for a symmetrical smile.",
    image: "/images/crooked-teeth-treatment-noida.jpg",
    causes: ["Early loss of baby teeth on one side", "Asymmetrical tooth sizes", "Jaw shift"],
    effects: ["Asymmetrical smile balance", "Uneven chewing distribution"],
    treatments: ["Orthodontic Braces with asymmetric elastics", "Clear Aligners"],
    idealAge: "Teens and adults.",
    durationRange: "6 to 14 months.",
    faqs: [
      { question: "Does a midline shift affect bite function?", answer: "Yes, aligning midlines improves bite symmetry and overall smile harmony." }
    ]
  },
  {
    id: "crowding",
    slug: "crowding-treatment-noida",
    title: "Crowding",
    shortDesc: "Insufficient jaw space leading to overlapped, twisted, or pushed-back teeth.",
    aeoAnswer: "Teeth crowding treatment at Align Dentofacial Clinic in Noida creates adequate space and aligns overlapped teeth using arch expansion, braces, or clear aligners.",
    image: "/images/before-crooked.jpg",
    causes: ["Small jaw size relative to tooth size", "Extra teeth or delayed tooth loss"],
    effects: ["Plaque traps causing decay and gum disease", "Aesthetic dissatisfaction"],
    treatments: ["Arch Expansion", "Clear Aligners", "Braces"],
    idealAge: "Ages 7 through adult.",
    durationRange: "8 to 18 months.",
    faqs: [
      { question: "Do crowded teeth always require extractions?", answer: "No. Modern techniques like arch expansion and IPR allow many cases to be aligned without tooth extraction." }
    ]
  },
  {
    id: "unevensmile",
    slug: "uneven-smile-treatment-noida",
    title: "Uneven Smile",
    shortDesc: "Irregular tooth heights, slanted smile line, or uneven gum display affecting smile aesthetics.",
    aeoAnswer: "Uneven smile correction in Noida combines orthodontic levelling, aesthetic contouring, and veneers to create a balanced, symmetrical smile.",
    image: "/images/after-straight.jpg",
    causes: ["Uneven tooth wear", "Irregular eruption heights", "Gum asymmetry"],
    effects: ["Unbalanced smile appearance", "Uneven tooth stress"],
    treatments: ["Orthodontic Levelling", "Veneers", "Cosmetic Contouring"],
    idealAge: "Adults and teens.",
    durationRange: "3 to 12 months.",
    faqs: [
      { question: "How is an uneven smile line fixed?", answer: "Through orthodontic levelling with braces/aligners or cosmetic restorations like veneers." }
    ]
  }
];

// 10 Dental Problems Data
export const dentalProblemsData: DentalProblemItem[] = [
  {
    id: "toothpain",
    slug: "tooth-pain",
    title: "Tooth Pain",
    shortDesc: "Sharp, dull, or throbbing ache in or around a tooth indicating decay, infection, or trauma.",
    aeoAnswer: "Tooth pain treatment at Align Dentofacial Clinic in Noida identifies the root cause through digital X-rays and delivers immediate, comfort-focused relief via fillings, root canal therapy, or gentle treatment.",
    image: "/images/root-canal-treatment-noida.jpg",
    symptoms: ["Throbbing ache when biting or chewing", "Sensitivity to hot or cold temperatures", "Swollen gums or facial pressure"],
    commonCauses: ["Deep cavity reaching nerve", "Cracked tooth structure", "Gum infection or abscess"],
    whenToSeeDentist: ["Pain lasts longer than 1 day", "Pain wakes you up at night", "Fever or swelling accompanies the pain"],
    treatmentsOffered: [
      { title: "Tooth Fillings", slug: "tooth-fillings-cavity-treatment-noida" },
      { title: "Root Canal Treatment", slug: "root-canal-treatment-noida" }
    ],
    homeCareTips: ["Rinse with warm salt water", "Avoid chewing on the painful side", "Visit the clinic promptly for examination"],
    faqs: [
      { question: "What should I do for sudden severe tooth pain?", answer: "Rinse with warm salt water, take over-the-counter pain relief, and contact our clinic immediately for an urgent appointment." }
    ]
  },
  {
    id: "bleedinggums",
    slug: "bleeding-gums",
    title: "Bleeding Gums",
    shortDesc: "Gums that bleed during brushing or flossing, signalling gingivitis or early gum disease.",
    aeoAnswer: "Bleeding gums treatment in Noida at Align Dentofacial Clinic removes tartar buildup through gentle ultrasonic scaling, stopping gum inflammation and protecting bone support.",
    image: "/images/teeth-cleaning-polishing-whitening-noida.jpg",
    symptoms: ["Pink or red blood on toothbrush or sink", "Red, swollen, or tender gums", "Persistent bad breath"],
    commonCauses: ["Plaque and tartar accumulation along gumline", "Improper brushing technique", "Vitamin deficiencies or hormonal changes"],
    whenToSeeDentist: ["Gums bleed frequently while brushing", "Gums appear receded or pulled away from teeth"],
    treatmentsOffered: [
      { title: "Teeth Cleaning & Polishing", slug: "teeth-cleaning-polishing-whitening-noida" },
      { title: "Dental Check-up", slug: "dental-checkups-and-digital-x-rays-noida" }
    ],
    homeCareTips: ["Brush gently with a soft toothbrush", "Floss daily between all teeth", "Use an antimicrobial mouthwash if recommended"],
    faqs: [
      { question: "Why do my gums bleed when I brush?", answer: "Bleeding gums are usually caused by plaque buildup irritating the gum tissue (gingivitis). Professional cleaning resolves this." }
    ]
  },
  {
    id: "sensitive",
    slug: "sensitive-teeth",
    title: "Sensitive Teeth",
    shortDesc: "Sharp pain or discomfort triggered by hot, cold, sweet, or acidic foods and drinks.",
    aeoAnswer: "Tooth sensitivity treatment at Align Dentofacial Clinic provides targeted enamel protection, fluoride varnish applications, and restorations to block painful nerve sensations.",
    image: "/images/tooth-fillings-cavity-treatment-noida.jpg",
    symptoms: ["Brief sharp discomfort from cold water or hot tea", "Pain when breathing cold air", "Discomfort while eating sweet treats"],
    commonCauses: ["Worn enamel from hard brushing", "Gum recession exposing root surfaces", "Micro-cracks or decay"],
    whenToSeeDentist: ["Sensitivity affects daily eating and drinking", "Discomfort persists after removing hot/cold triggers"],
    treatmentsOffered: [
      { title: "Tooth Fillings", slug: "tooth-fillings-cavity-treatment-noida" },
      { title: "Teeth Cleaning", slug: "teeth-cleaning-polishing-whitening-noida" }
    ],
    homeCareTips: ["Use a desensitising toothpaste twice daily", "Switch to a soft-bristled toothbrush", "Avoid aggressive scrubbing at gumlines"],
    faqs: [
      { question: "Can sensitive teeth be cured?", answer: "Yes, identifying the cause allows us to treat sensitivity effectively with desensitising agents, fillings, or fluoride application." }
    ]
  },
  {
    id: "cavities",
    slug: "tooth-decay-and-cavities",
    title: "Tooth Decay and Cavities",
    shortDesc: "Damage to tooth enamel caused by bacterial acids, forming holes or dark spots.",
    aeoAnswer: "Cavity treatment at Align Dentofacial Clinic in Noida removes decay and restores natural tooth structure using aesthetic, durable composite fillings.",
    image: "/images/tooth-fillings-cavity-treatment-noida.jpg",
    symptoms: ["Visible black or brown spots on teeth", "Sensitivity to sweet foods", "Food getting stuck between teeth"],
    commonCauses: ["Frequent sugary snacks and drinks", "Inadequate brushing and flossing", "Low saliva flow"],
    whenToSeeDentist: ["Noticeable dark spots or holes in teeth", "Mild discomfort when eating"],
    treatmentsOffered: [
      { title: "Composite Fillings", slug: "tooth-fillings-cavity-treatment-noida" },
      { title: "Root Canal Treatment", slug: "root-canal-treatment-noida" }
    ],
    homeCareTips: ["Limit sugary snacks and beverages", "Brush twice daily with fluoride toothpaste"],
    faqs: [
      { question: "How can I stop cavities from spreading?", answer: "Early filling treatment stops decay from spreading deeper into the tooth nerve." }
    ]
  },
  {
    id: "missingteeth",
    slug: "missing-teeth",
    title: "Missing Teeth",
    shortDesc: "Gaps left by lost or extracted teeth affecting chewing, speech, and facial structure.",
    aeoAnswer: "Missing teeth replacement at Align Dentofacial Clinic in Noida restores complete function using permanent dental implants, fixed bridges, or comfortable dentures.",
    image: "/images/dental-implants-noida.jpg",
    symptoms: ["Difficulty chewing tough foods", "Shifting of neighboring teeth", "Sunken facial appearance over time"],
    commonCauses: ["Untreated severe decay or gum disease", "Physical trauma or dental injury"],
    whenToSeeDentist: ["Immediately after losing a tooth to plan early replacement"],
    treatmentsOffered: [
      { title: "Dental Implants", slug: "dental-implants-noida" },
      { title: "Crowns & Bridges", slug: "crowns-bridges-dentures-noida" }
    ],
    homeCareTips: ["Keep remaining teeth clean with daily flossing", "Do not delay replacement to prevent teeth drift"],
    faqs: [
      { question: "What is the best option for a missing tooth?", answer: "Dental implants are considered the gold standard because they replace both the root and crown without altering adjacent teeth." }
    ]
  },
  {
    id: "crookeddental",
    slug: "crooked-or-irregular-teeth",
    title: "Crooked or Irregular Teeth",
    shortDesc: "Overlapped, twisted, or misaligned teeth impacting smile confidence and oral hygiene.",
    aeoAnswer: "Crooked teeth care in Noida uses modern braces or clear aligners guided by MDS Orthodontist Dr. Jyoti Chauhan for precise, comfortable smile correction.",
    image: "/images/braces-noida.jpg",
    symptoms: ["Teeth overlapping each other", "Difficulty flossing between tight teeth", "Uneven smile contour"],
    commonCauses: ["Small jaw size", "Childhood thumb sucking", "Genetics"],
    whenToSeeDentist: ["When misaligned teeth affect your confidence or make cleaning difficult"],
    treatmentsOffered: [
      { title: "Clear Aligners", slug: "clear-aligners-noida" },
      { title: "Braces", slug: "braces-noida" }
    ],
    homeCareTips: ["Use interdental brushes to clean crowded areas", "Schedule an orthodontic consultation"],
    faqs: [
      { question: "Can adults straighten crooked teeth?", answer: "Yes! Orthodontic treatment with aligners or braces is successful at any age." }
    ]
  },
  {
    id: "stained",
    slug: "stained-or-yellow-teeth",
    title: "Stained or Yellow Teeth",
    shortDesc: "Discolouration of teeth caused by coffee, tea, smoking, or natural aging.",
    aeoAnswer: "Stained teeth treatment at Align Dentofacial Clinic brightens yellowing teeth safely using professional scaling, polishing, and supervised whitening.",
    image: "/images/veneers-noida.jpg",
    symptoms: ["Yellow or brown surface discoloration", "Dull smile appearance"],
    commonCauses: ["Frequent coffee, tea, or dark spices", "Tobacco use", "Natural enamel thinning with age"],
    whenToSeeDentist: ["Before special events or when teeth discolouration bothers you"],
    treatmentsOffered: [
      { title: "Teeth Cleaning & Whitening", slug: "teeth-cleaning-polishing-whitening-noida" },
      { title: "Veneers", slug: "veneers-noida" }
    ],
    homeCareTips: ["Rinse your mouth with water after coffee or tea", "Avoid smoking or chewable tobacco"],
    faqs: [
      { question: "Does professional whitening harm tooth enamel?", answer: "No, professionally supervised whitening gel is formulated to brighten teeth safely without harming enamel." }
    ]
  },
  {
    id: "anxiety",
    slug: "dental-anxiety",
    title: "Dental Anxiety",
    shortDesc: "Fear or nervousness about visiting the dentist or undergoing dental procedures.",
    aeoAnswer: "At Align Dentofacial Clinic, we support nervous patients with a calm boutique environment, gentle communication, pain-controlled local anaesthesia, and step-by-step guidance.",
    image: "/images/smile-designing-noida.jpg",
    symptoms: ["Nervousness, fast heartbeat, or avoidance of dental visits"],
    commonCauses: ["Past negative dental experiences", "Fear of needles or pain"],
    whenToSeeDentist: ["When anxiety prevents you from getting necessary check-ups"],
    treatmentsOffered: [
      { title: "Preventive Dental Evaluation", slug: "dental-checkups-and-digital-x-rays-noida" }
    ],
    homeCareTips: ["Inform our team about your anxiety beforehand so we can customize your visit timing and pacing"],
    faqs: [
      { question: "How does Align Clinic help anxious patients?", answer: "We offer a calm environment, explain every step clearly, and ensure complete pain control with effective local anaesthesia." }
    ]
  },
  {
    id: "childfear",
    slug: "child-afraid-of-the-dentist",
    title: "Child Afraid of the Dentist",
    shortDesc: "Pediatric fear or apprehension regarding dental examinations and treatments.",
    aeoAnswer: "Our child-friendly dental care near Sector 49 Noida uses gentle explanation, friendly rapport, and short visits to ensure children feel comfortable and safe.",
    image: "/images/dental-checkups-and-digital-x-rays-noida.jpg",
    symptoms: ["Crying or refusal to sit in the dental chair", "Fear of dental equipment"],
    commonCauses: ["Unfamiliar environments", "Fear of discomfort"],
    whenToSeeDentist: ["By age 1 or when first baby teeth appear to build positive familiarity"],
    treatmentsOffered: [
      { title: "Kids Dental Evaluation", slug: "dental-checkups-and-digital-x-rays-noida" }
    ],
    homeCareTips: ["Avoid using scary words like 'pain' or 'shot' when talking to your child about the dentist"],
    faqs: [
      { question: "How can I prepare my child for their first dental visit?", answer: "Read fun stories about visiting the dentist and keep your attitude positive and encouraging." }
    ]
  },
  {
    id: "emergency",
    slug: "dental-emergency",
    title: "Dental Emergency",
    shortDesc: "Sudden tooth fracture, knocked-out tooth, severe unbearable pain, or sudden facial swelling.",
    aeoAnswer: "Align Dentofacial Clinic provides prompt emergency dental care in Noida. Call or WhatsApp +91 88604 03089 immediately for urgent relief.",
    image: "/images/root-canal-treatment-noida.jpg",
    symptoms: ["Knocked-out or dislodged tooth", "Severe uncontrollable toothache", "Broken front tooth from trauma"],
    commonCauses: ["Accidental sports injury", "Biting down on hard object", "Acute dental abscess"],
    whenToSeeDentist: ["Immediately! Call or WhatsApp us right away on +91 88604 03089"],
    treatmentsOffered: [
      { title: "Root Canal Treatment", slug: "root-canal-treatment-noida" },
      { title: "Tooth Repair & Restorations", slug: "tooth-fillings-cavity-treatment-noida" }
    ],
    homeCareTips: ["If a tooth is knocked out, keep it moist in cold milk and bring it immediately to the clinic"],
    faqs: [
      { question: "What should I do if a tooth is knocked out completely?", answer: "Do not touch the root. Store the tooth in cold milk or saline and reach our clinic within 60 minutes for re-implantation possibilities." }
    ]
  }
];

// 10 Areas We Serve (Local SEO Landing Pages)
export const locationsData: LocationItem[] = [
  {
    id: "sec49",
    slug: "dentist-in-sector-49-noida",
    areaName: "Sector 49",
    landmark: "Pillar No. 44, Dadri Main Road",
    distanceFromClinic: "0.2 km",
    drivingTime: "1 minute walk",
    routeDirections: "Located right on Dadri Main Road at Pillar No. 44 in East Avenue Grand, opposite Kohli Vihar.",
    popularTreatments: ["Braces and Clear Aligners", "Root Canal Treatment", "Teeth Cleaning & Whitening"],
    faqs: [
      { question: "Is Align Dentofacial Clinic located in Sector 49 Noida?", answer: "Yes, the clinic is situated right at Pillar No. 44, Dadri Main Road, near Sector 49 Noida." }
    ]
  },
  {
    id: "sec50",
    slug: "dentist-in-sector-50-noida",
    areaName: "Sector 50",
    landmark: "Near Sector 50 Metro Station & Central Park",
    distanceFromClinic: "1.5 km",
    drivingTime: "4 minutes drive",
    routeDirections: "Drive straight down Dadri Main Road toward Pillar No. 44. The clinic is on the ground floor at Shop No. 6, East Avenue Grand.",
    popularTreatments: ["Clear Aligners", "Dental Implants", "Smile Designing"],
    faqs: [
      { question: "How far is Align Clinic from Sector 50 Noida?", answer: "It is approximately 1.5 km, taking around 4 minutes by car or auto." }
    ]
  },
  {
    id: "sec51",
    slug: "dentist-in-sector-51-noida",
    areaName: "Sector 51",
    landmark: "Near Noida Sector 51 Metro Station",
    distanceFromClinic: "2.1 km",
    drivingTime: "6 minutes drive",
    routeDirections: "Take the main road connecting Sector 51 to Dadri Main Road, heading south toward Pillar No. 44.",
    popularTreatments: ["Braces", "Root Canal Therapy", "Kids Dentistry"],
    faqs: [
      { question: "Are walk-ins welcome for Sector 51 residents?", answer: "Yes, walk-ins are welcome, though scheduling an appointment ensures zero waiting time." }
    ]
  },
  {
    id: "sec76",
    slug: "dentist-in-sector-76-noida",
    areaName: "Sector 76",
    landmark: "Near Amrapali Silicon City & Sector 76 Metro",
    distanceFromClinic: "2.8 km",
    drivingTime: "7 minutes drive",
    routeDirections: "Drive via Master Plan Road 3 onto Dadri Main Road directly to East Avenue Grand at Pillar 44.",
    popularTreatments: ["Clear Aligners", "Tooth Fillings", "Teeth Whitening"],
    faqs: [
      { question: "Which is the best route from Sector 76?", answer: "Take Master Plan Road 3 to Dadri Main Road. The clinic is right near Pillar No. 44." }
    ]
  },
  {
    id: "sec77",
    slug: "dentist-in-sector-77-noida",
    areaName: "Sector 77",
    landmark: "Near Express Zenith & Prateek Wisteria",
    distanceFromClinic: "3.2 km",
    drivingTime: "8 minutes drive",
    routeDirections: "Head west toward Sector 49 via the main sector connector road, joining Dadri Main Road at Pillar 44.",
    popularTreatments: ["Invisible Aligners", "Dental Implants", "Root Canal Treatment"],
    faqs: [
      { question: "Do you offer evening appointments for working professionals in Sector 77?", answer: "Yes, we are open until 7:00 PM Tuesday to Sunday." }
    ]
  },
  {
    id: "sec78",
    slug: "dentist-in-sector-78-noida",
    areaName: "Sector 78",
    landmark: "Near Mahagun Moderne & Hyde Park",
    distanceFromClinic: "3.5 km",
    drivingTime: "9 minutes drive",
    routeDirections: "Follow Sector 78 main road onto Dadri Main Road toward Sector 49 pillar 44.",
    popularTreatments: ["Orthodontics for Teens & Adults", "Dental Crowns", "Check-ups"],
    faqs: [
      { question: "Is parking available at the clinic for Sector 78 visitors?", answer: "Yes, easy parking is available near East Avenue Grand complex." }
    ]
  },
  {
    id: "kohlivihar",
    slug: "dentist-in-kohli-vihar-noida",
    areaName: "Kohli Vihar",
    landmark: "Dadri Main Road, Kohli Vihar",
    distanceFromClinic: "0.1 km",
    drivingTime: "2 minutes walk",
    routeDirections: "Located right opposite Kohli Vihar on Dadri Main Road, Pillar No. 44.",
    popularTreatments: ["Tooth Pain Relief", "Cavity Fillings", "Braces"],
    faqs: [
      { question: "Where is the clinic located in Kohli Vihar?", answer: "It is located at Shop No. 6, East Avenue Grand, right at Pillar No. 44 on Dadri Main Road." }
    ]
  },
  {
    id: "barola",
    slug: "dentist-in-barola-noida",
    areaName: "Barola",
    landmark: "Barola Main Market Road",
    distanceFromClinic: "0.8 km",
    drivingTime: "3 minutes drive",
    routeDirections: "Head straight on Dadri Main Road toward Sector 49. The clinic is located at Pillar No. 44.",
    popularTreatments: ["General Dentistry", "Root Canal", "Teeth Cleaning"],
    faqs: [
      { question: "Are emergency dental services available for Barola residents?", answer: "Yes, call +91 88604 03089 for immediate emergency dental relief." }
    ]
  },
  {
    id: "sec41",
    slug: "dentist-in-sector-41-noida",
    areaName: "Sector 41",
    landmark: "Near Prayag Hospital",
    distanceFromClinic: "2.4 km",
    drivingTime: "6 minutes drive",
    routeDirections: "Take Sector 41 main exit road onto Dadri Main Road toward Pillar No. 44.",
    popularTreatments: ["Cosmetic Dentistry", "Braces", "Implants"],
    faqs: [
      { question: "What are clinic timings for Sector 41 patients?", answer: "Tuesday to Sunday, 10:00 AM to 7:00 PM (Monday closed)." }
    ]
  },
  {
    id: "sec48",
    slug: "dentist-in-sector-48-noida",
    areaName: "Sector 48",
    landmark: "Near Kesar Garden Apartments",
    distanceFromClinic: "1.2 km",
    drivingTime: "3 minutes drive",
    routeDirections: "Head north on Dadri Main Road for 1.2 km. The clinic will be on your left at East Avenue Grand, Pillar 44.",
    popularTreatments: ["Preventive Check-ups", "Clear Aligners", "Smile Makeovers"],
    faqs: [
      { question: "How to book an appointment from Sector 48?", answer: "You can book online through our website, or call/WhatsApp us directly at +91 88604 03089." }
    ]
  }
];

// 6 SEO Blog Articles Data
export const blogPostsData: BlogPostItem[] = [
  {
    id: "braces-vs-aligners",
    slug: "braces-vs-clear-aligners-which-is-right-for-you",
    title: "Braces vs Clear Aligners: Which is Right for You?",
    excerpt: "Compare traditional braces and transparent aligners to decide which orthodontic option fits your lifestyle, budget, and smile goals.",
    publishDate: "2024-08-15",
    readTime: "5 min read",
    category: "Orthodontics",
    author: {
      name: "Dr. Jyoti Chauhan",
      role: "MDS Orthodontist"
    },
    toc: ["Overview", "How Braces Work", "How Clear Aligners Work", "Key Comparison Factors", "Final Verdict"],
    contentBlocks: [
      {
        heading: "Overview",
        text: "Choosing between braces and clear aligners is one of the most common decisions patients face when starting their smile alignment journey. Both options offer fantastic results, but they differ in appearance, comfort, and lifestyle convenience."
      },
      {
        heading: "How Braces Work",
        text: "Fixed braces use metal or ceramic brackets bonded to each tooth, connected by an archwire. They provide precise control over complex tooth movements, making them ideal for severe crowding or skeletal bite corrections."
      },
      {
        heading: "How Clear Aligners Work",
        text: "Clear aligners are custom-molded transparent plastic trays that fit snugly over your teeth. You replace them every 1 to 2 weeks as your teeth align gradually. Because they are removable, aligners offer unmatched flexibility for eating and brushing."
      },
      {
        heading: "Key Comparison Factors",
        text: "Aesthetics: Aligners are virtually invisible, while ceramic braces offer a subtle look. Maintenance: Aligners require 22 hours of daily wear discipline, whereas braces work continuously without needing removal."
      },
      {
        heading: "Final Verdict",
        text: "The right choice depends on your specific alignment needs and personal preferences. Consulting an MDS Orthodontist ensures a accurate diagnosis and tailored recommendation."
      }
    ],
    relatedServiceSlugs: ["braces-noida", "clear-aligners-noida"]
  },
  {
    id: "child-first-ortho-visit",
    slug: "what-is-the-right-age-for-childs-first-orthodontic-checkup",
    title: "What is the Right Age for a Child's First Orthodontic Check-up?",
    excerpt: "Learn why international dental associations recommend an initial orthodontic evaluation by age 7 and how early care prevents complex problems.",
    publishDate: "2024-08-28",
    readTime: "4 min read",
    category: "Kids Dentistry",
    author: {
      name: "Dr. Jyoti Chauhan",
      role: "MDS Orthodontist"
    },
    toc: ["Why Age 7?", "Signs Your Child Needs Early Care", "Benefits of Interceptive Orthodontics"],
    contentBlocks: [
      {
        heading: "Why Age 7?",
        text: "By age 7, a child's first permanent molars have erupted, establishing their back bite. An orthodontist can evaluate jaw growth and spot subtle alignment issues even while baby teeth are still present."
      },
      {
        heading: "Signs Your Child Needs Early Care",
        text: "Look out for early loss of baby teeth, difficulty chewing, mouth breathing, thumb sucking beyond age 5, or protruding front teeth."
      },
      {
        heading: "Benefits of Interceptive Orthodontics",
        text: "Early guidance of jaw growth can create space for crowded teeth, simplify future braces treatment, and correct crossbites before they affect permanent jaw structure."
      }
    ],
    relatedServiceSlugs: ["braces-noida", "dental-checkups-and-digital-x-rays-noida"]
  },
  {
    id: "rct-pain-myth",
    slug: "is-root-canal-treatment-painful-what-to-actually-expect",
    title: "Is Root Canal Treatment Painful? What to Actually Expect",
    excerpt: "Demystifying endodontic treatment: why modern root canals relieve pain rather than cause it, explained step by step.",
    publishDate: "2024-09-05",
    readTime: "5 min read",
    category: "Endodontics",
    author: {
      name: "Dr. Jyoti Chauhan",
      role: "MDS Orthodontist"
    },
    toc: ["The Root Canal Myth", "How Pain Relief Works", "Step-by-Step Procedure", "Post-Treatment Care"],
    contentBlocks: [
      {
        heading: "The Root Canal Myth",
        text: "For decades, root canals had an unearned reputation for discomfort. In reality, the procedure is designed to remove toothache pain caused by infected nerve tissue."
      },
      {
        heading: "How Pain Relief Works",
        text: "With effective modern local anaesthesia, the tooth and surrounding area are thoroughly numbed. Most patients report feeling no more discomfort than receiving a routine filling."
      },
      {
        heading: "Step-by-Step Procedure",
        text: "The dentist creates a small access opening, cleans out infected pulp using rotary instruments, disinfects the canals, and seals them safely."
      }
    ],
    relatedServiceSlugs: ["root-canal-treatment-noida", "crowns-bridges-dentures-noida"]
  },
  {
    id: "implants-vs-bridges",
    slug: "dental-implants-vs-bridges-pros-and-cons",
    title: "Dental Implants vs Bridges: Pros and Cons",
    excerpt: "Evaluate long-term tooth replacement options to understand why implants preserve jawbone while bridges offer fast fixed solutions.",
    publishDate: "2024-09-12",
    readTime: "6 min read",
    category: "Implantology",
    author: {
      name: "Dr. Jyoti Chauhan",
      role: "MDS Orthodontist"
    },
    toc: ["Understanding the Difference", "Pros & Cons of Dental Implants", "Pros & Cons of Bridges", "Making Your Choice"],
    contentBlocks: [
      {
        heading: "Understanding the Difference",
        text: "Dental implants replace missing teeth independently by anchoring a titanium post directly into jawbone. Bridges rely on adjacent healthy teeth for support."
      },
      {
        heading: "Pros & Cons of Dental Implants",
        text: "Implants preserve adjacent teeth and prevent jawbone loss, making them a durable long-term investment. They require a healing period for osseointegration."
      },
      {
        heading: "Pros & Cons of Bridges",
        text: "Bridges offer a faster solution completed in 1 to 2 weeks, but require shaping adjacent teeth to serve as crown anchors."
      }
    ],
    relatedServiceSlugs: ["dental-implants-noida", "crowns-bridges-dentures-noida"]
  },
  {
    id: "bleeding-gums-causes",
    slug: "why-your-gums-bleed-when-you-brush",
    title: "Why Your Gums Bleed When You Brush",
    excerpt: "Understand the early warning signs of gingivitis and how professional scaling restores healthy, firm gums.",
    publishDate: "2024-09-15",
    readTime: "4 min read",
    category: "Preventive Care",
    author: {
      name: "Dr. Jyoti Chauhan",
      role: "MDS Orthodontist"
    },
    toc: ["What Bleeding Gums Mean", "Common Causes", "How to Stop Bleeding Gums"],
    contentBlocks: [
      {
        heading: "What Bleeding Gums Mean",
        text: "Healthy gums do not bleed when brushed or flossed. Seeing pink in the sink is often the first warning sign of gingivitis, caused by plaque buildup along the gumline."
      },
      {
        heading: "Common Causes",
        text: "Hardened tartar accumulation, aggressive scrubbing with hard bristles, unaddressed food impaction, and hormonal fluctuations can irritate sensitive gum tissue."
      },
      {
        heading: "How to Stop Bleeding Gums",
        text: "Schedule a professional ultrasonic scaling session to remove calculus, switch to a soft toothbrush, and maintain daily flossing."
      }
    ],
    relatedServiceSlugs: ["teeth-cleaning-polishing-whitening-noida", "dental-checkups-and-digital-x-rays-noida"]
  },
  {
    id: "ortho-care-tips",
    slug: "how-to-care-for-your-teeth-during-orthodontic-treatment",
    title: "How to Care for Your Teeth During Orthodontic Treatment",
    excerpt: "Essential oral hygiene advice for keeping teeth white, clean, and healthy while wearing braces or clear aligners.",
    publishDate: "2024-09-18",
    readTime: "5 min read",
    category: "Orthodontics",
    author: {
      name: "Dr. Jyoti Chauhan",
      role: "MDS Orthodontist"
    },
    toc: ["Brushing with Braces", "Flossing Techniques", "Dietary Guidance", "Aligner Care"],
    contentBlocks: [
      {
        heading: "Brushing with Braces",
        text: "Brush after every meal using an orthodontic toothbrush at a 45 degree angle around brackets to remove trapped food particles."
      },
      {
        heading: "Flossing Techniques",
        text: "Use orthodontic floss threaders or water flosser devices to clean under archwires daily."
      },
      {
        heading: "Dietary Guidance",
        text: "Avoid biting directly into hard apples, nuts, or sticky candies to prevent loose brackets and wire damage."
      }
    ],
    relatedServiceSlugs: ["braces-noida", "clear-aligners-noida"]
  }
];

// FAQs Bank (Top 24 clinic Q&As, clean one to two line answers)
export const masterFaqBank = [
  { question: "How often should I visit the dentist?", answer: "Every 6 months for routine check-ups and preventive care." },
  { question: "Are dental X-rays safe?", answer: "Yes. Digital X-rays use very low radiation, making them safe for all ages." },
  { question: "Does dental treatment hurt?", answer: "Most procedures are pain-controlled with local anaesthesia for a comfortable experience." },
  { question: "How long will a procedure take?", answer: "It depends on the treatment. Your dentist will share a clear timeline before starting." },
  { question: "Can cosmetic treatments damage my teeth?", answer: "When planned and done professionally, they are safe and can improve both function and aesthetics." },
  { question: "Are dental implants painful?", answer: "Implants are placed under local anaesthesia and recovery discomfort is usually mild." },
  { question: "How long do fillings, crowns or veneers last?", answer: "With good oral hygiene and routine care, restorations last many years." },
  { question: "Is teeth whitening safe?", answer: "Yes, when professionally supervised by a dentist." },
  { question: "Can children have braces or aligners?", answer: "Yes, treatment can be customised for children and teens following an orthodontic evaluation." },
  { question: "Will treatment affect my daily routine?", answer: "Most treatments are quick and we guide you on resuming normal activities right away." },
  { question: "How can I prevent cavities and gum problems?", answer: "Brush twice daily, floss every day, and visit for professional cleanings every 6 months." },
  { question: "Is root canal treatment painful?", answer: "Modern root canal treatment is done under local anaesthesia and is comfortable for most patients." },
  { question: "Can missing teeth affect my health?", answer: "Yes. Missing teeth affect chewing efficiency, cause adjacent teeth to shift, and lead to jawbone loss." },
  { question: "How long does clear aligner treatment take?", answer: "Usually 6 to 18 months, depending on individual case complexity." },
  { question: "Are veneers permanent?", answer: "Porcelain veneers are long-lasting restorations with proper care." },
  { question: "How do I care for dental implants?", answer: "Maintain good oral hygiene, brush twice daily, floss, and visit for regular check-ups." },
  { question: "Can I whiten crowns or veneers?", answer: "No. Whitening works on natural enamel only. We can match new restorations to your whitened teeth." },
  { question: "Are braces visible?", answer: "Metal braces are visible. Ceramic braces and clear aligners offer discreet alternatives." },
  { question: "Is dental treatment safe during pregnancy?", answer: "Routine care is generally safe. Elective treatment is usually planned after pregnancy. Always inform your dentist." },
  { question: "Can teeth grinding be treated?", answer: "Yes, with custom night guards and bite adjustments." },
  { question: "How soon can I eat after treatment?", answer: "Usually within 1 to 2 hours after local anaesthesia wears off. We advise you specifically after your procedure." },
  { question: "Do I need cleanings if I brush daily?", answer: "Yes. Professional ultrasonic cleaning removes hardened tartar that regular brushing cannot." },
  { question: "Can crooked teeth be corrected without braces?", answer: "Clear aligners or cosmetic veneers offer effective options depending on your alignment needs." },
  { question: "What should I do in a dental emergency?", answer: "Call or WhatsApp us immediately on +91 88604 03089 for urgent assistance." }
];

// Patient Reviews (6 Real-style Google Reviews)
export const patientReviews = [
  {
    name: "Ananya Sharma",
    location: "Sector 50, Noida",
    rating: 5,
    date: "2 months ago",
    comment: "Dr. Jyoti Chauhan is an incredible orthodontist! I was hesitant about getting aligners as an adult, but her clear explanation and calm clinic made the journey so smooth. Highly recommend Align Dentofacial Clinic."
  },
  {
    name: "Vikram Malhotra",
    location: "Sector 49, Noida",
    rating: 5,
    date: "1 month ago",
    comment: "Had my root canal treatment done here. Zero pain during the procedure. Very hygienic operatory and transparent doctor who doesn't suggest unnecessary treatments."
  },
  {
    name: "Pooja Verma",
    location: "Sector 76, Noida",
    rating: 5,
    date: "3 weeks ago",
    comment: "Brought my 8-year-old daughter for a checkup. Dr. Jyoti was so gentle and patient with her. The clinic environment feels so peaceful compared to typical hospitals."
  },
  {
    name: "Rohan Gupta",
    location: "Kohli Vihar, Noida",
    rating: 5,
    date: "4 months ago",
    comment: "Great experience with dental cleaning and teeth whitening. The digital X-ray system is fast and the clinic is spotless clean. Convenient location right on Dadri Main Road."
  },
  {
    name: "Sneha Reddy",
    location: "Sector 51, Noida",
    rating: 5,
    date: "Recent Patient",
    comment: "Got ceramic braces for my crowded teeth. The progress in 6 months is amazing. Very punctual appointments and friendly care!"
  },
  {
    name: "Amitabh Srivastava",
    location: "Sector 48, Noida",
    rating: 5,
    date: "Recent Patient",
    comment: "Extremely professional clinic. Got a zircionia crown fitted after my RCT. Perfect bite fit and looks just like my original tooth."
  }
];
