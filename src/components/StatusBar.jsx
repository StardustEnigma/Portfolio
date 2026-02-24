import { useState, useEffect } from "react";

function useClock() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

export default function StatusBar({ activeCommand }) {
    const now = useClock();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");

    return (
        <div
            className="h-7 sm:h-6 px-3 flex items-center justify-between shrink-0
                border-t border-[#27272a]/50 bg-[#0e0e11]/70 backdrop-blur-xl text-[10px] sm:text-[11px] text-[#71717a]
                select-none"
        >
            {/* Left side */}
            <div className="flex items-center gap-3 sm:gap-4">
                {/* Git branch */}
                <span className="flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" className="opacity-70">
                        <path d="M11.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm-2.25.75a2.25 2.25 0 1 1 3 2.122V6.5a.5.5 0 0 1-.5.5H9.755a1.5 1.5 0 0 0-1.478 1.231l-.035.201A3 3 0 0 1 5.28 11H5v.628a2.25 2.25 0 1 1-1.5 0V4.372a2.25 2.25 0 1 1 1.5 0V5h.28a1.5 1.5 0 0 0 1.478-1.231l.035-.201A3 3 0 0 1 9.72 1H12a.5.5 0 0 1 .5.5v1.128a2.25 2.25 0 0 1-3 2.122V3.25zM4.25 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z"/>
                    </svg>
                    <span>main</span>
                </span>

                {/* Errors/warnings — always clean ;) */}
                <span className="hidden sm:flex items-center gap-1">
                    <span className="text-[#34d399]">✓</span> 0 errors
                </span>

                {activeCommand && (
                    <span className="text-[#f59e0b]">
                        cmd: {activeCommand}
                    </span>
                )}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3 sm:gap-4">
                <span className="hidden sm:inline">UTF-8</span>
                <span className="hidden sm:inline">JSX</span>
                <span className="hidden md:inline">Spaces: 4</span>
                <span className="tabular-nums">{hh}:{mm}</span>
            </div>
        </div>
    );
}
