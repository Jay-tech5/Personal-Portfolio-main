"use client";

import { useState } from "react";
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
import AOSProvider from "@/providers/AOSProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

/** Client-side wrapper assembling all portfolio sections and effects */
export default function PortfolioClient() {
  const [showLiveBackground, setShowLiveBackground] = useState(true);

  return (
    <ThemeProvider>
      <AOSProvider>
        <LoadingScreen />
        <ScrollProgressBar />
        <ParticleBackground showLiveBackground={showLiveBackground} />

        <div id="main-content">
          <Navbar
            showLiveBackground={showLiveBackground}
            onToggleLiveBackground={() => setShowLiveBackground((prev) => !prev)}
          />
          <main>
            <Hero />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <Certifications />
          </main>
          <Footer />
        </div>
        <BackToTop />
      </AOSProvider>
    </ThemeProvider>
  );
}
