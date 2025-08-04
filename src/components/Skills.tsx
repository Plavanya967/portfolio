



const proSkills = [
  { label: "Web Development", percent: 90, color: "#7a6e57" },
  { label: "Backend Development", percent: 85, color: "#7a6e57" },
  { label: "Cloud", percent: 75, color: "#7a6e57" },
];


import React, { useState } from "react";

const Skills: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [animatedPercents, setAnimatedPercents] = useState<number[]>(proSkills.map(s => s.percent));

  // Animate percent on hover
  React.useEffect(() => {
    if (hoveredIdx === null) return;
    let raf: number;
    const animate = () => {
      setAnimatedPercents(prev => prev.map((p, i) => {
        if (i !== hoveredIdx) return proSkills[i].percent;
        const target = Math.min(100, proSkills[i].percent + 10);
        if (p < target) return Math.min(target, p + 2);
        return target;
      }));
      if (animatedPercents[hoveredIdx] < Math.min(100, proSkills[hoveredIdx].percent + 10)) {
        raf = requestAnimationFrame(animate);
      }
    };
    animate();
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line
  }, [hoveredIdx]);

  // Reset percent when not hovered
  React.useEffect(() => {
    if (hoveredIdx === null) {
      setAnimatedPercents(proSkills.map(s => s.percent));
    }
  }, [hoveredIdx]);

  return (
    <section className="w-full flex flex-col items-center justify-center px-4" aria-labelledby="skills-title">
      <div className="max-w-3xl w-full">
        <h2 id="skills-title" className="text-3xl sm:text-4xl font-bold mb-8 text-[#222] dark:text-[#f6f5f2] text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-16 mb-10">
          {proSkills.map((skill, idx) => (
            <div
              key={skill.label}
              className="flex flex-col items-center group"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              tabIndex={0}
              onFocus={() => setHoveredIdx(idx)}
              onBlur={() => setHoveredIdx(null)}
            >
              <div className="relative w-36 h-36 mb-4 drop-shadow-xl group-hover:drop-shadow-2xl transition-all duration-300">
                <svg className="w-full h-full" viewBox="0 0 150 150">
                  <defs>
                    <linearGradient id={`grad-${skill.label.replace(/\s/g, '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e0d7c6" />
                      <stop offset="100%" stopColor={skill.color} />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor={skill.color} floodOpacity="0.5" />
                    </filter>
                  </defs>
                  <circle cx="75" cy="75" r="65" stroke="#e0d7c6" strokeWidth="14" fill="none" />
                  <circle
                    cx="75"
                    cy="75"
                    r="65"
                    stroke={`url(#grad-${skill.label.replace(/\s/g, '')})`}
                    strokeWidth="14"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 65}
                    strokeDashoffset={2 * Math.PI * 65 * (1 - animatedPercents[idx] / 100)}
                    strokeLinecap="round"
                    className="transition-all duration-700"
                    style={{ filter: 'url(#glow)' }}
                  />
                  <text x="75" y="85" textAnchor="middle" fontSize="2.2em" fill="#222" className="dark:fill-[#f6f5f2] font-bold animate-pulse group-hover:scale-110 transition-transform duration-300">{Math.round(animatedPercents[idx])}%</text>
                </svg>
                <div className="absolute inset-0 rounded-full pointer-events-none group-hover:ring-4 group-hover:ring-[#e0d7c6]/60 group-hover:ring-offset-2 transition-all duration-300"></div>
              </div>
              <span className="text-lg font-semibold text-[#7a6e57] dark:text-[#e0d7c6] group-hover:text-[#222] dark:group-hover:text-[#e0d7c6] transition-colors duration-300">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
