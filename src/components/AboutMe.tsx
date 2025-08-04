
import React from "react";
import Image from "next/image";

const AboutMe: React.FC = () => (
  <section className="  flex flex-col py-28 md:flex-row items-center justify-center " aria-labelledby="about-me-title">
  
    <div className="max-w-2xl ">
      <h2 id="about-me-title" className="text-3xl sm:text-4xl font-bold mb-6 text-[#222] dark:text-[#f6f5f2]">About Me</h2>
      <p className="text-lg text-[#444] dark:text-[#cfcfcf] mb-4">
        Creative and detail-oriented UX/UI Designer and Full Stack Developer with 4+ years of experience designing and building 
intuitive, responsive, and engaging user interfaces for both web and mobile platforms. Proven track record in 
collaborating with cross-functional teams to transform complex requirements into wireframes, mockups, and user
friendly experiences. Proficient in industry-standard tools like Figma, Adobe XD, and Sketch, with strong knowledge of 
HTML, CSS, and SASS. Demonstrated ability to ensure accessibility, brand consistency, and seamless developer handoff. 
      </p>
    </div>
  </section>
);

export default AboutMe;
