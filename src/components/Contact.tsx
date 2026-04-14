"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const contactInfo = [
  {
    label: "Phone",
    value: "+1 234 567 890",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="w-5 h-5"
      >
        <path
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "luke@example.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="w-5 h-5"
      >
        <path
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Address",
    value: "Sydney, Australia",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="w-5 h-5"
      >
        <path
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 px-6 lg:px-10 max-w-7xl mx-auto"
    >
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Let's work together
        </h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
        {/* Left: Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 sm:p-8"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-400 uppercase tracking-wider">
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  placeholder="John"
                  required
                  className="bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#00ff9d] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-400 uppercase tracking-wider">
                  Last Name
                </label>
                <input
                  id="last-name"
                  type="text"
                  placeholder="Doe"
                  required
                  className="bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#00ff9d] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-400 uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#00ff9d] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-400 uppercase tracking-wider">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 234 567 890"
                  className="bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#00ff9d] transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-gray-400 uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#00ff9d] transition-colors resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full py-3.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                submitted
                  ? "bg-green-500 text-white"
                  : "bg-[#00ff9d] text-black hover:bg-[#00e88d]"
              }`}
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        {/* Right: Contact info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-80 flex flex-col gap-5 justify-center"
        >
          {contactInfo.map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-5 hover:border-[#3a3a3a] transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#00ff9d]/10 border border-[#00ff9d]/30 flex items-center justify-center text-[#00ff9d] flex-shrink-0">
                {info.icon}
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">{info.label}</p>
                <p className="text-sm text-white font-medium">{info.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
