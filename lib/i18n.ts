export type Language = 'de' | 'en'

export interface Translations {
  nav: {
    about: string
    services: string
    projects: string
    team: string
    contact: string
    requestProject: string
  }
  hero: {
    label: string
    title: string
    titleLine2: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    footer: string
  }
  about: {
    title: string
    description: string
    stats: {
      experience: string
      projects: string
      commitment: string
    }
  }
  services: {
    title: string
    subtitle: string
    items: {
      websites: {
        title: string
        description: string
      }
      redesign: {
        title: string
        description: string
      }
      booking: {
        title: string
        description: string
      }
      support: {
        title: string
        description: string
      }
    }
  }
  projects: {
    title: string
    subtitle: string
    items: {
      salon: {
        title: string
        description: string
        tags: string[]
      }
      restaurant: {
        title: string
        description: string
        tags: string[]
      }
      fitness: {
        title: string
        description: string
        tags: string[]
      }
      craftsman: {
        title: string
        description: string
        tags: string[]
      }
    }
  }
  team: {
    title: string
    yanik: {
      role: string
      description: string
      portfolio: string
      linkedin: string
    }
    hanisten: {
      role: string
      description: string
      linkedin: string
      github: string
    }
  }
  contact: {
    title: string
    subtitle: string
    email: string
    phone: string
    form: {
      name: string
      email: string
      company: string
      message: string
      submit: string
      responseTime: string
    }
  }
  footer: {
    copyright: string
    imprint: string
    privacy: string
    madeIn: string
  }
}

export const translations: Record<Language, Translations> = {
  de: {
    nav: {
      about: 'Über uns',
      services: 'Leistungen',
      projects: 'Projekte',
      team: 'Team',
      contact: 'Kontakt',
      requestProject: 'Projekt anfragen',
    },
    hero: {
      label: 'Webseiten für kleine Unternehmen in der Schweiz',
      title: 'Moderne Websites,',
      titleLine2: 'die Kund:innen überzeugen.',
      subtitle:
        'Wistho Digital erstellt klare, schnelle und mobil-optimierte Webseiten für Coiffeure, Restaurants und lokale Dienstleister – ohne komplizierten Fachjargon.',
      ctaPrimary: 'Projekt anfragen',
      ctaSecondary: 'Unsere Projekte ansehen',
      footer: 'Basierend in der Schweiz · Verfügbar für neue Projekte',
    },
    about: {
      title: 'Über Wistho Digital',
      description:
        'Wir helfen kleinen Unternehmen, online professionell aufzutreten – mit modernen Webseiten, die einfach funktionieren. Von der ersten Idee bis zum Go-Live begleiten wir Sie persönlich, verständlich und ohne Fachchinesisch.',
      stats: {
        experience: '4+ Jahre Erfahrung',
        projects: '20+ realisierte Projekte',
        commitment: '100% Einsatz für unsere Kund:innen',
      },
    },
    services: {
      title: 'Was wir anbieten',
      subtitle: 'Fokussiert auf das, was kleine Unternehmen wirklich brauchen.',
      items: {
        websites: {
          title: 'Webseiten für KMU',
          description:
            'Moderne, responsive Websites für Coiffeure, Restaurants und andere lokale Betriebe – optimiert für Handy & Google.',
        },
        redesign: {
          title: 'Redesign & Optimierung',
          description:
            'Wir modernisieren bestehende Seiten, verbessern Struktur, Ladezeit und Lesbarkeit.',
        },
        booking: {
          title: 'Online-Termin & Anfragen',
          description:
            'Einfacher Kontakt, Anfrage- oder Terminformulare, damit Kund:innen direkt einen nächsten Schritt machen können.',
        },
        support: {
          title: 'Einfache Betreuung',
          description:
            'Auf Wunsch übernehmen wir Updates und kleine Anpassungen laufend.',
        },
      },
    },
    projects: {
      title: 'Ausgewählte Projekte',
      subtitle:
        'Hier einige typische Projekte – aktuell mit Platzhaltern, die später durch echte Kunden ersetzt werden.',
      items: {
        salon: {
          title: 'Salon Lumi – Moderne Coiffeur-Website',
          description:
            'Klares Design, online Termin-Anfrage und optimiert für Handy-Nutzer:innen.',
          tags: ['Coiffeur', 'Onepager', 'Kontaktformular'],
        },
        restaurant: {
          title: 'Restaurant Lago – Digitale Speisekarte',
          description:
            'Elegante Website mit Speisekarte, Öffnungszeiten und Google-Maps-Integration.',
          tags: ['Restaurant', 'Speisekarte', 'Google Maps'],
        },
        fitness: {
          title: 'FitBox – Studio Landingpage',
          description:
            'Landingpage mit Kursübersicht, Probetraining-Formular und Testimonial-Sektion.',
          tags: ['Fitnessstudio', 'Landingpage', 'Formular'],
        },
        craftsman: {
          title: 'Malerbetrieb Nova – Handwerksauftritt',
          description:
            'Seriöser Auftritt mit Referenzen, Leistungen und direkter Kontaktmöglichkeit.',
          tags: ['Handwerk', 'Portfolio', 'Kontakt'],
        },
      },
    },
    team: {
      title: 'Das Team hinter Wistho Digital',
      yanik: {
        role: 'Applikationsentwickler & Co-Founder',
        description:
          'Ich bin Applikationsentwickler im 4. Lehrjahr bei Sunrise GmbH und Co-Founder von Wistho Digital. Ich verbinde sauberen Code mit klaren Interfaces und interessiere mich besonders für moderne Webtechnologien, KI und Automatisierung.',
        portfolio: 'Portfolio ansehen',
        linkedin: 'LinkedIn',
      },
      hanisten: {
        role: 'Softwareentwickler & Co-Founder',
        description:
          'Hanisten ist angehender Softwareentwickler und Co-Founder von Wistho Digital. Sein Fokus liegt auf moderner Frontend-Entwicklung, strukturierten Backend-Architekturen und User Experiences, die einfach verständlich sind.',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
    contact: {
      title: 'Lass uns über dein Projekt sprechen',
      subtitle:
        'Du möchtest eine neue Website oder deine bestehende modernisieren? Schreib uns eine kurze Nachricht – wir melden uns mit Ideen und einer Einschätzung.',
      email: 'E-Mail',
      phone: 'WhatsApp / Telefon',
      form: {
        name: 'Name',
        email: 'E-Mail',
        company: 'Unternehmen',
        message: 'Nachricht',
        submit: 'Nachricht senden',
        responseTime: 'Antwort in der Regel innerhalb von 1–2 Werktagen.',
      },
    },
    footer: {
      copyright: '© 2025 Wistho Digital',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      madeIn: 'Gestaltet & entwickelt in der Schweiz.',
    },
  },
  en: {
    nav: {
      about: 'About Us',
      services: 'Services',
      projects: 'Projects',
      team: 'Team',
      contact: 'Contact',
      requestProject: 'Request Project',
    },
    hero: {
      label: 'Websites for small businesses in Switzerland',
      title: 'Modern websites',
      titleLine2: 'that convince customers.',
      subtitle:
        'Wistho Digital creates clear, fast and mobile-optimized websites for hairdressers, restaurants and local service providers – without complicated jargon.',
      ctaPrimary: 'Request Project',
      ctaSecondary: 'View Our Projects',
      footer: 'Based in Switzerland · Available for new projects',
    },
    about: {
      title: 'About Wistho Digital',
      description:
        'We help small businesses present themselves professionally online – with modern websites that simply work. From the first idea to go-live, we accompany you personally, understandably and without technical jargon.',
      stats: {
        experience: '4+ Years Experience',
        projects: '20+ Completed Projects',
        commitment: '100% Commitment to Our Clients',
      },
    },
    services: {
      title: 'What We Offer',
      subtitle: 'Focused on what small businesses really need.',
      items: {
        websites: {
          title: 'Websites for SMEs',
          description:
            'Modern, responsive websites for hairdressers, restaurants and other local businesses – optimized for mobile & Google.',
        },
        redesign: {
          title: 'Redesign & Optimization',
          description:
            'We modernize existing sites, improve structure, loading time and readability.',
        },
        booking: {
          title: 'Online Appointments & Inquiries',
          description:
            'Easy contact, inquiry or appointment forms so customers can take the next step directly.',
        },
        support: {
          title: 'Simple Support',
          description:
            'On request, we take care of updates and small adjustments on an ongoing basis.',
        },
      },
    },
    projects: {
      title: 'Selected Projects',
      subtitle:
        'Here are some typical projects – currently with placeholders that will later be replaced by real clients.',
      items: {
        salon: {
          title: 'Salon Lumi – Modern Hair Salon Website',
          description:
            'Clear design, online appointment request and optimized for mobile users.',
          tags: ['Hair Salon', 'One-Pager', 'Contact Form'],
        },
        restaurant: {
          title: 'Restaurant Lago – Digital Menu',
          description:
            'Elegant website with menu, opening hours and Google Maps integration.',
          tags: ['Restaurant', 'Menu', 'Google Maps'],
        },
        fitness: {
          title: 'FitBox – Studio Landing Page',
          description:
            'Landing page with course overview, trial training form and testimonial section.',
          tags: ['Fitness Studio', 'Landing Page', 'Form'],
        },
        craftsman: {
          title: 'Nova Painting – Craftsman Presence',
          description:
            'Professional presence with references, services and direct contact option.',
          tags: ['Craftsman', 'Portfolio', 'Contact'],
        },
      },
    },
    team: {
      title: 'The Team Behind Wistho Digital',
      yanik: {
        role: 'Application Developer & Co-Founder',
        description:
          'I am an application developer in my 4th year of apprenticeship at Sunrise GmbH and Co-Founder of Wistho Digital. I combine clean code with clear interfaces and am particularly interested in modern web technologies, AI and automation.',
        portfolio: 'View Portfolio',
        linkedin: 'LinkedIn',
      },
      hanisten: {
        role: 'Software Developer & Co-Founder',
        description:
          'Hanisten is an aspiring software developer and Co-Founder of Wistho Digital. His focus is on modern frontend development, structured backend architectures and user experiences that are easy to understand.',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
    contact: {
      title: "Let's Talk About Your Project",
      subtitle:
        'Do you want a new website or modernize your existing one? Write us a short message – we will get back to you with ideas and an assessment.',
      email: 'Email',
      phone: 'WhatsApp / Phone',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        message: 'Message',
        submit: 'Send Message',
        responseTime: 'Response usually within 1–2 business days.',
      },
    },
    footer: {
      copyright: '© 2025 Wistho Digital',
      imprint: 'Imprint',
      privacy: 'Privacy',
      madeIn: 'Designed & developed in Switzerland.',
    },
  },
}

