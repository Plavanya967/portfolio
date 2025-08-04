import React from "react";
import Image from "next/image";

const education = [
  {
    degree: "Master of Business Administration (MBA)",
    institution: "Padmavathi University",
    location: "India",
    period: "2015 – 2017",
    details: [
      "Specialization: Finance and IT",
      "Graduated with First Class Honors",
      "Participated in management fests and business case competitions"
    ]
  },
 
  {
    degree: "Bachelor of Commerce (B.Com) in Computers",
    institution: "Sri Krishna Devarayya University",
    location: "India",
    period: "2012 – 2015",
    details: [
      "Graduated with First Class Honors",
      "Studied core commerce and computer application subjects",
      "Participated in university-level seminars and workshops"
    ]
  }
];

const Education: React.FC = () => (
  <section className="w-full flex flex-col md:flex-row items-center justify-center gap-12" aria-labelledby="education-title">
    
    <div className="max-w-2xl w-full">
      <h2 id="education-title" className="text-3xl sm:text-4xl font-bold mb-8 text-[#222] dark:text-[#f6f5f2]">Education</h2>
      <div className="space-y-8">
        {education.map((edu, idx) => (
          <div key={idx} className="bg-white/90 dark:bg-gray-800/90 border border-[#e0d7c6] dark:border-[#222] rounded-2xl shadow p-6 flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <div>
                <h3 className="text-xl font-semibold text-[#222] dark:text-[#f6f5f2]">{edu.degree}</h3>
                <span className="text-[#7a6e57] dark:text-[#e0d7c6]">{edu.institution} &bull; {edu.location}</span>
              </div>
              <span className="text-[#b6a98c] dark:text-[#cfcfcf] text-sm mt-2 sm:mt-0">{edu.period}</span>
            </div>
            {edu.details && edu.details.length > 0 && (
              <ul className="list-disc list-inside text-[#444] dark:text-[#cfcfcf] text-sm space-y-1">
                {edu.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
