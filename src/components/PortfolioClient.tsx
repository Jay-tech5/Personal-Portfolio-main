"use client";

import LoadingScreen from "@/components/layout/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import ParticleBackground from "@/components/layout/ParticleBackground";
import BackToTop from "@/components/layout/BackToTop";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import AOSProvider from "@/providers/AOSProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

/** Client-side wrapper assembling all portfolio sections and effects */
export default function PortfolioClient() {
  return (
    <ThemeProvider>
      <AOSProvider>
        <LoadingScreen />
        <ScrollProgressBar />
        <ParticleBackground />

        <div id="main-content">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
        <BackToTop />
      </AOSProvider>
    </ThemeProvider>
  );
}
