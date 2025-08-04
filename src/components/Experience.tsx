import React, { useState } from "react";
import Image from "next/image";

const experiences = [
  {
    title: "Senior Front-End Developer",
    company: "Secure Traces",
    location: "Bangalore",
    period: "Apr 2025 – Jun 2025",
    skills: ["React.js", "Next.js", "JavaScript", "Git", "Jira", "AWS"],
    responsibilities: [
      "Developed and maintained dynamic, user-focused front-end features using React.js and Next.js, ensuring responsive and high performance web interfaces.",
      "Collaborated closely with designers, product owners, and backend teams to translate business requirements into elegant, scalable UI solutions.",
      "Built reusable components and front-end libraries, improving development efficiency and maintaining design consistency across the application.",
      "Ensured cross-browser compatibility and mobile responsiveness to deliver seamless user experiences across devices.",
      "Participated in Agile ceremonies including sprint planning, daily stand-ups, and retrospectives to ensure timely delivery of features.",
      "Used Git and Jira for version control and task management; integrated front-end builds CI/CD pipelines for automated testing and deployment.",
      "Conducted peer code reviews and supported junior developers in understanding front-end best practices and performance optimization techniques."
    ]
  },
  {
    title: "Senior Full Stack Developer",
    company: "Accenture (Project: EasyJet)",
    location: "Bangalore",
    period: "Apr 2024 – Apr 2025",
    skills: ["Next.js", "Git", "Jira", "AWS", "JEST"],
    responsibilities: [
      "Designed and developed RESTful APIs, ensuring secure and efficient data exchange between front-end and back-end systems.",
      "Implemented robust error-handling strategies to improve system reliability, reduce downtime, and enhance debugging efficiency.",
      "Built and optimized user-friendly, responsive UI components using Next.js, ensuring a seamless and engaging customer experience.",
      "Utilized Git for version control, ensuring smooth collaboration and maintaining a clean, well-documented codebase.",
      "Managed tasks, sprints, and bug tracking in Jira, actively contributing to Agile development processes.",
      "Worked closely with cross-functional teams, including designers, backend developers, and QA engineers, to deliver high-quality software solutions aligned with business goals."
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Adsiduous Media Pvt Ltd",
    location: "Hyderabad",
    period: "Sep 2022 – Apr 2024",
    skills: ["Node.js", "Next.js", "React.js", "MongoDB", "Express.js", "Git", "AWS"],
    responsibilities: [
      "Collaborated with the digital marketing team to understand project requirements and translate them into technical specifications for building data-driven dashboards.",
      "Designed and developed responsive and user-friendly web applications using modern front-end technologies such as React.js with Next.js, ensuring a seamless user experience across devices.",
      "Implemented server-side logic and RESTful APIs using Node.js and Express to handle data retrieval and processing from MongoDB databases.",
      "Utilized Git for version control to ensure a well-documented and organized codebase, enabling smooth collaboration with team members.",
      "Deployed and managed web applications on AWS cloud services, optimizing performance and reliability.",
      "Conducted regular code reviews to ensure coding standards, best practices and performance optimizations are followed, promoting high-quality code.",
      "Integrated third-party APIs and services to gather marketing data, analytics, and metrics, enhancing the dashboard reporting capabilities.",
      "Monitored application performance and conducted debugging and troubleshooting to address any issues promptly, ensuring the dashboard's stability and uptime.",
      "Implemented authentication and access control mechanisms to maintain data security and privacy for authorized users.",
      "Stayed up to date with the latest web development trends, tools, and technologies, actively applying new knowledge to improve development processes and project outcomes.",
      "Collaborated with cross-functional teams, including designers and marketers, to deliver effective solutions that meet business objectives and user needs."
    ]
  },
  {
    title: "Senior Associate",
    company: "IBM Pvt Ltd (Project: DuPont)",
    location: "Bangalore",
    period: "Dec 2017 – Dec 2020",
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "Figma", "Adobe XD"],
    responsibilities: [
      "Experience using design tools like Figma & Adobe XD.",
      "Provided user interface using HTML, CSS, and Bootstrap.",
      "Created form validations by using JavaScript regular expressions.",
      "Experience using bootstrap data tables."
    ]
  }
];

const Experience: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };
  return (
    <section className="w-full flex flex-col items-center justify-center  px-4" aria-labelledby="experience-title">
      <div className="max-w-2xl w-full">
        <h2 id="experience-title" className="text-3xl sm:text-4xl font-bold mb-12 text-[#222] dark:text-[#f6f5f2] text-center">Professional Journey</h2>
        <div className="relative border-l-2 border-[#e0d7c6] dark:border-[#222] ml-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-12 ml-6 relative flex items-start group cursor-pointer">
              {/* Dot aligned with title/period row, with hover effect */}
              <span
                className="absolute left-[-38px] sm:left-[-38px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#b6a98c] dark:bg-[#7a6e57] border-4 border-white dark:border-gray-900 transition-transform transition-colors duration-200 ease-in-out group-hover:scale-110 group-hover:bg-[#a3926b] dark:group-hover:bg-[#9a8b6a]"
                tabIndex={0}
                aria-label={`Timeline marker for ${exp.title} at ${exp.company}`}
              ></span>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#222] dark:text-[#f6f5f2]">{exp.title}</h3>
                    <span className="text-[#7a6e57] dark:text-[#e0d7c6] text-sm">{exp.company} &bull; {exp.location}</span>
                  </div>
                  <span className="text-[#b6a98c] dark:text-[#cfcfcf] text-xs sm:text-sm mt-2 sm:mt-0">{exp.period}</span>
                </div>
                {/* Optionally, add a short description or highlight for each step here */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Experience;
