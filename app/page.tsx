"use client";

import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Trend from "../components/Trend";
import MarketUpdate from "../components/MarketUpdate";
import Instruction from "../components/Instruction";
import About from "../components/About";
import AppSection from "../components/AppSection";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");

    const scrollReveal = () => {
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
          sections[i].classList.add("active");
        }
      }
    };
    window.addEventListener("scroll", scrollReveal);
    scrollReveal(); 

    return () => window.removeEventListener("scroll", scrollReveal);
  }, []);

  return (
    <>
      <Header />
      
      <main>
        <article>
          <Hero />
          <Trend />
          <MarketUpdate />
          <Instruction />
          <About />
          <AppSection />
        </article>
      </main>
      <Footer /> 
    </>
  );
}