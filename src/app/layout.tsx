import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jay Dixit | Data Engineer",
  description:
    "Personal portfolio of Jay Dixit — Data Engineer focused on reliable data systems, scalable pipelines, ETL, SQL, cloud platforms, and analytics.",
  keywords: [
    "Jay Dixit",
    "Data Engineer",
    "Data Pipelines",
    "ETL",
    "SQL",
    "Data Analytics",
    "Cloud Engineering",
    "Portfolio",
  ],
  authors: [{ name: "Jay Dixit" }],
  openGraph: {
    title: "Jay Dixit | Data Engineer",
    description:
      "Data Engineer building reliable data systems, scalable pipelines, and efficient ETL workflows.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
