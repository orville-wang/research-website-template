import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif, PT_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: customMetadata.title || aboutMe.name,
  description: customMetadata.description || aboutMe.description,
  keywords: customMetadata.keywords,
  authors: [{ name: aboutMe.name }],
  creator: aboutMe.name,
  publisher: aboutMe.name,
  metadataBase: new URL("https://zhiwenchen.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zhiwenchen.com",
    siteName: aboutMe.name,
    title: customMetadata.title || aboutMe.name,
    description: customMetadata.description || aboutMe.description,
    images: [
      {
        url: "/photo.png",
        width: 800,
        height: 600,
        alt: aboutMe.name,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: customMetadata.title || aboutMe.name,
    description: customMetadata.description || aboutMe.description,
    images: ["/photo.png"],
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} antialiased`}
      >
        <main className="">{children}</main>
        <Analytics />
        <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-[#FFFCF8]">
          <div className="flex flex-row mx-auto max-w-7xl px-6 py-12 md:flex md:items-start md:justify-between ">
            <div className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
              <p>
                © {new Date().getFullYear()} {aboutMe.name}.
              </p>
              {aboutMe.secretDescription && (
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-4">
                  {aboutMe.secretDescription}
                </p>
              )}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
