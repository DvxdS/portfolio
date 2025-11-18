import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { portfolioData } from '../../data/portfolio';
import { useState } from 'react';
import { 
  Code2, 
  Database, 
  Wrench, 
  Briefcase,
  Sparkles 
} from 'lucide-react';

export default function Skills() {
  const { t } = useLanguage();
  const { skills } = portfolioData;
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Icons for each category
  const categoryIcons = [Code2, Database, Wrench, Briefcase];

  // Colors for each category
  const categoryColors = [
    { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-600', hover: 'hover:border-purple-500' },
    { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-600', hover: 'hover:border-blue-500' },
    { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-600', hover: 'hover:border-pink-500' },
    { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-600', hover: 'hover:border-cyan-500' },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden bg-muted/30">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
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
              {t({ en: 'Skills & Expertise', fr: 'Compétences & Expertise' })}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {t({ en: 'My', fr: 'Mon' })}{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {t({ en: 'Toolbox', fr: 'Arsenal' })}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t({
                en: 'A comprehensive set of technologies and tools I use to bring ideas to life',
                fr: 'Un ensemble complet de technologies et d\'outils que j\'utilise pour donner vie aux idées'
              })}
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {skills.categories.map((category, categoryIndex) => {
              const Icon = categoryIcons[categoryIndex % categoryIcons.length];
              const colors = categoryColors[categoryIndex % categoryColors.length];
              const isHovered = hoveredCategory === categoryIndex;

              return (
                <motion.div
                  key={categoryIndex}
                  variants={itemVariants}
                  onHoverStart={() => setHoveredCategory(categoryIndex)}
                  onHoverEnd={() => setHoveredCategory(null)}
                  className={`group relative overflow-hidden rounded-3xl border-2 ${colors.border} ${colors.hover} transition-all duration-300 ${
                    isHovered ? 'shadow-2xl scale-[1.02]' : ''
                  }`}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 ${colors.bg} opacity-50 group-hover:opacity-70 transition-opacity`}></div>

                  {/* Content */}
                  <div className="relative p-8 md:p-10">
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        animate={{
                          rotate: isHovered ? 360 : 0,
                          scale: isHovered ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.5 }}
                        className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center`}
                      >
                        <Icon className={`w-7 h-7 ${colors.text}`} />
                      </motion.div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold">
                        {t(category.name)}
                      </h3>
                    </div>

                    {/* Skills cloud */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: skillIndex * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border text-sm font-medium hover:border-primary hover:text-primary transition-all cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    {/* Skill count */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      className="absolute top-4 right-4"
                    >
                      <div className={`px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-xs font-bold backdrop-blur-sm`}>
                        {category.skills.length} {t({ en: 'skills', fr: 'compétences' })}
                      </div>
                    </motion.div>
                  </div>

                  {/* Animated border effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
                    style={{
                      background: `linear-gradient(45deg, transparent 30%, ${colors.text.replace('text-', 'rgba(')}20) 50%, transparent 70%)`,
                      backgroundSize: '200% 200%',
                    }}
                    animate={{
                      backgroundPosition: isHovered ? ['0% 0%', '100% 100%'] : '0% 0%',
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA or additional info */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background/50 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-medium">
                {t({ 
                  en: 'Always learning and exploring new technologies', 
                  fr: 'Toujours en train d\'apprendre et d\'explorer de nouvelles technologies' 
                })}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}