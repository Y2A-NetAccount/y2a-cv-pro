import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Download,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Cpu,
  FileSpreadsheet,
  Globe,
  ArrowUpRight,
  Send,
  Building,
  ShieldCheck,
  Zap,
  ChevronRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Logo officiel SVG WhatsApp pour un rendu haute définition
function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function App() {
  const mainRef = useRef(null);
  const [activeTab, setActiveTab] = useState('all');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Données des compétences avec pourcentages et catégories
  const skills = [
    {
      name: "Logiciels Comptables & ERP",
      tools: "Perfecto, Sage 100, Ciel, Saari",
      level: 98,
      category: "finance",
      highlight: "15+ ans d'expérience quotidienne en cabinet et entreprises"
    },
    {
      name: "Solutions Cloud & SaaS",
      tools: "QuickBooks, Xero, Odoo, Sage Cloud",
      level: 96,
      category: "cloud",
      highlight: "Spécialiste certifié Upwork - flux multi-devises & reporting temps réel"
    },
    {
      name: "E-Commerce & Flux Financiers",
      tools: "Shopify, Chariow, Stripe, PayPal",
      level: 92,
      category: "ecommerce",
      highlight: "Réconciliation automatisée des ventes, TVA internationale et trésorerie"
    },
    {
      name: "Création Web & Infrastructure",
      tools: "Hostinger, Elementor, WordPress, DNS",
      level: 88,
      category: "web",
      highlight: "Déploiement de boutiques en ligne et sites vitrines haute performance"
    },
    {
      name: "Vibe Coding & Automatisation IA",
      tools: "Antigravity, IA Agents, Prompt Engineering",
      level: 90,
      category: "tech",
      highlight: "Développement assisté par IA, automatisation des reportings & scripts"
    }
  ];

  // Expériences chronologiques
  const experiences = [
    {
      period: "2012 — Aujourd'hui",
      role: "Fondateur & Dirigeant Exécutif",
      company: "Y2A Global Business Sarl & Y2A Novacom",
      location: "Bénin & International",
      description: "Création et pilotage d'entreprises innovantes combinant expertise financière, négoce international et écosystèmes e-commerce. Direction de la stratégie de croissance, gestion globale de la trésorerie et conformité légale et fiscale.",
      achievements: [
        "Structuration complète de la gouvernance financière et comptable",
        "Lancement et rentabilisation de plusieurs marques e-commerce",
        "Mise en place de process d'audit interne et de conformité internationale"
      ],
      tags: ["Entrepreneuriat", "E-commerce", "Direction Financière", "Stratégie"]
    },
    {
      period: "2012 — Aujourd'hui",
      role: "Spécialiste Comptabilité Cloud & Freelance International",
      company: "Upwork & Portefeuille Clients Internationaux",
      location: "Remote / International",
      description: "Conseil et prise en charge comptable pour PME, entrepreneurs et boutiques e-commerce mondiales. Intégration avancée et tenue de comptes sur QuickBooks, Xero et Odoo avec synchronisation des flux de paiement.",
      achievements: [
        "100% Job Success sur des dizaines de missions complexes",
        "Automatisation de la saisie bancaire et réconciliation de flux e-commerce",
        "Établissement des états financiers périodiques et tableaux de bord décisionnels"
      ],
      tags: ["QuickBooks", "Xero", "Odoo", "Shopify Integration", "Upwork Top Rated"]
    },
    {
      period: "2010 — 2012",
      role: "Responsable Portefeuille Clients & Ressources Humaines",
      company: "Cabinet d'Expertise Comptable L'Expertconseil Sarl",
      location: "Cotonou, Bénin",
      description: "Supervision opérationnelle d'un vaste portefeuille de clients PME/PMI. Encadrement des assistants comptables, revue des dossiers fiscaux et sociaux, et gestion administrative des ressources humaines.",
      achievements: [
        "Supervision et validation de plus de 40 bilans annuels",
        "Accompagnement fiscal stratégique lors des contrôles de l'administration",
        "Optimisation des plannings et montée en compétences de l'équipe de collaborateurs"
      ],
      tags: ["Supervision Comptable", "Fiscalité des Entreprises", "RH", "Audit"]
    },
    {
      period: "2008 — 2010",
      role: "Collaborateur Chargé de Portefeuille Client",
      company: "Cabinet d'Expertise Comptable E2CG",
      location: "Cotonou, Bénin",
      description: "Prise en charge intégrale de la comptabilité générale et analytique pour un ensemble de sociétés clientes. Établissement des déclarations fiscales (TVA, IS) et sociales (CNSS).",
      achievements: [
        "Tenue et révision de comptes sur progiciels de référence (Perfecto, Sage)",
        "Préparation méticuleuse des dossiers de clôture pour l'expert-comptable",
        "Relation de confiance quotidienne avec les dirigeants d'entreprises"
      ],
      tags: ["Tenue de Comptes", "Déclarations Fiscales", "Perfecto", "Sage 100"]
    },
    {
      period: "2001 — 2008",
      role: "Consultant Comptable & Fiscal",
      company: "Cabinet L'Expertconseil",
      location: "Cotonou, Bénin",
      description: "Début de carrière à la sortie du Bac G2. Pratique intensive du conseil de gestion, classement, saisie comptable, rapprochements bancaires et assistance aux inventaires physiques.",
      achievements: [
        "Acquisition d'une rigueur méthodique de premier ordre sur le terrain",
        "Évolution constante menant à l'obtention du BTS Finances et Comptabilité en 2008"
      ],
      tags: ["Consulting", "Fondations Comptables", "Rigueur d'Audit"]
    }
  ];

  // Formations
  const education = [
    {
      year: "2008",
      degree: "BTS — Brevet de Technicien Supérieur en Finances et Comptabilité",
      school: "Diplôme d'État d'Enseignement Supérieur",
      description: "Spécialisation approfondie en finance d'entreprise, analyse financière, comptabilité approfondie, fiscalité générale et contrôle de gestion."
    },
    {
      year: "2001",
      degree: "Baccalauréat Série G2 — Techniques Quantitatives de Gestion",
      school: "Enseignement Technique & Professionnel",
      description: "Maîtrise des mathématiques appliquées, des principes comptables fondamentaux, du droit commercial et de l'économie générale."
    },
    {
      year: "2012 — 2026",
      degree: "Formation Continue & Maîtrise des Outils Digitaux d'Avenir",
      school: "Certifications SaaS, Cloud Accounting & Vibe Coding",
      description: "Spécialisations sur QuickBooks Online, écosystèmes e-commerce (Shopify/Chariow), déploiement Hostinger/Elementor et Vibe Coding assisté par IA."
    }
  ];

  // Gestion de la Navbar adaptative et de la transparence au scroll
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      setIsScrolling(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Dès que le scroll s'arrête (après 250ms d'inactivité de scroll), elle reprend sa couleur
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 250);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Cycle d'animation GSAP avec gsap.context et ScrollTrigger
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrée cinématique du Hero (stagger 0.12s)
      const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTimeline
        .from(".hero-badge", { opacity: 0, y: -20, duration: 0.8, delay: 0.1 })
        .from(".hero-avatar", { opacity: 0, scale: 0.8, duration: 0.9, ease: "back.out(1.7)" }, "-=0.5")
        .from(".hero-name", { opacity: 0, y: 30, duration: 1 }, "-=0.6")
        .from(".hero-title", { opacity: 0, y: 25, duration: 0.9 }, "-=0.7")
        .from(".hero-stats", { opacity: 0, y: 20, duration: 0.8, stagger: 0.12 }, "-=0.6")
        .from(".hero-cta", { opacity: 0, y: 20, duration: 0.8, stagger: 0.15 }, "-=0.5");

      // 2. Animation Manifeste À propos
      gsap.from(".about-manifesto-left", {
        scrollTrigger: {
          trigger: "#apropos",
          start: "top 80%",
        },
        opacity: 0,
        x: -40,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(".about-manifesto-right", {
        scrollTrigger: {
          trigger: "#apropos",
          start: "top 80%",
        },
        opacity: 0,
        x: 40,
        duration: 1,
        ease: "power3.out"
      });

      // 3. Animation Timeline des Expériences
      const cards = gsap.utils.toArray('.timeline-card');
      cards.forEach((card, index) => {
        const isEven = index % 2 === 0;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          opacity: 0,
          x: window.innerWidth > 768 ? (isEven ? -60 : 60) : -30,
          duration: 0.9,
          ease: "power3.out"
        });
      });

      // 4. Animation des Jauges de Compétences
      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: "#competences",
          start: "top 75%",
        },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out"
      });

      // Animation des cercles SVG des compétences
      gsap.from(".skill-circle-progress", {
        scrollTrigger: {
          trigger: "#competences",
          start: "top 70%",
        },
        strokeDashoffset: 283,
        duration: 1.6,
        stagger: 0.12,
        ease: "power2.out"
      });

      // 5. Animation Formations
      gsap.from(".education-card", {
        scrollTrigger: {
          trigger: "#formation",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out"
      });

      // 6. Animation Contact
      gsap.from(".contact-element", {
        scrollTrigger: {
          trigger: "#contact",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out"
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => setContactSubmitted(false), 5000);
  };

  return (
    <div ref={mainRef} className="relative bg-void text-ghost selection:bg-aura selection:text-white font-sans overflow-hidden">
      
      {/* =========================================================================
          A. NAVBAR — "La Signature Flottante"
      ========================================================================= */}
      <header className="fixed top-2 sm:top-5 left-0 right-0 z-50 flex justify-center px-1.5 sm:px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto transition-all duration-300 w-full max-w-5xl rounded-full flex items-center justify-between gap-1 sm:gap-4 px-2 sm:px-6 py-1.5 sm:py-2.5 ${
            isScrolling
              ? 'bg-transparent backdrop-blur-none border border-transparent shadow-none opacity-30 hover:opacity-100 hover:bg-[#0A0A14]/80 hover:backdrop-blur-md hover:border-aura/30'
              : isScrolled
              ? 'bg-[#0A0A14]/90 backdrop-blur-xl border border-aura/35 shadow-neon opacity-100'
              : 'bg-[#0A0A14]/85 backdrop-blur-xl border border-aura/30 shadow-glass opacity-100'
          }`}
        >
          {/* Logo AY + Nom (Nom masqué sur mobile pour un affichage épuré) */}
          <a href="#" className="flex items-center gap-1.5 sm:gap-3 group shrink-0">
            <span className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-aura via-purple-500 to-indigo-400 flex items-center justify-center font-bold text-[11px] sm:text-sm tracking-wider text-white shadow-neon transition-transform duration-300 group-hover:scale-105 border border-white/20 shrink-0">
              AY
            </span>
            <div className="hidden md:flex flex-col text-left leading-none">
              <span className="font-serif italic text-sm sm:text-base md:text-lg text-white font-normal tracking-wide group-hover:text-purple-200 transition-colors">
                Adiss A.
              </span>
              <span className="font-sans font-extrabold text-[8px] sm:text-[10px] md:text-xs tracking-[0.22em] text-transparent bg-clip-text bg-gradient-to-r from-aura-glow via-purple-300 to-white uppercase">
                YESSOUFOU
              </span>
            </div>
          </a>

          {/* Menu : responsive, affiché sur mobile comme sur desktop avec un espacement équilibré */}
          <div className="flex items-center flex-nowrap whitespace-nowrap gap-0.5 sm:gap-2 md:gap-4 text-[9.5px] sm:text-xs md:text-sm font-medium shrink-0">
            <a
              href="#apropos"
              className="interactive-lift px-1.5 sm:px-3 py-1 text-ghost/90 hover:text-white hover:bg-aura/20 rounded-full transition-all shrink-0"
            >
              À propos
            </a>
            <a
              href="#experience"
              className="interactive-lift px-1.5 sm:px-3 py-1 text-ghost/90 hover:text-white hover:bg-aura/20 rounded-full transition-all shrink-0"
            >
              Expérience
            </a>
            <a
              href="#competences"
              className="interactive-lift px-1.5 sm:px-3 py-1 text-ghost/90 hover:text-white hover:bg-aura/20 rounded-full transition-all shrink-0"
            >
              Compétences
            </a>
            <a
              href="#formation"
              className="interactive-lift px-1.5 sm:px-3 py-1 text-ghost/90 hover:text-white hover:bg-aura/20 rounded-full transition-all shrink-0"
            >
              Formation
            </a>
            <a
              href="#contact"
              className="interactive-lift px-1.5 sm:px-3 py-1 text-ghost/90 hover:text-white hover:bg-aura/20 rounded-full transition-all shrink-0"
            >
              Contact
            </a>
          </div>

          {/* Bouton CTA Télécharger CV (masqué sur mobile, visible sur desktop) */}
          <a
            href="/cv-adiss-yessoufou.pdf"
            download="CV-Adiss-A-YESSOUFOU.pdf"
            className="hidden md:flex magnetic-btn shrink-0 items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-aura to-purple-600 hover:from-aura-glow hover:to-purple-500 text-white font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-neon text-center transition-all border border-aura/40"
          >
            <Download className="w-3.5 h-3.5 shrink-0 text-white" />
            <span className="text-xs md:text-sm font-sans flex flex-row items-center gap-1 leading-normal">
              <span>Télécharger</span>
              <span className="text-purple-200 font-bold">mon CV</span>
            </span>
          </a>
        </nav>
      </header>

      {/* =========================================================================
          B. SECTION HERO — "La Première Impression"
      ========================================================================= */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-28 pb-16 overflow-hidden">
        {/* Background Texture & Aurora Gradient */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-screen scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2000&q=80')`
            }}
          />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aura/20 rounded-full blur-[140px]" />
          <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-purple-900/15 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/80 to-void" />
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center z-10">
          {/* Badge de disponibilité */}
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-void-card/90 border border-aura/30 text-xs font-mono text-aura-glow shadow-neon mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Disponible pour missions freelance & consulting stratégique</span>
          </div>

          {/* Photo de profil haute fidélité */}
          <div className="hero-avatar relative mb-6 group">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-2 border-aura/80 p-1.5 shadow-neon relative bg-void-surface flex items-center justify-center overflow-hidden">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-aura/30 via-void-card to-aura/10 flex flex-col items-center justify-center text-white border border-white/10 group-hover:scale-105 transition-transform duration-500">
                <span className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-ghost to-aura-glow">
                  AY
                </span>
                <span className="font-mono text-[10px] text-aura tracking-widest uppercase mt-0.5">
                  15+ Exp.
                </span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-emerald-500/90 text-void font-bold p-1 rounded-full border-2 border-void">
              <ShieldCheck className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Nom complet massif */}
          <h1 className="hero-name font-sans font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white mb-3 glow-text leading-[1.05]">
            Adiss A. <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-aura">YESSOUFOU</span>
          </h1>

          {/* Titre professionnel en Serif Italique */}
          <p className="hero-title font-serif italic text-2xl sm:text-3xl md:text-4xl text-aura-glow mb-4 tracking-normal font-normal">
            Comptable Freelancer & Entrepreneur
          </p>

          {/* Tagline de positionnement */}
          <p className="text-sm sm:text-base text-ghost-muted max-w-2xl font-light mb-8">
            Fondateur de <span className="text-white font-medium">Y2A Global Business</span> & <span className="text-white font-medium">Y2A Novacom</span>. 
            Alliant rigueur comptable d'élite, solutions cloud internationales (QuickBooks, Xero, Odoo), expertise e-commerce et <span className="text-aura font-medium">Vibe Coding</span>.
          </p>

          {/* 3 Stats en monospace avec séparateurs */}
          <div className="hero-stats flex flex-wrap justify-center items-center gap-3 sm:gap-6 font-mono text-xs sm:text-sm text-ghost-muted bg-void-card/60 border border-aura/20 backdrop-blur-md rounded-2xl px-6 py-3 mb-10 shadow-glass">
            <span className="flex items-center gap-2 text-white">
              <Zap className="w-3.5 h-3.5 text-aura" />
              <strong className="text-aura font-semibold">15+</strong> ans d'expérience
            </span>
            <span className="text-aura/40">|</span>
            <span className="flex items-center gap-2 text-white">
              <Briefcase className="w-3.5 h-3.5 text-aura" />
              <strong className="text-aura font-semibold">150+</strong> missions & bilans
            </span>
            <span className="text-aura/40">|</span>
            <span className="flex items-center gap-2 text-white">
              <MapPin className="w-3.5 h-3.5 text-aura" />
              Cotonou & International
            </span>
          </div>

          {/* CTAs */}
          <div className="hero-cta flex flex-wrap items-center justify-center gap-4">
            <a
              href="/cv-adiss-yessoufou.pdf"
              download="CV-Adiss-A-YESSOUFOU.pdf"
              className="magnetic-btn flex items-center gap-2.5 bg-aura hover:bg-aura-glow text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-neon"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger mon CV</span>
            </a>
            <a
              href="#contact"
              className="magnetic-btn flex items-center gap-2.5 bg-void-surface/90 hover:bg-void-card text-ghost border border-aura/30 hover:border-aura font-medium text-sm sm:text-base px-7 py-3.5 rounded-full"
            >
              <Mail className="w-4 h-4 text-aura" />
              <span>Me contacter</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          C. A PROPOS — "Le Manifeste Personnel"
      ========================================================================= */}
      <section id="apropos" className="relative scroll-mt-20 sm:scroll-mt-24 py-28 px-4 sm:px-8 border-t border-aura/15 bg-gradient-to-b from-void via-[#0D0D1A] to-void">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Colonne Gauche : Titre Dramatique */}
            <div className="about-manifesto-left lg:col-span-4 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-aura block mb-2">
                  // 01. Le Manifeste
                </span>
                <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4">
                  L'union de la rigueur financière et de l'innovation digitale.
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-aura to-transparent rounded-full mb-6" />
                <p className="font-mono text-xs text-ghost-muted">
                  Bilingue chiffres & technologies. Un interlocuteur unique pour structurer, automatiser et propulser vos opérations.
                </p>
              </div>

              {/* Encadré citation / Vision */}
              <div className="mt-8 p-6 rounded-[2rem] bg-void-card/60 border border-aura/20 backdrop-blur-md">
                <p className="font-sans italic text-sm text-ghost/90">
                  « La comptabilité moderne n'est plus un simple enregistrement d'archives : c'est le moteur décisionnel en temps réel de l'entreprise connectée. »
                </p>
                <span className="font-mono text-xs text-aura block mt-3">— Adiss A. YESSOUFOU</span>
              </div>
            </div>

            {/* Ligne Accent Séparatrice sur Desktop */}
            <div className="hidden lg:block lg:col-span-1 flex justify-center">
              <div className="w-[2px] h-full min-h-[420px] bg-gradient-to-b from-aura/60 via-aura/20 to-transparent" />
            </div>

            {/* Colonne Droite : Le Texte de Présentation */}
            <div className="about-manifesto-right lg:col-span-7 space-y-6 text-ghost/90 text-base sm:text-lg leading-relaxed font-light">
              <p className="text-xl sm:text-2xl font-normal text-white">
                Diplômé du <strong className="font-semibold text-aura-glow">Bac G2 (Gestion)</strong> en 2001 puis du <strong className="font-semibold text-aura-glow">BTS Finances et Comptabilité</strong> en 2008, mon parcours est forgé par plus de 15 années d'exercice continu en cabinet d'expertise comptable et sur le terrain entrepreneurial.
              </p>

              <p>
                Dès 2001, j'ai développé mes compétences analytiques en cabinet de conseil (<span className="text-white font-medium">Cabinet L'Expertconseil</span>), avant de consolider mon savoir-faire au sein du <span className="text-white font-medium">Cabinet d'Expertise Comptable E2CG</span> en tant que Collaborateur Chargé de Portefeuille Client jusqu'en 2010. J'ai ensuite dirigé le pôle Portefeuille Clients et Ressources Humaines au sein de L'Expertconseil Sarl, orchestrant la révision comptable et la conformité fiscale de dizaines d'entreprises.
              </p>

              <p>
                Animé par la volonté d'innover et de franchir les frontières, j'ai fondé dès 2012 <strong className="text-white font-medium">Y2A Global Business Sarl</strong> et <strong className="text-white font-medium">Y2A Novacom</strong>. J'ai conjugué gestion d'entreprise, e-commerce transfrontalier et freelancing international de pointe sur <span className="text-aura font-medium">Upwork</span>, devenant un référent reconnu sur les écosystèmes cloud (<strong className="text-white">QuickBooks, Xero, Odoo</strong>).
              </p>

              <p>
                Aujourd'hui, je fusionne cette solide culture financière avec le <strong className="text-aura font-semibold">Vibe Coding</strong> et l'automatisation IA, concevant des flux sans friction pour les chefs d'entreprise modernes : de l'intégration e-commerce à la clôture de bilan certifiée.
              </p>

              {/* Tags de valeurs */}
              <div className="pt-4 flex flex-wrap gap-2.5">
                {["Rigueur Fiscale", "Comptabilité Cloud", "E-Commerce Logistics", "Intégration ERP", "Automatisation IA", "Reporting Stratégique"].map((badge, idx) => (
                  <span key={idx} className="font-mono text-xs px-3.5 py-1.5 rounded-full bg-void-surface border border-aura/30 text-ghost-muted hover:border-aura hover:text-white transition-colors">
                    #{badge}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          D. EXPERIENCE — "La Timeline Vivante"
      ========================================================================= */}
      <section id="experience" className="relative scroll-mt-20 sm:scroll-mt-24 py-28 px-4 sm:px-8 border-t border-aura/15">
        <div className="max-w-6xl mx-auto">
          
          {/* Header de section */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-mono text-xs uppercase tracking-widest text-aura block mb-2">
              // 02. Trajectoire Professionnelle
            </span>
            <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
              L'Expérience en Action
            </h2>
            <p className="text-ghost-muted text-sm sm:text-base">
              Une carrière progressive alliant l'exigence des cabinets d'expertise comptable et le dynamisme du commerce international.
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative">
            {/* Ligne centrale de la timeline (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-aura/60 via-aura/30 to-aura/10" />

            {/* Liste des cartes d'expérience */}
            <div className="space-y-12 sm:space-y-16">
              {experiences.map((exp, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`timeline-card relative flex flex-col md:flex-row items-center ${
                      isEven ? 'md:justify-start' : 'md:justify-end'
                    }`}
                  >
                    {/* Point d'ancrage central avec pulsation */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-void border-2 border-aura items-center justify-center z-20 shadow-neon">
                      <div className="w-2.5 h-2.5 rounded-full bg-aura animate-pulse" />
                    </div>

                    {/* Contenu de la Carte */}
                    <div
                      className={`w-full md:w-[46%] card-hover-effect rounded-[2.5rem] p-6 sm:p-8 bg-void-card/80 border border-aura/25 backdrop-blur-lg shadow-glass relative ${
                        isEven ? 'md:mr-auto' : 'md:ml-auto'
                      }`}
                    >
                      {/* Période en monospace */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs sm:text-sm font-semibold text-aura bg-void-surface px-3 py-1 rounded-full border border-aura/20">
                          {exp.period}
                        </span>
                        <span className="font-mono text-xs text-ghost-muted flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-aura" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Titre & Entreprise */}
                      <h3 className="font-sans font-bold text-xl sm:text-2xl text-white mb-1">
                        {exp.role}
                      </h3>
                      <h4 className="font-sans font-medium text-sm sm:text-base text-aura-glow mb-4 flex items-center gap-2">
                        <Building className="w-4 h-4 text-aura/70" />
                        {exp.company}
                      </h4>

                      {/* Description */}
                      <p className="text-ghost-muted text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Réalisations clés */}
                      <ul className="space-y-2 mb-5">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="text-xs sm:text-sm text-ghost/90 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-aura shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                        {exp.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-void-surface/80 text-ghost-muted border border-aura/15"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          E. COMPETENCES — "Le Tableau de Bord"
      ========================================================================= */}
      <section id="competences" className="relative scroll-mt-20 sm:scroll-mt-24 py-28 px-4 sm:px-8 border-t border-aura/15 bg-gradient-to-b from-void via-[#0D0B1C] to-void">
        <div className="max-w-6xl mx-auto">
          
          {/* Header de section */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-aura block mb-2">
              // 03. Tableau de Bord & Maîtrise
            </span>
            <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
              L'Arsenal Technique
            </h2>
            <p className="text-ghost-muted text-sm sm:text-base">
              Une convergence unique entre l'expertise comptable certifiée, la gestion de plateformes e-commerce et le développement moderne assisté par IA.
            </p>
          </div>

          {/* Grille de Maîtrise avec Jauges Circulaires SVG animées */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skills.map((skill, index) => {
              const radius = 45;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset = circumference - (skill.level / 100) * circumference;

              return (
                <div
                  key={index}
                  className="skill-card card-hover-effect rounded-[2.5rem] p-6 sm:p-7 bg-void-card/90 border border-aura/25 backdrop-blur-md shadow-glass flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-aura bg-void-surface px-2.5 py-1 rounded-full border border-aura/20">
                        {skill.category}
                      </span>
                      <h3 className="font-sans font-bold text-lg text-white mt-2">
                        {skill.name}
                      </h3>
                      <p className="font-mono text-xs text-aura-glow mt-1">
                        {skill.tools}
                      </p>
                    </div>

                    {/* Jauge Circulaire SVG */}
                    <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r={radius}
                          stroke="currentColor"
                          strokeWidth="7"
                          fill="transparent"
                          className="text-void-surface"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r={radius}
                          stroke="#7B61FF"
                          strokeWidth="7"
                          fill="transparent"
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          strokeLinecap="round"
                          className="skill-circle-progress transition-all duration-1000"
                        />
                      </svg>
                      <span className="absolute font-mono font-bold text-sm text-white">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  {/* Highlight pratique */}
                  <div className="pt-3 border-t border-white/5">
                    <p className="text-xs text-ghost-muted italic">
                      « {skill.highlight} »
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Carte Focus : Vibe Coding & Antigravity */}
            <div className="skill-card card-hover-effect rounded-[2.5rem] p-6 sm:p-7 bg-gradient-to-br from-aura/20 via-void-card to-void-surface border border-aura/40 backdrop-blur-md shadow-neon flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-semibold text-aura uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-aura animate-pulse" />
                    Focus Vibe Coding
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-aura shadow-neon" />
                </div>
                <h3 className="font-sans font-bold text-xl text-white mb-2">
                  Antigravity & Productivité Augmentée
                </h3>
                <p className="text-xs sm:text-sm text-ghost/90 leading-relaxed">
                  Utilisation des agents intelligents et des workflows automatisés pour concevoir des dashboards financiers sur mesure, traiter les grands volumes de données et déployer des applications web fluides.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-aura/20 flex items-center justify-between">
                <span className="font-mono text-xs text-aura-glow">Workflow Next-Gen</span>
                <span className="font-mono text-xs text-white bg-aura/30 px-2.5 py-1 rounded-full border border-aura/40">Actif</span>
              </div>
            </div>
          </div>

          {/* Outils & Écosystèmes sous forme de pills */}
          <div className="rounded-[2.5rem] p-8 bg-void-card/60 border border-aura/20 backdrop-blur-md">
            <h4 className="font-mono text-xs uppercase tracking-widest text-aura mb-4 text-center">
              // Outils de prédilection au quotidien
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-3">
              {[
                "QuickBooks Online", "Sage 100", "Perfecto", "Xero", "Odoo ERP",
                "Shopify", "Chariow", "Stripe", "Hostinger", "Elementor",
                "Excel Expert", "Google Sheets API", "Antigravity AI", "Vibe Coding"
              ].map((tool, idx) => (
                <div
                  key={idx}
                  className="interactive-lift flex items-center gap-2 px-4 py-2 rounded-full bg-void-surface border border-aura/25 text-ghost text-xs sm:text-sm font-medium hover:border-aura hover:text-white hover:bg-aura/10"
                >
                  <Cpu className="w-3 h-3 text-aura" />
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          F. FORMATION — "Les Fondations"
      ========================================================================= */}
      <section id="formation" className="relative scroll-mt-20 sm:scroll-mt-24 py-28 px-4 sm:px-8 border-t border-aura/15 bg-void">
        <div className="max-w-4xl mx-auto">
          
          {/* Header de section */}
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-aura block mb-2">
              // 04. Parcours Académique
            </span>
            <h2 className="font-serif italic text-4xl sm:text-5xl text-white mb-3">
              Les Fondations
            </h2>
            <p className="text-ghost-muted text-sm">
              Un socle académique rigoureux en finance et gestion quantitative, renforcé par plus de deux décennies d'actualisation continue.
            </p>
          </div>

          {/* Cartes empilées verticales */}
          <div className="space-y-6">
            {education.map((item, index) => (
              <div
                key={index}
                className="education-card card-hover-effect rounded-[2rem] p-6 sm:p-8 bg-void-card/75 border border-aura/20 backdrop-blur-md shadow-glass flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-void-surface border border-aura/30 flex items-center justify-center shrink-0 text-aura shadow-neon">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-aura bg-void-surface px-2.5 py-0.5 rounded-full border border-aura/20 inline-block mb-1.5">
                      {item.year}
                    </span>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-white">
                      {item.degree}
                    </h3>
                    <p className="text-xs sm:text-sm text-aura-glow font-medium mb-2">
                      {item.school}
                    </p>
                    <p className="text-xs sm:text-sm text-ghost-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 self-end md:self-center">
                  <span className="font-mono text-xs text-ghost-muted flex items-center gap-1.5 bg-void-surface/90 px-3 py-1.5 rounded-full border border-white/5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Validé
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          G. CONTACT — "Le Pont"
      ========================================================================= */}
      <section id="contact" className="relative scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-aura/15 bg-gradient-to-b from-void via-[#100D22] to-[#0A0A14]">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 lg:mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-aura block mb-2">
              // 05. Prise de Contact
            </span>
            <h2 className="font-serif italic text-3xl sm:text-5xl lg:text-6xl text-white mb-3 sm:mb-4">
              Travaillons ensemble
            </h2>
            <p className="text-ghost-muted text-xs sm:text-sm md:text-base leading-relaxed px-2">
              Vous avez un projet e-commerce, un besoin de tenue de comptes sur QuickBooks/Odoo, ou une mission de restructuration financière ? Échangeons dès aujourd'hui.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            
            {/* Colonne Coordonnées & Réseaux — Espacements aérés et responsive */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full gap-4 sm:gap-5">
              
              {/* Canaux de contact directs */}
              <div className="space-y-3 sm:space-y-3.5">
                <span className="font-mono text-[10px] sm:text-xs text-aura uppercase tracking-wider font-semibold block px-1">
                  // Canaux directs
                </span>

                {/* Carte Email avec Logo Professionnel */}
                <a
                  href="mailto:y2anovacom@gmail.com"
                  className="contact-element card-hover-effect flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-void-card/85 border border-purple-500/30 backdrop-blur-md group hover:border-purple-400 transition-all shadow-glass"
                >
                  <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 flex-1">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-aura/30 to-purple-900/40 border border-aura/40 flex items-center justify-center text-aura-glow group-hover:scale-105 transition-transform shadow-neon shrink-0">
                      <Mail className="w-5 h-5 text-purple-300" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] sm:text-xs text-purple-300 font-semibold tracking-wider uppercase">Email</span>
                        <span className="text-[9px] font-mono text-ghost-muted bg-purple-500/10 px-1.5 py-0.5 rounded-full border border-purple-500/20 shrink-0">Direct</span>
                      </div>
                      <strong className="text-white font-medium text-xs sm:text-sm md:text-[15px] group-hover:text-aura-glow transition-colors block truncate mt-0.5">
                        y2anovacom@gmail.com
                      </strong>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-purple-400/60 group-hover:text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </a>

                {/* Carte Téléphone Direct avec Logo Appel Dédié */}
                <a
                  href="tel:+2290167721418"
                  className="contact-element card-hover-effect flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-void-card/85 border border-cyan-500/30 backdrop-blur-md group hover:border-cyan-400 transition-all shadow-glass"
                >
                  <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 flex-1">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-900/40 border border-cyan-500/40 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.3)] shrink-0">
                      <Phone className="w-5 h-5 text-cyan-300" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] sm:text-xs text-cyan-300 font-semibold tracking-wider uppercase">Téléphone</span>
                        <span className="text-[9px] font-mono text-cyan-300 bg-cyan-500/10 px-1.5 py-0.5 rounded-full border border-cyan-500/20 shrink-0">Ligne Directe</span>
                      </div>
                      <strong className="text-white font-medium text-xs sm:text-sm md:text-[15px] group-hover:text-cyan-200 transition-colors block truncate mt-0.5">
                        +229 01 67 72 14 18
                      </strong>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400/60 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </a>

                {/* Carte WhatsApp Business avec Logo Officiel Dédié */}
                <a
                  href="https://wa.me/2290195052696"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-element card-hover-effect flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-void-card/85 border border-emerald-500/30 backdrop-blur-md group hover:border-emerald-400 transition-all shadow-glass"
                >
                  <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 flex-1">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500/25 to-teal-900/40 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.3)] shrink-0">
                      <WhatsAppIcon className="w-5 h-5 text-emerald-400 fill-current" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] sm:text-xs text-emerald-400 font-semibold tracking-wider uppercase">WhatsApp</span>
                        <span className="text-[9px] font-mono text-emerald-300 bg-emerald-500/15 px-1.5 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1 shrink-0">
                          <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                          En ligne
                        </span>
                      </div>
                      <strong className="text-white font-medium text-xs sm:text-sm md:text-[15px] group-hover:text-emerald-300 transition-colors block truncate mt-0.5">
                        +229 01 95 05 26 96
                      </strong>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400/60 group-hover:text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </a>
              </div>

              {/* Profil Upwork & Entreprises — intervalle aéré et distinction claire */}
              <div className="contact-element rounded-2xl sm:rounded-[1.75rem] p-4 sm:p-5 bg-void-card/90 border border-aura/25 backdrop-blur-md space-y-3 mt-2 sm:mt-3 lg:mt-0 shadow-glass">
                <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-aura" />
                    <span className="font-mono text-[11px] sm:text-xs text-aura uppercase tracking-wider font-semibold">
                      Présence & Sociétés
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Vérifié
                  </span>
                </div>
                
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-void-surface/60 border border-white/5">
                    <div className="flex items-center gap-2 truncate">
                      <Sparkles className="w-3.5 h-3.5 text-aura shrink-0" />
                      <span className="font-medium text-white truncate">Upwork Top-Rated Specialist</span>
                    </div>
                    <span className="font-mono text-aura font-semibold text-[11px] shrink-0 bg-aura/10 px-2 py-0.5 rounded-md border border-aura/20">100% Succès</span>
                  </div>
                  
                  <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-void-surface/60 border border-white/5">
                    <div className="flex items-center gap-2 truncate">
                      <Building className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span className="text-ghost/90 truncate">Y2A Global Business Sarl</span>
                    </div>
                    <span className="font-mono text-ghost-muted text-[11px] shrink-0">Cotonou, Bénin</span>
                  </div>

                  <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-void-surface/60 border border-white/5">
                    <div className="flex items-center gap-2 truncate">
                      <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="text-ghost/90 truncate">Y2A Novacom</span>
                    </div>
                    <span className="font-mono text-ghost-muted text-[11px] shrink-0">Commerce & Digital</span>
                  </div>
                </div>
              </div>

              {/* Bouton Téléchargement direct CV aligné avec la base du formulaire */}
              <div className="contact-element pt-1 sm:pt-2 lg:pt-0">
                <a
                  href="/cv-adiss-yessoufou.pdf"
                  download="CV-Adiss-A-YESSOUFOU.pdf"
                  className="magnetic-btn w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-aura to-purple-600 hover:from-aura-glow hover:to-purple-500 text-white font-semibold text-xs sm:text-sm md:text-base py-3.5 sm:py-3.5 rounded-full shadow-neon border border-aura/40 transition-all"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>Télécharger mon CV (PDF)</span>
                </a>
              </div>

            </div>

            {/* Formulaire de Contact */}
            <div className="lg:col-span-7 flex flex-col h-full">
              <form
                onSubmit={handleContactSubmit}
                className="contact-element rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-8 bg-void-card/90 border border-aura/30 backdrop-blur-lg shadow-glass h-full flex flex-col justify-between"
              >
                <div>
                  <div className="mb-5 sm:mb-6">
                    <span className="font-mono text-[10px] sm:text-xs text-aura uppercase tracking-wider font-semibold block mb-1">
                      // Formulaire express
                    </span>
                    <h3 className="font-sans font-bold text-xl sm:text-2xl text-white">
                      Envoyez un message direct
                    </h3>
                    <p className="text-xs sm:text-sm text-ghost-muted mt-1">
                      Remplissez ce formulaire et je vous répondrai dans les 24 heures ouvrées.
                    </p>
                  </div>

                  {contactSubmitted && (
                    <div className="mb-4 p-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Merci pour votre message ! Je vous répondrai très prochainement.</span>
                    </div>
                  )}

                  <div className="space-y-3.5 sm:space-y-4">
                    <div>
                      <label className="font-mono text-[11px] sm:text-xs text-ghost-muted block mb-1">Votre Nom / Entreprise</label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Sophie Martin — Entreprise Digitale"
                        className="w-full px-4 py-3 sm:py-2.5 rounded-xl sm:rounded-2xl bg-void-surface border border-aura/25 text-white text-base sm:text-sm placeholder:text-ghost-muted/40 focus:outline-none focus:border-aura focus:ring-2 focus:ring-aura/30 transition-all"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[11px] sm:text-xs text-ghost-muted block mb-1">Votre Email</label>
                      <input
                        type="email"
                        required
                        placeholder="sophie@entreprise.com"
                        className="w-full px-4 py-3 sm:py-2.5 rounded-xl sm:rounded-2xl bg-void-surface border border-aura/25 text-white text-base sm:text-sm placeholder:text-ghost-muted/40 focus:outline-none focus:border-aura focus:ring-2 focus:ring-aura/30 transition-all"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[11px] sm:text-xs text-ghost-muted block mb-1">Sujet de la mission</label>
                      <div className="relative">
                        <select
                          className="w-full appearance-none px-4 py-3 sm:py-2.5 pr-10 rounded-xl sm:rounded-2xl bg-void-surface border border-aura/25 text-white text-base sm:text-sm focus:outline-none focus:border-aura focus:ring-2 focus:ring-aura/30 transition-all cursor-pointer"
                        >
                          <option value="quickbooks" className="bg-[#121222] text-white">Tenue de comptes & Reporting Cloud (QuickBooks / Xero / Odoo)</option>
                          <option value="ecommerce" className="bg-[#121222] text-white">Comptabilité & Réconciliation E-commerce (Shopify, Chariow)</option>
                          <option value="audit" className="bg-[#121222] text-white">Bilan, Fiscalité & Audit PME</option>
                          <option value="web" className="bg-[#121222] text-white">Création de site Web / Projet Vibe Coding</option>
                          <option value="autre" className="bg-[#121222] text-white">Autre mission de conseil personnalisé</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-aura">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-[11px] sm:text-xs text-ghost-muted block mb-1">Votre Message</label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Présentez brièvement vos besoins et vos délais..."
                        className="w-full px-4 py-3 sm:py-2.5 rounded-xl sm:rounded-2xl bg-void-surface border border-aura/25 text-white text-base sm:text-sm placeholder:text-ghost-muted/40 focus:outline-none focus:border-aura focus:ring-2 focus:ring-aura/30 transition-all resize-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="magnetic-btn w-full flex items-center justify-center gap-2 bg-gradient-to-r from-aura to-purple-500 hover:from-aura-glow hover:to-purple-400 text-white font-semibold text-sm sm:text-base py-3.5 sm:py-4 rounded-full shadow-neon mt-5"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer le message</span>
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          H. PIED DE PAGE (FOOTER)
      ========================================================================= */}
      <footer className="relative bg-[#06060D] border-t border-aura/20 rounded-t-[3.5rem] sm:rounded-t-[4rem] pt-14 pb-12 px-6 sm:px-12 mt-12 overflow-hidden">
        {/* Glow de fond */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-aura/20 blur-[90px] pointer-events-none" />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          
          {/* Identité */}
          <div className="text-center md:text-left">
            <h4 className="font-sans font-bold text-lg text-white">
              Adiss A. YESSOUFOU
            </h4>
          </div>

          {/* Indicateur de disponibilité En Ligne */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-void-surface border border-emerald-500/30 font-mono text-xs text-emerald-400 shadow-glass">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold tracking-wider">EN LIGNE</span>
            <span className="text-ghost-muted">| Missions Ouvertes</span>
          </div>

          {/* Bouton retour en haut */}
          <a
            href="#"
            className="interactive-lift font-mono text-xs text-aura-glow hover:text-white flex items-center gap-1.5"
          >
            <span>Retour au sommet</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

        </div>
      </footer>

    </div>
  );
}
