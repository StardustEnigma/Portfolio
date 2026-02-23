import { useState, useRef, useCallback, useEffect, forwardRef, useImperativeHandle } from "react";
import TerminalInput from "./TerminalInput";
import TypewriterLine from "./TypewriterLine";
import { getOutput } from "../data/commands";

/* ── Welcome banner shown on first load ── */
const WELCOME_LINES = [
    { id: "w-1", type: "output", animated: false, text: "Atharva Mandle — Backend Dev", cls: "text-[#22d3ee] font-semibold" },
    { id: "w-2", type: "output", animated: false, text: '// type "help" to see all commands', cls: "text-[#71717a]" },
    { id: "w-3", type: "output", animated: false, text: "// ↑↓ history • Tab complete", cls: "text-[#71717a]" },
    { id: "w-4", type: "output", animated: false, text: "// psst... there are hidden easter eggs 😉", cls: "text-[#52525b] italic" },
    { id: "w-5", type: "output", animated: false, text: "", cls: "" },
];

const Terminal = forwardRef(function Terminal({ setInfo, onShowInfoMobile, onCommand }, ref) {
    const [history, setHistory] = useState(WELCOME_LINES);
    const terminalRef = useRef(null);

    /* Use a ref so scroll helpers never have a stale closure */
    const scrollLockedRef = useRef(false);
    const [isScrollLocked, setIsScrollLocked] = useState(false);
    const rafRef = useRef(null);

    /* ── Scroll helpers ── */
    const handleScroll = () => {
        const el = terminalRef.current;
        if (!el) return;
        const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 8;
        scrollLockedRef.current = !atBottom;
        setIsScrollLocked(!atBottom);
    };

    const scrollToBottom = useCallback((force = false) => {
        if (!force && scrollLockedRef.current) return;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);

        rafRef.current = requestAnimationFrame(() => {
            const el = terminalRef.current;
            if (el) {
                el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
            }
            rafRef.current = null;
        });
    }, []);

    /* Auto-scroll whenever history changes (new command / output added) */
    useEffect(() => {
        scrollToBottom(true);
    }, [history, scrollToBottom]);

    const finalizeOutput = useCallback((id) => {
        setHistory((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, animated: false } : item,
            ),
        );
    }, []);

    /* ── Command execution ── */
    const runCommand = useCallback(
        (cmd) => {
            const key = cmd.trim().toLowerCase();

            // Clear command
            if (key === "clear") {
                setHistory([]);
                onCommand?.("clear");
                return;
            }

            const result = getOutput(cmd);

            setHistory((prev) => [
                // Freeze all previous typewriter animations
                ...prev.map((item) =>
                    item.type === "output" ? { ...item, animated: false } : item,
                ),

                // Command echo
                {
                    id: crypto.randomUUID(),
                    type: "command",
                    value: cmd,
                },

                // Output lines
                ...(result.terminal || []).map((line, i) => ({
                    id: crypto.randomUUID(),
                    type: "output",
                    animated: true,
                    delay: i * 0.4,
                    ...line,
                })),

                // Info trigger for mobile
                result.info
                    ? {
                          id: crypto.randomUUID(),
                          type: "infoTrigger",
                          info: result.info,
                      }
                    : null,
            ].filter(Boolean));

            if (result.info) setInfo(result.info);
            onCommand?.(key);
        },
        [setInfo, onCommand],
    );

    // Expose runCommand so parent can trigger commands (e.g. Explorer clicks)
    useImperativeHandle(ref, () => runCommand, [runCommand]);

    return (
        <div className="h-full bg-[#111113]/50 border border-[#27272a]/40 rounded-lg flex flex-col">

            {/* Header */}
            <div className="h-8 sm:h-10 px-2 sm:px-5 flex items-center border-b border-[#27272a]/40 shrink-0">
                <span className="text-[#e4e4e7] text-[11px] sm:text-sm">Terminal</span>
            </div>

            {/* Body */}
            <div
                ref={terminalRef}
                onScroll={handleScroll}
                className="flex-1 overflow-y-auto text-base relative"
            >
                {/* Scrollable output */}
                <div className="px-2 sm:px-5 mt-2 sm:mt-4 space-y-1 sm:space-y-2 text-[11px] sm:text-[15px] whitespace-pre-wrap">
                    {history.map((item) => {
                        if (item.type === "command") {
                            return (
                                <div key={item.id} className="break-all">
                                    <span className="text-[#34d399] hidden sm:inline">atharva@portfolio</span>
                                    <span className="text-[#34d399] sm:hidden">~</span>
                                    <span className="text-[#71717a]">$ </span>
                                    <span className="text-[#34d399]">{item.value}</span>
                                </div>
                            );
                        }

                        if (item.type === "output") {
                            if (!item.animated) {
                                return (
                                    <div key={item.id} className={item.cls}>
                                        {item.text}
                                    </div>
                                );
                            }

                            return (
                                <TypewriterLine
                                    key={item.id}
                                    text={item.text}
                                    className={item.cls}
                                    delay={item.delay}
                                    speed={0.035}
                                    onType={scrollToBottom}
                                    onComplete={() => finalizeOutput(item.id)}
                                />
                            );
                        }

                        if (item.type === "infoTrigger") {
                            return (
                                <button
                                    key={item.id}
                                    onClick={onShowInfoMobile}
                                    className="lg:hidden mt-2 text-xs px-3 py-1.5
                                        border border-[#f59e0b]/40 rounded-md bg-[#18181b]
                                        text-[#f59e0b] hover:bg-[#292524]
                                        active:bg-[#292524]
                                        transition-colors font-medium"
                                >
                                    View details →
                                </button>
                            );
                        }

                        return null;
                    })}
                </div>

                {isScrollLocked && (
                    <div className="px-4 mt-2 text-xs text-[#71717a] italic">
                        — scroll locked —
                    </div>
                )}

                <div className="px-2 sm:px-5 pb-3 sm:pb-4">
                    <TerminalInput onCommand={runCommand} />
                </div>
            </div>
        </div>
    );
});

export default Terminal;
