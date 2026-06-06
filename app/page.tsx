import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Education />
      <Contact />
      
      <footer className="bg-white py-8 border-t border-brand-accent1/10 text-center">
        <p className="text-brand-text/60 text-sm">
          © {new Date().getFullYear()} Олена Купчик. Всі права захищені.
        </p>
      </footer>
    </main>
  );
}
