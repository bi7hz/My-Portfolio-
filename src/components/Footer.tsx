"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] py-8 px-6 lg:px-10 max-w-7xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Luke Coleman. All rights reserved.
        </p>
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-sm text-gray-500 hover:text-[#00ff9d] transition-colors flex items-center gap-1"
        >
          Back to top
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="w-3.5 h-3.5"
          >
            <path
              d="M5 15l7-7 7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
}
