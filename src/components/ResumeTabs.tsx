"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const experienceData = [
  {
    year: "2022 - Present",
    title: "Full Stack Developer",
    company: "Tech Solutions Inc.",
  },
  {
    year: "Summer 2021",
    title: "Front-End Developer Intern",
    company: "Web Design Studio",
  },
  {
    year: "2020 - 2021",
    title: "Freelance Web Developer",
    company: "E-commerce Startup",
  },
  {
    year: "2022 - Present",
    title: "UI/UX Designer",
    company: "Digital Agency",
  },
];

const educationData = [
  {
    year: "2023",
    title: "Full Stack Web Development Bootcamp",
    institution: "Online Course Platform",
    description: "Intensive full-stack program.",
  },
  {
    year: "2022",
    title: "Front-end Track",
    institution: "Codecademy",
    description: "Frontend fundamentals and frameworks.",
  },
  {
    year: "2020 - 2021",
    title: "Programming Course",
    institution: "Online Course",
    description: "Core programming concepts.",
  },
  {
    year: "2019",
    title: "Certified Web Developer",
    institution: "Tech Institute",
    description: "Official web developer certification.",
  },
];

const skillsData = [
  {
    name: "HTML",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
      </svg>
    ),
  },
  {
    name: "CSS",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.088-.278zm-.005 1.09c.703 0 1.159.518 1.159.518-.37 2.14-1.23 4.65-2.75 6.93-.94-.08-1.86-.27-2.76-.56a14.95 14.95 0 0 0 .68-2.46c.36-2.13.12-3.96-.33-3.96zm-9.77 0c-.45 0-.69 1.83-.33 3.96.19 1 .46 1.8.68 2.46-.9.29-1.82.48-2.76.56C3.07 7.85 2.21 5.35 1.84 3.21c0 0 .45-.518 1.16-.518zm4.885 4.88c.76.58 1.44 1.27 2.01 2.05-.57.78-1.25 1.47-2.01 2.052a14.68 14.68 0 0 1-2.01-2.052c.57-.78 1.25-1.47 2.01-2.05zm-5.09 1.45a15.1 15.1 0 0 1 2.35.68c-.25.8-.42 1.64-.5 2.5-.43-.61-.82-1.25-1.15-1.93a15.1 15.1 0 0 1-.7-1.25zm10.18 0a14.47 14.47 0 0 1-.7 1.25c-.33.68-.72 1.32-1.15 1.93a15.95 15.95 0 0 0-.5-2.5 15.1 15.1 0 0 1 2.35-.68zm-7.93 4.28a15.1 15.1 0 0 0 2.76-.56c.29.89.46 1.83.5 2.77a14.68 14.68 0 0 1-2.01-2.05 15.35 15.35 0 0 0-1.25-.16zm5.68 0c-.42.06-.84.11-1.25.16a14.68 14.68 0 0 1-2.01 2.05c.04-.94.21-1.88.5-2.77.9.28 1.82.48 2.76.56zm-2.84 3.41c1.78 1.66 3.54 2.6 4.88 2.6.45 0 .69-1.83.33-3.96a16.12 16.12 0 0 1-.68-2.46c.9-.29 1.82-.48 2.76-.56 1.52 2.28 2.38 4.79 2.75 6.93 0 0-.46.518-1.16.518-1.34 0-3.1-.95-4.88-2.6zm-4.88 2.6c-.7 0-1.16-.518-1.16-.518.37-2.14 1.23-4.65 2.75-6.93.94.08 1.86.27 2.76.56a14.95 14.95 0 0 0-.68 2.46c-.36 2.13-.12 3.96.33 3.96-1.34 0-3.1-.95-4.88-2.6zm2.47-.518c-.45 0-.69 1.83-.33 3.96.45 0 .69-1.83.33-3.96z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.275-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z" />
      </svg>
    ),
  },
  {
    name: "Git",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
      </svg>
    ),
  },
];

const aboutData = [
  { label: "First Name", value: "Luke" },
  { label: "Last Name", value: "Coleman" },
  { label: "Age", value: "30 Years" },
  { label: "Nationality", value: "Australian" },
  { label: "Freelance", value: "Available" },
  { label: "Languages", value: "English" },
  { label: "Phone", value: "+1 234 567 890" },
  { label: "Email", value: "luke@example.com" },
];

const tabs = ["Experience", "Education", "Skills", "About me"] as const;
type TabType = (typeof tabs)[number];

function ExperienceCard({
  year,
  title,
  company,
  index,
}: {
  year: string;
  title: string;
  company: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-[#232329] rounded-xl py-4 px-5 flex flex-col justify-center items-center lg:items-start gap-1"
    >
      <span className="text-accent text-[12px] font-medium tracking-wide">{year}</span>
      <h3 className="text-[14px] font-semibold text-center lg:text-left text-white mt-1 mb-1 leading-snug">{title}</h3>
      <div className="flex items-center gap-2">
        <span className="w-[5px] h-[5px] rounded-full bg-accent flex-shrink-0" />
        <p className="text-white/50 text-[12px]">{company}</p>
      </div>
    </motion.div>
  );
}

function SkillCard({
  name,
  icon,
  index,
}: {
  name: string;
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      whileHover={{ scale: 1.05, borderColor: "#00ff9d" }}
      className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 flex flex-col items-center gap-3 cursor-default transition-colors"
    >
      <span className="text-[#00ff9d]">{icon}</span>
      <span className="text-white text-xs font-medium">{name}</span>
    </motion.div>
  );
}

export default function ResumeTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("Experience");
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="py-14 px-6 lg:px-10 max-w-6xl mx-auto"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="lg:w-56 flex-shrink-0"
        >
          <h2 className="text-2xl font-bold text-white mb-3 leading-tight">
            Why hire me?
          </h2>
          <p className="text-gray-400 text-[13px] leading-relaxed mb-6">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>

          {/* Tab buttons */}
          <div className="flex flex-col gap-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTab(tab)}
                className={`w-full inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 px-3 text-sm font-medium ring-offset-white transition-all disabled:pointer-events-none disabled:opacity-50 ${
                  activeTab === tab
                    ? "bg-accent text-primary shadow-sm"
                    : "bg-[#27272c] text-white/60"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Right panel */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            {activeTab === "Experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  My experience
                </h3>
                <p className="text-gray-400 text-[13px] mb-4 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  Scelerisque consequat, faucibus et, et.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {experienceData.map((item, i) => (
                    <ExperienceCard key={i} {...item} index={i} />
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "Education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  My education
                </h3>
                <p className="text-gray-400 text-[13px] mb-4 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  Scelerisque consequat, faucibus et, et.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {educationData.map((item, i) => (
                    <ExperienceCard
                      key={i}
                      year={item.year}
                      title={item.title}
                      company={item.institution}
                      index={i}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "Skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  My skills
                </h3>
                <p className="text-gray-400 text-[13px] mb-4 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  Scelerisque consequat, faucibus et, et.
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {skillsData.map((skill, i) => (
                    <SkillCard key={i} {...skill} index={i} />
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "About me" && (
              <motion.div
                key="about"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  About me
                </h3>
                <p className="text-gray-400 text-[13px] mb-4 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  Scelerisque consequat, faucibus et, et.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {aboutData.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 flex flex-col"
                    >
                      <span className="text-xs text-gray-500 mb-1">{item.label}</span>
                      <span
                        className={`text-sm font-medium ${
                          item.label === "Freelance"
                            ? "text-[#00ff9d]"
                            : "text-white"
                        }`}
                      >
                        {item.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
