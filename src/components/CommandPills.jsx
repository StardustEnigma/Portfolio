import { useState, useRef, useEffect } from "react";

const CORE = ["about", "skills", "projects", "contact", "resume", "help"];
const EGGS = ["neofetch", "whoami", "date", "ls", "pwd", "cat", "sudo", "coffee"];

export default function CommandPills({ onRun }) {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    /* close on outside click */
    useEffect(() => {
        if (!open) return;
        const handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("pointerdown", handler);
        return () => document.removeEventListener("pointerdown", handler);
    }, [open]);

    const pillCls = `px-3 py-1 sm:px-4 sm:py-1.5
        text-[11px] sm:text-[13px] rounded-md
        border border-[#27272a]/60 bg-[#18181b]/50
        text-[#d4d4d8] hover:bg-[#292524]
        hover:border-[#f59e0b]/50 hover:text-white
        active:border-[#f59e0b]
        transition-colors duration-150 whitespace-nowrap`;

    return (
        <div className="flex items-center gap-1.5 sm:gap-2">
            {CORE.map((c) => (
                <button key={c} onClick={() => onRun(c)} className={pillCls}>
                    {c}
                </button>
            ))}

            {/* Easter eggs dropdown */}
            <div className="relative" ref={menuRef}>
                <button
                    onClick={() => setOpen((v) => !v)}
                    className={`${pillCls} ${open ? "border-[#f59e0b]/60 text-[#fbbf24]" : ""}`}
                    title="Easter eggs"
                >
                    🥚
                </button>

                {open && (
                    <div className="absolute right-0 top-full mt-2 z-50
                        min-w-[140px] py-1.5 rounded-lg
                        border border-[#27272a]/60 bg-[#18181b]/95 backdrop-blur-xl
                        shadow-lg shadow-black/40 animate-dropdown-in">
                        <span className="block px-3 py-1 text-[10px] text-[#52525b] uppercase tracking-wider">
                            Easter Eggs
                        </span>
                        {EGGS.map((cmd) => (
                            <button
                                key={cmd}
                                onClick={() => { onRun(cmd); setOpen(false); }}
                                className="w-full text-left px-3 py-1.5
                                    text-[12px] sm:text-[13px] text-[#d4d4d8]
                                    hover:bg-[#292524] hover:text-[#fbbf24]
                                    transition-colors duration-100"
                            >
                                <span className="text-[#71717a] mr-1.5">$</span>{cmd}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
