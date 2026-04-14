"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const info = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px]">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "Phone",
    description: "(+1) 234 567 890",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px]">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: "Email",
    description: "luke@example.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px]">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Address",
    description: "Sydney, Australia",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(true);
    setTimeout(() => setFormState(false), 3000);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
      className="py-32 xl:pt-40 min-h-screen"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent font-bold">Let's work together</h3>
              <p className="text-white/60 text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.
              </p>
              
              {/* inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Firstname" 
                  required
                  className="flex h-[55px] w-full rounded-md border border-white/10 focus:border-accent bg-[#1c1c22] px-4 py-5 text-white/60 placeholder:text-white/60 outline-none transition-all" 
                />
                <input 
                  type="text" 
                  placeholder="Lastname" 
                  required
                  className="flex h-[55px] w-full rounded-md border border-white/10 focus:border-accent bg-[#1c1c22] px-4 py-5 text-white/60 placeholder:text-white/60 outline-none transition-all" 
                />
                <input 
                  type="email" 
                  placeholder="Email address" 
                  required
                  className="flex h-[55px] w-full rounded-md border border-white/10 focus:border-accent bg-[#1c1c22] px-4 py-5 text-white/60 placeholder:text-white/60 outline-none transition-all" 
                />
                <input 
                  type="tel" 
                  placeholder="Phone number" 
                  className="flex h-[55px] w-full rounded-md border border-white/10 focus:border-accent bg-[#1c1c22] px-4 py-5 text-white/60 placeholder:text-white/60 outline-none transition-all" 
                />
              </div>

              {/* select placeholder */}
              <div className="relative">
                <select defaultValue="" className="flex h-[55px] w-full rounded-md border border-white/10 focus:border-accent bg-[#1c1c22] px-4 text-white/60 outline-none transition-all appearance-none cursor-pointer">
                  <option value="" disabled>Select a service</option>
                  <option value="web">Web Development</option>
                  <option value="ui">UI/UX Design</option>
                  <option value="logo">Logo Design</option>
                </select>
                {/* Custom arrow for select */}
                <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-white/60">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>

              {/* textarea */}
              <textarea 
                placeholder="Type your message here." 
                rows={5}
                required
                className="flex w-full rounded-md border border-white/10 focus:border-accent bg-[#1c1c22] px-4 py-5 text-white/60 placeholder:text-white/60 outline-none transition-all resize-none"
              ></textarea>

              {/* btn */}
              <button 
                type="submit" 
                className="max-w-40 bg-accent hover:bg-accent-hover text-[#1c1c22] h-[55px] px-8 rounded-full font-bold flex justify-center items-center transition-all duration-300"
              >
                {formState ? "Sent!" : "Send message"}
              </button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-white/60 text-[15px]">{item.title}</p>
                      <h3 className="text-xl font-medium">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
