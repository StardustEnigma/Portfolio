import React from "react";

export default function GradientButton({ url, text = "Click Me", newTab = true }) {
  return (
    <a
      href={url}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
      className="
        group relative inline-flex items-center justify-center
        px-5 py-3 sm:px-7 sm:py-3
        text-base sm:text-lg font-semibold
        rounded-full
        bg-gradient-to-r from-[#38bdf8] to-[#6e21e5]
        text-white
        shadow-lg shadow-[#38bdf8]/50
        transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-[#6e21e5]/70
        hover:from-[#6e21e5] hover:to-[#38bdf8]
        active:scale-95
        focus:outline-none focus:ring-2 focus:ring-[#38bdf8]
        z-50
      "
      style={{
        minWidth: 120,
        minHeight: 44, // Keeps it tap-friendly on mobile
      }}
    >
      <span className="relative flex items-center gap-2">
        {text}
        <svg
          className="w-4 h-4 transition-transform transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </a>
  );
}
