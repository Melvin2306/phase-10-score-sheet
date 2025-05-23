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
  description: "Phase 10 Score Sheet",
  applicationName: "Phase 10 Score Sheet",
  authors: [{ name: "Melvin_2306" }],
  generator: "Next.js",
  keywords: ["phase10", "phase 10", "score sheet", "companion", "card game"],
  referrer: "origin-when-cross-origin",
  creator: "Melvin_2306",
  publisher: "Melvin_2306",
  metadataBase: new URL("https://phase-10-score-sheet.vercel.app/"),
  openGraph: {
    title: "Phase 10 Score Sheet",
    description: "Phase 10 Score Sheet",
    url: "https://phase-10-score-sheet.vercel.app/",
    siteName: "Phase 10 Score Sheet",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Phase 10 Score Sheet Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phase 10 Score Sheet",
    description: "Phase 10 Score Sheet",
    images: ["/logo.png"],
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
