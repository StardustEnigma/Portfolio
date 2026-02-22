import { COMMAND_NAMES } from "../data/commands";

export default function CommandPills({ onRun }) {
    // On mobile, show only core commands to save space
    const CORE = ["about", "skills", "projects", "contact", "resume"];

    return (
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
            {COMMAND_NAMES.map((c) => (
                <button
                    key={c}
                    onClick={() => onRun(c)}
                    className={`
                        px-2 py-0.5 sm:px-4 sm:py-1.5
                        text-[10px] sm:text-[13px]
                        rounded-md
                        border border-[#303030]
                        bg-[#1e1f22]
                        text-[#d4d4d4]
                        hover:bg-[#23262b]
                        hover:border-[#4b9cff]
                        hover:text-white
                        active:bg-[#23262b]
                        active:border-[#4b9cff]
                        transition-colors duration-150
                        ${!CORE.includes(c) ? "hidden sm:inline-flex" : ""}
                    `}
                >
                    {c}
                </button>
            ))}

            {/* Mobile-only "more" pill that runs help */}
            <button
                onClick={() => onRun("help")}
                className="
                    sm:hidden
                    px-2 py-0.5
                    text-[10px]
                    rounded-md
                    border border-[#505050] border-dashed
                    bg-[#1e1f22]
                    text-[#7a7e85]
                    active:bg-[#23262b]
                    active:border-[#4b9cff]
                    transition-colors duration-150
                "
            >
                more...
            </button>
        </div>
    );
}
