import React from "react";


const navLinks = [
  { label: "About", href: "#about-me-title" },
  { label: "Projects", href: "#projects-title" },
  { label: "Skills", href: "#skills-title" },
  { label: "Contact", href: "#contact-title" },
];

const Navbar: React.FC = () => (
  <nav className="w-full flex justify-center py-4 px-2 sm:px-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md fixed top-0 left-0 z-50 shadow">
    <ul className="flex gap-6 sm:gap-10 text-base font-medium text-gray-700 dark:text-gray-200 items-center">
      {navLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150"
          >
            {link.label}
          </a>
        </li>
      ))}
      <li>
        <a
          href="/resume.pdf"
          download
          className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-colors duration-150"
        >
          Download Resume
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
