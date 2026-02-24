import { useState, useRef, useCallback } from "react";
import Explorer from "./components/Explorer";
import Terminal from "./components/Terminal";
import InfoPanel from "./components/InfoPanel";
import StatusBar from "./components/StatusBar";
import ActivityBar from "./components/ActivityBar";
import TabBar, { useTabs } from "./components/TabBar";
import BootSplash from "./components/BootSplash";
import { getOutput } from "./data/commands";
import CommandPills from "./components/CommandPills";

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
        <div className="h-[100dvh] flex flex-col relative z-10">

            {/* ===== TOP IDE HEADER ===== */}
            <div className="h-10 sm:h-12 px-3 sm:px-4 flex items-center justify-between
                    border-b border-[#27272a]/50
                    bg-[#0e0e11]/70 backdrop-blur-xl text-xs sm:text-sm shrink-0
                    relative z-50 overflow-visible">

                <div className="flex items-center gap-2 sm:gap-3 min-w-0 shrink-0">
                    {/* Window dots */}
                    <div className="hidden sm:flex items-center gap-1.5 mr-2 shrink-0">
                        <span className="w-3 h-3 rounded-full bg-[#fb7185]/80" />
                        <span className="w-3 h-3 rounded-full bg-[#fbbf24]/80" />
                        <span className="w-3 h-3 rounded-full bg-[#34d399]/80" />
                    </div>
                    {/* Mobile branding */}
                    <span className="sm:hidden text-[#f59e0b] font-semibold text-sm">{'{ '}<span className="text-[#e4e4e7]">AM</span><span className="text-[#c084fc]">{' }'}</span></span>
                    <span className="text-[#e4e4e7] font-semibold truncate hidden sm:inline">Atharva_Mandle</span>
                </div>

                {/* Command pills — desktop only in header */}
                <div className="hidden sm:flex flex-1 justify-center">
                    <CommandPills onRun={handleFileClick} />
                </div>

                {/* Right side */}
                <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[#52525b] text-[11px]">Portfolio IDE</span>
                </div>
            </div>

            {/* ===== MAIN IDE AREA ===== */}
            <div className="flex-1 flex overflow-hidden">

                {/* Activity Bar (far left) */}
                <ActivityBar />

                {/* Workspace area */}
                <div className="flex-1 p-0 sm:p-3 md:p-4 overflow-hidden">
                    <div className="relative h-full sm:rounded-xl sm:border sm:border-[#27272a]/40
                          bg-[#0e0e11]/40 backdrop-blur-xl
                          flex gap-0 sm:gap-4 p-0 sm:p-3 md:p-4 overflow-hidden">

                        {/* Explorer */}
                        <div className="hidden md:block w-64 shrink-0">
                            <Explorer
                                activeCommand={activeCommand}
                                onFileClick={handleFileClick}
                            />
                        </div>

                        {/* Terminal */}
                        <div className="flex-[1.2] min-w-0">
                            <Terminal
                                setInfo={handleSetInfo}
                                onShowInfoMobile={() => setShowInfoMobile(true)}
                                onCommand={handleCommandWithTabs}
                                onPillRun={handleFileClick}
                                ref={runCommandRef}
                            />
                        </div>

                        {/* Info Panel with Tabs (Desktop) */}
                        <div className="hidden lg:flex flex-col flex-[1.3] min-w-0">
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
                                className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm lg:hidden"
                                onClick={() => setShowInfoMobile(false)}
                            >
                                <div
                                    className="absolute right-0 top-0 h-full w-full sm:w-[85%]
                                    bg-[#111113]/95 backdrop-blur-xl border-l border-[#27272a]/50 animate-slide-in"
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
