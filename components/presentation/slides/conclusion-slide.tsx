"use client";

import { motion } from "framer-motion";
import { SlideWrapper } from "../slide-wrapper";
import { ArrowRight, Mail, Phone, Calendar, Sparkles, Users, Zap } from "lucide-react";

export function ConclusionSlide() {
  const nextSteps = [
    {
      step: "1",
      title: "Validation du périmètre",
      description: "Confirmer les fonctionnalités prioritaires et le calendrier",
      icon: Users,
    },
    {
      step: "2", 
      title: "Lancement Phase 1",
      description: "Démarrage du développement de la base de données intelligente",
      icon: Zap,
    },
    {
      step: "3",
      title: "Itérations continues",
      description: "Livraisons progressives avec feedback utilisateur",
      icon: Sparkles,
    },
  ];

  return (
    <SlideWrapper id="conclusion">
      <div className="min-h-screen bg-gradient-to-br from-[#143B6D] via-[#0f2d52] to-[#0a1f3a] flex flex-col items-center justify-center px-8 py-16 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#50B878]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#50B878]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-[#50B878] text-white text-sm font-bold rounded-full mb-4">
              SECTION 15
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Prochaines Étapes
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Transformons ensemble l&apos;expérience numérique de Laval Économique
            </p>
          </motion.div>

          {/* Next steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {nextSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-left hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#50B878] rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[#50B878] font-bold text-lg">Étape {item.step}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-[#003DA5] mb-2">
                  Prêt à démarrer ?
                </h3>
                <p className="text-gray-600">
                  Contactez-nous pour planifier une rencontre de lancement
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:info@yourcompany.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#143B6D] text-white rounded-xl font-medium hover:bg-[#0f2d52] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Nous contacter
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#50B878] text-white rounded-xl font-medium hover:bg-[#429a64] transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Planifier un appel
                </a>
              </div>
            </div>
          </motion.div>

          {/* Footer info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-white/60"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 (XXX) XXX-XXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@techguys.ca</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              <span>techguys.ca</span>
            </div>
          </motion.div>

          {/* TechGuys branding */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8 pt-8 border-t border-white/10"
          >
            <p className="text-white/40 text-sm">
              Proposition préparée par <span className="text-[#50B878] font-medium">TechGuys Consulting</span>
            </p>
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  );
}
