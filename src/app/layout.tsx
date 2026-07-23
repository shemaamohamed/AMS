import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Cairo } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import { SITE_URL, defaultSEO, defaultOGImages, generateOrganizationSchema, generateLocalBusinessSchema } from "@/lib/seo";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#041c2c" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultSEO.title,
    template: "%s | AMS Marine",
  },
  description: defaultSEO.description,
  keywords: defaultSEO.keywords,
  authors: [{ name: "AMS Marine", url: SITE_URL }],
  creator: "AMS Marine (Arabian Marine Services)",
  publisher: "AMS Marine",
  icons: {
    icon: [
      { url: "/faviconams.png", type: "image/png" },
    ],
    shortcut: ["/faviconams.png"],
    apple: ["/faviconams.png"],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": `${SITE_URL}?lang=EN`,
      "ar-SA": `${SITE_URL}?lang=AR`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_SA"],
    url: SITE_URL,
    title: defaultSEO.title,
    description: defaultSEO.description,
    siteName: defaultSEO.siteName,
    images: defaultOGImages,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultSEO.title,
    description: defaultSEO.description,
    images: [
      `${SITE_URL}/assets/photos/image (30).png`,
      `${SITE_URL}/assets/logo/ams_logo_dark.png`,
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = generateOrganizationSchema();
  const bizSchema = generateLocalBusinessSchema();

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bizSchema) }}
        />
      </head>
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

