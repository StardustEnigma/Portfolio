import { useState } from "react";
import Explorer from "./components/Explorer";
import Terminal from "./components/Terminal";
import InfoPanel from "./components/InfoPanel";

export default function App() {
    const [info, setInfo] = useState({
        title: "Info",
        content: "Run a command to see details here.",
    });

    const [showInfoMobile, setShowInfoMobile] = useState(false);
    return (
        <div className="h-screen bg-[#1e1e1e] flex flex-col">

            {/* ===== TOP IDE HEADER ===== */}
            <div className="h-11 px-4 flex items-center
                    border-b border-[#303030]
                    bg-[#252526] text-sm shrink-0">

                {/* Left */}
                <div className="flex items-center gap-3">
                    <span className="text-[#c5c5c5] font-semibold">Atharva_Mandle</span>
                    <span className="text-[#7f848e]">main</span>
                </div>
            </div>

            {/* ===== MAIN IDE AREA ===== */}
            <div className="flex-1 p-3 sm:p-4 overflow-hidden">

                <div className="relative h-full rounded-xl border border-[#303030]
                      bg-[#1e1f22]/80 backdrop-blur-md
                      flex gap-4 p-3 sm:p-4 overflow-hidden">

                    {/* Explorer */}
                    <div className="hidden md:block w-64 shrink-0">
                        <Explorer />
                    </div>

                    {/* Terminal */}
                    <div className="flex-[1.1] min-w-0">
                        <Terminal
                            setInfo={setInfo}
                            onShowInfoMobile={() => setShowInfoMobile(true)}
                        />
                    </div>

                    {/* Info Panel (Desktop) */}
                    <div className="hidden lg:block flex-[1.2] min-w-0">
                        <InfoPanel info={info} />
                    </div>

                    {/* Info Panel (Mobile Overlay) */}
                    {showInfoMobile && (
                        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden">
                            <div className="absolute right-0 top-0 h-full w-full sm:w-[85%]
                            bg-[#181818] border-l border-[#303030]">
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
    );
}
