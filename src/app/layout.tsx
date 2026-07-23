import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cairo } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "AMS Marine | Sovereign Subsea Engineering & Deepwater Excellence Across the Arabian Gulf",
  description: "AMS Marine (Arabian Marine Services) is a sovereign Joint Venture between Alpha OMQ & OSC Marine Group (Est. 1962). Delivering 3,000m deepwater ROV intervention, 300m saturation diving, pipeline integrity, and 24/7 EPRS emergency response.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${cairo.variable} font-sans bg-slate-50 dark:bg-[#041c2c] text-slate-800 dark:text-slate-100 antialiased transition-colors duration-300 selection:bg-[#0a66a0] selection:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
