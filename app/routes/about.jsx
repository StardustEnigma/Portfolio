import Navbar from "../components/Navbar";
import SplitText from "../components/split";
import { useRef } from "react";

const skills = [
  "Python", "Django", "Java", "Git & GitHub", "Tailwind CSS", "React"
];

export default function About() {
  const skillsRef = useRef(null);

  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#12023a] via-[#1a0940] to-[#24126A] text-white overflow-x-hidden">
      <Navbar />
      <div
        className="
          h-screen snap-y snap-mandatory
          overflow-y-auto overflow-x-hidden scroll-smooth
        "
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* Page 1 */}
        <section className="snap-start min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-8 pt-28 pb-10 relative">
          {/* Blobs, adjusted so never too wide */}
          <div className="pointer-events-none absolute top-0 left-0 w-60 h-60 sm:w-80 sm:h-80 bg-cyan-400 opacity-10 rounded-full blur-3xl" style={{transform:"translate(-33%, -33%)", maxWidth:"100vw"}} />
          <div className="pointer-events-none absolute bottom-0 right-0 w-60 h-60 sm:w-80 sm:h-80 bg-purple-500 opacity-10 rounded-full blur-3xl" style={{transform:"translate(25%, 25%)", maxWidth:"100vw"}} />

          <main className="z-10 flex flex-col items-center text-center w-full">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold flex flex-wrap justify-center gap-2 mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
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
                  text="Atharva Mandle"
                  className="text-[#38bdf8] drop-shadow-glow"
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
            <p className="text-base sm:text-lg md:text-xl text-cyan-200/90 italic max-w-xs sm:max-w-xl mb-7 font-light">
              Machine Learning ⚡ Fintech Backend Systems
            </p>
            <div className="w-full max-w-2xl bg-white/10 rounded-2xl p-7 sm:p-10 md:p-12 backdrop-blur-lg shadow-xl mb-8 border border-white/10 hover:shadow-cyan-500/20 transition duration-300">
  <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed hover:text-white cursor-default">
    As a <span className="text-[#ffffff] font-semibold">Computer Science</span> student, my strongest interests are in <span className="text-[#38bdf8] font-semibold">machine learning</span> and the <span className="text-[#f472b6] font-semibold">fintech</span> space. I'm building my expertise to solve financial and tech challenges using <span className="text-[#38bdf8] font-semibold">intelligent models</span> and <span className="text-[#f472b6] font-semibold">data-driven solutions</span>. Alongside this, I focus on <span className="text-[#38bdf8] font-semibold">backend development</span>, <span className="text-[#ffffff] font-semibold">scalable architectures</span>, and <span className="text-[#f472b6] font-semibold">reliable system design</span>.
  </p>
</div>

            <button
              onClick={scrollToSkills}
              className="px-7 py-2 rounded-full bg-cyan-500 text-[#12023a] font-semibold text-base shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all"
            >View My Skills ↓</button>
          </main>
        </section>
        {/* Page 2 */}
        <section
          ref={skillsRef}
          className="snap-start min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 pt-24 pb-12 relative"
        >
          <div className="pointer-events-none absolute top-0 left-0 w-32 h-32 sm:w-56 sm:h-56 bg-cyan-400 opacity-10 rounded-full blur-3xl" style={{transform:"translate(-50%, -50%)", maxWidth:"100vw"}} />
          <div className="pointer-events-none absolute bottom-0 right-0 w-36 h-36 sm:w-60 sm:h-60 bg-purple-500 opacity-10 rounded-full blur-3xl" style={{transform:"translate(25%, 25%)", maxWidth:"100vw"}} />
          <h2 className="mb-6 text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills</h2>
          <div className="w-full max-w-2xl grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-8">
            {skills.map(skill => (
              <div
                key={skill}
                className="flex justify-center items-center text-center bg-white/10 p-5 sm:p-6 rounded-2xl backdrop-blur-md shadow-lg hover:scale-110 hover:shadow-cyan-400/30 transition duration-200 cursor-pointer font-semibold text-base sm:text-lg"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
