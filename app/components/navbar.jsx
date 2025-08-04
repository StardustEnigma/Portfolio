import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const linkHover = {
  whileHover: { scale: 1.07, color: "#a78bfa" },
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
        className={`
          fixed top-5 left-1/2 -translate-x-1/2 z-50
          w-[92%] max-w-3xl
          flex items-center justify-between
          px-6 py-1.5
          bg-[rgba(24,22,56,0.92)] backdrop-blur-xl shadow-md
          border border-indigo-800
          rounded-full
          ring-1 ring-indigo-500/10
        `}
      >
        {/* Logo */}
        <motion.a
          href="/"
          {...linkHover}
          className="
            text-white text-lg font-extrabold tracking-widest pr-8
            bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400
            bg-clip-text text-transparent
            uppercase
            cursor-pointer
          "
        >
          ATHARVA.DEV
        </motion.a>

        {/* Links: hidden on mobile, flex on md+ */}
        <div className="hidden md:flex gap-8 text-white text-base font-medium">
          {links.map((link, i) => (
            <motion.a
              {...linkHover}
              key={i}
              href={link.url}
              className="relative pb-0.5 transition-colors hover:text-indigo-300 focus:text-indigo-200 group cursor-pointer"
              tabIndex={0}
            >
              {link.name}
              <span
                aria-hidden="true"
                className="
                  absolute left-0 -bottom-1 h-[2px]
                  bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400
                  w-0 group-hover:w-full group-focus:w-full transition-[width] duration-300 ease-in-out rounded
                "
              />
            </motion.a>
          ))}
        </div>

        {/* Hamburger Icon (only on mobile) */}
        <button
          className="flex md:hidden items-center focus:outline-none p-2"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-white"
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
            className={`
              fixed top-[68px] left-1/2 -translate-x-1/2 z-40
              bg-[rgba(24,22,56,0.97)] border border-indigo-800
              backdrop-blur-xl shadow-md rounded-xl
              w-[92%] max-w-xs p-6 flex flex-col items-center gap-4
              md:hidden
            `}
          >
            {links.map((link, i) => (
              <motion.a
                key={i}
                href={link.url}
                onClick={() => setMenuOpen(false)}
                {...linkHover}
                className="text-white text-base font-bold w-full text-center py-2 rounded hover:bg-indigo-900/30 transition"
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
