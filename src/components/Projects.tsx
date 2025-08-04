import React from "react";


interface Project {
  title: string;
  role: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  link: string;
}
const projects: Project[] = [
  {
    title: "Secure Traces Web Platform",
    role: "Senior Front-End Developer",
    period: "Apr 2025 – Jun 2025",
    location: "Bangalore",
    description:
      "Developed and maintained a dynamic, user-focused web platform using React.js and Next.js. Built reusable UI components, ensured cross-browser compatibility, and collaborated with designers and backend teams for scalable solutions.",
    skills: ["React.js", "Next.js", "JavaScript", "Git", "Jira", "AWS"],
    link: "#"
  },
  {
    title: "EasyJet Airline prject",
    role: "Senior Full Stack Developer",
    period: "Apr 2024 – Apr 2025",
    location: "Bangalore",
    description:
      "Designed and developed RESTful APIs and responsive UI components for EasyJet's customer portal. Implemented robust error handling, managed sprints in Jira, and worked closely with cross-functional teams to deliver high-quality features.",
    skills: ["Next.js", "Git", "Jira", "AWS", "JEST"],
    link: "#"
  },
  {
    title: "Marketing Analytics Dashboard",
    role: "Full Stack Developer",
    period: "Sep 2022 – Apr 2024",
    location: "Hyderabad",
    description:
      "Built a data-driven dashboard for marketing analytics using React.js, Next.js, Node.js, and MongoDB. Integrated third-party APIs, implemented authentication, and deployed on AWS for high reliability.",
    skills: ["Node.js", "Next.js", "React.js", "MongoDB", "Express.js", "Git", "AWS"],
    link: "#"
  },
  {
    title: "DuPont UI Modernization",
    role: "Senior Associate",
    period: "Dec 2019 – Dec 2020",
    location: "Bangalore",
    description:
      "Modernized user interfaces for DuPont using HTML, CSS, Bootstrap, and JavaScript. Created form validations, collaborated with designers, and ensured accessibility and brand consistency.",
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "Figma", "Adobe XD"],
    link: "#"
  },
 
];


const Projects: React.FC = () => (
  <section className="py-16 px-4 w-full" aria-labelledby="projects-title">
    <h2 id="projects-title" className="text-3xl sm:text-4xl font-bold mb-10 text-[#222] dark:text-[#f6f5f2] text-center">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 w-full">
      {projects.map((project, idx) => (
        <div key={idx} className="border border-[#e0d7c6] dark:border-[#222] rounded-2xl shadow p-6 flex flex-col gap-3 bg-white/90 dark:bg-gray-800/90 hover:shadow-xl transition">
          <div className="flex flex-col gap-1 mb-2">
            <h3 className="text-base sm:text-lg lg:text-md font-semibold text-[#222] dark:text-[#f6f5f2]">{project.title}</h3>
          </div>
          <p className="text-xs sm:text-sm lg:text-xs text-[#444] dark:text-[#cfcfcf] mb-2">{project.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
