import { useState, useRef, useCallback } from "react";
import { COMMAND_NAMES } from "../data/commands";

export default function TerminalInput({ onCommand }) {
    const [value, setValue] = useState("");
    const inputRef = useRef(null);

    // ── Command history ──
    const historyRef = useRef([]);
    const indexRef = useRef(-1);
    const draftRef = useRef("");

    const submit = (e) => {
        e.preventDefault();
        const trimmed = value.trim();
        if (!trimmed) return;

        const hist = historyRef.current;
        if (hist[hist.length - 1] !== trimmed) {
            hist.push(trimmed);
        }

        indexRef.current = -1;
        draftRef.current = "";
        onCommand(trimmed);
        setValue("");
    };

    const handleKeyDown = useCallback(
        (e) => {
            const hist = historyRef.current;

            // Arrow Up — go back in history
            if (e.key === "ArrowUp") {
                e.preventDefault();
                if (hist.length === 0) return;

                if (indexRef.current === -1) {
                    draftRef.current = value;
                    indexRef.current = hist.length - 1;
                } else if (indexRef.current > 0) {
                    indexRef.current -= 1;
                }
                setValue(hist[indexRef.current]);
                return;
            }

            // Arrow Down — go forward in history
            if (e.key === "ArrowDown") {
                e.preventDefault();
                if (indexRef.current === -1) return;

                if (indexRef.current < hist.length - 1) {
                    indexRef.current += 1;
                    setValue(hist[indexRef.current]);
                } else {
                    indexRef.current = -1;
                    setValue(draftRef.current);
                }
                return;
            }

            // Tab — autocomplete
            if (e.key === "Tab") {
                e.preventDefault();
                const partial = value.toLowerCase();
                if (!partial) return;

                const matches = COMMAND_NAMES.filter((c) => c.startsWith(partial));
                if (matches.length === 1) {
                    setValue(matches[0]);
                }
            }

            // Ctrl+L — clear terminal
            if (e.key === "l" && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                onCommand("clear");
                setValue("");
            }
        },
        [value],
    );

    return (
        <form onSubmit={submit} className="flex items-center gap-1 sm:gap-2 mt-2 sm:mt-3 min-w-0">
            <span className="text-[#4fc1ff] select-none hidden sm:inline text-[15px]">atharva@portfolio</span>
            <span className="text-[#4fc1ff] select-none sm:hidden text-[11px]">~</span>
            <span className="text-[#7a7e85] select-none text-[11px] sm:text-[15px]">$</span>
            <input
                ref={inputRef}
                autoFocus
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    indexRef.current = -1;
                }}
                onKeyDown={handleKeyDown}
                className="flex-1 min-w-0 bg-transparent outline-none text-[#98c379] caret-[#d4d4d4]
                    text-[11px] sm:text-[15px]"
                spellCheck={false}
                autoComplete="off"
                aria-label="Terminal command input"
            />
        </form>
    );
}
