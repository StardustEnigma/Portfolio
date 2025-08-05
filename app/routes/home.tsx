import DotGrid from "../welcome/welcome";
import TextType from "../components/type";
import GlassSurface from "../components/navbar";

import ShinyText from "../components/shiny";
export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotGrid />
      </div>

      {/* Navbar - place at top with fixed or relative positioning */}
      <GlassSurface
  width="65%"
  height={58}
  borderRadius={18}
  borderWidth={0.14}
  brightness={0}                 // Increase brightness for glassy look
  opacity={0}                   // Lower opacity to see dots
  blur={0}                       // Stronger blur for background
  displace={3}
  backgroundOpacity={0.0}        // Very low background opacity
  saturation={1.8}
  distortionScale={-0.2} // Negative for more distortion
  redOffset={0}
  greenOffset={10}
  blueOffset={20}
  mixBlendMode="overlay"          // Better blending than 'screen'
  className="mx-auto mt-6 shadow-[0_0_20px_rgba(74,58,255,0.4)] border border-[#4A3AFF]/30"
>
  <div className="flex justify-between items-center w-full px-6 text-white">
    <span className="text-lg font-extrabold tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
      ATHARVA.DEV
    </span>
    <nav className="flex gap-8 text-[15px] font-semibold">
      <a href="/" className="hover:text-indigo-300 transition-colors">Home</a>
      <a href="/projects" className="hover:text-indigo-300 transition-colors">Projects</a>
      <a href="/about" className="hover:text-indigo-300 transition-colors">About</a>
      <a href="/contact" className="hover:text-indigo-300 transition-colors">Contact</a>
    </nav>
  </div>
</GlassSurface>




      {/* Centered animated text and shiny text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 z-10 px-4 text-center pointer-events-auto">
        <TextType
          text={[
            "Welcome to my portfolio.",
            "I'm Atharva.",
            "Web Developer | Designer | Engineer.",
          ]}
          className="text-3xl md:text-5xl font-bold"
          typingSpeed={60}
          deletingSpeed={40}
          pauseDuration={1800}
          showCursor
          textColors={["#ffffff", "#38bdf8", "#f472b6"]}
          cursorBlinkDuration={0.5}
        />

        {/* Shiny text below typing effect */}
        <ShinyText text="Building intelligent backends & machine learning projects that solve real problems." />
      </div>
    </div>
  );
}
