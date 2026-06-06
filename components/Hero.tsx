import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
      {/* Decorative blurred blob */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-brand-accent1/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-brand-accent2/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-balance leading-tight mb-6">
              Психотерапія — це простір, де ти маєш значення.
            </h1>
            <p className="text-lg sm:text-xl text-brand-text/80 mb-8 leading-relaxed text-balance">
              Допомагаю краще зрозуміти себе, впоратися з тривогою та налагодити
              стосунки. Дипломована психологиня, гештальт-терапевтка та консультантка СЕТА.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-brand-accent2 hover:bg-brand-accent2/90 text-white px-8 py-3.5 rounded-full font-medium text-center transition-all shadow-md hover:shadow-lg text-lg"
              >
                Записатися
              </a>
              <a
                href="#about"
                className="bg-white border-2 border-brand-accent1/20 hover:border-brand-accent1/50 text-brand-text px-8 py-3.5 rounded-full font-medium text-center transition-all text-lg"
              >
                Дізнатися більше
              </a>
            </div>
          </div>

          <div className="relative">
            {/* Avatar Image */}
            <div className="aspect-[4/5] bg-brand-bg rounded-3xl overflow-hidden shadow-2xl relative">
              <Image
                src="/images/avatar.jpg"
                alt="Олена Купчик"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
            {/* Decorative element behind image */}
            <div className="absolute -z-10 top-8 -right-8 bottom-8 -left-8 border border-brand-accent1/30 rounded-3xl hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
