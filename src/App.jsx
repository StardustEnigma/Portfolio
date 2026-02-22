import { useState, useRef, useCallback } from "react";
import Explorer from "./components/Explorer";
import Terminal from "./components/Terminal";
import InfoPanel from "./components/InfoPanel";
import StatusBar from "./components/StatusBar";
import ActivityBar from "./components/ActivityBar";
import TabBar, { useTabs } from "./components/TabBar";
import BootSplash from "./components/BootSplash";
import { getOutput } from "./data/commands";

export default function App() {
    const [booted, setBooted] = useState(false);

    const [info, setInfo] = useState({
        title: "Info",
        content: "Run a command to see details here.",
    });

    const [showInfoMobile, setShowInfoMobile] = useState(false);
    const [activeCommand, setActiveCommand] = useState(null);

    // Tab management for Info Panel
    const { tabs, activeTab, openTab, closeTab, closeAllTabs, selectTab } = useTabs();
    const infoCache = useRef({}); // cache info content per command

    // Ref to imperatively run a command from outside the Terminal
    const runCommandRef = useRef(null);

    const handleFileClick = useCallback((cmd) => {
        runCommandRef.current?.(cmd);
    }, []);

    const handleCommand = useCallback((cmd) => {
        setActiveCommand(cmd === "clear" ? null : cmd);
    }, []);

    // When terminal sets info, also open a tab
    const handleSetInfo = useCallback((newInfo) => {
        setInfo(newInfo);
    }, []);

    // Called after a command runs — sync tabs
    const handleCommandWithTabs = useCallback((cmd) => {
        handleCommand(cmd);
        // Open a tab if the command has info content
        if (cmd !== "clear") {
            const result = getOutput(cmd);
            if (result.info) {
                infoCache.current[cmd] = result.info;
                openTab(cmd);
            }
        }
    }, [handleCommand, openTab]);

    // When a tab is selected, restore its info
    const handleTabSelect = useCallback((cmd) => {
        selectTab(cmd);
        const cached = infoCache.current[cmd];
        if (cached) setInfo(cached);
    }, [selectTab]);

    // When a tab is closed
    const handleTabClose = useCallback((cmd) => {
        closeTab(cmd);
        delete infoCache.current[cmd];
    }, [closeTab]);

    // When all tabs are closed
    const handleCloseAll = useCallback(() => {
        closeAllTabs();
        infoCache.current = {};
        setInfo({ title: "Info", content: "Run a command to see details here." });
    }, [closeAllTabs]);

    if (!booted) {
        return <BootSplash onDone={() => setBooted(true)} />;
    }

    return (
        <div className="h-screen bg-[#1e1e1e] flex flex-col">

            {/* ===== TOP IDE HEADER ===== */}
            <div className="h-10 sm:h-11 px-3 sm:px-4 flex items-center
                    border-b border-[#303030]
                    bg-[#252526] text-xs sm:text-sm shrink-0">

                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    {/* Window dots */}
                    <div className="hidden sm:flex items-center gap-1.5 mr-2 shrink-0">
                        <span className="w-3 h-3 rounded-full bg-[#f44747]/80" />
                        <span className="w-3 h-3 rounded-full bg-[#d7ba7d]/80" />
                        <span className="w-3 h-3 rounded-full bg-[#6aab73]/80" />
                    </div>
                    <span className="text-[#c5c5c5] font-semibold truncate">Atharva_Mandle</span>
                    <span className="text-[#7f848e] hidden sm:inline">—</span>
                    <span className="text-[#7f848e] hidden sm:inline">Portfolio IDE</span>
                </div>
            </div>

            {/* ===== MAIN IDE AREA ===== */}
            <div className="flex-1 flex overflow-hidden">

                {/* Activity Bar (far left) */}
                <ActivityBar />

                {/* Workspace area */}
                <div className="flex-1 p-1.5 sm:p-3 md:p-4 overflow-hidden">
                    <div className="relative h-full rounded-lg sm:rounded-xl border border-[#303030]
                          bg-[#1e1f22]/80 backdrop-blur-md
                          flex gap-2 sm:gap-4 p-1.5 sm:p-3 md:p-4 overflow-hidden">

                        {/* Explorer */}
                        <div className="hidden md:block w-64 shrink-0">
                            <Explorer
                                activeCommand={activeCommand}
                                onFileClick={handleFileClick}
                            />
                        </div>

                        {/* Terminal */}
                        <div className="flex-[1.4] min-w-0">
                            <Terminal
                                setInfo={handleSetInfo}
                                onShowInfoMobile={() => setShowInfoMobile(true)}
                                onCommand={handleCommandWithTabs}
                                ref={runCommandRef}
                            />
                        </div>

                        {/* Info Panel with Tabs (Desktop) */}
                        <div className="hidden lg:flex flex-col flex-1 min-w-0">
                            <TabBar
                                tabs={tabs}
                                activeTab={activeTab}
                                onSelect={handleTabSelect}
                                onClose={handleTabClose}
                                onCloseAll={handleCloseAll}
                            />
                            <div className="flex-1 min-h-0">
                                <InfoPanel info={info} />
                            </div>
                        </div>

                        {/* Info Panel (Mobile Overlay) */}
                        {showInfoMobile && (
                            <div
                                className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
                                onClick={() => setShowInfoMobile(false)}
                            >
                                <div
                                    className="absolute right-0 top-0 h-full w-full sm:w-[85%]
                                    bg-[#181818] border-l border-[#303030] animate-slide-in"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <InfoPanel
                                        info={info}
                                        mobile
                                        onClose={() => setShowInfoMobile(false)}
                                    />
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            {/* ===== BOTTOM STATUS BAR ===== */}
            <StatusBar activeCommand={activeCommand} />
        </div>
    );
}
