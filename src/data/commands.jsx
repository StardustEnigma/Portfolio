/**
 * All terminal command definitions.
 * Each key is the lowercase command name.
 * Returns { terminal: [...], info?: { title, content } }
 */

import ProjectsInfo from "../components/ProjectsInfo";

const COMMANDS = {
    about: () => ({
        terminal: [
            { text: "Atharva Mandle", cls: "text-[#d7ba7d] font-semibold" },
            { text: "// Backend Developer • Java & Spring Boot", cls: "text-[#808080]" },
            { text: "// Focused on scalable systems and clean architecture", cls: "text-[#808080]" },
        ],
        info: {
            title: "About Me",
            content: (
                <div className="space-y-5 text-sm leading-relaxed">
                    <p>
                        I am a{" "}
                        <span className="text-[#d7ba7d] font-medium">
                            2nd year undergraduate student
                        </span>{" "}
                        based in{" "}
                        <span className="text-[#4fc1ff] font-medium">
                            Nagpur (NGP)
                        </span>,{" "}
                        focused on{" "}
                        <span className="text-[#c586c0]">backend development</span>{" "}
                        and{" "}
                        <span className="text-[#9cdcfe]">
                            real-world software engineering
                        </span>{" "}
                        practices.
                    </p>

                    <div className="border-t border-[#303030]" />

                    <div className="space-y-1">
                        <p className="text-[#ffd866] font-medium">▸ Education</p>
                        <p className="text-[#9da0a6] ml-4">
                            Undergraduate (2nd Year) with a Computer Science background.
                            Currently strengthening fundamentals in{" "}
                            <span className="text-[#6aab73]">backend systems</span>.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#c586c0] font-medium">▸ Core Stack</p>
                        <p className="text-[#9da0a6] ml-4">
                            <span className="text-[#4fc1ff]">Java</span>,{" "}
                            <span className="text-[#4fc1ff]">Spring Boot</span>,{" "}
                            <span className="text-[#4fc1ff]">Spring Security (JWT)</span>,{" "}
                            REST APIs, PostgreSQL, Git & GitHub.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#6aab73] font-medium">▸ Interests</p>
                        <p className="text-[#9da0a6] ml-4">
                            Backend system design,{" "}
                            <span className="text-[#ce9178]">
                                authentication & authorization
                            </span>,{" "}
                            scalable APIs, and clean architecture.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#9cdcfe] font-medium">▸ Current Focus</p>
                        <p className="text-[#9da0a6] ml-4">
                            Building{" "}
                            <span className="text-[#6aab73]">
                                production-grade Spring Boot projects
                            </span>, improving code quality, and understanding
                            real-world backend flows.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#f44747] font-medium">▸ Goals</p>
                        <p className="text-[#9da0a6] ml-4">
                            Secure backend internships, strengthen{" "}
                            <span className="text-[#ce9178]">system design</span>{" "}
                            skills, and grow into a backend engineer capable of building
                            scalable systems.
                        </p>
                    </div>

                    <p className="text-[#7a7e85] italic">
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
            cls: "text-[#6aab73] ml-4",
        })),
        info: {
            title: "Technical Skills",
            content: (
                <div className="space-y-5 text-sm leading-relaxed">
                    <p>
                        My technical skill set is primarily focused on{" "}
                        <span className="text-[#c586c0] font-medium">
                            backend development
                        </span>, with hands-on experience in building{" "}
                        <span className="text-[#6aab73]">
                            scalable and secure applications
                        </span>.
                    </p>

                    <div className="border-t border-[#303030]" />

                    <div className="space-y-1">
                        <p className="text-[#ffd866] font-medium">▸ Backend Technologies</p>
                        <p className="text-[#9da0a6] ml-4">
                            <span className="text-[#4fc1ff]">Java</span>,{" "}
                            <span className="text-[#4fc1ff]">Spring Boot</span>,{" "}
                            <span className="text-[#4fc1ff]">Spring Security (JWT)</span>,{" "}
                            RESTful APIs
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#c586c0] font-medium">▸ Databases</p>
                        <p className="text-[#9da0a6] ml-4">
                            <span className="text-[#4fc1ff]">PostgreSQL</span>{" "}
                            — relational schema design, joins, and query optimization
                        </p>
                        <p className="text-[#9da0a6] ml-4">
                            <span className="text-[#4fc1ff]">MongoDB</span>{" "}
                            — document-based data modeling and flexible schemas
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#6aab73] font-medium">▸ Frontend & UI</p>
                        <p className="text-[#9da0a6] ml-4">
                            <span className="text-[#61dafb]">React</span>{" "}
                            for building interactive user interfaces and
                            integrating with backend APIs
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#9cdcfe] font-medium">▸ Other Languages</p>
                        <p className="text-[#9da0a6] ml-4">
                            Python — scripting, problem-solving, and backend fundamentals
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#f44747] font-medium">▸ Tools & Workflow</p>
                        <p className="text-[#9da0a6] ml-4">
                            Git & GitHub for version control, collaboration,
                            and project management
                        </p>
                    </div>

                    <p className="text-[#7a7e85] italic">
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
            cls: "text-[#ce9178] ml-4",
        })),
        info: {
            title: "Projects",
            content: <ProjectsInfo />,
        },
    }),

    contact: () => ({
        terminal: [
            { text: "linkedin   : atharva-mandle", cls: "text-[#4fc1ff] ml-4" },
            { text: "github     : StardustEnigma", cls: "text-[#6aab73] ml-4" },
            { text: "email      : atharvamandle19@gmail.com", cls: "text-[#c586c0] ml-4" },
            { text: "", cls: "" },
            { text: "hint → open contact details in info panel", cls: "text-[#7a7e85] italic ml-4" },
        ],
        info: {
            title: "Contact",
            content: (
                <div className="space-y-5 text-sm leading-relaxed">
                    <p>
                        You can connect with{" "}
                        <span className="text-[#d7ba7d] font-medium">
                            Atharva Mandle
                        </span>{" "}
                        through the following professional channels.
                    </p>

                    <div className="border-t border-[#303030]" />

                    <div className="space-y-1">
                        <p className="text-[#4fc1ff] font-medium">▸ LinkedIn</p>
                        <p className="text-[#9da0a6] ml-4">
                            Best platform for{" "}
                            <span className="text-[#6aab73]">professional networking</span>,
                            internships, and backend opportunities.
                        </p>
                        <p className="ml-4">
                            <a
                                href="https://www.linkedin.com/in/atharva-mandle-5214312aa/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#4fc1ff] underline underline-offset-2 hover:text-[#9cdcfe]"
                            >
                                linkedin.com/in/atharva-mandle
                            </a>
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#6aab73] font-medium">▸ GitHub</p>
                        <p className="text-[#9da0a6] ml-4">
                            Explore{" "}
                            <span className="text-[#c586c0]">backend projects</span>,
                            Spring Boot systems, and code quality.
                        </p>
                        <p className="ml-4">
                            <a
                                href="https://github.com/StardustEnigma"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#6aab73] underline underline-offset-2 hover:text-[#9cdcfe]"
                            >
                                github.com/StardustEnigma
                            </a>
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#c586c0] font-medium">▸ Email</p>
                        <p className="text-[#9da0a6] ml-4">
                            For{" "}
                            <span className="text-[#ffd866]">
                                direct and formal communication
                            </span>{" "}
                            related to internships or collaborations.
                        </p>
                        <p className="ml-4">
                            <a
                                href="mailto:atharvamandle19@gmail.com"
                                className="text-[#c586c0] underline underline-offset-2 hover:text-[#9cdcfe]"
                            >
                                atharvamandle19@gmail.com
                            </a>
                        </p>
                    </div>

                    <p className="text-[#7a7e85] italic">
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
                { text: "↓ Downloading Atharva_Mandle_Resume.pdf ...", cls: "text-[#6aab73]" },
                { text: "hint → if download didn't start, click the link in the info panel", cls: "text-[#7a7e85] italic" },
            ],
            info: {
                title: "Resume",
                content: (
                    <div className="space-y-5 text-sm leading-relaxed">
                        <p>
                            Download or view the resume of{" "}
                            <span className="text-[#d7ba7d] font-medium">Atharva Mandle</span>.
                        </p>

                        <div className="border-t border-[#303030]" />

                        <div className="space-y-2">
                            <p className="text-[#ffd866] font-medium">▸ Quick Links</p>
                            <p className="ml-4">
                                <a
                                    href="/Atharva_Mandle_Resume.pdf"
                                    download="Atharva_Mandle_Resume.pdf"
                                    className="text-[#4fc1ff] underline underline-offset-2 hover:text-[#9cdcfe]"
                                >
                                    ↓ Download PDF
                                </a>
                            </p>
                            <p className="ml-4">
                                <a
                                    href="/Atharva_Mandle_Resume.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[#6aab73] underline underline-offset-2 hover:text-[#9cdcfe]"
                                >
                                    ↗ Open in new tab
                                </a>
                            </p>
                        </div>

                        <div className="border-t border-[#303030]" />

                        <div className="space-y-1">
                            <p className="text-[#c586c0] font-medium">▸ Highlights</p>
                            <p className="text-[#9da0a6] ml-4">
                                <span className="text-[#4fc1ff]">Java</span> &{" "}
                                <span className="text-[#4fc1ff]">Spring Boot</span>{" "}
                                backend development
                            </p>
                            <p className="text-[#9da0a6] ml-4">
                                REST APIs, Spring Security (JWT), PostgreSQL
                            </p>
                            <p className="text-[#9da0a6] ml-4">
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
            { text: "      _   _   _", cls: "text-[#4b9cff]" },
            { text: "     /_\\ | |_| |__   __ _ _ ____   ____ _", cls: "text-[#4b9cff]" },
            { text: "    / _ \\| __| '_ \\ / _` | '__\\ \\ / / _` |", cls: "text-[#4b9cff]" },
            { text: "   / ___ \\ |_| | | | (_| | |   \\ V / (_| |", cls: "text-[#4b9cff]" },
            { text: "  /_/   \\_\\__|_| |_|\\__,_|_|    \\_/ \\__,_|", cls: "text-[#4b9cff]" },
            { text: "", cls: "" },
            { text: "  OS       Portfolio IDE v2.0", cls: "text-[#d7ba7d]" },
            { text: "  Host     Atharva Mandle", cls: "text-[#c586c0]" },
            { text: "  Kernel   React 19.2 + Vite 7", cls: "text-[#6aab73]" },
            { text: "  Shell    terminal.jsx", cls: "text-[#9cdcfe]" },
            { text: "  Theme    IntelliJ Dark", cls: "text-[#e5c07b]" },
            { text: "  Stack    Java / Spring Boot / PostgreSQL", cls: "text-[#4fc1ff]" },
            { text: "  Uptime   since 2024", cls: "text-[#ce9178]" },
        ],
    }),

    whoami: () => ({
        terminal: [
            { text: "atharva-mandle", cls: "text-[#6aab73]" },
        ],
    }),

    date: () => {
        const now = new Date();
        return {
            terminal: [
                { text: now.toString(), cls: "text-[#d7ba7d]" },
            ],
        };
    },

    pwd: () => ({
        terminal: [
            { text: "/home/atharva/portfolio", cls: "text-[#9cdcfe]" },
        ],
    }),

    ls: () => ({
        terminal: [
            { text: "About.jsx   Skills.jsx   Projects.jsx   Contact.jsx   Resume.jsx", cls: "text-[#4fc1ff]" },
            { text: "package.json   vite.config.js   README.md", cls: "text-[#6aab73]" },
        ],
    }),

    cat: () => ({
        terminal: [
            { text: "    /\\_/\\", cls: "text-[#d7ba7d]" },
            { text: "   ( o.o )", cls: "text-[#d7ba7d]" },
            { text: "    > ^ <", cls: "text-[#d7ba7d]" },
            { text: "", cls: "" },
            { text: "  meow~ (try: cat <filename> -- just kidding, this is a portfolio)", cls: "text-[#7a7e85] italic" },
        ],
    }),

    sudo: () => ({
        terminal: [
            { text: "[sudo] password for atharva: ********", cls: "text-[#f44747]" },
            { text: "Nice try. You don't have root access to this portfolio.", cls: "text-[#f44747]" },
            { text: "// incident reported to /dev/null", cls: "text-[#7a7e85] italic" },
        ],
    }),

    coffee: () => ({
        terminal: [
            { text: "      )  )", cls: "text-[#d19a66]" },
            { text: "     (  ( )", cls: "text-[#d19a66]" },
            { text: "      )  )", cls: "text-[#d19a66]" },
            { text: "    .------.", cls: "text-[#7a7e85]" },
            { text: "    |      |]", cls: "text-[#7a7e85]" },
            { text: "    |      |", cls: "text-[#7a7e85]" },
            { text: "    `------'", cls: "text-[#7a7e85]" },
            { text: "", cls: "" },
            { text: "  Brewing Java... (pun intended)", cls: "text-[#d7ba7d] italic" },
        ],
    }),

    help: () => ({
        terminal: [
            { text: "about", cls: "text-[#6aab73] font-medium" },
            { text: "  → who am I", cls: "text-[#9da0a6]" },
            { text: "skills", cls: "text-[#6aab73] font-medium" },
            { text: "  → technical expertise", cls: "text-[#9da0a6]" },
            { text: "projects", cls: "text-[#6aab73] font-medium" },
            { text: "  → featured backend work", cls: "text-[#9da0a6]" },
            { text: "contact", cls: "text-[#6aab73] font-medium" },
            { text: "  → how to reach me", cls: "text-[#9da0a6]" },
            { text: "resume", cls: "text-[#6aab73] font-medium" },
            { text: "  → download my resume", cls: "text-[#9da0a6]" },
            { text: "clear", cls: "text-[#6aab73] font-medium" },
            { text: "  → clear terminal output", cls: "text-[#9da0a6]" },
            { text: "help", cls: "text-[#6aab73] font-medium" },
            { text: "  → list available commands", cls: "text-[#9da0a6]" },
            { text: "", cls: "" },
            { text: "// Easter eggs: neofetch, whoami, date, ls, pwd, cat, sudo, coffee", cls: "text-[#505050] italic" },
        ],
        info: {
            title: "Help",
            content: (
                <div className="space-y-5 text-sm leading-relaxed">
                    <p>
                        This terminal provides quick access to{" "}
                        <span className="text-[#d7ba7d] font-medium">
                            portfolio sections
                        </span>{" "}
                        using simple commands, similar to a developer CLI.
                    </p>

                    <div className="border-t border-[#303030]" />

                    <div className="space-y-1">
                        <p className="text-[#ffd866] font-medium">▸ Available Commands</p>
                        <p className="text-[#9da0a6] ml-4">
                            <span className="text-[#6aab73]">about</span>{" "}
                            — personal background and current focus
                        </p>
                        <p className="text-[#9da0a6] ml-4">
                            <span className="text-[#6aab73]">skills</span>{" "}
                            — technical stack and core competencies
                        </p>
                        <p className="text-[#9da0a6] ml-4">
                            <span className="text-[#6aab73]">projects</span>{" "}
                            — flagship backend projects and system design work
                        </p>
                        <p className="text-[#9da0a6] ml-4">
                            <span className="text-[#6aab73]">contact</span>{" "}
                            — professional contact information
                        </p>
                        <p className="text-[#9da0a6] ml-4">
                            <span className="text-[#6aab73]">resume</span>{" "}
                            — download resume as PDF
                        </p>
                        <p className="text-[#9da0a6] ml-4">
                            <span className="text-[#6aab73]">clear</span>{" "}
                            — reset the terminal output
                        </p>
                    </div>

                    <div className="border-t border-[#303030]" />

                    <div className="space-y-1">
                        <p className="text-[#505050] font-medium">▸ Easter Eggs</p>
                        <p className="text-[#505050] ml-4">
                            Try: neofetch, whoami, date, ls, pwd, cat, sudo, coffee
                        </p>
                    </div>

                    <div className="border-t border-[#303030]" />

                    <div className="space-y-1">
                        <p className="text-[#c586c0] font-medium">▸ Usage</p>
                        <p className="text-[#9da0a6] ml-4">
                            Type a command and press{" "}
                            <span className="text-[#4fc1ff]">Enter</span>, or click a command
                            pill to navigate quickly.
                        </p>
                        <p className="text-[#9da0a6] ml-4">
                            Use{" "}
                            <span className="text-[#4fc1ff]">↑ / ↓</span>{" "}
                            arrow keys to cycle through command history.
                        </p>
                        <p className="text-[#9da0a6] ml-4">
                            Press{" "}
                            <span className="text-[#4fc1ff]">Tab</span>{" "}
                            to autocomplete a command name.
                        </p>
                        <p className="text-[#9da0a6] ml-4">
                            Press{" "}
                            <span className="text-[#4fc1ff]">Ctrl + L</span>{" "}
                            to clear the terminal.
                        </p>
                    </div>

                    <p className="text-[#7a7e85] italic">
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
            { text: `command not found: ${cmd}`, cls: "text-[#f44747]" },
            { text: 'type "help" for available commands', cls: "text-[#7a7e85] italic" },
        ],
    };
}
