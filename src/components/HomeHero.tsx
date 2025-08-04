import React from "react";
import Image from "next/image";

const HomeHero: React.FC = () => (
  <section className=" flex flex-col items-center justify-center ">
    <div className="max-w-2xl w-full flex flex-col items-center text-center gap-8 py-16">
    
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[#222] dark:text-[#f6f5f2] mb-2 tracking-tight">
        Lavanya Pagidipalli
      </h1>
      <h2 className="text-xl sm:text-2xl font-medium text-[#7a6e57] dark:text-[#e0d7c6] mb-6">
        Senior Full Stack Developer
      </h2>
      <p className="text-lg text-[#444] dark:text-[#cfcfcf] max-w-xl mb-8">
        Innovative and detail-oriented developer with a passion for building beautiful, accessible, and high-performance web experiences. Specialized in React, Next.js, and modern UI/UX.
      </p>
      <a
        href="/resume.pdf"
        download
        className="inline-block bg-[#222] dark:bg-[#e0d7c6] text-[#f6f5f2] dark:text-[#222] px-8 py-3 rounded-full font-semibold shadow hover:bg-[#7a6e57] dark:hover:bg-[#7a6e57] transition"
      >
        Download Resume
      </a>
    </div>
  </section>
);

export default HomeHero;
