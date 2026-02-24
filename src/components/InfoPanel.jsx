export default function InfoPanel({ info, mobile = false, onClose }) {
    if (!info) return null;

    return (
        <div className="h-full bg-[#111113]/50 border border-[#27272a]/40 rounded-lg flex flex-col">

            {/* Header */}
            <div className={`${mobile ? 'h-12' : 'h-10 sm:h-11'} px-4 sm:px-4 flex items-center justify-between border-b border-[#27272a]/40 shrink-0`}>
                <span className="text-[#e4e4e7] text-sm font-medium">
                    {info.title}
                </span>

                {mobile && (
                    <button
                        onClick={onClose}
                        className="text-xs px-4 py-2 border border-[#27272a] rounded-lg
                            text-[#e4e4e7] bg-[#18181b]/60 active:bg-[#27272a]/60 transition-colors
                            font-medium"
                    >
                        ✕ Close
                    </button>
                )}
            </div>

            {/* Scrollable + animated content */}
            <div
                key={info.title}
                className="
                    flex-1
                    overflow-y-auto
                    p-4 sm:p-5
                    text-xs sm:text-sm
                    text-[#e4e4e7]
                    leading-relaxed
                    animate-info-fade
                "
            >
                {info.content}
            </div>
        </div>
    );
}
