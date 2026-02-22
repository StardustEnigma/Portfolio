import { useState, useEffect } from "react";

const STAGES = [
    { text: "Loading modules...", duration: 400 },
    { text: "Indexing project files...", duration: 600 },
    { text: "Resolving dependencies...", duration: 500 },
    { text: "Building workspace...", duration: 700 },
    { text: "Starting terminal...", duration: 400 },
];

export default function BootSplash({ onDone }) {
    const [stage, setStage] = useState(0);
    const [progress, setProgress] = useState(0);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        if (stage >= STAGES.length) {
            // Start fade-out, then signal done
            setFading(true);
            const id = setTimeout(() => onDone(), 400);
            return () => clearTimeout(id);
        }

        const { duration } = STAGES[stage];
        const step = 100 / (duration / 16); // ~60fps increments
        let current = 0;

        const id = setInterval(() => {
            current += step;
            // Map local progress to overall progress
            const overall =
                ((stage / STAGES.length) * 100) +
                (Math.min(current, 100) / STAGES.length);
            setProgress(Math.min(overall, 100));

            if (current >= 100) {
                clearInterval(id);
                setStage((s) => s + 1);
            }
        }, 16);

        return () => clearInterval(id);
    }, [stage, onDone]);

    return (
        <div
            className={`fixed inset-0 z-9999 bg-[#1e1f22] flex flex-col items-center justify-center
                transition-opacity duration-400 ${fading ? "opacity-0" : "opacity-100"}`}
        >
            {/* Logo / Brand */}
            <div className="mb-8 text-center">
                <div className="text-4xl sm:text-5xl font-semibold text-[#d4d4d4] mb-2 tracking-tight">
                    <span className="text-[#4b9cff]">{"{ "}</span>
                    AM
                    <span className="text-[#4b9cff]">{" }"}</span>
                </div>
                <p className="text-[#7a7e85] text-sm">Atharva Mandle — Portfolio IDE</p>
            </div>

            {/* Progress bar */}
            <div className="w-64 sm:w-80">
                <div className="h-0.75 bg-[#303030] rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#4b9cff] transition-all duration-100 ease-linear rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <p className="text-[#7a7e85] text-xs mt-3 text-center h-4">
                    {stage < STAGES.length ? STAGES[stage].text : "Ready"}
                </p>
            </div>

            {/* Version info */}
            <p className="absolute bottom-6 text-[10px] text-[#505050]">
                Portfolio IDE v2.0 — Built with React + Vite
            </p>
        </div>
    );
}
