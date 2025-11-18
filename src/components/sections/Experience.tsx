import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { portfolioData } from '../../data/portfolio';
import { Badge } from '../ui/badge';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const { t } = useLanguage();
  const { experience } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t({ en: 'Career Journey', fr: 'Parcours Professionnel' })}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {t({ en: 'Work', fr: 'Expérience' })}{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {t({ en: 'Experience', fr: 'Professionnelle' })}
              </span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-transparent"></div>

            {/* Experience items */}
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-primary opacity-50"
                    />
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ x: 8, y: -4 }}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-background hover:border-primary/50 transition-all duration-300 hover:shadow-xl p-6 md:p-8"
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="relative">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-display text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                              {t(exp.position)}
                            </h3>
                            <p className="text-lg font-medium text-muted-foreground">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{t(exp.period)}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {t(exp.description)}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Accent line */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}