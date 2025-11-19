import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { portfolioData } from '../../data/portfolio';
import { Code, Sparkles, Rocket, Users } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();
  const { about,  } = portfolioData;

  const stats = [
    {
      icon: Code,
      value: '25+',
      label: { en: 'Projects Completed', fr: 'Projets Complétés' }
    },
    {
      icon: Users,
      value: '30+',
      label: { en: 'Happy Clients', fr: 'Clients Satisfaits' }
    },
    {
      icon: Rocket,
      value: '2+',
      label: { en: 'Years Experience', fr: "Années d'Expérience" }
    },
    {
      icon: Sparkles,
      value: '100%',
      label: { en: 'Dedication', fr: 'Dévouement' }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t({ en: 'About Me', fr: 'À Propos' })}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {t({ en: 'Creative Developer &', fr: 'Développeur Créatif &' })}{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {t({ en: 'Problem Solver', fr: 'Résolveur de Problèmes' })}
              </span>
            </h2>
          </motion.div>

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Left side - Text content */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left">
                  {t(about)}
                </p>
                
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p className="text-base">
                      {t({
                        en: 'Passionate about creating innovative digital solutions that drive business growth',
                        fr: 'Passionné par la création de solutions digitales innovantes qui stimulent la croissance des entreprises'
                      })}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p className="text-base">
                      {t({
                        en: 'Specialized in full-stack development with focus on user experience and scalability',
                        fr: "Spécialisé dans le développement full-stack avec un focus sur l'expérience utilisateur et l'évolutivité"
                      })}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p className="text-base">
                      {t({
                        en: 'Committed to bridging the digital divide in West Africa through accessible technology',
                        fr: "Engagé à combler le fossé numérique en Afrique de l'Ouest grâce à une technologie accessible"
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Animated decorative element */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Animated circles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-pink-500 rounded-full"></div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-500 rounded-full"></div>
                </motion.div>

                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4"
                    >
                      <Code className="w-16 h-16 text-primary" />
                    </motion.div>
                    <p className="font-display text-2xl font-bold">
                      {t({ en: 'Building the Future', fr: "Construire l'Avenir" })}
                    </p>
                  </div>
                </div>

                {/* Orbiting decorations */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-400/50 rounded-full"></div>
                  <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-blue-400/50 rounded-full"></div>
                  <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-pink-400/50 rounded-full"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-cyan-400/50 rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          {/* Stats Section */}
<motion.div variants={itemVariants}>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
    {stats.map((stat, index) => {
      // Define colors for each card
      const colors = [
        { bg: 'hover:bg-purple-500/10', border: 'hover:border-purple-500', icon: 'group-hover:text-purple-500' },
        { bg: 'hover:bg-blue-500/10', border: 'hover:border-blue-500', icon: 'group-hover:text-blue-500' },
        { bg: 'hover:bg-pink-500/10', border: 'hover:border-pink-500', icon: 'group-hover:text-pink-500' },
        { bg: 'hover:bg-cyan-500/10', border: 'hover:border-cyan-500', icon: 'group-hover:text-cyan-500' },
      ];
      
      return (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          className={`group text-center p-6 rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border transition-all ${colors[index].bg} ${colors[index].border}`}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 group-hover:bg-transparent transition-colors">
            <stat.icon className={`w-6 h-6 text-primary transition-colors ${colors[index].icon}`} />
          </div>
          <div className="font-display text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground">
            {t(stat.label)}
          </div>
        </motion.div>
      );
    })}
  </div>
</motion.div>
        </motion.div>
      </div>
    </section>
  );
}