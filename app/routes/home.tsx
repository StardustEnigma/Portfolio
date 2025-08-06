import DotGrid from "../welcome/welcome";
import TextType from "../components/type";
import Navbar from "../components/navbar";
import ShinyText from "../components/shiny";

export default function Home() {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-black text-white">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotGrid />
      </div>

      {/* Navbar with extra vertical padding */}
      <div className="relative z-20 py-6">
        <Navbar />
      </div>

      {/* Centered animated text and shiny text with increased gap and font size */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-14 z-10 px-4 text-center pointer-events-auto">
        <TextType
          text={[
            "Welcome to my portfolio.",
            "I'm Atharva.",
            "Web Developer | Designer | Engineer.",
          ]}
          className="text-4xl md:text-7xl font-bold"
          typingSpeed={60}
          deletingSpeed={40}
          pauseDuration={1800}
          showCursor
          textColors={["#ffffff", "#38bdf8", "#f472b6"]}
          cursorBlinkDuration={0.5}
        />
        <ShinyText
          text="Building intelligent backends & machine learning projects that solve real problems."
          className="text-xl md:text-3xl"
        />
      </div>
    </div>
  );
}
