import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const linkHover = {
  whileHover: { scale: 1.07, color: "#c4b5fd", textShadow: "0 0 8px #a78bfa" },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 300 },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-7 left-1/2 -translate-x-1/2 z-50 
                   w-[88%] max-w-3xl flex items-center justify-between
                   px-6 py-1.5 rounded-full border backdrop-blur-2xl"
        style={{
          background: "rgba(15,15,40,0.05)",       // ✅ super transparent
          borderColor: "rgba(150,120,255,0.25)",   // ✅ light purple border
          boxShadow: "0 0 20px rgba(150,120,255,0.08)", // ✅ faint glow
        }}
      >
        {/* Logo */}
        <motion.a
          href="/"
          {...linkHover}
          className="text-white/95 text-lg font-extrabold tracking-widest pr-6
                     bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400
                     bg-clip-text text-transparent uppercase cursor-pointer drop-shadow-[0_0_6px_rgba(160,130,255,0.3)]"
        >
          ATHARVA.DEV
        </motion.a>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-white/90 text-base font-semibold">
          {links.map((link, i) => (
            <motion.a
              {...linkHover}
              key={i}
              href={link.url}
              className="relative pb-0.5 cursor-pointer 
                         hover:text-purple-300 focus:text-purple-200 
                         transition-colors drop-shadow-[0_0_5px_rgba(180,150,255,0.3)]"
            >
              {link.name}
              <span
                aria-hidden="true"
                className="absolute left-0 -bottom-1 h-[2px] w-0
                           bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400
                           group-hover:w-full transition-all duration-300 ease-in-out rounded"
              />
            </motion.a>
          ))}
        </div>

        {/* Hamburger Icon */}
        <button
          className="flex md:hidden items-center focus:outline-none p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-white/90 drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </motion.nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed top-[78px] left-1/2 -translate-x-1/2 z-40
                       w-[92%] max-w-xs p-6 flex flex-col items-center gap-4
                       rounded-xl border backdrop-blur-2xl md:hidden"
            style={{
              background: "rgba(15,15,40,0.05)",
              borderColor: "rgba(150,120,255,0.25)",
              boxShadow: "0 4px 20px rgba(150,120,255,0.08)",
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={i}
                href={link.url}
                onClick={() => setMenuOpen(false)}
                {...linkHover}
                className="text-white/90 text-base font-semibold w-full text-center py-2 rounded 
                           hover:bg-white/10 hover:text-purple-300 transition"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
