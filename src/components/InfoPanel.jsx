export default function InfoPanel({ info, mobile = false, onClose }) {
    if (!info) return null;

    return (
        <div className="h-full bg-[#181818] border border-[#303030] rounded-lg flex flex-col">

            {/* Header */}
            <div className="h-10 sm:h-11 px-3 sm:px-4 flex items-center justify-between border-b border-[#303030] shrink-0">
                <span className="text-[#d4d4d4] text-sm">
                    {info.title}
                </span>

                {mobile && (
                    <button
                        onClick={onClose}
                        className="text-xs px-3 py-1.5 border border-[#303030] rounded-md
                            text-[#d4d4d4] bg-[#252526] active:bg-[#303030] transition-colors"
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
                    p-3 sm:p-5
                    text-xs sm:text-sm
                    text-[#d4d4d4]
                    leading-relaxed
                    animate-info-fade
                "
            >
                {info.content}
            </div>
        </div>
    );
}
