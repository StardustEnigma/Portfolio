import { useState, useCallback } from "react";

/**
 * Tab bar above the info panel.
 * Tracks every command that was run as an "open file" tab.
 * Clicking a tab re-selects its info content.
 */
const TAB_LABELS = {
    about: "About.jsx",
    skills: "Skills.jsx",
    projects: "Projects.jsx",
    contact: "Contact.jsx",
    resume: "Resume.jsx",
    help: "Help.md",
};

export default function TabBar({ tabs, activeTab, onSelect, onClose, onCloseAll }) {
    if (tabs.length === 0) return null;

    return (
        <div className="flex items-center h-9 border-b border-[#303030] bg-[#1e1f22]">
            {/* Scrollable tabs */}
            <div className="flex-1 flex items-center h-full overflow-x-auto no-scrollbar">
                {tabs.map((tab) => {
                    const isActive = tab === activeTab;
                    const label = TAB_LABELS[tab] || `${tab}.jsx`;

                    return (
                        <div
                            key={tab}
                            className={`group flex items-center gap-1.5 px-3 h-full text-xs border-r border-[#303030] cursor-pointer
                                shrink-0 transition-colors duration-100
                                ${isActive
                                    ? "bg-[#181818] text-[#d4d4d4] border-t-2 border-t-[#4b9cff]"
                                    : "bg-[#1e1f22] text-[#7a7e85] hover:bg-[#252526] border-t-2 border-t-transparent"
                                }`}
                            onClick={() => onSelect(tab)}
                        >
                            {/* File icon dot */}
                            <span className={`w-2 h-2 rounded-full shrink-0 ${isActive ? "bg-[#4b9cff]" : "bg-[#505050]"}`}/>
                            <span>{label}</span>
                            {/* Close button */}
                            <button
                                onClick={(e) => { e.stopPropagation(); onClose(tab); }}
                                className="ml-1 opacity-0 group-hover:opacity-100 hover:text-[#f44747] transition-opacity text-[10px]"
                                aria-label={`Close ${label}`}
                            >
                                ✕
                            </button>
                        </div>
                    );
                })}
            </div>

            {/* Close all button — pinned right */}
            {tabs.length > 1 && (
                <button
                    onClick={onCloseAll}
                    className="shrink-0 px-2.5 h-full text-[10px] text-[#7a7e85] hover:text-[#f44747]
                        border-l border-[#303030] transition-colors"
                    title="Close all tabs"
                    aria-label="Close all tabs"
                >
                    ✕ all
                </button>
            )}
        </div>
    );
}

/**
 * Hook to manage open tabs state.
 */
export function useTabs() {
    const [tabs, setTabs] = useState([]);
    const [activeTab, setActiveTab] = useState(null);

    const openTab = useCallback((cmd) => {
        if (!cmd || cmd === "clear") return;
        setTabs((prev) => prev.includes(cmd) ? prev : [...prev, cmd]);
        setActiveTab(cmd);
    }, []);

    const closeTab = useCallback((cmd) => {
        setTabs((prev) => {
            const next = prev.filter((t) => t !== cmd);
            // If we closed the active tab, activate the nearest one
            if (cmd === activeTab) {
                const idx = prev.indexOf(cmd);
                const newActive = next[Math.min(idx, next.length - 1)] || null;
                setActiveTab(newActive);
            }
            return next;
        });
    }, [activeTab]);

    const selectTab = useCallback((cmd) => {
        setActiveTab(cmd);
    }, []);

    const closeAllTabs = useCallback(() => {
        setTabs([]);
        setActiveTab(null);
    }, []);

    return { tabs, activeTab, openTab, closeTab, closeAllTabs, selectTab };
}
