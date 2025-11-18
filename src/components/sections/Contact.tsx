import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { portfolioData } from '../../data/portfolio';
import { Button } from '../ui/button';
import { Mail, MapPin, Github, Linkedin, Send, ArrowRight } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const { contact, personal } = portfolioData;

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contactMethods = [
    {
      icon: Mail,
      label: { en: 'Email', fr: 'Email' },
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: 'text-blue-600',
      bg: 'bg-blue-500/10',
    },
    {
      icon: MapPin,
      label: { en: 'Location', fr: 'Localisation' },
      value: t(personal.location),
      color: 'text-purple-600',
      bg: 'bg-purple-500/10',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: personal.social.github,
      color: 'hover:text-purple-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personal.social.linkedin,
      color: 'hover:text-blue-600',
    },
  ].filter(link => link.href);

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-muted/30">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t({ en: "Let's Connect", fr: 'Restons Connectés' })}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {t(contact.title)}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              {t(contact.description)}
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                {method.href ? (
                  <a
                    href={method.href}
                    className="block p-8 rounded-2xl border-2 border-border hover:border-primary/50 bg-background transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl ${method.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <method.icon className={`w-7 h-7 ${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-bold mb-2">
                          {t(method.label)}
                        </h3>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {method.value}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </a>
                ) : (
                  <div className="p-8 rounded-2xl border-2 border-border bg-background">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl ${method.bg} flex items-center justify-center flex-shrink-0`}>
                        <method.icon className={`w-7 h-7 ${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-bold mb-2">
                          {t(method.label)}
                        </h3>
                        <p className="text-muted-foreground">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-purple-500/10 via-background to-blue-500/10 p-8 md:p-12 text-center"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <Send className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                {t({ en: 'Ready to start a project?', fr: 'Prêt à démarrer un projet?' })}
              </h3>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                {t({ 
                  en: "Let's discuss how I can help bring your ideas to life", 
                  fr: 'Discutons de comment je peux vous aider à donner vie à vos idées' 
                })}
              </p>
              <Button size="lg" asChild className="group">
                <a href={`mailto:${personal.email}`}>
                  {t({ en: 'Send me an email', fr: 'Envoyez-moi un email' })}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-0"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-0"></div>
          </motion.div>

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <motion.div variants={itemVariants} className="mt-12 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                {t({ en: 'Or connect with me on', fr: 'Ou connectez-vous avec moi sur' })}
              </p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-12 h-12 rounded-full border-2 border-border flex items-center justify-center transition-all ${social.color} hover:border-current`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
