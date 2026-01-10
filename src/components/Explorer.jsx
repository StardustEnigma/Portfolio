export default function Explorer() {
    return (
        <div className="h-full bg-[#1e1f22] border border-[#2b2d30] rounded-lg p-3 text-[13px] leading-[1.6] text-[#cfd1d6]">

            <div className="text-[#a1a3a6] mb-2">
                Project
            </div>

            <ul className="space-y-[2px]">

                <li className="font-medium">
                    ▾ portfolio_atharva
                </li>

                <li className="ml-4">
                    ▾ src
                </li>

                <li className="ml-8">
                    ▾ components
                </li>
                <li className="ml-12 text-[#e5c07b]">Explorer.jsx</li>
                <li className="ml-12 text-[#e5c07b]">Terminal.jsx</li>
                <li className="ml-12 text-[#e5c07b]">InfoPanel.jsx</li>

                <li className="ml-8">
                    ▾ pages
                </li>
                <li className="ml-12 text-[#e5c07b]">Home.jsx</li>
                <li className="ml-12 text-[#e5c07b]">About.jsx</li>
                <li className="ml-12 text-[#e5c07b]">Projects.jsx</li>
                <li className="ml-12 text-[#e5c07b]">Contact.jsx</li>

                <li className="ml-4 text-[#e5c07b]">App.jsx</li>
                <li className="ml-4 text-[#e5c07b]">main.jsx</li>
                <li className="ml-4 text-[#61afef]">index.css</li>

                <li className="ml-4 text-[#d19a66]">package.json</li>
                <li className="ml-4 text-[#c678dd]">vite.config.js</li>
                <li className="ml-4 text-[#98c379]">README.md</li>

            </ul>
        </div>
    );
}
