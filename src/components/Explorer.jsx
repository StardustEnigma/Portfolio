const FILE_TREE = [
    { label: "▾ portfolio_atharva", indent: 0, bold: true },
    { label: "▾ src", indent: 4 },
    { label: "▾ components", indent: 8 },
    { label: "Explorer.jsx", indent: 12, color: "text-[#e5c07b]" },
    { label: "Terminal.jsx", indent: 12, color: "text-[#e5c07b]" },
    { label: "InfoPanel.jsx", indent: 12, color: "text-[#e5c07b]" },
    { label: "▾ pages", indent: 8 },
    { label: "About.jsx", indent: 12, color: "text-[#e5c07b]", cmd: "about" },
    { label: "Skills.jsx", indent: 12, color: "text-[#e5c07b]", cmd: "skills" },
    { label: "Projects.jsx", indent: 12, color: "text-[#e5c07b]", cmd: "projects" },
    { label: "Contact.jsx", indent: 12, color: "text-[#e5c07b]", cmd: "contact" },
    { label: "Resume.jsx", indent: 12, color: "text-[#e5c07b]", cmd: "resume" },
    { label: "App.jsx", indent: 4, color: "text-[#e5c07b]" },
    { label: "main.jsx", indent: 4, color: "text-[#e5c07b]" },
    { label: "index.css", indent: 4, color: "text-[#61afef]" },
    { label: "package.json", indent: 4, color: "text-[#d19a66]" },
    { label: "vite.config.js", indent: 4, color: "text-[#c678dd]" },
    { label: "README.md", indent: 4, color: "text-[#98c379]" },
];

export default function Explorer({ activeCommand, onFileClick }) {
    return (
        <div className="h-full bg-[#1e1f22] border border-[#2b2d30] rounded-lg p-3 text-[13px] leading-[1.6] text-[#cfd1d6]">
            <div className="text-[#a1a3a6] mb-2">Project</div>

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
                                isActive ? "bg-[#2a2d32] rounded px-1 -mx-1" : "",
                                clickable ? "cursor-pointer hover:bg-[#2a2d32] rounded px-1 -mx-1 transition-colors" : "",
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
