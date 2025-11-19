import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { portfolioData } from "../../data/portfolio";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export default function Hero() {
  const { t } = useLanguage();
  const { personal } = portfolioData;

  const [navHeight, setNavHeight] = useState(80);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Dynamic navbar height
  useEffect(() => {
    const nav = document.getElementById("navbar");
    if (nav) setNavHeight(nav.offsetHeight);
  }, []);

  // Tracking mouse for spotlight effect
  useEffect(() => {
    const handleMove = (e: MouseEvent) =>
      setMousePos({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };


  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 sm:pt-24"
      style={{ paddingTop: navHeight + 20 }}
    >
      {/* ==== ✨ Dynamic Spotlight Background (fresh minimal effect) ==== */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 transition-all duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(99,102,241,0.12), transparent 80%)`
        }}
      />

      {/* Floating soft glow shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-accent/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-pink-500/20 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <span className="w-2 h-2 bg-green-500  rounded-full animate-pulse"></span>
                {t({
                  en: "Available for opportunities",
                  fr: "Disponible pour des opportunités"
                })}
              </span>
            </motion.div>

           <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
            {t({ en: "Hi", fr: "Salut" })}{' '}
            <motion.span
                animate={{
                rotate: [0, 14, -8, 14, -4, 10, 0],
                }}
                transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 1,
                }}
                className="inline-block origin-[70%_70%]"
            >
                👋
            </motion.span>{' '}
            {t({ en: "I'm", fr: "je suis" })}{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                {personal.name}
            </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl font-display text-muted-foreground mb-6"
            >
              {t(personal.title)}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground mb-4 max-w-lg mx-auto lg:mx-0"
            >
              {t(personal.tagline)}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-8"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{t(personal.location)}</span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              {/* Note: scrollToSection needs to be defined or imported if not defined in this file scope */}
              <Button size="lg" onClick={() => scrollToSection("projects")} className="group">
                {t({ en: "View My Work", fr: "Voir Mon Travail" })}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                {t({ en: "Hire me", fr: "Contactez-moi" })} 
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start">
              {personal.social.github && (
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {personal.social.linkedin && (
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              <a href={`mailto:${personal.email}`} className="social-icon">
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE – PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96">

              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse"></div>

              {/* Profile Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl group">
                <img
                  src={personal.photo}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />

                {/* Glass reflection */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Diagonal glossy strike on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000"></div>
              </div>

              {/* "Open to work" bubble */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 right-0 bg-background border border-border rounded-2xl px-4 py-2 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-xs sm:text-sm">
                    {t({ en: "Open to work", fr: "Ouvert au travail" })}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Scroll helper (Kept for completeness, ensure this is outside the component if it was originally)
function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  const nav = document.getElementById("navbar");
  const offset = nav ? nav.offsetHeight + 10 : 80;

  window.scrollTo({
    top: element.offsetTop - offset,
    behavior: "smooth",
  });
}