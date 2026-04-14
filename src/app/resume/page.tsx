"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experience = {
  title: "My experience",
  descLine1: "Experience in Front-End Development, Artificial Intelligence,",
  descLine2: "and UI/UX Design with focus on modern technologies.",
  items: [
    { year: "2022 - Present", position: "Full Stack Developer", company: "Self-Study" },
    { year: "2025 - 2025", position: "Front-End Developer Intern", company: "Information Technology Institute (ITI)" },
    { year: "2021 - 2025", position: "AI Engineer", company: "Bachelor’s Degree (ERU)" },
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
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.088-.278z" /></svg>,
    },
    {
      name: "Next.js",
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" /></svg>,
    },
    {
      name: "Node.js",
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68C2.99 6.729 2.936 6.825 2.936 6.921v10.15c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.945-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.275-.924 1.604l-8.794 5.078C12.643 23.916 12.324 24 11.998 24z" /></svg>,
    },
    {
      name: "Python",
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M12 0C8 0 8 2 8 2v2h8V2s0-2-4-2z" /></svg>
    },
    { name: "Figma", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><circle cx="12" cy="6" r="4" /></svg> },


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
      className="bg-[#232329] rounded-xl flex flex-col justify-center items-start px-8 py-7 min-h-[150px]"
    >
      <div className="w-full flex flex-col gap-3">
        <span className="text-accent text-[13px] font-semibold tracking-wider">
          {year}
        </span>
        <h4 className="text-[17px] font-bold text-white leading-snug">
          {title}
        </h4>
        <div className="flex items-center gap-2.5 w-full">
          <span className="w-[6px] h-[6px] rounded-full bg-accent flex-shrink-0" />
          <p className="text-white/60 text-[13px] font-medium">{subtitle}</p>
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
    <div className="mb-12 text-center lg:text-left">
      <h3 className="text-[30px] font-bold text-white mb-6 leading-tight">
        {title}
      </h3>
      <p className="text-white/60 text-[15px] leading-relaxed max-w-[600px] mx-auto lg:mx-0">
        {line1}
        <br />
        {line2}
      </p>
    </div>
  );
}

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState<Tab>("Experience");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="w-full min-h-screen flex items-start justify-center pb-20"
      style={{ paddingTop: '140px' }}
    >
      <div className="max-w-[1140px] w-full mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* ── Left column ── */}
          <div className="w-full lg:w-[35%] flex-shrink-0 flex flex-col gap-8">
            {/* Heading & paragraph */}
            <div className="text-center lg:text-left">
              <h2 className="text-[34px] lg:text-[38px] font-bold text-white leading-tight mb-6">
                Why hire me?
              </h2>
              <p className="text-white/60 text-[15px] leading-relaxed">
                I build modern, responsive web applications
                <br />
                with strong focus on UI/UX and performance.
              </p>
            </div>

            {/* Tab buttons */}
            <div className="flex flex-col gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`w-full h-[54px] rounded-lg px-6 text-[15px] font-semibold transition-all duration-300 flex items-center justify-center ${activeTab === tab
                    ? "bg-accent text-[#1c1c22]"
                    : "bg-[#232329] text-white/60 hover:text-white/100 hover:bg-[#2c2c35]"
                    }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="w-full lg:w-[65%]">
            <AnimatePresence mode="wait">
              {/* Experience */}
              {activeTab === "Experience" && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="w-full"
                >
                  <SectionHeader
                    title={experience.title}
                    line1={experience.descLine1}
                    line2={experience.descLine2}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experience.items.map((item, i) => (
                      <InfoCard
                        key={i}
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
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="w-full"
                >
                  <SectionHeader
                    title={education.title}
                    line1={education.descLine1}
                    line2={education.descLine2}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {education.items.map((item, i) => (
                      <InfoCard
                        key={i}
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
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="w-full"
                >
                  <SectionHeader
                    title={skills.title}
                    line1={skills.descLine1}
                    line2={skills.descLine2}
                  />
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-6">
                    {skills.skillList.map((skill, index) => (
                      <li key={index}>
                        <div
                          className="w-full bg-[#232329] h-[150px] rounded-xl flex justify-center items-center group relative cursor-pointer"
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
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="w-full"
                >
                  <SectionHeader
                    title={aboutItems.title}
                    line1={aboutItems.descLine1}
                    line2={aboutItems.descLine2}
                  />
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 max-w-[620px] mx-auto lg:mx-0">
                    {aboutItems.info.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
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
