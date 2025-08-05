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
  brightness={8}
  opacity={0.78}
  blur={18}
  displace={3}
  backgroundOpacity={0.12}
  saturation={1.5}
  distortionScale={-200}
  redOffset={0}
  greenOffset={8}
  blueOffset={18}
  mixBlendMode="screen"
  className="mx-auto mt-6 shadow-[0_0_10px_rgba(74,58,255,0.4)] border border-[#4A3AFF]/50"
  style={{ background: "rgba(13, 11, 45, 0.6)" }} // deep navy purple with slight transparency
>
  <div className="flex justify-between items-center w-full px-6 text-white">
    <span className="text-lg font-extrabold tracking-wider">ATHARVA.DEV</span>
    <nav className="flex gap-8 text-[15px] font-semibold">
      <a href="/" className="hover:text-[#a8a8ff]">Home</a>
      <a href="/projects" className="hover:text-[#a8a8ff]">Projects</a>
      <a href="/about" className="hover:text-[#a8a8ff]">About</a>
      <a href="/contact" className="hover:text-[#a8a8ff]">Contact</a>
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
