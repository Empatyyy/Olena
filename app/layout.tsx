import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["cyrillic", "latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["cyrillic", "latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Олена Купчик | Психотерапія",
  description: "Допомагаю краще зрозуміти себе, впоратися з тривогою та налагодити стосунки. Дипломована психологиня, гештальт-терапевтка.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-brand-bg text-brand-text antialiased selection:bg-brand-accent1/30`}>
        {children}
      </body>
    </html>
  );
}
