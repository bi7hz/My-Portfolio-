"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Resume", href: "/resume" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1c1c22]/88 backdrop-blur-md flex justify-center py-4 xl:py-5">
      <div className="site-shell">
        <div className="flex items-center justify-between relative">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-0.5">
              <span className="text-[31px] xl:text-[34px] font-bold text-white tracking-tight leading-none">Bilal</span>
              <span className="text-accent text-[31px] xl:text-[34px] font-bold leading-none">.</span>
            </Link>
          </div>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center gap-8 xl:gap-9">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-[14px] xl:text-[15px] font-semibold transition-colors duration-200 capitalize relative group leading-none ${
                        isActive ? "text-accent" : "text-white hover:text-accent"
                      }`}
                    >
                      {link.label}
                      {isActive ? (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-accent rounded-full"
                        />
                      ) : (
                        <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-accent tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="bg-accent text-[#1c1c22] rounded-full hover:bg-accent-hover transition-colors text-[14px] xl:text-[15px] font-semibold h-[42px] xl:h-[46px] min-w-[114px] xl:min-w-[124px] justify-center px-6 leading-none inline-flex items-center"
            >
              Hire me
            </Link>
          </div>

          {/* Hamburger (Mobile) */}
          <div className="flex justify-end md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-50"
              aria-label="Toggle menu"
            >
              <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="block w-8 h-[2px] bg-accent rounded-full" />
              <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-8 h-[2px] bg-accent rounded-full" />
              <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block w-8 h-[2px] bg-accent rounded-full" />
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[72px] left-0 right-0 z-50 bg-[#1c1c22] border-t border-[#2a2a2a] overflow-hidden"
          >
            <ul className="flex flex-col items-center justify-center h-full pb-24 gap-7">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-[26px] font-medium capitalize ${
                      pathname === link.href ? "text-accent" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 inline-block bg-accent text-[#1c1c22] font-semibold text-lg px-8 py-3 rounded-full"
                >
                  Hire me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
