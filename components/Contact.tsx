import { MessageCircle, Instagram, MapPin, Video } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-brand-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-lg border border-brand-accent1/10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Готові розпочати?</h2>
          
          <p className="text-lg md:text-xl text-brand-text/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Зараз я повністю переходжу в приватну практику та маю вільні місця для консультацій.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-3 text-brand-text font-medium text-lg">
              <div className="w-12 h-12 bg-brand-accent1/10 text-brand-accent1 rounded-full flex items-center justify-center">
                <Video className="w-6 h-6" />
              </div>
              Онлайн
            </div>
            <div className="hidden sm:block w-2 h-2 bg-brand-accent2/30 rounded-full"></div>
            <div className="flex items-center gap-3 text-brand-text font-medium text-lg">
              <div className="w-12 h-12 bg-brand-accent1/10 text-brand-accent1 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              Очно у Києві
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://t.me/oKoalaa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#0088cc] hover:bg-[#0077b3] text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              <MessageCircle className="w-6 h-6" />
              Написати в Telegram
            </a>
            
            <a
              href="https://instagram.com/okolossya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              <Instagram className="w-6 h-6" />
              Написати в Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
