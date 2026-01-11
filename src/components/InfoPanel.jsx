export default function InfoPanel({ info, mobile = false, onClose }) {
    if (!info) return null;

    return (
        <div className="h-full bg-[#181818] border border-[#303030] rounded-lg flex flex-col">

            {/* Header */}
            <div className="h-10 px-4 flex items-center justify-between border-b border-[#303030] shrink-0">
                <span className="text-[#d4d4d4]">
                    {info.title}
                </span>

                {mobile && (
                    <button
                        onClick={onClose}
                        className="text-xs px-2 py-1 border border-[#303030] rounded text-[#d4d4d4]"
                    >
                        Close
                    </button>
                )}
            </div>

            {/* Scrollable + animated content */}
            <div
                key={info.title} // 🔥 re-trigger animation on change
                className="
                    flex-1
                    overflow-y-auto
                    p-5
                    text-sm
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
