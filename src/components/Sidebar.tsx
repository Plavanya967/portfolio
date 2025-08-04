
import React, { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home-hero" },
  { label: "About Me", href: "#about-me-title" },
  { label: "Experience", href: "#experience-title" },
  { label: "Education", href: "#education-title" },
  { label: "Projects", href: "#projects-title" },
  { label: "Skills", href: "#skills-title" },
  { label: "Contact", href: "#contact-title" },
  { label: "Resume", href: "/resume.pdf", download: true },
];

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const [copied, setCopied] = useState(false);
  const email = "pagidipallil1@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      // fallback or error handling
    }
  };

  return (
    <>
      {/* Toggle button for mobile and desktop (right side, 3-bar icon) */}
      {!open && (
        <button
          className="fixed top-4 right-4 z-50  text-gray-700 dark:text-gray-200 p-2  hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setOpen(true)}
          aria-label="Open sidebar"
        >
          {/* 3-bar icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      )}
      {/* Sidebar for desktop and mobile (right side, slides in from right) */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 md:w-215 max-w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md text-gray-900 dark:text-white shadow-lg z-40 py-0 px-0 flex-col items-center transition-transform duration-300 overflow-y-auto
        ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{ transition: 'transform 0.3s', transform: open ? 'translateX(0)' : 'translateX(100%)' }}
      >
        {/* Close button inside sidebar for mobile */}
        <div className="w-full flex justify-end pt-4 pr-4">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
            className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {/* X icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <section className="flex flex-col items-center w-full pt-6 pb-6 px-6" aria-label="Home">
          
          <span className="block text-2xl font-bold text-gray-900 dark:text-white tracking-wide mb-1">Lavanya Pagidipalli</span>
          <span className="block text-base text-gray-600 dark:text-gray-300 mb-2">Senior Full Stack Developer</span>
          {/* Email with copy button */}
          <div className="flex items-center gap-2 mt-2 mb-2">
            <span className="text-sm text-gray-500 dark:text-gray-400 select-all">{email}</span>
            <button
              onClick={handleCopy}
              aria-label="Copy email"
              className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {/* Standard clipboard icon for better compatibility */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M6 2a2 2 0 012-2h4a2 2 0 012 2v1h1a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h1V2zm2 1v1h4V3H8zm-3 3v11h10V5H5z" />
              </svg>
            </button>
            {copied && <span className="text-green-600 text-xs ml-1">Copied!</span>}
          </div>
          <hr className="w-2/3 border-t border-gray-200 dark:border-gray-700 my-4" />
        </section>
        <nav className="flex-1 flex flex-col items-center gap-2 w-full px-4 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.download ? { download: true } : {})}
              className="block w-full py-3 px-3 rounded text-base font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-300 text-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
              target={link.download ? "_blank" : undefined}
              rel={link.download ? "noopener noreferrer" : undefined}
              onClick={() => setOpen(false)}
              tabIndex={0}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
