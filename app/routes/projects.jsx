import Navbar from "../components/Navbar";
import TrueFocus from "../components/true";

export default function Projects() {
  return (
    <div
      className="relative min-h-screen w-full flex flex-col bg-gradient-to-br from-[#0a0121] via-[#1a0940] to-[#2a1165] overflow-hidden"
    >
      {/* Navbar fixed at top */}
      <Navbar />

      {/* Content wrapper with top padding so content below navbar */}
      <main className="flex-grow flex items-center justify-center px-4 pt-20">
        <TrueFocus sentence="Coming Soon" />
      </main>
    </div>
  );
}
