export interface Dict {
  nav: {
    about: string;
    services: string;
    tech: string;
    team: string;
    projects: string;
    process: string;
    faq: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
    stat4Value: string;
    stat4Label: string;
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    highlights: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  why: {
    eyebrow: string;
    title: string;
    items: { title: string; desc: string }[];
  };
  tech: {
    eyebrow: string;
    title: string;
  };
  team: {
    eyebrow: string;
    title: string;
    members: {
      name: string;
      role: string;
      exp: string;
      bio: string;
      skills: string[];
    }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    visit: string;
    items: { name: string; desc: string; tech: string[]; url: string }[];
  };
  process: {
    eyebrow: string;
    title: string;
    steps: { title: string; desc: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: { quote: string; name: string; role: string }[];
    placeholderNote: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    github: string;
    email: string;
    whatsapp: string;
  };
  footer: {
    tagline: string;
    rights: string;
    madeWith: string;
    nav: string;
    legal: string;
    privacy: string;
    terms: string;
  };
  meta: {
    tagline: string;
  };
}
