import Navbar from "../components/Navbar";
import SplitText from "../components/split";
import { useRef } from "react";

const skills = [
  { name: "Python", icon: "🐍" },
  { name: "Django", icon: "🕸️" },
  { name: "Java", icon: "☕" },
  { name: "Git & GitHub", icon: "🐙" },
  { name: "Tailwind CSS", icon: "🌬️" },
  { name: "React", icon: "⚛️" }
];

export default function About() {
  const skillsRef = useRef(null);
  const containerRef = useRef(null);

  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#12023a] via-[#1a0940] to-[#24126A] text-white overflow-x-hidden">
      <Navbar />
      <div
        ref={containerRef}
        className="
          h-screen snap-y snap-mandatory
          overflow-y-auto overflow-x-hidden scroll-smooth
        "
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* Page 1 */}
        <section className="snap-start min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-8 pt-28 pb-10 relative">
          {/* Background blobs */}
          <div
            className="pointer-events-none absolute top-0 left-0 w-60 h-60 sm:w-80 sm:h-80 bg-cyan-400 opacity-10 rounded-full blur-3xl"
            style={{ transform: "translate(-33%, -33%)", maxWidth: "100vw" }}
          />
          <div
            className="pointer-events-none absolute bottom-0 right-0 w-60 h-60 sm:w-80 sm:h-80 bg-purple-500 opacity-10 rounded-full blur-3xl"
            style={{ transform: "translate(25%, 25%)", maxWidth: "100vw" }}
          />

          <main className="z-10 flex flex-col items-center text-center w-full max-w-3xl">
  <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-white">
    <SplitText
      text="Hi, I’m"
      className="text-white drop-shadow"
      delay={100}
      duration={0.6}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
    />
    <span>
      <SplitText
        text=" Atharva Mandle"
        className="text-cyan-400 drop-shadow"
        delay={700}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
      />
    </span>
  </h1>

  <p className="text-base sm:text-lg md:text-xl text-cyan-200 italic max-w-xs sm:max-w-xl mb-7 font-light">
    Machine Learning ⚡ Fintech Backend Systems
  </p>

  <div className="w-full bg-white/10 rounded-2xl p-7 sm:p-10 md:p-12 backdrop-blur-lg shadow-xl mb-8 border border-white/10 hover:shadow-cyan-500/20 transition duration-300">
    <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed hover:text-white cursor-default">
      As a{" "}
      <span className="font-semibold text-white">Computer Science</span> student,
      my strongest interests are in{" "}
      <span className="font-semibold text-cyan-400">machine learning</span> and the{" "}
      <span className="font-semibold text-cyan-300">fintech</span> space. I'm building
      my expertise to solve challenges using{" "}
      <span className="font-semibold text-cyan-400">intelligent models</span> and{" "}
      <span className="font-semibold text-cyan-300">data-driven solutions</span>. I also
      focus on{" "}
      <span className="font-semibold text-cyan-400">backend development</span>,{" "}
      <span className="font-semibold text-white">scalable architectures</span>, and{" "}
      <span className="font-semibold text-cyan-300">system design</span>.
    </p>
  </div>

  <button
    onClick={scrollToSkills}
    className="px-7 py-2 rounded-full bg-cyan-500 text-[#12023a] font-semibold text-base shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all"
  >
    View My Skills ↓
  </button>
</main>

        </section>

        {/* Page 2 */}
        <section
          ref={skillsRef}
          className="snap-start min-h-screen w-full flex flex-col items-center justify-center px-2 sm:px-8 pt-12 pb-8 sm:pt-20 sm:pb-12 relative"
        >
          {/* Background blobs */}
          <div
            className="pointer-events-none absolute top-0 left-0 w-28 h-28 sm:w-48 sm:h-48 bg-cyan-400 opacity-8 rounded-full blur-2xl"
            style={{ transform: "translate(-50%, -50%)", maxWidth: "100vw" }}
          />
          <div
            className="pointer-events-none absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-purple-500 opacity-8 rounded-full blur-2xl"
            style={{ transform: "translate(25%, 25%)", maxWidth: "100vw" }}
          />

          <h2 className="mb-5 text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills
          </h2>

          {/* Subtitle */}
          <p className="mb-6 max-w-lg text-center text-cyan-300 italic sm:text-base text-sm leading-relaxed font-light">
            Here are some of the technologies and tools I use daily to build scaled, intelligent applications.
          </p>

          {/* Decorative dots (small and static) */}
          <div className="mb-8 flex justify-center gap-3">
            <span className="w-3 h-3 bg-cyan-400 rounded-full opacity-50" />
            <span className="w-2 h-2 bg-purple-400 rounded-full opacity-40" />
            <span className="w-3 h-3 bg-cyan-400 rounded-full opacity-60" />
          </div>

          {/* Skills grid: smaller boxes and responsive spacing */}
          <div className="w-full max-w-2xl grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
            {skills.map(({ name, icon }) => (
              <div
                key={name}
                className="flex flex-col items-center text-center bg-white/10 p-3 sm:p-4 rounded-2xl backdrop-blur-sm shadow-md hover:scale-105 hover:shadow-cyan-400/25 transition duration-200 cursor-pointer font-semibold text-sm sm:text-lg"
              >
                <span className="text-xl mb-1">{icon}</span>
                {name}
              </div>
            ))}
          </div>

          {/* Smaller fading shadow for subtle effect */}
          <div className="mt-8 w-full max-w-2xl h-3 bg-gradient-to-t from-transparent via-purple-900/40 to-transparent pointer-events-none rounded" />

          {/* Back to Top button */}
          <button
            onClick={scrollToTop}
            className="mt-10 px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition text-white font-semibold shadow-lg"
          >
            Back to Top ↑
          </button>
        </section>
      </div>
    </div>
  );
}
