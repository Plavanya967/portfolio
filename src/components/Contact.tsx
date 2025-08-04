import React from "react";
import Image from "next/image";

const Contact: React.FC = () => (
  <section className="w-full  py-20 px-4 flex flex-col md:flex-row items-center justify-center gap-12" aria-labelledby="contact-title">
   
    <div className="max-w-2xl w-full">
      <h2 id="contact-title" className="text-3xl sm:text-4xl font-bold mb-8 text-[#222] dark:text-[#f6f5f2]">Contact</h2>
      <div className="mb-8 text-[#7a6e57] dark:text-[#e0d7c6] text-base space-y-2">
        <p>Email: <a href="mailto:your.email@example.com" className="underline hover:text-[#b6a98c]">pagidipallil1@gmail.com</a></p>
        <p>Location: Your City, Country</p>
        <p>Phone: <a href="tel:+1234567890" className="underline hover:text-[#b6a98c]">+974 77328971</a></p>
      </div>
      <form className="flex flex-col gap-4 bg-white/90 dark:bg-gray-800/90 border border-[#e0d7c6] dark:border-[#222] rounded-2xl shadow p-6">
        <input type="text" placeholder="Your Name" className="px-4 py-2 rounded border border-[#e0d7c6] dark:border-[#444] bg-white/90 dark:bg-[#222] text-[#222] dark:text-[#f6f5f2]" required />
        <input type="email" placeholder="Your Email" className="px-4 py-2 rounded border border-[#e0d7c6] dark:border-[#444] bg-white/90 dark:bg-[#222] text-[#222] dark:text-[#f6f5f2]" required />
        <textarea placeholder="Your Message" className="px-4 py-2 rounded border border-[#e0d7c6] dark:border-[#444] bg-white/90 dark:bg-[#222] text-[#222] dark:text-[#f6f5f2]" rows={4} required />
        <button type="submit" className="bg-[#222] dark:bg-[#e0d7c6] text-[#f6f5f2] dark:text-[#222] px-6 py-2 rounded font-semibold shadow hover:bg-[#7a6e57] dark:hover:bg-[#b6a98c] transition">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;
