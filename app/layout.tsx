import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phase 10 Score Sheet",
  description:
    "Digital score sheet companion for Phase 10 card game. Track scores, phases, and game statistics with ease.",
  applicationName: "Phase 10 Score Sheet",
  authors: [{ name: "Melvin_2306" }],
  generator: "Next.js",
  keywords: [
    "phase10",
    "phase 10",
    "score sheet",
    "companion",
    "card game",
    "phase tracker",
    "score keeper",
    "game assistant",
    "phase 10 scorer",
    "digital scorecard",
    "phase 10 app",
    "phase 10 calculator",
    "phase 10 helper",
    "card game scorer",
    "phase 10 rules",
    "phase 10 counter",
    "mobile score sheet",
    "family card game",
    "multiplayer scorecard",
    "game night",
    "board game companion",
    "card game tracker",
    "phase 10 online",
    "free score sheet",
    "web app game",
    "pwa game",
    "offline score tracker",
    "phase 10 phases",
    "mattel phase 10",
    "family game night",
    "card game statistics",
    "game score history",
    "tournament tracker",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Melvin_2306",
  publisher: "Melvin_2306",
  category: "Games",
  classification: "Game Utility",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#000000",
  },
  metadataBase: new URL("https://phase-10-score-sheet.vercel.app/"),
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  appleWebApp: {
    capable: true,
    title: "Phase 10 Score Sheet",
    statusBarStyle: "default",
    startupImage: "/logo.png",
  },
  openGraph: {
    title: "Phase 10 Score Sheet",
    description:
      "Digital score sheet companion for Phase 10 card game. Track scores, phases, and game statistics with ease.",
    url: "https://phase-10-score-sheet.vercel.app/",
    siteName: "Phase 10 Score Sheet",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Phase 10 Score Sheet - Digital companion for Phase 10 card game",
        type: "image/png",
      },
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Phase 10 Score Sheet App",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@phase10scoresheet",
    creator: "@Melvin_2306",
    title: "Phase 10 Score Sheet",
    description:
      "Digital score sheet companion for Phase 10 card game. Track scores, phases, and game statistics with ease.",
    images: [
      {
        url: "/logo.png",
        alt: "Phase 10 Score Sheet Logo",
      },
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
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <Toaster richColors />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
