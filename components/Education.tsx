"use client";

import { useState } from "react";
import Image from "next/image";
import { GraduationCap, Award, BookOpen, ShieldPlus, HeartHandshake, X } from "lucide-react";

export default function Education() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const educationItems = [
    {
      title: "Базова освіта",
      description: "Диплом бакалавра психології (ХНУ ім. В. Н. Каразіна, 2024).",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      title: "Кваліфікація гештальт-терапевта",
      description: "НАГТУ (764 год. теорії, 315 год. практики, 363 год. особистої терапії, 240 год. супервізії).",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Спеціалізація",
      description: "«Клінічний підхід у гештальт-терапії» (НАГТУ, 180 год).",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "Сертифікація СЕТА",
      description: "«Трансдіагностичне консультування СЕТА» (НаУКМА, 240 год).",
      icon: <HeartHandshake className="w-6 h-6" />,
    },
    {
      title: "Додатково",
      description: "Курс з психологічної першої допомоги (Israel Trauma Coalition, 10 год).",
      icon: <ShieldPlus className="w-6 h-6" />,
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Освіта та кваліфікація</h2>
          <div className="w-16 h-1 bg-brand-accent1/50 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {educationItems.map((item, index) => (
            <div
              key={index}
              className="bg-brand-bg/50 border border-brand-accent1/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-6 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 shrink-0 bg-brand-accent1/10 text-brand-accent1 rounded-2xl flex items-center justify-center shadow-sm">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-brand-text">{item.title}</h3>
                <p className="text-brand-text/80 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-serif font-bold mb-8 text-center text-brand-text">Мої сертифікати</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((num) => (
              <div 
                key={num} 
                onClick={() => setSelectedImage(num)}
                className="relative h-64 bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-accent1/10 hover:shadow-md transition-shadow cursor-pointer"
              >
                <Image
                  src={`/images/cert${num}.jpg`}
                  alt={`Сертифікат ${num}`}
                  fill
                  className="object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            aria-label="Закрити"
          >
            <X size={36} />
          </button>
          <div 
            className="relative w-full max-w-5xl h-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/images/cert${selectedImage}.jpg`}
              alt={`Сертифікат ${selectedImage}`}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
