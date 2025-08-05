import Navbar from "../components/Navbar";
import SplitText from "../components/split";

const skills = [
  "Python",
  "Django",
  "Java",
  "Git & GitHub",
  "Tailwind CSS",
  "React"
];

export default function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#12023a] via-[#1a0940] to-[#24126A] text-white overflow-hidden text-[0.7rem]">
      <Navbar />
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-400 opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl translate-x-1/3 translate-y-2/3 pointer-events-none" />
      
      <main className="max-w-3xl mx-auto px-6 pt-24 flex flex-col items-center text-center relative z-10">
        {/* Name with animation */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold flex flex-wrap justify-center gap-3 mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
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
          <span className="inline-block">
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

        {/* Tagline in one line */}
        <p className="text-xs sm:text-sm md:text-base text-cyan-200/80 italic max-w-lg mb-8 font-light whitespace-nowrap overflow-hidden text-ellipsis">
  Machine Learning ⚡ Fintech Backend Systems
</p>


        {/* About Paragraph with ML and Fintech focus */}
      <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-lg shadow-2xl mb-10 border border-white/10 transition-all duration-300 hover:shadow-cyan-500/30 max-w-xl">
  <p className="text-[1.15rem] sm:text-[1.15rem] md:text-[1.15rem] text-gray-200 leading-relaxed transition-colors duration-300 hover:text-white cursor-default">
    As a <span className="text-cyan-400 font-semibold">Computer Science</span> student, my strongest interests are in <span className="text-violet-400 font-semibold">machine learning</span> and the <span className="text-cyan-300 font-semibold">fintech</span> space. I'm building my expertise to solve financial and tech challenges using <span className="text-violet-300 font-semibold">intelligent models</span> and <span className="text-violet-300 font-semibold">data-driven solutions</span>. Alongside this, I focus on <span className="text-cyan-300 font-semibold">backend development</span>, <span className="text-cyan-300 font-semibold">scalable architectures</span>, and <span className="text-cyan-300 font-semibold">reliable system design</span>.
  </p>
</div>



        {/* Divider */}
        <div className="w-40 h-[3px] mx-auto my-6 bg-gradient-to-r from-cyan-400/70 to-purple-400/60 rounded-full mb-10 shadow-lg" />

        {/* Skills */}
        <div className="w-full max-w-xl grid grid-cols-2 sm:grid-cols-3 gap-6 text-base sm:text-lg mb-8">
          {skills.map((skill) => (
            <div key={skill} className="flex justify-center items-center bg-white/10 p-5 rounded-2xl backdrop-blur-md shadow-lg hover:scale-110 hover:shadow-cyan-400/40 transition-all duration-200 group cursor-pointer font-medium">
              {skill}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="https://www.linkedin.com/in/atharva-mandle-5214312aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex gap-2 items-center bg-[#38bdf8] text-[#12023a] px-8 py-3 shadow-xl rounded-full font-semibold hover:bg-cyan-300 hover:scale-105 transition-all duration-300 ring-2 ring-cyan-400 group drop-shadow-glow"
          >
            <svg className="w-6 h-6 mr-1 text-[#12023a] group-hover:text-[#6e21e5] transition-all" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 3.024H3.554C2.694 3.024 2 3.734 2 4.632v14.736c0 .899.694 1.632 1.554 1.632h16.893c.86 0 1.553-.734 1.553-1.632V4.632c0-.898-.693-1.608-1.553-1.608zM8.829 19H5.672V9.448h3.157V19zM7.25 8.088c-1.017 0-1.693-.681-1.693-1.533 0-.87.7-1.534 1.733-1.534s1.693.664 1.703 1.534c0 .852-.687 1.533-1.743 1.533zm11.504 10.912h-3.157v-4.884c0-1.229-.438-2.07-1.537-2.07-.839 0-1.338.561-1.557 1.1-.079.192-.098.459-.098.728v5.127h-3.156V9.448h3.156v1.246c.418-.646 1.162-1.564 2.834-1.564 2.069 0 3.629 1.354 3.629 4.268V19z"/></svg>
            Connect with me
          </a>
        </div>
      </main>
    </div>
  );
}
