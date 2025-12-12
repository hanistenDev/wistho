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
    trustBadges: {
      quality: string
      speed: string
      mobile: string
    }
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
    buttonLabel: string
    buttonLabelPortfolio: string
    buttonLabelComingSoon: string
    badgeStudio: string
    badgeClient: string
    items: {
      webwind: {
        title: string
        subtitle: string
        bullets: string[]
      }
      yanik: {
        title: string
        subtitle: string
        description: string
        bullets: string[]
      }
      hanisten: {
        title: string
        subtitle: string
        description: string
        bullets: string[]
      }
      huy: {
        title: string
        subtitle: string
        description: string
        bullets: string[]
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
      portfolio: string
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
      submitting: string
      success: string
      responseTime: string
    }
  }
  footer: {
    copyright: string
    imprint: string
    privacy: string
    madeIn: string
  }
  faq: {
    title: string
    subtitle: string
    items: Array<{
      question: string
      answer: string
    }>
  }
  process: {
    title: string
    subtitle: string
    steps: Array<{
      number: string
      title: string
      description: string
    }>
    ctaPrimary: string
    ctaSecondary: string
  }
  ctaBanner: {
    title: string
    subtitle: string
    button: string
  }
  projectsCTA: {
    primary: string
    secondary: string
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
      trustBadges: {
        quality: 'Schweizer Qualität',
        speed: 'Schnelle Ladezeiten',
        mobile: 'Mobile-optimiert',
      },
    },
    about: {
      title: 'Über Wistho Digital',
      description:
        'Wir helfen kleinen Unternehmen, online professionell aufzutreten – mit modernen Webseiten, die einfach funktionieren. Von der ersten Idee bis zum Go-Live begleiten wir Sie persönlich, verständlich und ohne Fachchinesisch.',
      stats: {
        experience: '4+ Jahre Erfahrung',
        projects: '4+ Projekte',
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
      subtitle: 'Eine Auswahl an Webseiten, die wir für Unternehmen umgesetzt haben.',
      buttonLabel: 'Webseite besuchen',
      buttonLabelPortfolio: 'Portfolio ansehen',
      buttonLabelComingSoon: 'Coming Soon',
      badgeStudio: 'Studio Projekt',
      badgeClient: 'Kundenprojekt',
      items: {
        webwind: {
          title: 'Webwind Digital – Webagentur',
          subtitle: 'Moderne Webagentur für kleine Unternehmen in der Schweiz.',
          bullets: [
            'User Interface / User Experience',
            'Webdesign / Webentwicklung',
            'Conversion-optimierte Landingpages',
            'Mobil-optimiert',
          ],
        },
        yanik: {
          title: 'Yanik Wisler – Portfolio',
          subtitle: 'Persönliches Portfolio – Design & Frontend-Entwicklung durch Wistho Digital',
          description:
            'Hochwertiges persönliches Portfolio mit starkem Fokus auf UI/UX, visuelle Hierarchie und präzise umgesetzte Frontend-Erlebnisse. Das Projekt zeigt moderne Webentwicklung, dezente Animationen und ein klares, professionelles Designsystem.',
          bullets: [
            'Modernes UI/UX Design mit klarer visueller Struktur',
            'Präzise Frontend-Umsetzung mit React & Next.js',
            'Flüssige Animationen & Micro-Interactions',
            'Performance-optimiert & vollständig responsive',
          ],
        },
        hanisten: {
          title: 'Hanisten Thivakaran – Portfolio',
          subtitle: 'Persönliches Portfolio – Design & Frontend-Entwicklung durch Wistho Digital',
          description:
            'Modernes Entwickler-Portfolio mit animiertem Hintergrund, Interaktionen und einem starken Fokus auf Benutzererlebnis. Das Projekt kombiniert kreatives Design mit sauberer Frontend-Architektur und Motion Design.',
          bullets: [
            'Animierter Hintergrund & interaktive UI-Elemente',
            'Frontend-Entwicklung mit React & modernen Webtechnologien',
            'Fokus auf Motion Design & User Experience',
            'Mobile First & geräteübergreifend optimiert',
          ],
        },
        huy: {
          title: 'Huy Nails – Design & Beauty',
          subtitle: 'Moderne Website für ein Nailstudio in Zug (Coming Soon)',
          description:
            'Elegante und moderne Website für ein Nailstudio mit Fokus auf Ästhetik, Markenwirkung und Conversion. Die Seite kombiniert hochwertige Bildsprache mit klaren Call-to-Actions und integrierter Online-Terminbuchung.',
          bullets: [
            'Elegantes UI/UX Design für Beauty & Lifestyle',
            'Integrierte Online-Terminbuchung',
            'Klare Call-to-Actions (Book Now, Services)',
            'Mobile First & responsive Layouts',
          ],
        },
      },
    },
    team: {
      title: 'Yanik Wisler',
      yanik: {
        role: 'Applikationsentwickler & Co-Founder',
        description:
          'Applikationsentwickler bei Sunrise und Co-Founder von Wistho Digital. Ich verbinde sauberen Code mit klaren Interfaces und entwickle Lösungen, die technisch durchdacht, visuell präzise und langfristig stabil sind. Mein Interesse gilt modernen Webtechnologien sowie KI- und Automatisierungslösungen.',
        portfolio: 'Portfolio ansehen',
        linkedin: 'LinkedIn',
      },
      hanisten: {
        role: 'Applikationsentwickler & Co-Founder',
        description:
          'Applikationsentwickler bei Sunrise und Co-Founder von Wistho Digital. Mein Fokus liegt auf UI/UX, Frontend-Entwicklung und Motion Design. Ich gestalte Web-Erlebnisse, die intuitiv funktionieren, sich hochwertig anfühlen und Nutzer:innen ohne Erklärungen abholen.',
        portfolio: 'Portfolio ansehen',
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
        submitting: 'Wird gesendet...',
        success: '✓ Nachricht gesendet!',
        responseTime: 'Wir melden uns innerhalb von 1–2 Werktagen bei dir.',
      },
    },
    footer: {
      copyright: '© 2025 Wistho Digital',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      madeIn: 'Gestaltet & entwickelt in der Schweiz.',
    },
    faq: {
      title: 'Häufige Fragen',
      subtitle: 'Alles, was Sie wissen möchten – einfach erklärt.',
      items: [
        {
          question: 'Wie lange dauert die Erstellung einer Website?',
          answer: 'In der Regel 2-4 Wochen, abhängig vom Umfang Ihres Projekts. Einfache Onepager können auch schneller fertig sein.',
        },
        {
          question: 'Was kostet eine Website?',
          answer: 'Jedes Projekt ist individuell – deshalb arbeiten wir nicht mit fixen Paketen. In einem kostenlosen Erstgespräch klären wir Ihre Ziele und erstellen Ihnen ein transparentes Angebot, passend zu Ihrem Budget. Unverbindlich und ohne Fachchinesisch.',
        },
        {
          question: 'Wie funktionieren Änderungen und Updates?',
          answer: 'Änderungen an Ihrer Website übernehmen wir gerne für Sie. Ob Texte, Bilder oder kleinere Anpassungen – Sie melden sich einfach bei uns, und wir kümmern uns darum. Auf Wunsch bieten wir auch eine laufende Betreuung, damit Ihre Website immer aktuell bleibt – ohne dass Sie sich selbst mit Technik beschäftigen müssen.',
        },
        {
          question: 'Wird meine Website bei Google gefunden?',
          answer: 'Ja, wir optimieren Ihre Website für Google (SEO). Das bedeutet bessere Sichtbarkeit und mehr potenzielle Kunden.',
        },
        {
          question: 'Funktioniert die Website auf dem Handy?',
          answer: 'Absolut! Alle unsere Websites sind mobile-optimiert und sehen auf Smartphones genauso gut aus wie auf dem Computer.',
        },
        {
          question: 'Was passiert nach dem Launch?',
          answer: 'Wir sind auch nach dem Go-Live für Sie da. Bei Fragen, Updates oder Anpassungen können Sie sich jederzeit melden.',
        },
      ],
    },
    process: {
      title: "So funktioniert's",
      subtitle: 'Von der ersten Idee bis zur Live-Schaltung – in 4 einfachen Schritten zu Ihrer neuen Website.',
      steps: [
        {
          number: '01',
          title: 'Kostenlose Beratung',
          description: 'Wir besprechen Ihre Wünsche, Ziele und Budget. Gemeinsam finden wir die beste Lösung für Ihr Unternehmen.',
        },
        {
          number: '02',
          title: 'Angebot & Planung',
          description: 'Sie erhalten ein transparentes Angebot mit klaren Kosten. Nach Ihrer Zusage planen wir gemeinsam die Umsetzung.',
        },
        {
          number: '03',
          title: 'Design & Entwicklung',
          description: 'Wir erstellen Ihre Website nach modernsten Standards – schnell, sicher und optimiert für alle Geräte.',
        },
        {
          number: '04',
          title: 'Launch & Betreuung',
          description: 'Ihre Website geht online! Wir zeigen Ihnen, wie Sie sie verwalten und sind auch danach für Sie da.',
        },
      ],
      ctaPrimary: 'Jetzt Projekt anfragen',
      ctaSecondary: 'Unsere Projekte ansehen',
    },
    ctaBanner: {
      title: 'Bereit für Ihre neue Website?',
      subtitle: 'Lassen Sie uns gemeinsam Ihre Online-Präsenz auf die nächste Stufe heben. Kostenlose Beratung inklusive.',
      button: 'Jetzt kostenlos anfragen',
    },
    projectsCTA: {
      primary: 'Projekt anfragen',
      secondary: 'Kostenlose Beratung',
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
      trustBadges: {
        quality: 'Swiss Quality',
        speed: 'Fast Loading Times',
        mobile: 'Mobile-Optimized',
      },
    },
    about: {
      title: 'About Wistho Digital',
      description:
        'We help small businesses present themselves professionally online – with modern websites that simply work. From the first idea to go-live, we accompany you personally, understandably and without technical jargon.',
      stats: {
        experience: '4+ Years Experience',
        projects: '4+ Projects',
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
      subtitle: 'A selection of websites we have implemented for companies.',
      buttonLabel: 'Visit Website',
      buttonLabelPortfolio: 'View Portfolio',
      buttonLabelComingSoon: 'Coming Soon',
      badgeStudio: 'Studio Project',
      badgeClient: 'Client Project',
      items: {
        webwind: {
          title: 'Webwind Digital – Web Agency',
          subtitle: 'Modern web agency for small businesses in Switzerland.',
          bullets: [
            'User Interface / User Experience',
            'Web Design / Web Development',
            'Conversion-optimized Landing Pages',
            'Mobile-optimized',
          ],
        },
        yanik: {
          title: 'Yanik Wisler – Portfolio',
          subtitle: 'Personal Portfolio – Design & Frontend Development by Wistho Digital',
          description:
            'High-quality personal portfolio with strong focus on UI/UX, visual hierarchy and precisely implemented frontend experiences. The project showcases modern web development, subtle animations and a clear, professional design system.',
          bullets: [
            'Modern UI/UX Design with clear visual structure',
            'Precise Frontend Implementation with React & Next.js',
            'Smooth Animations & Micro-Interactions',
            'Performance-optimized & fully responsive',
          ],
        },
        hanisten: {
          title: 'Hanisten Thivakaran – Portfolio',
          subtitle: 'Personal Portfolio – Design & Frontend Development by Wistho Digital',
          description:
            'Modern developer portfolio with animated background, interactions and strong focus on user experience. The project combines creative design with clean frontend architecture and motion design.',
          bullets: [
            'Animated Background & Interactive UI Elements',
            'Frontend Development with React & Modern Web Technologies',
            'Focus on Motion Design & User Experience',
            'Mobile First & Cross-device Optimized',
          ],
        },
        huy: {
          title: 'Huy Nails – Design & Beauty',
          subtitle: 'Modern website for a nail studio in Zug (Coming Soon)',
          description:
            'Elegant and modern website for a nail studio with focus on aesthetics, brand impact and conversion. The site combines high-quality imagery with clear call-to-actions and integrated online appointment booking.',
          bullets: [
            'Elegant UI/UX Design for Beauty & Lifestyle',
            'Integrated Online Appointment Booking',
            'Clear Call-to-Actions (Book Now, Services)',
            'Mobile First & Responsive Layouts',
          ],
        },
      },
    },
    team: {
      title: 'Yanik Wisler',
      yanik: {
        role: 'Application Developer & Co-Founder',
        description:
          'Application Developer at Sunrise and Co-Founder of Wistho Digital. I combine clean code with clear interfaces and develop solutions that are technically sound, visually precise and stable in the long term. My interests include modern web technologies as well as AI and automation solutions.',
        portfolio: 'View Portfolio',
        linkedin: 'LinkedIn',
      },
      hanisten: {
        role: 'Application Developer & Co-Founder',
        description:
          'Application Developer at Sunrise and Co-Founder of Wistho Digital. My focus is on UI/UX, frontend development and motion design. I create web experiences that work intuitively, feel premium and engage users without explanations.',
        portfolio: 'View Portfolio',
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
        submitting: 'Sending...',
        success: '✓ Message sent!',
        responseTime: 'We will get back to you within 1–2 business days.',
      },
    },
    footer: {
      copyright: '© 2025 Wistho Digital',
      imprint: 'Imprint',
      privacy: 'Privacy',
      madeIn: 'Designed & developed in Switzerland.',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you want to know – simply explained.',
      items: [
        {
          question: 'How long does it take to create a website?',
          answer: 'Usually 2-4 weeks, depending on the scope of your project. Simple one-pagers can be completed faster.',
        },
        {
          question: 'What does a website cost?',
          answer: "Every project is unique – that's why we don't work with fixed packages. In a free initial consultation, we clarify your goals and create a transparent quote tailored to your budget. Non-binding and without technical jargon.",
        },
        {
          question: 'How do changes and updates work?',
          answer: "We are happy to make changes to your website for you. Whether it's texts, images or minor adjustments – simply contact us and we'll take care of it. On request, we also offer ongoing support to keep your website up to date – without you having to deal with the technical side yourself.",
        },
        {
          question: 'Will my website be found on Google?',
          answer: 'Yes, we optimize your website for Google (SEO). This means better visibility and more potential customers.',
        },
        {
          question: 'Does the website work on mobile?',
          answer: 'Absolutely! All our websites are mobile-optimized and look just as good on smartphones as on computers.',
        },
        {
          question: 'What happens after launch?',
          answer: 'We are there for you even after go-live. If you have questions, updates or adjustments, you can contact us at any time.',
        },
      ],
    },
    process: {
      title: 'How It Works',
      subtitle: 'From the first idea to going live – in 4 simple steps to your new website.',
      steps: [
        {
          number: '01',
          title: 'Free Consultation',
          description: 'We discuss your wishes, goals and budget. Together we find the best solution for your company.',
        },
        {
          number: '02',
          title: 'Quote & Planning',
          description: 'You receive a transparent quote with clear costs. After your acceptance, we plan the implementation together.',
        },
        {
          number: '03',
          title: 'Design & Development',
          description: 'We create your website according to the latest standards – fast, secure and optimized for all devices.',
        },
        {
          number: '04',
          title: 'Launch & Support',
          description: 'Your website goes online! We show you how to manage it and are there for you afterwards too.',
        },
      ],
      ctaPrimary: 'Request Project Now',
      ctaSecondary: 'View Our Projects',
    },
    ctaBanner: {
      title: 'Ready for Your New Website?',
      subtitle: 'Let us take your online presence to the next level together. Free consultation included.',
      button: 'Request Free Quote',
    },
    projectsCTA: {
      primary: 'Request Project',
      secondary: 'Free Consultation',
    },
  },
}

