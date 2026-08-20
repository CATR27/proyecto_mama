import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Para la Mejor Mamá del Mundo ❤️ | Homenaje Especial",
  description: "Un espacio lleno de amor, recuerdos inolvidables, fotos y momentos especiales dedicado con todo el corazón a mi Mamá, de parte de su hijo Carlitos.",
  keywords: ["Mamá", "Recuerdos", "Familia", "Homenaje", "Amor", "Carlitos"],
  authors: [{ name: "Carlitos" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="font-sans min-h-full flex flex-col selection:bg-rose-200 selection:text-rose-900">
        {children}
      </body>
    </html>
  );
}
