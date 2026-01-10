export default function CommandPills({ onRun }) {
    return (
        <div className="flex flex-wrap gap-2 mb-3">
            {["about", "skills", "projects", "contact", "help"].map((c) => (
                <button
                    key={c}
                    onClick={() => onRun(c)}
                    className="
            px-4 py-1.5
            text-sm
            rounded-md
            border border-[#303030]
            bg-[#1e1f22]
            text-[#d4d4d4]

            hover:bg-[#23262b]
            hover:border-[#4b9cff]
            hover:text-white

            transition-colors duration-150
          "
                >
                    {c}
                </button>
            ))}
        </div>
    );
}
