"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Про мене</h2>
          <div className="w-16 h-1 bg-brand-accent1/50 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-brand-bg/50 rounded-3xl p-8 md:p-12 shadow-premium hover:shadow-premium-hover transition-shadow duration-500 border border-brand-accent1/10"
        >
          <p className="text-lg md:text-xl leading-relaxed text-brand-text mb-8">
            Я — <span className="font-semibold text-brand-accent1">Олена Купчик</span>, дипломована психологиня та психотерапевтка.
            Практикую з серпня 2023 року. У своїй роботі я керуюся принципами конфіденційності,
            бережності та професіоналізму. Працюю під регулярною супервізією та проходжу особисту терапію,
            що гарантує безпеку та якість моєї роботи.
          </p>

          <div className="flex flex-wrap gap-3">
            {["Гештальт-терапія", "СЕТА", "Клінічний підхід"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-brand-text shadow-sm border border-brand-accent1/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
