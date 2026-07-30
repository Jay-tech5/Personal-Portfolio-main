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
  title: "Jay Dixit | Software Engineer & Java Developer",
  description:
    "Personal portfolio of Jay Dixit — Software Engineer, Java Developer, and Cloud & DevOps Enthusiast. Explore projects, skills, experience, and contact information.",
  keywords: [
    "Jay Dixit",
    "Software Engineer",
    "Java Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Cloud",
    "DevOps",
  ],
  authors: [{ name: "Jay Dixit" }],
  openGraph: {
    title: "Jay Dixit | Software Engineer",
    description:
      "Software Engineer, Java Developer, and Cloud & DevOps Enthusiast portfolio.",
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
