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
    workTitle: string
    workItems: Array<{
      title: string
      description: string
    }>
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
      coiffeurStyl: {
        title: string
        subtitle: string
        description: string
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
    vision: {
      heading: string
      para1: string
      para2: string
    }
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
    links: {
      emailLabel: string
      emailText: string
      whatsappLabel: string
      whatsappText: string
    }
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
    allRights: string
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
    note: string
  }
  projectsCTA: {
    primary: string
    secondary: string
  }
  testimonials: {
    heading: string
    items: Array<{
      quote: string
      name: string
      role: string
    }>
  }
  packages: {
    title: string
    subtitle: string
    labels: {
      result: string
      idealFor: string
      process: string
      mostPopular: string
    }
    webGroup: {
      title: string
      items: Array<{
        name: string
        description: string
        result: string
        idealFor: string
        highlights: string[]
        cta: string
      }>
    }
    aiGroup: {
      title: string
      subtitle: string
      items: Array<{
        name: string
        description: string
        result: string
        idealFor: string
        highlights: string[]
        process?: string[]
        cta: string
      }>
    }
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
      requestProject: 'Projekt besprechen',
    },
    hero: {
      label: 'Built for Growth.',
      title: 'High-performance Websites',
      titleLine2: 'für Schweizer Dienstleister.',
      subtitle:
        'Strategisch konzipiert. Klar strukturiert. Technisch optimiert für schnelle Ladezeiten und mehr qualifizierte Anfragen.',
      ctaPrimary: 'Projekt besprechen',
      ctaSecondary: 'Projekte ansehen',
      footer: '',
      trustBadges: {
        quality: 'Für Anfragen gebaut',
        speed: 'Technisch präzise umgesetzt',
        mobile: 'Direkte Zusammenarbeit mit den Gründern',
      },
    },
    about: {
      title: 'Warum Wistho?',
      description:
        'Viele Websites sehen gut aus. Wenige funktionieren wirklich.\n\nWir entwickeln digitale Auftritte, die klar kommunizieren, Vertrauen aufbauen und gezielt Anfragen fördern.\n\nKeine Spielereien. Keine unnötige Komplexität. Sondern Struktur, Klarheit und Performance.',
      workTitle: 'Unsere Arbeitsweise',
      workItems: [
        {
          title: 'Direkt mit den Gründern',
          description: 'Sie arbeiten direkt mit uns – von der Strategie bis zum Launch.',
        },
        {
          title: 'Struktur vor Design',
          description: 'Eine starke Website beginnt mit Klarheit, nicht mit Effekten.',
        },
        {
          title: 'Technische Qualität als Standard',
          description: 'Schnelle Ladezeiten und saubere Umsetzung sind selbstverständlich.',
        },
        {
          title: 'Langfristig gedacht',
          description: 'Auch nach dem Launch begleiten wir Weiterentwicklung und Optimierung.',
        },
      ],
      stats: {
        experience: '',
        projects: '',
        commitment: '',
      },
    },
    services: {
      title: 'Leistungen mit Substanz.',
      subtitle: '',
      items: {
        websites: {
          title: 'Strategische Websites',
          description:
            'Positionierung, Struktur und klare Nutzerführung.',
        },
        redesign: {
          title: 'Conversion-orientierte Umsetzung',
          description:
            'Anfrage- und Buchungssysteme, die nachvollziehbar und einfach funktionieren.',
        },
        booking: {
          title: 'Technische Entwicklung',
          description:
            'Schnelle Ladezeiten, saubere Code-Basis und konsequente mobile Optimierung.',
        },
        support: {
          title: 'Weiterentwicklung',
          description:
            'Analyse und gezielte Verbesserung nach dem Launch.',
        },
      },
    },
    projects: {
      title: 'Ausgewählte Projekte',
      subtitle: 'Jedes Projekt ist auf Klarheit, Geschwindigkeit und Conversion ausgerichtet.',
      buttonLabel: 'Projekt ansehen',
      buttonLabelPortfolio: 'Projekt ansehen',
      buttonLabelComingSoon: 'Projekt in Entwicklung',
      badgeStudio: 'Studio-Projekt',
      badgeClient: 'Kundenprojekt',
      items: {
        coiffeurStyl: {
          title: 'Coiffeur Styl',
          subtitle: 'Barber & Grooming',
          description:
            'Komplettes Redesign inklusive integrierter Online-Terminbuchung und Zahlungsfunktion.\nEntwickelt mit Fokus auf Klarheit, mobile Performance und eine klare Conversion-Struktur.',
          bullets: [
            'UI/UX Konzeption und visuelles Redesign',
            'Integrierte Online-Terminbuchung',
            'Online-Zahlung und automatisierte Bestätigung',
            'Mobile-first umgesetzt und technisch optimiert',
          ],
        },
        yanik: {
          title: 'Yanik Wisler – Portfolio',
          subtitle: 'Design & Frontend',
          description:
            'Persönliches Portfolio als Showcase für modernes UI/UX-Design und präzise technische Umsetzung.',
          bullets: [
            'Eigenständiges Designsystem',
            'Umsetzung mit React & Next.js',
            'Subtile Animationen und Micro-Interactions',
            'Performance-optimiert',
          ],
        },
        hanisten: {
          title: 'Hanisten Thivakaran – Portfolio',
          subtitle: 'Interaction & Motion',
          description:
            'Experimentelles Portfolio mit Fokus auf Interaktion, Motion Design und strukturierte Frontend-Architektur.',
          bullets: [
            'Interaktive UI-Elemente',
            'Motion Design Fokus',
            'Saubere Frontend-Architektur',
            'Mobile-first Umsetzung',
          ],
        },
        huy: {
          title: 'Huy Nails',
          subtitle: 'Beauty & Design',
          description:
            'Elegante, conversion-orientierte Website für eine moderne Beauty-Marke.\nKonzipiert mit klarer visueller Hierarchie und integrierter Terminbuchung.',
          bullets: [
            'Hochwertiges UI/UX Design',
            'Integrierte Terminbuchung',
            'Klare Conversion-Struktur',
            'Vollständig responsive Umsetzung',
          ],
        },
      },
    },
    team: {
      title: 'Das Team',
      vision: {
        heading: 'Unser Anspruch',
        para1: 'Wir haben Wistho gegründet, um KMU zu helfen, online klarer, strukturierter und professioneller aufzutreten.',
        para2: 'Unser Fokus liegt auf nachhaltiger Performance und durchdachter Struktur - nicht auf kurzfristigen Trends.',
      },
      yanik: {
        role: 'Co-Founder · Engineering',
        description:
          'Verantwortlich für technische Qualität, Performance und stabile Architektur.',
        portfolio: 'Portfolio',
        linkedin: 'LinkedIn',
      },
      hanisten: {
        role: 'Co-Founder · Design & Frontend',
        description:
          'Verantwortlich für visuelle Klarheit, Interface-Systeme und überzeugende Nutzerführung.',
        portfolio: 'Portfolio',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
    contact: {
      title: 'Lassen Sie uns über Ihr Projekt sprechen',
      subtitle:
        'Schreiben Sie uns eine kurze Nachricht – wir melden uns mit einer Einschätzung und konkreten Ideen.',
      email: 'E-Mail',
      phone: 'WhatsApp / Telefon',
      links: {
        emailLabel: 'E-Mail',
        emailText: 'Per E-Mail schreiben',
        whatsappLabel: 'Telefon & WhatsApp',
        whatsappText: 'Via WhatsApp schreiben',
      },
      form: {
        name: 'Name',
        email: 'E-Mail',
        company: 'Unternehmen',
        message: 'Nachricht',
        submit: 'Nachricht senden',
        submitting: 'Wird gesendet...',
        success: '✓ Nachricht gesendet!',
        responseTime: 'Wir melden uns innerhalb von 1–2 Werktagen bei Ihnen.',
      },
    },
    footer: {
      copyright: '© 2026 Wistho',
      allRights: 'Alle Rechte vorbehalten.',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      madeIn: 'Gestaltet & entwickelt in der Schweiz.',
    },
    faq: {
      title: 'Häufige Fragen',
      subtitle: 'Alles, was Sie wissen möchten – einfach erklärt.',
      items: [
        {
          question: 'Was braucht ihr von mir, damit wir starten können?',
          answer: 'Logo (falls vorhanden), Texte/Infos zu Ihren Leistungen, Bilder (oder wir helfen bei passenden Bildern) und ein kurzes Gespräch zu Zielgruppe und Stil. Danach übernehmen wir den Rest.',
        },
        {
          question: 'Wie lange dauert die Erstellung einer Website?',
          answer: 'In der Regel 2-4 Wochen, abhängig vom Umfang Ihres Projekts. Einfache Onepager können auch schneller fertig sein.',
        },
        {
          question: 'Was kostet eine Website?',
          answer: 'Jedes Projekt ist individuell – deshalb arbeiten wir nicht mit fixen Paketen. In einem kostenlosen Erstgespräch klären wir Ihre Ziele und erstellen Ihnen ein transparentes Angebot, passend zu Ihrem Budget. Unverbindlich und ohne Fachchinesisch.',
        },
        {
          question: 'Wie laufen Änderungen und Feedback-Runden ab?',
          answer: 'Sie erhalten einen ersten Entwurf und geben Feedback. Kleine Anpassungen sind ganz normal – wir planen dafür klare Feedback-Runden ein, damit alles sauber und schnell fertig wird.',
        },
        {
          question: 'Könnt ihr Online-Terminbuchung und Zahlungen integrieren?',
          answer: 'Ja. Für Dienstleister integrieren wir auf Wunsch ein Buchungssystem (z.B. mit Online-Zahlung oder Zahlung vor Ort). Wir beraten Sie, welche Lösung am besten passt.',
        },
        {
          question: 'Übernehmt ihr Domain und Hosting?',
          answer: 'Ja, auf Wunsch kümmern wir uns um Domain, Hosting und die technische Einrichtung. Wenn Sie bereits Hosting haben, integrieren wir die Website auch dort.',
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
        {
          question: 'Wie funktionieren laufende Änderungen und Updates?',
          answer: 'Änderungen an Ihrer Website übernehmen wir gerne für Sie. Ob Texte, Bilder oder kleinere Anpassungen – Sie melden sich einfach bei uns, und wir kümmern uns darum. Auf Wunsch bieten wir auch eine laufende Betreuung, damit Ihre Website immer aktuell bleibt.',
        },
      ],
    },
    process: {
      title: 'Unser Prozess',
      subtitle: '',
      steps: [
        {
          number: '01',
          title: 'Kickoff',
          description: 'Ziele, Zielgruppe und Positionierung definieren.',
        },
        {
          number: '02',
          title: 'Struktur',
          description: 'Informationsarchitektur und klare Conversion-Logik entwickeln.',
        },
        {
          number: '03',
          title: 'Design & Entwicklung',
          description: 'Visuell hochwertig und technisch präzise umgesetzt.',
        },
        {
          number: '04',
          title: 'Launch & Optimierung',
          description: 'Analyse, Feinjustierung und kontinuierliche Weiterentwicklung.',
        },
      ],
      ctaPrimary: 'Projekt besprechen',
      ctaSecondary: 'Projekte ansehen',
    },
    ctaBanner: {
      title: 'Bereit für eine Website, die performt?',
      subtitle: 'Vereinbaren Sie ein unverbindliches Erstgespräch.',
      button: 'Projekt besprechen',
      note: 'Kostenlos & unverbindlich.',
    },
    projectsCTA: {
      primary: 'Projekt besprechen',
      secondary: 'Projekte ansehen',
    },
    testimonials: {
      heading: 'Vertrauen durch echte Zusammenarbeit.',
      items: [
        {
          quote: 'Die Zusammenarbeit war klar strukturiert und professionell.\nUnsere neue Website wirkt hochwertig - und die Online-Buchungen laufen deutlich effizienter als zuvor.',
          name: 'Ahmad O.',
          role: 'Inhaber, Coiffeur Styl',
        },
      ],
    },
    packages: {
      title: 'Leistungspakete',
      subtitle: 'Klare Lösungen für moderne Dienstleister – von der professionellen Website bis zu Booking, AI und Automatisierung.',
      labels: {
        result: 'Das Resultat',
        idealFor: 'Ideal für',
        process: 'Ablauf',
        mostPopular: 'Meistgebucht',
      },
      webGroup: {
        title: 'High-Performance Webdesign',
        items: [
          {
            name: 'WISTHO Starter',
            description: 'Die professionelle Website für lokale Betriebe, die online klarer und hochwertiger auftreten möchten.',
            result: 'Eine moderne Website, die Ihr Angebot verständlich präsentiert, Vertrauen schafft und Besucher gezielt zur Anfrage führt.',
            idealFor: 'Selbstständige, lokale Dienstleister, neue Studios, Barber, Coiffeure und kleine Unternehmen.',
            highlights: [
              'Individuelles Webdesign abgestimmt auf Ihre Marke',
              'Bis zu 3 strategische Seiten',
              'Mobile-First Umsetzung',
              'Kontaktformular oder WhatsApp-Anfrage',
              'Technische Grundoptimierung',
              'SEO-Grundstruktur für lokale Sichtbarkeit',
              'Schnelle Ladezeiten durch moderne Entwicklung',
            ],
            cta: 'Projekt unverbindlich anfragen',
          },
          {
            name: 'WISTHO Business & Booking',
            description: 'Das Website-System für Dienstleister, die mehr Termine und qualifizierte Anfragen erhalten möchten.',
            result: 'Ihre Website arbeitet auch dann für Sie, wenn Sie gerade beschäftigt sind. Kunden können sich informieren, Vertrauen aufbauen und direkt einen Termin oder eine Anfrage auslösen.',
            idealFor: 'Barber, Coiffeure, Kosmetikstudios, Nagelstudios, Physios, Praxen und lokale Dienstleister mit Termin- oder Anfragegeschäft.',
            highlights: [
              'Alles aus WISTHO Starter',
              'Mehrseitige Website-Struktur',
              'Klare Leistungsseiten',
              'Online-Terminbuchung',
              'Optional: Online-Zahlung',
              'Automatische Bestätigungen, sofern technisch möglich',
              'Conversion-orientierte Nutzerführung',
              'Lokale SEO-Grundlagen',
              'Hochwertige Animationen und Interaktionen',
            ],
            cta: 'Kostenlose Potenzialanalyse sichern',
          },
          {
            name: 'WISTHO Growth & Custom',
            description: 'Die individuelle Lösung für Unternehmen, die mehr als eine klassische Website benötigen.',
            result: 'Eine hochwertige Website oder Web-Applikation, die professionell auftritt, komplexere Inhalte strukturiert und konkrete Abläufe digital unterstützt.',
            idealFor: 'Etablierte KMU, Bauträger, Immobilienprojekte, Generalunternehmer und Unternehmen mit individuellen Anforderungen oder eigenen digitalen Abläufen.',
            highlights: [
              'Alles aus WISTHO Business & Booking',
              'Individuelle Seiten- und Funktionsstruktur',
              'Custom Web-App Funktionen',
              'Datenbank-Anbindung bei Bedarf',
              'API-Schnittstellen zu bestehenden Tools',
              'Analytics-Setup',
              'Performance-Optimierung',
              'Technische Weiterentwicklung nach dem Launch',
            ],
            cta: 'Strategiegespräch vereinbaren',
          },
        ],
      },
      aiGroup: {
        title: 'AI & Automation',
        subtitle: 'Erweiterbare Module für Unternehmen, die wiederkehrende Fragen, Anfragen oder interne Abläufe effizienter bearbeiten möchten.',
        items: [
          {
            name: 'AI Website Assistant',
            description: 'Der smarte Assistent für wiederkehrende Kundenfragen auf Ihrer Website.',
            result: 'Ein KI-Assistent beantwortet häufige Fragen zu Leistungen, Preisen, Öffnungszeiten, Abläufen oder Terminen und leitet Interessenten bei Bedarf zur Anfrage weiter.',
            idealFor: 'Unternehmen, die viele ähnliche Fragen per Telefon, E-Mail, WhatsApp oder Instagram erhalten.',
            highlights: [
              'KI-Chatbot mit Wissensbasis',
              'Training mit bereitgestellten Unternehmensinformationen',
              'Integration auf Ihrer Website',
              'FAQ-Logik',
              'Übergabe an Kontaktformular, E-Mail oder WhatsApp',
              'Keine automatischen Aktionen ohne Freigabe',
            ],
            cta: 'Chatbot-Konzept anfragen',
          },
          {
            name: 'AI Voice Assistant',
            description: 'Der digitale Telefonassistent für verpasste Anrufe und einfache Erstkontakte.',
            result: 'Ein KI-Sprachassistent kann Anrufe entgegennehmen, Anliegen erfassen und strukturierte Informationen für Sie vorbereiten. Besonders sinnvoll für Betriebe, die während der Arbeit oft nicht ans Telefon können.',
            idealFor: 'Dienstleister, Handwerksbetriebe, Praxen und Studios, die regelmässig Anrufe verpassen oder viele ähnliche telefonische Anfragen erhalten.',
            highlights: [
              'Anliegen aufnehmen',
              'Kontaktdaten erfassen',
              'Terminanfragen vorbereiten',
              'Rückrufwünsche dokumentieren',
              'Informationen strukturiert weiterleiten',
              'Umsetzung wird individuell geprüft',
            ],
            cta: 'Live-Demo anfragen',
          },
          {
            name: 'Automation Sprint',
            description: 'Für Unternehmen, die wiederkehrende manuelle Aufgaben digitalisieren oder automatisieren möchten.',
            result: 'Wir analysieren einen konkreten Ablauf in Ihrem Unternehmen und prüfen, wie dieser sinnvoll automatisiert werden kann. Danach entwickeln wir eine passende digitale Lösung.',
            idealFor: 'KMU und Dienstleister, die viel Zeit mit wiederkehrenden administrativen Aufgaben verlieren.',
            highlights: [
              'Anfrage-Vorqualifizierung',
              'Automatische E-Mail-Antworten',
              'Formular-Workflows',
              'Interne Benachrichtigungen',
              'CRM-Übergaben',
              'Datenstrukturierung',
              'Einfache Prozessautomatisierungen',
            ],
            process: [
              'Analyse des Prozesses',
              'Prüfung der technischen Machbarkeit',
              'Konzept und Aufwandsschätzung',
              'Umsetzung eines konkreten Workflows',
            ],
            cta: 'Machbarkeitsanalyse anfragen',
          },
        ],
      },
    },
  },
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      team: 'Team',
      contact: 'Contact',
      requestProject: 'Discuss Project',
    },
    hero: {
      label: 'Built for Growth.',
      title: 'High-performance Websites',
      titleLine2: 'for Swiss Service Providers.',
      subtitle:
        'Strategically designed. Clearly structured. Technically optimized for fast load times and more qualified inquiries.',
      ctaPrimary: 'Discuss Project',
      ctaSecondary: 'View Cases',
      footer: '',
      trustBadges: {
        quality: 'Built for Inquiries',
        speed: 'Technically Precise Implementation',
        mobile: 'Direct Collaboration with Founders',
      },
    },
    about: {
      title: 'Why Wistho?',
      description:
        'Many websites look good. Few actually work.\n\nWe build digital presences that communicate clearly, build trust and strategically drive inquiries.\n\nNo gimmicks. No unnecessary complexity. Just structure, clarity and performance.',
      workTitle: 'How we work',
      workItems: [
        {
          title: 'Founder-led studio',
          description: 'Work directly with us - from strategy to launch.',
        },
        {
          title: 'Structure before design',
          description: 'A strong website starts with clarity, not effects.',
        },
        {
          title: 'Engineering-quality by default',
          description: 'Fast load times and clean implementation are standard.',
        },
        {
          title: 'Built for the long term',
          description: 'After launch, we support ongoing improvements and optimization.',
        },
      ],
      stats: {
        experience: '',
        projects: '',
        commitment: '',
      },
    },
    services: {
      title: 'Services with Substance.',
      subtitle: '',
      items: {
        websites: {
          title: 'Strategic Websites',
          description:
            'Positioning, structure and clear user guidance.',
        },
        redesign: {
          title: 'Conversion-Focused Implementation',
          description:
            'Inquiry and booking systems that are intuitive and simply work.',
        },
        booking: {
          title: 'Technical Development',
          description:
            'Fast load times, clean codebase and consistent mobile optimization.',
        },
        support: {
          title: 'Ongoing Development',
          description:
            'Analysis and targeted improvement after launch.',
        },
      },
    },
    projects: {
      title: 'Selected Work',
      subtitle: 'Each project is built for clarity, speed and conversion.',
      buttonLabel: 'View Project',
      buttonLabelPortfolio: 'View Project',
      buttonLabelComingSoon: 'In Development',
      badgeStudio: 'Studio Project',
      badgeClient: 'Client Project',
      items: {
        coiffeurStyl: {
          title: 'Coiffeur Styl',
          subtitle: 'Barber & Grooming',
          description:
            'Complete redesign including integrated online booking and payment functionality.\nBuilt with a focus on clarity, mobile performance and a clear conversion structure.',
          bullets: [
            'UI/UX concept and visual redesign',
            'Integrated online booking',
            'Online payment and automated confirmation',
            'Mobile-first built and technically optimized',
          ],
        },
        yanik: {
          title: 'Yanik Wisler – Portfolio',
          subtitle: 'Design & Frontend',
          description:
            'Personal portfolio as a showcase for modern UI/UX design and precise technical implementation.',
          bullets: [
            'Custom design system',
            'Built with React & Next.js',
            'Subtle animations and micro-interactions',
            'Performance-optimized',
          ],
        },
        hanisten: {
          title: 'Hanisten Thivakaran – Portfolio',
          subtitle: 'Interaction & Motion',
          description:
            'Experimental portfolio focused on interaction, motion design and structured frontend architecture.',
          bullets: [
            'Interactive UI elements',
            'Motion design focus',
            'Clean frontend architecture',
            'Mobile-first implementation',
          ],
        },
        huy: {
          title: 'Huy Nails',
          subtitle: 'Beauty & Design',
          description:
            'Elegant, conversion-focused website for a modern beauty brand.\nDesigned with clear visual hierarchy and integrated booking.',
          bullets: [
            'Premium UI/UX design',
            'Integrated appointment booking',
            'Clear conversion structure',
            'Fully responsive implementation',
          ],
        },
      },
    },
    team: {
      title: 'The Team',
      vision: {
        heading: 'Our Vision',
        para1: 'We founded Wistho to help SMEs present themselves online more clearly, with better structure and a more professional appearance.',
        para2: 'Our focus is on sustainable performance and thoughtful structure - not short-term trends.',
      },
      yanik: {
        role: 'Co-Founder · Engineering',
        description:
          'Responsible for technical quality, performance and stable architecture.',
        portfolio: 'Portfolio',
        linkedin: 'LinkedIn',
      },
      hanisten: {
        role: 'Co-Founder · Design & Frontend',
        description:
          'Responsible for visual clarity, interface systems and compelling user guidance.',
        portfolio: 'Portfolio',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
    contact: {
      title: "Let's Talk About Your Project",
      subtitle:
        'Send us a short message – we will get back to you with an assessment and concrete ideas.',
      email: 'Email',
      phone: 'WhatsApp / Phone',
      links: {
        emailLabel: 'Email',
        emailText: 'Send us an email',
        whatsappLabel: 'Phone & WhatsApp',
        whatsappText: 'Write via WhatsApp',
      },
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
      copyright: '© 2026 Wistho',
      allRights: 'All rights reserved.',
      imprint: 'Imprint',
      privacy: 'Privacy',
      madeIn: 'Designed & developed in Switzerland.',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you want to know – simply explained.',
      items: [
        {
          question: 'What do you need from me to get started?',
          answer: 'A logo (if available), text/info about your services, images (or we help find suitable ones) and a short conversation about your target audience and style. After that, we take care of everything.',
        },
        {
          question: 'How long does it take to create a website?',
          answer: 'Usually 2-4 weeks, depending on the scope of your project. Simple one-pagers can be completed faster.',
        },
        {
          question: 'What does a website cost?',
          answer: "Every project is unique – that's why we don't work with fixed packages. In a free initial consultation, we clarify your goals and create a transparent quote tailored to your budget. Non-binding and without technical jargon.",
        },
        {
          question: 'How do feedback rounds and revisions work?',
          answer: 'You receive an initial draft and provide feedback. Small adjustments are completely normal – we plan clear feedback rounds so everything is finished cleanly and quickly.',
        },
        {
          question: 'Can you integrate online booking and payments?',
          answer: 'Yes. For service providers, we integrate a booking system on request (e.g. with online payment or on-site payment). We advise you on the best solution.',
        },
        {
          question: 'Do you handle domain and hosting?',
          answer: 'Yes, on request we take care of the domain, hosting and technical setup. If you already have hosting, we integrate the website there as well.',
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
        {
          question: 'How do ongoing changes and updates work?',
          answer: "We are happy to make changes to your website for you. Whether it's texts, images or minor adjustments – simply contact us and we take care of it. On request, we also offer ongoing support to keep your website up to date.",
        },
      ],
    },
    process: {
      title: 'Our Process',
      subtitle: '',
      steps: [
        {
          number: '01',
          title: 'Kickoff',
          description: 'Define goals, target audience and positioning.',
        },
        {
          number: '02',
          title: 'Structure',
          description: 'Develop information architecture and clear conversion logic.',
        },
        {
          number: '03',
          title: 'Design & Development',
          description: 'Visually premium and technically precise implementation.',
        },
        {
          number: '04',
          title: 'Launch & Optimization',
          description: 'Analysis, fine-tuning and continuous development.',
        },
      ],
      ctaPrimary: 'Discuss Project',
      ctaSecondary: 'View Cases',
    },
    ctaBanner: {
      title: 'Ready for a website that performs?',
      subtitle: 'Schedule a free, no-obligation consultation.',
      button: 'Discuss Project',
      note: 'Free & no obligation.',
    },
    projectsCTA: {
      primary: 'Discuss Project',
      secondary: 'View Cases',
    },
    testimonials: {
      heading: 'Trust Through Real Collaboration.',
      items: [
        {
          quote: 'The collaboration was clearly structured and professional.\nOur new website looks premium - and online bookings are running significantly more efficiently than before.',
          name: 'Ahmad O.',
          role: 'Owner, Coiffeur Styl',
        },
      ],
    },
    packages: {
      title: 'Service Packages',
      subtitle: 'Clear solutions for modern service providers — from professional websites to booking, AI and automation.',
      labels: {
        result: 'The Result',
        idealFor: 'Ideal for',
        process: 'Process',
        mostPopular: 'Most Popular',
      },
      webGroup: {
        title: 'High-Performance Web Design',
        items: [
          {
            name: 'WISTHO Starter',
            description: 'The professional website for local businesses that want to appear more credible and established online.',
            result: 'A modern website that presents your offering clearly, builds trust, and guides visitors toward making an inquiry.',
            idealFor: 'Freelancers, local service providers, new studios, barbers, hairdressers, and small businesses.',
            highlights: [
              'Custom web design tailored to your brand',
              'Up to 3 strategic pages',
              'Mobile-first implementation',
              'Contact form or WhatsApp inquiry',
              'Technical foundation optimization',
              'SEO foundation for local visibility',
              'Fast load times through modern development',
            ],
            cta: 'Request project without obligation',
          },
          {
            name: 'WISTHO Business & Booking',
            description: 'The website system for service providers who want more appointments and qualified inquiries.',
            result: "Your website works for you even when you're busy. Clients can get informed, build trust, and directly book an appointment or send an inquiry.",
            idealFor: 'Barbers, hairdressers, beauty studios, nail studios, physios, practices and local service providers with appointment-based business.',
            highlights: [
              'Everything in WISTHO Starter',
              'Multi-page website structure',
              'Clear service pages',
              'Online appointment booking',
              'Optional: online payment',
              'Automated confirmations where technically possible',
              'Conversion-focused user journey',
              'Local SEO foundations',
              'Premium animations and interactions',
            ],
            cta: 'Secure free potential analysis',
          },
          {
            name: 'WISTHO Growth & Custom',
            description: 'The tailored solution for companies that need more than a classic website.',
            result: 'A high-quality website or web application that presents professionally, structures complex content, and digitally supports concrete workflows.',
            idealFor: 'Established SMEs, property developers, real estate projects, general contractors and companies with individual requirements or custom digital workflows.',
            highlights: [
              'Everything in WISTHO Business & Booking',
              'Custom page and feature structure',
              'Custom web app functions',
              'Database integration if needed',
              'API connections to existing tools',
              'Analytics setup',
              'Performance optimization',
              'Technical development after launch',
            ],
            cta: 'Schedule strategy consultation',
          },
        ],
      },
      aiGroup: {
        title: 'AI & Automation',
        subtitle: 'Scalable modules for companies that want to handle recurring questions, inquiries or internal workflows more efficiently.',
        items: [
          {
            name: 'AI Website Assistant',
            description: 'The smart assistant for recurring customer questions on your website.',
            result: 'An AI assistant answers common questions about services, pricing, opening hours, processes or appointments, and directs interested visitors to submit an inquiry when needed.',
            idealFor: 'Companies that receive many similar questions by phone, email, WhatsApp or Instagram.',
            highlights: [
              'AI chatbot with knowledge base',
              'Training with your provided company information',
              'Integration on your website',
              'FAQ logic',
              'Handover to contact form, email or WhatsApp',
              'No automated actions without approval',
            ],
            cta: 'Request chatbot concept',
          },
          {
            name: 'AI Voice Assistant',
            description: 'The digital phone assistant for missed calls and simple first contacts.',
            result: "An AI voice assistant can answer calls, record inquiries and prepare structured information for you. Particularly useful for businesses that often can't take calls during work.",
            idealFor: 'Service providers, tradespeople, practices and studios that regularly miss calls or receive many similar phone inquiries.',
            highlights: [
              'Record inquiries',
              'Capture contact details',
              'Prepare appointment requests',
              'Document callback requests',
              'Forward information in a structured way',
              'Implementation is assessed individually',
            ],
            cta: 'Request live demo',
          },
          {
            name: 'Automation Sprint',
            description: 'For companies that want to digitize or automate recurring manual tasks.',
            result: 'We analyze a specific workflow in your company and assess how it can be meaningfully automated. We then develop a suitable digital solution.',
            idealFor: 'SMEs and service providers who spend a lot of time on recurring administrative tasks.',
            highlights: [
              'Inquiry pre-qualification',
              'Automatic email replies',
              'Form workflows',
              'Internal notifications',
              'CRM handovers',
              'Data structuring',
              'Simple process automations',
            ],
            process: [
              'Analysis of the process',
              'Assessment of technical feasibility',
              'Concept and effort estimation',
              'Implementation of a concrete workflow',
            ],
            cta: 'Request feasibility analysis',
          },
        ],
      },
    },
  },
}

