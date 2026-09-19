"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

type FormStatus = "idle" | "success" | "error";

const info = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px]">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "Phone",
    description: "(+20) 114 232 1320",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px]">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: "Email",
    description: "bilal7haider7@gmail.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px]">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Address",
    description: "Cairo, Egypt",
  },
];

export default function ContactPage() {
  const submissionInFlightRef = useRef(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submissionInFlightRef.current) return;

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const requiredValues = ["firstName", "lastName", "email", "message"].map((field) =>
      String(formData.get(field) ?? "").trim(),
    );

    if (requiredValues.some((value) => value.length === 0)) {
      setFormStatus("error");
      return;
    }

    submissionInFlightRef.current = true;
    setIsSubmitting(true);
    setFormStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: formData.get("service"),
          message: formData.get("message"),
          website: formData.get("website"),
          submissionId: crypto.randomUUID(),
        }),
      });

      if (!response.ok) throw new Error("Contact request failed.");

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    } finally {
      submissionInFlightRef.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
      className="section-pad min-h-screen overflow-hidden"
    >
      <div className="site-shell">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-14 soft-glow">
          {/* form */}
          <div className="lg:w-[55%] order-2 lg:order-none relative z-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-7 p-9 sm:p-10 xl:p-12 bg-[#27272c] rounded-[18px] border border-white/10">
              <h3 className="text-[32px] sm:text-[36px] text-accent font-bold leading-tight">Let&apos;s work together</h3>
              <p className="text-white/60 text-[14px] leading-[1.8] max-w-[560px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.
              </p>
              
              {/* inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  name="firstName"
                  type="text" 
                  placeholder="Firstname" 
                  required
                  className="flex h-[54px] w-full rounded-lg border border-white/10 focus:border-accent bg-[#1c1c22] px-4 py-5 text-[14px] text-white/70 placeholder:text-white/50 outline-none transition-all"
                />
                <input 
                  name="lastName"
                  type="text" 
                  placeholder="Lastname" 
                  required
                  className="flex h-[54px] w-full rounded-lg border border-white/10 focus:border-accent bg-[#1c1c22] px-4 py-5 text-[14px] text-white/70 placeholder:text-white/50 outline-none transition-all"
                />
                <input 
                  name="email"
                  type="email" 
                  placeholder="Email address" 
                  required
                  className="flex h-[54px] w-full rounded-lg border border-white/10 focus:border-accent bg-[#1c1c22] px-4 py-5 text-[14px] text-white/70 placeholder:text-white/50 outline-none transition-all"
                />
                <input 
                  name="phone"
                  type="tel" 
                  placeholder="Phone number" 
                  className="flex h-[54px] w-full rounded-lg border border-white/10 focus:border-accent bg-[#1c1c22] px-4 py-5 text-[14px] text-white/70 placeholder:text-white/50 outline-none transition-all"
                />
              </div>

              {/* select placeholder */}
              <div className="relative">
                <select name="service" defaultValue="" className="flex h-[54px] w-full rounded-lg border border-white/10 focus:border-accent bg-[#1c1c22] px-4 text-[14px] text-white/70 outline-none transition-all appearance-none cursor-pointer">
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
                name="message"
                placeholder="Type your message here." 
                rows={5}
                required
                className="flex w-full min-h-[154px] rounded-lg border border-white/10 focus:border-accent bg-[#1c1c22] px-4 py-5 text-[14px] text-white/70 placeholder:text-white/50 outline-none transition-all resize-none"
              ></textarea>

              <div className="absolute left-[-9999px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              {/* btn */}
              <div className="flex flex-col items-start gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="max-w-44 bg-accent hover:bg-accent-hover text-[#1c1c22] h-[54px] px-8 rounded-full font-bold text-[14px] flex justify-center items-center transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "SENDING..." : "Send message"}
                </button>
                {formStatus !== "idle" && (
                  <p
                    role={formStatus === "error" ? "alert" : "status"}
                    aria-live="polite"
                    className={`text-[13px] leading-relaxed ${
                      formStatus === "success" ? "text-accent" : "text-[#ff8a8a]"
                    }`}
                  >
                    {formStatus === "success"
                      ? "Message sent successfully. I'll get back to you soon."
                      : "Something went wrong. Please try again."}
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0 relative z-10">
            <ul className="flex flex-col gap-7 w-full max-w-[420px]">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-5">
                    <div className="w-[56px] h-[56px] lg:w-[62px] lg:h-[62px] bg-[#27272c] text-accent rounded-xl flex justify-center items-center border border-white/10">
                      <div className="text-[24px]">{item.icon}</div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-white/60 text-[14px]">{item.title}</p>
                      <h3 className="text-[17px] sm:text-[19px] font-medium break-words">{item.description}</h3>
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
