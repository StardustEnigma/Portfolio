/**
 * All terminal command definitions.
 * Each key is the lowercase command name.
 * Returns { terminal: [...], info?: { title, content } }
 */

import ProjectsInfo from "../components/ProjectsInfo";

const COMMANDS = {
    about: () => ({
        terminal: [
            { text: "Atharva Mandle", cls: "text-[#22d3ee] font-semibold" },
            { text: "// Backend Developer • Java & Spring Boot", cls: "text-[#71717a]" },
            { text: "// Focused on scalable systems and clean architecture", cls: "text-[#71717a]" },
        ],
        info: {
            title: "About Me",
            content: (
                <div className="space-y-5 text-sm leading-relaxed">
                    <p>
                        I am a{" "}
                        <span className="text-[#fbbf24] font-medium">
                            2nd year undergraduate student
                        </span>{" "}
                        based in{" "}
                        <span className="text-[#22d3ee] font-medium">
                            Nagpur (NGP)
                        </span>,{" "}
                        focused on{" "}
                        <span className="text-[#c084fc]">backend development</span>{" "}
                        and{" "}
                        <span className="text-[#22d3ee]">
                            real-world software engineering
                        </span>{" "}
                        practices.
                    </p>

                    <div className="border-t border-[#27272a]" />

                    <div className="space-y-1">
                        <p className="text-[#22d3ee] font-medium">▸ Education</p>
                        <p className="text-[#a1a1aa] ml-4">
                            Undergraduate (2nd Year) with a Computer Science background.
                            Currently strengthening fundamentals in{" "}
                            <span className="text-[#34d399]">backend systems</span>.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#c084fc] font-medium">▸ Core Stack</p>
                        <p className="text-[#a1a1aa] ml-4">
                            <span className="text-[#22d3ee]">Java</span>,{" "}
                            <span className="text-[#22d3ee]">Spring Boot</span>,{" "}
                            <span className="text-[#22d3ee]">Spring Security (JWT)</span>,{" "}
                            REST APIs, PostgreSQL, Git & GitHub.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#34d399] font-medium">▸ Interests</p>
                        <p className="text-[#a1a1aa] ml-4">
                            Backend system design,{" "}
                            <span className="text-[#fb923c]">
                                authentication & authorization
                            </span>,{" "}
                            scalable APIs, and clean architecture.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#22d3ee] font-medium">▸ Current Focus</p>
                        <p className="text-[#a1a1aa] ml-4">
                            Building{" "}
                            <span className="text-[#34d399]">
                                production-grade Spring Boot projects
                            </span>, improving code quality, and understanding
                            real-world backend flows.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#fb7185] font-medium">▸ Goals</p>
                        <p className="text-[#a1a1aa] ml-4">
                            Secure backend internships, strengthen{" "}
                            <span className="text-[#fb923c]">system design</span>{" "}
                            skills, and grow into a backend engineer capable of building
                            scalable systems.
                        </p>
                    </div>

                    <p className="text-[#71717a] italic">
                        Actively learning, building, and preparing for real-world
                        backend roles and internships.
                    </p>
                </div>
            ),
        },
    }),

    skills: () => ({
        terminal: [
            "Java",
            "Spring Boot",
            "Spring Security (JWT)",
            "RESTful APIs",
            "PostgreSQL",
            "MongoDB",
            "Python",
            "React",
            "Git & GitHub",
        ].map((s) => ({
            text: `• ${s}`,
            cls: "text-[#34d399] ml-4",
        })),
        info: {
            title: "Technical Skills",
            content: (
                <div className="space-y-5 text-sm leading-relaxed">
                    <p>
                        My technical skill set is primarily focused on{" "}
                        <span className="text-[#c084fc] font-medium">
                            backend development
                        </span>, with hands-on experience in building{" "}
                        <span className="text-[#34d399]">
                            scalable and secure applications
                        </span>.
                    </p>

                    <div className="border-t border-[#27272a]" />

                    <div className="space-y-1">
                        <p className="text-[#fb923c] font-medium">▸ Backend Technologies</p>
                        <p className="text-[#a1a1aa] ml-4">
                            <span className="text-[#22d3ee]">Java</span>,{" "}
                            <span className="text-[#22d3ee]">Spring Boot</span>,{" "}
                            <span className="text-[#22d3ee]">Spring Security (JWT)</span>,{" "}
                            RESTful APIs
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#c084fc] font-medium">▸ Databases</p>
                        <p className="text-[#a1a1aa] ml-4">
                            <span className="text-[#22d3ee]">PostgreSQL</span>{" "}
                            — relational schema design, joins, and query optimization
                        </p>
                        <p className="text-[#a1a1aa] ml-4">
                            <span className="text-[#22d3ee]">MongoDB</span>{" "}
                            — document-based data modeling and flexible schemas
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#34d399] font-medium">▸ Frontend & UI</p>
                        <p className="text-[#a1a1aa] ml-4">
                            <span className="text-[#67e8f9]">React</span>{" "}
                            for building interactive user interfaces and
                            integrating with backend APIs
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#22d3ee] font-medium">▸ Other Languages</p>
                        <p className="text-[#a1a1aa] ml-4">
                            Python — scripting, problem-solving, and backend fundamentals
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#fb7185] font-medium">▸ Tools & Workflow</p>
                        <p className="text-[#a1a1aa] ml-4">
                            Git & GitHub for version control, collaboration,
                            and project management
                        </p>
                    </div>

                    <p className="text-[#71717a] italic">
                        Continuously improving backend depth while maintaining
                        practical full-stack awareness.
                    </p>
                </div>
            ),
        },
    }),

    projects: () => ({
        terminal: [            "SentinelAPI \u2013 Backend Security Intelligence Tool",            "NeoWallet – Digital Wallet System",
            "E-Commerce Enterprise Backend",
            "Challenge App",
        ].map((p) => ({
            text: `▸ ${p}`,
            cls: "text-[#fb923c] ml-4",
        })),
        info: {
            title: "Projects",
            content: <ProjectsInfo />,
        },
    }),

    contact: () => ({
        terminal: [
            { text: "linkedin   : atharva-mandle", cls: "text-[#22d3ee] ml-4" },
            { text: "github     : StardustEnigma", cls: "text-[#34d399] ml-4" },
            { text: "email      : atharvamandle19@gmail.com", cls: "text-[#c084fc] ml-4" },
            { text: "", cls: "" },
            { text: "hint → open contact details in info panel", cls: "text-[#71717a] italic ml-4" },
        ],
        info: {
            title: "Contact",
            content: (
                <div className="space-y-5 text-sm leading-relaxed">
                    <p>
                        You can connect with{" "}
                        <span className="text-[#fbbf24] font-medium">
                            Atharva Mandle
                        </span>{" "}
                        through the following professional channels.
                    </p>

                    <div className="border-t border-[#27272a]" />

                    <div className="space-y-1">
                        <p className="text-[#22d3ee] font-medium">▸ LinkedIn</p>
                        <p className="text-[#a1a1aa] ml-4">
                            Best platform for{" "}
                            <span className="text-[#34d399]">professional networking</span>,
                            internships, and backend opportunities.
                        </p>
                        <p className="ml-4">
                            <a
                                href="https://www.linkedin.com/in/atharva-mandle-5214312aa/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#22d3ee] underline underline-offset-2 hover:text-[#67e8f9]"
                            >
                                linkedin.com/in/atharva-mandle
                            </a>
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#34d399] font-medium">▸ GitHub</p>
                        <p className="text-[#a1a1aa] ml-4">
                            Explore{" "}
                            <span className="text-[#c084fc]">backend projects</span>,
                            Spring Boot systems, and code quality.
                        </p>
                        <p className="ml-4">
                            <a
                                href="https://github.com/StardustEnigma"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#34d399] underline underline-offset-2 hover:text-[#6ee7b7]"
                            >
                                github.com/StardustEnigma
                            </a>
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#c084fc] font-medium">▸ Email</p>
                        <p className="text-[#a1a1aa] ml-4">
                            For{" "}
                            <span className="text-[#fbbf24]">
                                direct and formal communication
                            </span>{" "}
                            related to internships or collaborations.
                        </p>
                        <p className="ml-4">
                            <a
                                href="mailto:atharvamandle19@gmail.com"
                                className="text-[#c084fc] underline underline-offset-2 hover:text-[#d8b4fe]"
                            >
                                atharvamandle19@gmail.com
                            </a>
                        </p>
                    </div>

                    <p className="text-[#71717a] italic">
                        Preferred contact method: LinkedIn.
                    </p>
                </div>
            ),
        },
    }),

    resume: () => {
        // Trigger download in the browser
        const link = document.createElement("a");
        link.href = "/Atharva_Mandle_Resume.pdf";
        link.download = "Atharva_Mandle_Resume.pdf";
        link.target = "_blank";
        link.rel = "noreferrer";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        return {
            terminal: [
                { text: "↓ Downloading Atharva_Mandle_Resume.pdf ...", cls: "text-[#34d399]" },
                { text: "hint → if download didn't start, click the link in the info panel", cls: "text-[#71717a] italic" },
            ],
            info: {
                title: "Resume",
                content: (
                    <div className="space-y-5 text-sm leading-relaxed">
                        <p>
                            Download or view the resume of{" "}
                            <span className="text-[#fbbf24] font-medium">Atharva Mandle</span>.
                        </p>

                        <div className="border-t border-[#27272a]" />

                        <div className="space-y-2">
                            <p className="text-[#22d3ee] font-medium">▸ Quick Links</p>
                            <p className="ml-4">
                                <a
                                    href="/Atharva_Mandle_Resume.pdf"
                                    download="Atharva_Mandle_Resume.pdf"
                                    className="text-[#22d3ee] underline underline-offset-2 hover:text-[#67e8f9]"
                                >
                                    ↓ Download PDF
                                </a>
                            </p>
                            <p className="ml-4">
                                <a
                                    href="/Atharva_Mandle_Resume.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[#34d399] underline underline-offset-2 hover:text-[#6ee7b7]"
                                >
                                    ↗ Open in new tab
                                </a>
                            </p>
                        </div>

                        <div className="border-t border-[#27272a]" />

                        <div className="space-y-1">
                            <p className="text-[#c084fc] font-medium">▸ Highlights</p>
                            <p className="text-[#a1a1aa] ml-4">
                                <span className="text-[#22d3ee]">Java</span> &{" "}
                                <span className="text-[#22d3ee]">Spring Boot</span>{" "}
                                backend development
                            </p>
                            <p className="text-[#a1a1aa] ml-4">
                                REST APIs, Spring Security (JWT), PostgreSQL
                            </p>
                            <p className="text-[#a1a1aa] ml-4">
                                Production-grade projects with clean architecture
                            </p>
                        </div>

                       
                    </div>
                ),
            },
        };
    },

    /* ── Easter egg commands ── */

    neofetch: () => ({
        terminal: [
            {
                text: (
                    <div className="overflow-x-auto py-1">
                        <pre className="text-[#fb923c] text-[10px] sm:text-xs leading-tight whitespace-pre">{`      _   _   _
     /_\\ | |_| |__   __ _ _ ____   ____ _
    / _ \\| __| '_ \\ / _\` | '__\\ \\ / / _\` |
   / ___ \\ |_| | | | (_| | |   \\ V / (_| |
  /_/   \\_\\__|_| |_|\\__,_|_|    \\_/ \\__,_|`}</pre>
                        <div className="mt-2 space-y-0.5 text-[11px] sm:text-[13px]">
                            <div className="flex"><span className="text-[#71717a] w-20 shrink-0">OS</span><span className="text-[#22d3ee]">Portfolio IDE v2.0</span></div>
                            <div className="flex"><span className="text-[#71717a] w-20 shrink-0">Host</span><span className="text-[#c084fc]">Atharva Mandle</span></div>
                            <div className="flex"><span className="text-[#71717a] w-20 shrink-0">Kernel</span><span className="text-[#34d399]">React 19.2 + Vite 7</span></div>
                            <div className="flex"><span className="text-[#71717a] w-20 shrink-0">Shell</span><span className="text-[#22d3ee]">terminal.jsx</span></div>
                            <div className="flex"><span className="text-[#71717a] w-20 shrink-0">Theme</span><span className="text-[#a78bfa]">Obsidian Ember</span></div>
                            <div className="flex"><span className="text-[#71717a] w-20 shrink-0">Stack</span><span className="text-[#22d3ee]">Java / Spring Boot / PostgreSQL</span></div>
                            <div className="flex"><span className="text-[#71717a] w-20 shrink-0">Uptime</span><span className="text-[#fb923c]">since 2024</span></div>
                        </div>
                        <div className="flex gap-1 mt-3">
                            {['#fb7185','#fb923c','#f59e0b','#fbbf24','#34d399','#22d3ee','#c084fc','#e4e4e7'].map(c => (
                                <span key={c} style={{backgroundColor: c}} className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm inline-block" />
                            ))}
                        </div>
                    </div>
                ),
                cls: "",
                animated: false,
            }
        ],
    }),

    whoami: () => ({
        terminal: [
            { text: "atharva-mandle", cls: "text-[#34d399]" },
        ],
    }),

    date: () => {
        const now = new Date();
        return {
            terminal: [
                { text: now.toString(), cls: "text-[#fb923c]" },
            ],
        };
    },

    pwd: () => ({
        terminal: [
            { text: "/home/atharva/portfolio", cls: "text-[#22d3ee]" },
        ],
    }),

    ls: () => ({
        terminal: [
            { text: "About.jsx   Skills.jsx   Projects.jsx   Contact.jsx   Resume.jsx", cls: "text-[#22d3ee]" },
            { text: "package.json   vite.config.js   README.md", cls: "text-[#34d399]" },
        ],
    }),

    cat: () => ({
        terminal: [
            { text: "    /\\_/\\", cls: "text-[#fb923c]" },
            { text: "   ( o.o )", cls: "text-[#fb923c]" },
            { text: "    > ^ <", cls: "text-[#fb923c]" },
            { text: "", cls: "" },
            { text: "  meow~ (try: cat <filename> -- just kidding, this is a portfolio)", cls: "text-[#71717a] italic" },
        ],
    }),

    sudo: () => ({
        terminal: [
            { text: "[sudo] password for atharva: ********", cls: "text-[#fb7185]" },
            { text: "Nice try. You don't have root access to this portfolio.", cls: "text-[#fb7185]" },
            { text: "// incident reported to /dev/null", cls: "text-[#71717a] italic" },
        ],
    }),

    coffee: () => ({
        terminal: [
            { text: "      )  )", cls: "text-[#fb923c]" },
            { text: "     (  ( )", cls: "text-[#fb923c]" },
            { text: "      )  )", cls: "text-[#fb923c]" },
            { text: "    .------.", cls: "text-[#71717a]" },
            { text: "    |      |]", cls: "text-[#71717a]" },
            { text: "    |      |", cls: "text-[#71717a]" },
            { text: "    `------'", cls: "text-[#71717a]" },
            { text: "", cls: "" },
            { text: "  Brewing Java... (pun intended)", cls: "text-[#fb923c] italic" },
        ],
    }),

    help: () => ({
        terminal: [
            { text: "about", cls: "text-[#34d399] font-medium" },
            { text: "  → who am I", cls: "text-[#a1a1aa]" },
            { text: "skills", cls: "text-[#34d399] font-medium" },
            { text: "  → technical expertise", cls: "text-[#a1a1aa]" },
            { text: "projects", cls: "text-[#34d399] font-medium" },
            { text: "  → featured backend work", cls: "text-[#a1a1aa]" },
            { text: "contact", cls: "text-[#34d399] font-medium" },
            { text: "  → how to reach me", cls: "text-[#a1a1aa]" },
            { text: "resume", cls: "text-[#34d399] font-medium" },
            { text: "  → download my resume", cls: "text-[#a1a1aa]" },
            { text: "clear", cls: "text-[#34d399] font-medium" },
            { text: "  → clear terminal output", cls: "text-[#a1a1aa]" },
            { text: "help", cls: "text-[#34d399] font-medium" },
            { text: "  → list available commands", cls: "text-[#a1a1aa]" },
            { text: "", cls: "" },
            { text: "// Easter eggs: neofetch, whoami, date, ls, pwd, cat, sudo, coffee", cls: "text-[#52525b] italic" },
        ],
        info: {
            title: "Help",
            content: (
                <div className="space-y-5 text-sm leading-relaxed">
                    <p>
                        This terminal provides quick access to{" "}
                        <span className="text-[#22d3ee] font-medium">
                            portfolio sections
                        </span>{" "}
                        using simple commands, similar to a developer CLI.
                    </p>

                    <div className="border-t border-[#27272a]" />

                    <div className="space-y-1">
                        <p className="text-[#34d399] font-medium">▸ Available Commands</p>
                        <p className="text-[#a1a1aa] ml-4">
                            <span className="text-[#34d399]">about</span>{" "}
                            — personal background and current focus
                        </p>
                        <p className="text-[#a1a1aa] ml-4">
                            <span className="text-[#34d399]">skills</span>{" "}
                            — technical stack and core competencies
                        </p>
                        <p className="text-[#a1a1aa] ml-4">
                            <span className="text-[#34d399]">projects</span>{" "}
                            — flagship backend projects and system design work
                        </p>
                        <p className="text-[#a1a1aa] ml-4">
                            <span className="text-[#34d399]">contact</span>{" "}
                            — professional contact information
                        </p>
                        <p className="text-[#a1a1aa] ml-4">
                            <span className="text-[#34d399]">resume</span>{" "}
                            — download resume as PDF
                        </p>
                        <p className="text-[#a1a1aa] ml-4">
                            <span className="text-[#34d399]">clear</span>{" "}
                            — reset the terminal output
                        </p>
                    </div>

                    <div className="border-t border-[#27272a]" />

                    <div className="space-y-1">
                        <p className="text-[#52525b] font-medium">▸ Easter Eggs</p>
                        <p className="text-[#52525b] ml-4">
                            Try: neofetch, whoami, date, ls, pwd, cat, sudo, coffee
                        </p>
                    </div>

                    <div className="border-t border-[#27272a]" />

                    <div className="space-y-1">
                        <p className="text-[#c084fc] font-medium">▸ Usage</p>
                        <p className="text-[#a1a1aa] ml-4">
                            Type a command and press{" "}
                            <span className="text-[#22d3ee]">Enter</span>, or click a command
                            pill to navigate quickly.
                        </p>
                        <p className="text-[#a1a1aa] ml-4">
                            Use{" "}
                            <span className="text-[#22d3ee]">↑ / ↓</span>{" "}
                            arrow keys to cycle through command history.
                        </p>
                        <p className="text-[#a1a1aa] ml-4">
                            Press{" "}
                            <span className="text-[#22d3ee]">Tab</span>{" "}
                            to autocomplete a command name.
                        </p>
                        <p className="text-[#a1a1aa] ml-4">
                            Press{" "}
                            <span className="text-[#22d3ee]">Ctrl + L</span>{" "}
                            to clear the terminal.
                        </p>
                    </div>

                    <p className="text-[#71717a] italic">
                        Designed to mimic a lightweight developer terminal for fast navigation.
                    </p>
                </div>
            ),
        },
    }),
};

/** List of all valid command names (for tab-completion, includes clear) */
export const COMMAND_NAMES = [...Object.keys(COMMANDS), "clear"];

/**
 * Resolve a command string into its output.
 * @returns {{ terminal: Array, info?: { title, content } }}
 */
export function getOutput(cmd) {
    const key = cmd.trim().toLowerCase();
    if (!key) return { terminal: [] };
    const handler = COMMANDS[key];

    if (handler) return handler();

    return {
        terminal: [
            { text: `command not found: ${cmd}`, cls: "text-[#fb7185]" },
            { text: 'type "help" for available commands', cls: "text-[#71717a] italic" },
        ],
    };
}
