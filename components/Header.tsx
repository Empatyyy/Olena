"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Про мене", href: "#about" },
    { name: "Запити", href: "#services" },
    { name: "Освіта", href: "#education" },
    { name: "Контакти", href: "#contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full bg-brand-bg/80 backdrop-blur-md z-50 border-b border-brand-accent1/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="font-serif text-xl sm:text-2xl font-semibold tracking-wide">
              Олена Купчик <span className="text-brand-accent1 font-light">| Психотерапія</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-text/80 hover:text-brand-accent2 transition-colors text-sm uppercase tracking-wider font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a
              href="#contact"
              className="bg-brand-accent1 hover:bg-brand-accent1/90 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md"
            >
              Записатися на сесію
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-text p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-bg border-b border-brand-accent1/10 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-lg flex flex-col">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-brand-text/80 hover:text-brand-accent2 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block bg-brand-accent1 text-white text-center px-4 py-3 rounded-full font-medium mt-4"
            >
              Записатися на сесію
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
