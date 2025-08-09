import Navbar from "../components/Navbar";
import SplitText from "../components/split";
import { useRef, useEffect } from "react";

// Skills list
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
  const canvasRef = useRef(null);

  // Smooth scroll to skills
  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }
    animate();

    // Resize handler
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#0e0220] via-[#14062e] to-[#1a0940] text-white overflow-x-hidden">
      <Navbar />

      {/* Background floating blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[200px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[200px] rounded-full animate-pulse" />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />

      <div
        ref={containerRef}
        className="h-screen snap-y snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth relative z-10"
      >
        {/* PAGE 1 - Intro */}
        <section className="snap-start min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 pt-28 pb-10 relative">
          <main className="z-10 flex flex-col items-center text-center w-full max-w-3xl">
           <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 flex flex-wrap justify-center">
  <SplitText
    text="Hi, I’m"
    className="text-white drop-shadow mr-2"
    delay={100}
    duration={0.6}
    ease="power3.out"
    splitType="chars"
    from={{ opacity: 0, y: 40 }}
    to={{ opacity: 1, y: 0 }}
  />
  <SplitText
    text="Atharva Mandle"
    className="text-cyan-400 drop-shadow-lg"

    delay={100}
    duration={0.6}
    ease="power3.out"
    splitType="chars"
    from={{ opacity: 0, y: 40 }}
    to={{ opacity: 1, y: 0 }}
  />
</h1>



            <p className="text-base sm:text-lg md:text-xl text-cyan-200 italic max-w-xl mb-7 font-light">
              Machine Learning ⚡ Fintech Backend Systems
            </p>

            <div className="w-full bg-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-lg border border-white/10 hover:border-cyan-400/40 hover:shadow-cyan-500/30 transition duration-300">
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                As a{" "}
                <span className="font-semibold text-white">
                  Computer Science
                </span>{" "}
                student, my strongest interests are in{" "}
                <span className="font-semibold text-cyan-400">
                  machine learning
                </span>{" "}
                and the{" "}
                <span className="font-semibold text-purple-400">fintech</span>{" "}
                space. I'm building my expertise to solve challenges using{" "}
                <span className="font-semibold text-cyan-400">
                  intelligent models
                </span>{" "}
                and{" "}
                <span className="font-semibold text-purple-400">
                  data-driven solutions
                </span>. I also focus on{" "}
                <span className="font-semibold text-cyan-400">
                  backend development
                </span>
                ,{" "}
                <span className="font-semibold text-white">
                  scalable architectures
                </span>
                , and{" "}
                <span className="font-semibold text-purple-400">
                  system design
                </span>.
              </p>
            </div>

            <button
              onClick={scrollToSkills}
              className="mt-6 px-7 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/50 transition-all"
            >
              View My Skills ↓
            </button>
          </main>
        </section>

        {/* PAGE 2 - Skills */}
        <section
          ref={skillsRef}
          className="snap-start min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 pt-20 pb-12"
        >
          <h2 className="mb-5 text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills
          </h2>

          <p className="mb-6 max-w-lg text-center text-cyan-300 italic sm:text-base text-sm leading-relaxed font-light">
            Here are some of the technologies and tools I use daily to build
            scaled, intelligent applications.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-8 max-w-2xl w-full">
            {skills.map(({ name, icon }) => (
              <div
                key={name}
                className="flex flex-col items-center bg-white/10 p-5 rounded-2xl backdrop-blur-lg shadow-md hover:scale-105 hover:shadow-cyan-400/40 border border-transparent hover:border-cyan-400/30 transition-all cursor-pointer"
              >
                <span className="text-3xl mb-2">{icon}</span>
                <span className="text-lg font-semibold">{name}</span>
              </div>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="mt-10 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 hover:opacity-90 transition text-white font-semibold shadow-lg"
          >
            Back to Top ↑
          </button>
        </section>
      </div>
    </div>
  );
}
