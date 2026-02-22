import { useState, useRef, useCallback, forwardRef, useImperativeHandle } from "react";
import CommandPills from "./CommandPills";
import TerminalInput from "./TerminalInput";
import TypewriterLine from "./TypewriterLine";
import { getOutput } from "../data/commands";

/* ── Welcome banner shown on first load ── */
const WELCOME_LINES = [
    { id: "w-1", type: "output", animated: false, text: "Atharva Mandle — Backend Dev", cls: "text-[#d7ba7d] font-semibold" },
    { id: "w-2", type: "output", animated: false, text: '// type "help" or tap a pill', cls: "text-[#7a7e85]" },
    { id: "w-3", type: "output", animated: false, text: "// ↑↓ history • Tab complete", cls: "text-[#7a7e85]" },
    { id: "w-4", type: "output", animated: false, text: "// try some hidden commands ;)", cls: "text-[#505050]" },
    { id: "w-5", type: "output", animated: false, text: "", cls: "" },
];

const Terminal = forwardRef(function Terminal({ setInfo, onShowInfoMobile, onCommand }, ref) {
    const [history, setHistory] = useState(WELCOME_LINES);
    const terminalRef = useRef(null);

    const [isScrollLocked, setIsScrollLocked] = useState(false);
    const rafRef = useRef(null);
    const lastHeightRef = useRef(0);

    /* ── Scroll helpers ── */
    const handleScroll = () => {
        const el = terminalRef.current;
        if (!el) return;
        const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 8;
        setIsScrollLocked(!atBottom);
    };

    const scrollToBottom = useCallback(() => {
        if (isScrollLocked) return;
        if (rafRef.current) return;

        rafRef.current = requestAnimationFrame(() => {
            const el = terminalRef.current;
            if (el && el.scrollHeight !== lastHeightRef.current) {
                el.scrollTop = el.scrollHeight;
                lastHeightRef.current = el.scrollHeight;
            }
            rafRef.current = null;
        });
    }, [isScrollLocked]);

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
        <div className="h-full bg-[#181818] border border-[#303030] rounded-lg flex flex-col">

            {/* Header */}
            <div className="h-8 sm:h-10 px-2 sm:px-5 flex items-center border-b border-[#303030]">
                <span className="text-[#d4d4d4] text-[11px] sm:text-sm">Terminal</span>
            </div>

            {/* Body */}
            <div
                ref={terminalRef}
                onScroll={handleScroll}
                className="flex-1 overflow-y-auto text-base relative"
            >
                {/* Sticky command pills */}
                <div className="sticky top-0 z-10 bg-[#181818] px-2 sm:px-5 pt-1.5 sm:pt-3 pb-1.5 sm:pb-2 border-b border-[#242424]">
                    <CommandPills onRun={runCommand} />
                </div>

                {/* Scrollable output */}
                <div className="px-2 sm:px-5 mt-2 sm:mt-4 space-y-1 sm:space-y-2 text-[11px] sm:text-[15px] whitespace-pre-wrap">
                    {history.map((item) => {
                        if (item.type === "command") {
                            return (
                                <div key={item.id} className="break-all">
                                    <span className="text-[#4fc1ff] hidden sm:inline">atharva@portfolio</span>
                                    <span className="text-[#4fc1ff] sm:hidden">~</span>
                                    <span className="text-[#7a7e85]">$ </span>
                                    <span className="text-[#98c379]">{item.value}</span>
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
                                        border border-[#4b9cff]/50 rounded-md bg-[#1e1f22]
                                        text-[#4b9cff] hover:bg-[#2a2a2a]
                                        active:bg-[#2a2a2a]
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
                    <div className="px-4 mt-2 text-xs text-[#7a7e85] italic">
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
