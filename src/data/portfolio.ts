export interface PortfolioData {
    personal: {
      name: string;
      photo?: string;
      title: {
        en: string;
        fr: string;
      };
      tagline: {
        en: string;
        fr: string;
      };
      email: string;
      phone?: string;
      location: {
        en: string;
        fr: string;
      };
      social: {
        github?: string;
        linkedin?: string;
        twitter?: string;
        website?: string;
      };

      
    };
    about: {
      en: string;
      fr: string;
    };
    experiences: Array<{
      company: string;
      position: {
        en: string;
        fr: string;
      };
      period: {
        en: string;
        fr: string;
      };
      description: {
        en: string;
        fr: string;
      };
      technologies: string[];
    }>;
    projects: Array<{
      name: string;
      description: {
        en: string;
        fr: string;
      };
      technologies: string[];
      link?: string;
      github?: string;
      image?: string;
      featured?: boolean;
    }>;
    skills: {
      categories: Array<{
        name: {
          en: string;
          fr: string;
        };
        skills: string[];
      }>;
    };
    contact: {
      title: {
        en: string;
        fr: string;
      };
      description: {
        en: string;
        fr: string;
      };
    };
  }
  
  export const portfolioData: PortfolioData = {
    personal: {
      name: "David Soro (Dav)",
      photo: "/david-soro.png",
      title: {
        en: "Software Engineer & IT Consultant",
        fr: "Ingénieur Logiciel & Consultant IT"
      },
      tagline: {
        en: "Building digital solutions for  businesses accross the globe",
        fr: "Créer des solutions numériques pour les entreprises du monde entier"
      },
      email: "davidsoro595@gmail.com", 
      location: {
        en: "Abidjan, Côte d'Ivoire",
        fr: "Abidjan, Côte d'Ivoire"
      },
      social: {
        github: "https://github.com/DvxdS", 
        linkedin: "https://www.linkedin.com/in/david-soro-b19128227/",
        
        // website: "https://yourwebsite.com"
      }
    },
    
    about: {
  en: "I'm a software engineer and IT consultant based in Côte d'Ivoire, co-founder of NIMBAA, a digital agency focused on modern web development, SEO, and IT strategy for SMEs and startups in West Africa. Beyond building websites and digital products, I help clients craft clear storytelling and on-brand content that strengthens their online presence and boosts conversions.",
  fr: "Je suis ingénieur logiciel et consultant IT basé en Côte d'Ivoire, co-fondateur de NIMBAA, une agence digitale spécialisée dans le développement web moderne, le SEO et la stratégie IT pour les PME et startups en Afrique de l'Ouest. Au-delà de créer des sites et produits digitaux, j’aide mes clients à développer un storytelling clair et des contenus alignés à leur marque pour renforcer leur présence en ligne et augmenter leurs conversions."
},

  
    experiences: [
      {
        company: "NIMBAA",
        position: {
          en: "Co-Founder & Lead Developer",
          fr: "Co-fondateur & Développeur Principal"
        },
        period: {
          en: "2024 - Present",
          fr: "2024 - Présent"
        },
        description: {
          en: "Leading a creative web agency focused on modern web development, SEO, and IT consulting for SMEs and startups in West Africa. Building innovative solutions and positioning as growth partners for businesses looking to digitalize their operations.",
          fr: "Direction d'une agence web créative axée sur le développement web moderne, le SEO et le conseil IT pour les PME et startups en Afrique de l'Ouest. Création de solutions innovantes et positionnement en tant que partenaires de croissance pour les entreprises cherchant à digitaliser leurs opérations."
        },
        technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Odoo ERP", "WordPress"]
      },
      {
        company: "DigiFemmes",
        position: {
          en: "Assistant Tech Tutor ",
          fr: "Assitant Tech Tutor"
        },
        period: {
          en: "Nov 2025 - Present",
          fr: "Nov 2025 - Présent"
        },
        description: {
          en: "Teaching facilitator on DigiFemmes academy & trainings programs and IT support",
          fr: "Facilitateur d'apprentissage sur l'academie et formations DigiFemmes & IT support "
        },
        technologies: ["Django", "React", "Figma", "Kotlin", "Firebase", "Learning"]
      },

      {
        company: "E-Garage CI",
        position: {
          en: "Full-Stack Developer ",
          fr: "Développeur Full-Stack"
        },
        period: {
          en: "Feb 2025 - Oct 2025",
          fr: "Fév 2025 - Oct 2025"
        },
        description: {
          en: "In charge of developing and maintaining the e-garage platform, implementing new features, optimizing performance, and ensuring a seamless user experience for customers and garage partners.",
          fr: "En charge du développement et de la maintenance de la plateforme e-garage, de la mise en œuvre de nouvelles fonctionnalités, de l'optimisation des performances et de la garantie d'une expérience utilisateur fluide pour les clients et les partenaires garages."
        },
        technologies: ["Django", "Next.JS", "Flutter", "Postgresql", "Docker" ]
      },

      {
        company: "Sheba Plastic",
        position: {
          en: "Frontend Developer ",
          fr: "Développeur Frontend"
        },
        period: {
          en: "Apr 2022 - March 2023",
          fr: "Avr 2022 - Mars 2023"
        },
        description: {
          en: "Developing and maintaining the frontend of Sheba Plastic's website, ensuring responsiveness, performance optimization, and seamless user experience across devices.",
          fr: "Developpement et maintenance du frontend du site web de Sheba Plastic, en assurant la réactivité, l'optimisation des performances et une expérience utilisateur fluide sur tous les appareils."
        },
        technologies: ["NuxtJS", "Next.JS", "Flutter",  "Docker" ]
      },
      
    ],
  
    projects: [
      {
        name: "NavTicket",
        description: {
          en: "E-ticketing platform for bus companies in West Africa with comprehensive booking management, Stripe payment integration, QR code generation, and operator dashboards for managing trips and customers.",
          fr: "Plateforme de billetterie électronique pour les compagnies de bus en Afrique de l'Ouest avec gestion complète des réservations, intégration de paiement Stripe, génération de codes QR et tableaux de bord pour gérer les voyages et les clients."
        },
        technologies: ["Django", "React", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
        link: "https://github.com/DvxdS/navticket_", 
        featured: true,
        image: "/navticket.png" ,
        github: "https://github.com/DvxdS/navticket_",
      },
      {
        name: "NIMBAA Agency",
        description: {
          en: "Creative digital agency website offering modern web development, SEO services, and IT consulting for West African businesses. Features comprehensive service portfolios and client management systems.",
          fr: "Site web d'agence digitale créative offrant développement web moderne, services SEO et conseil IT pour les entreprises ouest-africaines. Comprend des portfolios de services complets et des systèmes de gestion clients."
        },
        technologies: ["WordPress", "JavaScript", "CSS", "ThreeJS"],
        link: "https://maurian.impactactionconsulting.com/", 
        featured: true,
        image: "/nimbaa.png"
      },
     
      
    ],
  
    skills: {
      categories: [
        {
          name: {
            en: "Frontend Development",
            fr: "Développement Frontend"
          },
          skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Flutter", "Next.js", "Framer Motion"]
        },
        {
          name: {
            en: "Backend Development",
            fr: "Développement Backend"
          },
          skills: ["Django", "Node.js", "Python", "PostgreSQL", "REST API", "NestJS"]
        },
        {
          name: {
            en: "Tools & Technologies",
            fr: "Outils & Technologies"
          },
          skills: ["Git", "Docker", "Stripe", "Google Maps API", "Firebase", "Odoo ERP", "Vite"]
        },
        {
          name: {
            en: "Business & Consulting",
            fr: "Business & Conseil"
          },
          skills: ["IT Consulting", "SEO", "Business Storytelling", "Project Management", ]
        }
      ]
    },
  
    contact: {
      title: {
        en: "Let's Work Together",
        fr: "Travaillons Ensemble"
      },
      description: {
        en: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you need a full-stack developer, IT consultant, or a growth partner for your business, let's connect!",
        fr: "Je suis toujours ouvert à discuter de nouveaux projets, d'idées créatives ou d'opportunités de faire partie de votre vision. Que vous ayez besoin d'un développeur full-stack, d'un consultant IT ou d'un partenaire de croissance pour votre entreprise, connectons-nous!"
      }
    }
  };
  
  export type Language = 'en' | 'fr';