export default function TerminalLayout({ children }) {
    return (
        <div className="h-full border border-[#3c3c3c] rounded-md bg-[#1e1e1e] flex flex-col">

            {/* TAB HEADER */}
            <div className="h-9 px-4 flex items-center border-b border-[#3c3c3c] bg-[#252526]">
                <span className="text-[#e5e7eb] font-medium">Terminal</span>
            </div>

            {/* BODY */}
            <div className="flex-1 p-4 text-sm overflow-hidden">
                {children}
            </div>

        </div>
    );
}
