const FILE_TREE = [
    { label: "▾ portfolio_atharva", indent: 0, bold: true },
    { label: "▾ src", indent: 4 },
    { label: "▾ components", indent: 8 },
    { label: "Explorer.jsx", indent: 12, color: "text-[#fbbf24]" },
    { label: "Terminal.jsx", indent: 12, color: "text-[#fbbf24]" },
    { label: "InfoPanel.jsx", indent: 12, color: "text-[#fbbf24]" },
    { label: "▾ pages", indent: 8 },
    { label: "About.jsx", indent: 12, color: "text-[#fbbf24]", cmd: "about" },
    { label: "Skills.jsx", indent: 12, color: "text-[#fbbf24]", cmd: "skills" },
    { label: "Projects.jsx", indent: 12, color: "text-[#fbbf24]", cmd: "projects" },
    { label: "Contact.jsx", indent: 12, color: "text-[#fbbf24]", cmd: "contact" },
    { label: "Resume.jsx", indent: 12, color: "text-[#fbbf24]", cmd: "resume" },
    { label: "App.jsx", indent: 4, color: "text-[#fbbf24]" },
    { label: "main.jsx", indent: 4, color: "text-[#fbbf24]" },
    { label: "index.css", indent: 4, color: "text-[#22d3ee]" },
    { label: "package.json", indent: 4, color: "text-[#fb923c]" },
    { label: "vite.config.js", indent: 4, color: "text-[#a78bfa]" },
    { label: "README.md", indent: 4, color: "text-[#34d399]" },
];

export default function Explorer({ activeCommand, onFileClick }) {
    return (
        <div className="h-full bg-[#111113]/50 border border-[#27272a]/40 rounded-lg p-3 text-[13px] leading-[1.6] text-[#d4d4d8]">
            <div className="text-[#a1a1aa] mb-2">Project</div>

            <ul className="space-y-[2px]">
                {FILE_TREE.map((item, i) => {
                    const isActive = item.cmd && item.cmd === activeCommand;
                    const clickable = !!item.cmd;

                    return (
                        <li
                            key={i}
                            style={{ marginLeft: `${item.indent * 4}px` }}
                            className={[
                                item.bold ? "font-medium" : "",
                                item.color || "",
                                isActive ? "bg-[#f59e0b]/10 rounded px-1 -mx-1" : "",
                                clickable ? "cursor-pointer hover:bg-[#f59e0b]/10 rounded px-1 -mx-1 transition-colors" : "",
                            ].join(" ")}
                            onClick={clickable ? () => onFileClick?.(item.cmd) : undefined}
                        >
                            {item.label}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
