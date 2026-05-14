"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { KeyboardEvent, useState } from "react";

const experience = {
  title: "My experience",
  descLine1: "Experience in Front-End Development, Artificial Intelligence,",
  descLine2: "and UI/UX Design with focus on modern technologies.",
  items: [
    { year: "2022 - Present", position: "Full Stack Developer", company: "Self-Study" },
    { year: "2025 - 2025", position: "Front-End Developer Intern", company: "Information Technology Institute (ITI)" },
    { year: "2021 - 2025", position: "AI Engineer", company: "Bachelor's Degree (ERU)" },
    { year: "2024 - Present", position: "UI/UX Designer", company: "Freelance" },
  ],
};

const education = {
  title: "My education",
  descLine1: "Academic background in Artificial Intelligence and Web Development.",
  descLine2: "Focused on Front-End Development, and UI/UX Design.",
  items: [
    { year: "2021 - 2025", position: "BSc in Artificial Intelligence", company: "Egyptian Russian University (ERU)" },
    { year: "2024", position: "Full Stack Web Development Bootcamp", company: "Online Course Platform (ITI)" },
    { year: "2025", position: "Front-End Development & UI/UX", company: "Information Technology Institute (ITI)" },
    { year: "2024", position: "AI & Machine Learning Methods", company: "IBM" },
  ],
};

const skills = {
  title: "My skills",
  descLine1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  descLine2: "Scelerisque consequat, faucibus et, et.",
  skillList: [
    {
      name: "HTML",
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" /></svg>,
    },
    {
      name: "CSS",
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" /></svg>,
    },
    {
      name: "JavaScript",
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" /></svg>,
    },
    {
      name: "TypeScript",
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" /></svg>,
    },
    {
      name: "React",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-10 h-10">
          <ellipse cx="12" cy="12" rx="10" ry="4.15" />
          <ellipse cx="12" cy="12" rx="10" ry="4.15" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.15" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      name: "Next.js",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M7.7 7.7h2.05l6.82 10.15h-2.05L7.7 7.7Zm6.56 0h1.86v8.6l-1.86-2.77V7.7Z" />
        </svg>
      ),
    },
    {
      name: "Node.js",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" className="w-10 h-10">
          <path d="M12 2.4 20.1 7v10L12 21.6 3.9 17V7L12 2.4Z" />
          <path d="M8.2 15.8V8.2l7.6 7.6V8.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Python",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M11.92 2.1c-4.1 0-3.85 1.78-3.85 1.78v1.84h3.92v.56H6.5S3 5.88 3 10.17c0 4.29 3.05 4.14 3.05 4.14h1.82v-2.56s-.1-3.04 2.98-3.04h3.88s2.73.04 2.73-2.64V3.88s.41-1.78-5.54-1.78Zm-2.13 1.6a.72.72 0 1 1 0 1.44.72.72 0 0 1 0-1.44Z" />
          <path d="M12.08 21.9c4.1 0 3.85-1.78 3.85-1.78v-1.84h-3.92v-.56h5.49s3.5.4 3.5-3.89c0-4.29-3.05-4.14-3.05-4.14h-1.82v2.56s.1 3.04-2.98 3.04H9.27s-2.73-.04-2.73 2.64v2.19s-.41 1.78 5.54 1.78Zm2.13-1.6a.72.72 0 1 1 0-1.44.72.72 0 0 1 0 1.44Z" />
        </svg>
      ),
    },
    {
      name: "Figma",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M8 2h4v8H8a4 4 0 0 1 0-8Zm4 0h4a4 4 0 0 1 0 8h-4V2Zm0 8h4a4 4 0 1 1-4 4v-4Zm-4 0h4v8H8a4 4 0 0 1 0-8Zm0 8h4v2a4 4 0 1 1-4-4Z" />
        </svg>
      ),
    },
    {
      name: "Adobe XD",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
          <path d="M7 8.2 10.1 12 7 15.8h2.05l2.05-2.62 2.04 2.62h2.07L12.1 12l3.08-3.8h-2.03L11.1 10.8 9.04 8.2H7Z" fill="currentColor" />
          <path d="M16.45 9.1h1.62v6.7h-1.62v-.66c-.38.5-.9.76-1.56.76-1.36 0-2.36-1.08-2.36-2.64 0-1.54 1-2.62 2.36-2.62.65 0 1.18.24 1.56.72V9.1Zm-1.14 5.36c.67 0 1.16-.49 1.16-1.2 0-.7-.49-1.18-1.16-1.18-.66 0-1.14.48-1.14 1.18 0 .71.48 1.2 1.14 1.2Z" fill="currentColor" />
        </svg>
      ),
    },
  ],
};

const aboutItems = {
  title: "About me",
  descLine1: "AI Engineer and Front-End Developer specialized in modern web technologies.",
  descLine2: "Focused on creating intelligent, responsive, and user-friendly applications.",
  info: [
    { label: "Name", value: "Bilal Haider Mando" },
    { label: "Experience", value: "2 Years" },
    { label: "Nationality", value: "Syrian" },
    { label: "Freelance", value: "Available" },
    { label: "Phone", value: "(+20) 114 232 1320" },
    { label: "Email", value: "bilal7haider7@gmail.com" },
    { label: "Degree", value: "BSc in Artificial Intelligence" },
    { label: "Languages", value: "Arabic, English" },
  ],
};

const tabs = ["Experience", "Education", "Skills", "About me"] as const;
type Tab = (typeof tabs)[number];

/* ─── Small reusable card for Experience / Education ─── */
function InfoCard({
  year,
  title,
  subtitle,
  index,
}: {
  year: string;
  title: string;
  subtitle: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.07 }}
      className="bg-[#232329] rounded-xl min-h-[176px] px-8 md:px-9 py-7 flex items-center"
    >
      <div className="w-full flex flex-col text-left justify-center gap-3.5">
        <span className="text-accent text-[12px] font-semibold tracking-wider leading-none">
          {year}
        </span>

        <h4 className="text-[16px] font-bold text-white leading-snug">
          {title}
        </h4>

        <div className="mt-2 flex items-center gap-2.5">
          <span className="w-[6px] h-[6px] rounded-full bg-accent flex-shrink-0" />
          <p className="text-white/60 text-[12px] font-medium leading-none">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section header (title + description) used for each tab ─── */
function SectionHeader({
  title,
  line1,
  line2,
}: {
  title: string;
  line1: string;
  line2: string;
}) {
  return (
    <div className="mb-10 text-center lg:text-left">
      <h3 className="text-[30px] xl:text-[32px] font-bold text-white mb-4 leading-tight">
        {title}
      </h3>
      <p className="text-white/60 text-[14px] leading-[1.8] max-w-[590px] mx-auto lg:mx-0">
        {line1}
        <br />
        {line2}
      </p>
    </div>
  );
}

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState<Tab>("Experience");
  const shouldReduceMotion = useReducedMotion();

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      const nextIndex = (currentIndex + 1) % tabs.length;
      setActiveTab(tabs[nextIndex]);
    }

    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      setActiveTab(tabs[prevIndex]);
    }

    if (event.key === "Home") {
      event.preventDefault();
      setActiveTab(tabs[0]);
    }

    if (event.key === "End") {
      event.preventDefault();
      setActiveTab(tabs[tabs.length - 1]);
    }
  };

  return (
    <motion.section
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{
        opacity: 1,
        transition: shouldReduceMotion
          ? { duration: 0 }
          : { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="w-full min-h-screen flex items-start justify-center section-pad overflow-hidden"
    >
      <div className="site-shell">
        <div className="flex flex-col lg:flex-row gap-11 xl:gap-16">
          {/* ── Left column ── */}
          <div className="w-full lg:w-[34%] flex-shrink-0 flex flex-col gap-7">
            {/* Heading & paragraph */}
            <div className="text-center lg:text-left">
            <h2 className="text-[34px] lg:text-[38px] font-bold text-white leading-[1.08] mb-4">
            Why hire me?
            </h2>
            <p className="text-white/60 text-[14px] leading-[1.75] max-w-[420px] mx-auto lg:mx-0">
              I build modern, responsive web applications
              <br />
              with strong focus on UI/UX and performance.
            </p>
          </div>

            {/* Tab buttons */}
            <div className="flex flex-col gap-3" role="tablist" aria-orientation="vertical" aria-label="Resume sections">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  id={`resume-tab-${tab.toLowerCase().replace(/\s+/g, "-")}`}
                  role="tab"
                  aria-selected={activeTab === tab}
                  aria-controls={`resume-panel-${tab.toLowerCase().replace(/\s+/g, "-")}`}
                  tabIndex={activeTab === tab ? 0 : -1}
                  className={`w-full h-[52px] rounded-lg px-6 text-[14px] font-semibold transition-all duration-300 flex items-center justify-center text-center ${activeTab === tab
                    ? "bg-accent text-[#1c1c22]"
                    : "bg-[#232329] text-white/60 hover:text-white/100 hover:bg-[#2c2c35]"
                    }`}
                  onClick={() => setActiveTab(tab)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="w-full lg:w-[66%] soft-glow">
            <AnimatePresence mode="wait">
              {/* Experience */}
              {activeTab === "Experience" && (
                <motion.div
                  key="experience"
                  id="resume-panel-experience"
                  role="tabpanel"
                  aria-labelledby="resume-tab-experience"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.25 }}
                  className="w-full"
                >
                  <SectionHeader
                    title={experience.title}
                    line1={experience.descLine1}
                    line2={experience.descLine2}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
                    {experience.items.map((item, i) => (
                      <InfoCard
                        key={`${item.year}-${item.position}-${item.company}`}
                        year={item.year}
                        title={item.position}
                        subtitle={item.company}
                        index={i}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Education */}
              {activeTab === "Education" && (
                <motion.div
                  key="education"
                  id="resume-panel-education"
                  role="tabpanel"
                  aria-labelledby="resume-tab-education"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.25 }}
                  className="w-full"
                >
                  <SectionHeader
                    title={education.title}
                    line1={education.descLine1}
                    line2={education.descLine2}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
                    {education.items.map((item, i) => (
                      <InfoCard
                        key={`${item.year}-${item.position}-${item.company}`}
                        year={item.year}
                        title={item.position}
                        subtitle={item.company}
                        index={i}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Skills */}
              {activeTab === "Skills" && (
                <motion.div
                  key="skills"
                  id="resume-panel-skills"
                  role="tabpanel"
                  aria-labelledby="resume-tab-skills"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.25 }}
                  className="w-full"
                >
                  <SectionHeader
                    title={skills.title}
                    line1={skills.descLine1}
                    line2={skills.descLine2}
                  />
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-5 gap-4 relative z-10">
                    {skills.skillList.map((skill) => (
                      <li key={skill.name}>
                        <div
                          className="w-full bg-[#232329] h-[132px] rounded-xl border border-white/5 flex justify-center items-center group relative cursor-pointer transition-colors duration-300 hover:border-accent/45"
                        >
                          <div className="text-white/60 group-hover:text-accent transition-all duration-300">
                            {skill.icon}
                          </div>
                          <div className="absolute top-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black px-3 py-1 rounded text-xs font-bold pointer-events-none">
                            {skill.name}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* About me */}
              {activeTab === "About me" && (
                <motion.div
                  key="about"
                  id="resume-panel-about-me"
                  role="tabpanel"
                  aria-labelledby="resume-tab-about-me"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.25 }}
                  className="w-full"
                >
                  <SectionHeader
                    title={aboutItems.title}
                    line1={aboutItems.descLine1}
                    line2={aboutItems.descLine2}
                  />
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12 max-w-[650px] mx-auto lg:mx-0 relative z-10">
                    {aboutItems.info.map((item) => (
                      <li
                        key={item.label}
                        className="flex items-center justify-center xl:justify-start gap-4 min-h-[34px]"
                      >
                        <span className="text-white/60 text-sm">
                          {item.label}
                        </span>
                        <span className="text-white text-base font-medium">
                          {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
