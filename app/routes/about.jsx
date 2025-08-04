import Navbar from "../components/Navbar";
import SplitText from "../components/split";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#12023a] via-[#1a0940] to-[#24126A] text-white relative">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-24 flex justify-center items-center">
        <h1 className="text-4xl font-bold text-center flex flex-wrap gap-2">
          <SplitText
            text="Hi, I’m"
            className="text-white"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <SplitText
            text="Atharva Mandle"
            className="text-[#38bdf8]" // Tailwind cyan-400 for a highlight
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </h1>
      </main>
    </div>
  );
}
