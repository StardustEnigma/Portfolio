import { useState, useRef, useEffect, useCallback } from "react";

const CORE = ["about", "skills", "projects", "contact", "resume", "help"];
const EGGS = ["neofetch", "whoami", "date", "ls", "pwd", "cat", "sudo", "coffee"];

export default function CommandPills({ onRun }) {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    /* Check scroll overflow state */
    const checkOverflow = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 2);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
    }, []);

    useEffect(() => {
        checkOverflow();
        window.addEventListener("resize", checkOverflow);
        return () => window.removeEventListener("resize", checkOverflow);
    }, [checkOverflow]);

    /* close on outside click */
    useEffect(() => {
        if (!open) return;
        const handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("pointerdown", handler);
        return () => document.removeEventListener("pointerdown", handler);
    }, [open]);

    const pillCls = `px-2.5 py-1 sm:px-4 sm:py-1.5
        text-[11px] sm:text-[13px] rounded-md
        border border-[#27272a]/60 bg-[#18181b]/50
        text-[#d4d4d8] hover:bg-[#292524]
        hover:border-[#f59e0b]/50 hover:text-white
        active:border-[#f59e0b]
        transition-colors duration-150 whitespace-nowrap shrink-0`;

    return (
        <div className="relative max-w-full">
            {/* Left fade hint — desktop scroll only */}
            <div className={`hidden sm:block pointer-events-none absolute left-0 top-0 bottom-0 w-8 z-10
                bg-linear-to-r from-[#0c0c0f] via-[#0c0c0f]/70 to-transparent
                transition-opacity duration-200 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Right fade hint + chevron — desktop scroll only */}
            <div className={`hidden sm:flex pointer-events-none absolute right-0 top-0 bottom-0 w-10 z-10
                bg-linear-to-l from-[#0c0c0f] via-[#0c0c0f]/70 to-transparent
                items-center justify-end pr-1
                transition-opacity duration-200 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`}
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                    <polyline points="9 18 15 12 9 6"/>
                </svg>
            </div>

            <div
                ref={scrollRef}
                onScroll={checkOverflow}
                className="flex flex-wrap sm:flex-nowrap items-center gap-1.5 sm:gap-2 sm:overflow-x-auto sm:no-scrollbar max-w-full"
            >
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
        </div>
    );
}
