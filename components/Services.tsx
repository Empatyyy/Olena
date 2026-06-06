import { CheckCircle2 } from "lucide-react";

export default function Services() {
  const requests = [
    "Краще зрозуміти себе та куди далі рухатись по життю.",
    "Відстоювати свої бажання та захищати особисті кордони.",
    "Зменшити рівень тривоги та подолати панічні атаки.",
    "Знизити рівень апатії та інших депресивних симптомів.",
    "Покращити взаєморозуміння у стосунках із партнером або батьками/дитиною.",
    "Звільнитися від повторюваних нав'язливих думок та спогадів.",
  ];

  return (
    <section id="services" className="py-20 bg-brand-bg relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">З чим я працюю</h2>
          <div className="w-16 h-1 bg-brand-accent1/50 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((request, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-neutral-100 flex items-start space-x-4 group"
            >
              <div className="flex-shrink-0 mt-1 text-brand-accent1 group-hover:text-brand-accent2 transition-colors">
                <CheckCircle2 size={24} />
              </div>
              <p className="text-brand-text leading-relaxed font-medium">
                {request}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-brand-accent2/10 border border-brand-accent2/20 rounded-2xl p-6 text-center shadow-sm">
            <p className="text-lg font-medium text-brand-text flex items-center justify-center gap-2">
              <span className="text-xl">⭐</span> Працюю із підлітками 12+ років та повнолітніми дорослими.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
