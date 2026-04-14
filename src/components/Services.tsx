"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
    accent: true,
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
    accent: false,
  },
  {
    number: "03",
    title: "Logo Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
    accent: false,
  },
  {
    number: "04",
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.",
    accent: false,
  },
];

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="w-5 h-5"
  >
    <path
      d="M7 17L17 7M17 7H7M17 7v10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function ServiceCard({
  number,
  title,
  description,
  accent,
  index,
}: {
  number: string;
  title: string;
  description: string;
  accent: boolean;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative border-b border-[#2a2a2a] py-10 pr-6 hover:border-[#3a3a3a] transition-colors duration-300"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {/* Number */}
          <span
            className={`text-xl font-bold font-mono mb-4 block ${
              accent ? "text-[#00ff9d]" : "text-gray-600"
            }`}
          >
            {number}
          </span>

          {/* Title */}
          <h3
            className={`text-2xl sm:text-3xl font-bold mb-4 transition-colors duration-200 ${
              accent ? "text-[#00ff9d]" : "text-white group-hover:text-white"
            }`}
          >
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            {description}
          </p>
        </div>

        {/* Arrow Button */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.94 }}
          className={`flex-shrink-0 mt-1 ml-4 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 ${
            accent
              ? "bg-[#00ff9d] text-black"
              : "border border-[#3a3a3a] text-white hover:border-[#00ff9d] hover:text-[#00ff9d]"
          }`}
        >
          <ArrowIcon />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-20 px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Section heading — matches video: no big title, just labeled with number style above each card */}
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-2"
      >
        {/* No section heading shown in video for services — cards lead directly */}
      </motion.div>

      {/* 2x2 grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
        {services.map((service, i) => (
          <ServiceCard key={service.number} {...service} index={i} />
        ))}
      </div>
    </section>
  );
}
