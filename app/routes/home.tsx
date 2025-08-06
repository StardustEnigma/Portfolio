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

      {/* Navbar */}
      <div className="relative z-20 py-6">
        <Navbar />
      </div>

      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center pointer-events-auto gap-10">
        <div className="max-w-[95vw] px-2 overflow-hidden">
          <TextType
            text={[
              "Welcome to my portfolio.",
              "I'm Atharva.",
              "ML & Backend | Fintech",
            ]}
            className="font-bold whitespace-nowrap text-[clamp(1.5rem,5vw,4rem)]"
            typingSpeed={60}
            deletingSpeed={40}
            pauseDuration={1800}
            showCursor
            textColors={["#ffffff", "#38bdf8", "#f472b6"]}
            cursorBlinkDuration={0.5}
          />
        </div>

        <ShinyText
  text="Crafting smart backends and ML solutions that solve real-world problems."
  className="
    text-lg sm:text-xl md:text-3xl
    max-w-sm sm:max-w-md md:max-w-none   /* Allow full width at md+ */
    mx-auto
    text-center
  "
/>




      </div>
    </div>
  );
}
