"use client"
import dynamic from "next/dynamic";

const AboutMe = dynamic(() => import("../components/AboutMe"), { ssr: false });
const Projects = dynamic(() => import("../components/Projects"), { ssr: false });
const Skills = dynamic(() => import("../components/Skills"), { ssr: false });
const Contact = dynamic(() => import("../components/Contact"), { ssr: false });
const Sidebar = dynamic(() => import("../components/Sidebar"), { ssr: false });

import React, { useState } from "react";

import HomeHero from "../components/HomeHero";
import Experience from "../components/Experience";
import Education from "../components/Education";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <img
        src="/IMG-20250421-WA0005[1].png"
        alt="Lavanya Pagidipalli profile"
        className="fixed w-100 h-150  object-cover  z-0 hidden sm:block md:w-50 lg:w-100 lg:h-150 "
      />
      <div className="flex-1 flex items-center justify-end">
        <main className="w-full max-w-4xl flex flex-col gap-16 lg:py-14 lg:px-14 sm:py-24 md:px-54  sm:px-12 border border-blue-200 dark:border-blue-900 shadow-2xl bg-white/90 dark:bg-gray-900/90">
          <div id="home-hero"><HomeHero /></div>
          <div id="about-me-title"><AboutMe /></div>
          <div id="experience-title"><Experience /></div>
          <div id="education-title"><Education /></div>
          <div id="projects-title"><Projects /></div>
          <div id="skills-title"><Skills /></div>
          <div id="contact-title"><Contact /></div>
        </main>
      </div>
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
    </div>
  );
}
