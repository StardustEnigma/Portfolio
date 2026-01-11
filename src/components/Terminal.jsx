import { useState, useRef } from "react";
import CommandPills from "./CommandPills";
import TerminalInput from "./TerminalInput";
import TypewriterLine from "./TypewriterLine";

export default function Terminal({ setInfo, onShowInfoMobile }) {
    const [history, setHistory] = useState([]);
    const terminalRef = useRef(null);

    const [isScrollLocked, setIsScrollLocked] = useState(false);
    const rafRef = useRef(null);
    const lastHeightRef = useRef(0);

    /* ---------------- SCROLL LOGIC ---------------- */

    const handleScroll = () => {
        const el = terminalRef.current;
        if (!el) return;

        const atBottom =
            el.scrollHeight - el.scrollTop - el.clientHeight < 8;

        setIsScrollLocked(!atBottom);
    };

    const handleType = () => {
        if (isScrollLocked) return;
        if (rafRef.current) return;

        rafRef.current = requestAnimationFrame(() => {
            const el = terminalRef.current;
            if (!el) return;

            if (el.scrollHeight !== lastHeightRef.current) {
                el.scrollTop = el.scrollHeight;
                lastHeightRef.current = el.scrollHeight;
            }

            rafRef.current = null;
        });
    };

    const finalizeOutput = (id) => {
        setHistory((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, animated: false }
                    : item
            )
        );
    };

    /* ---------------- COMMAND EXECUTION ---------------- */

    const runCommand = (cmd) => {
        const result = getOutput(cmd);

        setHistory((prev) => [
            // 🔒 freeze everything before
            ...prev.map((item) =>
                item.type === "output"
                    ? { ...item, animated: false }
                    : item
            ),

            {
                id: crypto.randomUUID(),
                type: "command",
                value: cmd,
            },

            ...(result.terminal || []).map((l, index) => ({
                id: crypto.randomUUID(),
                type: "output",
                animated: true,
                delay: index * 0.4,
                ...l,
            })),

            result.info
                ? {
                    id: crypto.randomUUID(),
                    type: "infoTrigger",
                    info: result.info,
                }
                : null,
        ].filter(Boolean));

        if (result.info) setInfo(result.info);
    };

    return (
        <div className="h-full bg-[#181818] border border-[#303030] rounded-lg flex flex-col">

            {/* Header */}
            <div className="h-10 px-4 flex items-center border-b border-[#303030]">
                <span className="text-[#d4d4d4]">Terminal</span>
            </div>

            {/* Body */}
            <div
                ref={terminalRef}
                onScroll={handleScroll}
                className="flex-1 overflow-y-auto text-sm relative"
            >
                {/* Sticky pills */}
                <div className="sticky top-0 z-10 bg-[#181818] px-4 pt-3 pb-2 border-b border-[#242424]">
                    <CommandPills onRun={runCommand} />
                    <div className="text-[#7a7e85] mt-2">
                        // type a command or click one above
                    </div>
                </div>

                {/* Scrollable content */}
                <div className="px-4 mt-4 space-y-2">
                    {history.map((item) => {
                        if (item.type === "command") {
                            return (
                                <div key={item.id}>
                                    <span className="text-[#4fc1ff]">
                                        atharva@portfolio
                                    </span>
                                    <span className="text-[#7a7e85]">
                                        :~${" "}
                                    </span>
                                    <span className="text-[#98c379]">
                                        {item.value}
                                    </span>
                                </div>
                            );
                        }

                        if (item.type === "output") {
                            if (!item.animated) {
                                return (
                                    <div
                                        key={item.id}
                                        className={item.class}
                                    >
                                        {item.text}
                                    </div>
                                );
                            }

                            return (
                                <TypewriterLine
                                    key={item.id}
                                    text={item.text}
                                    className={item.class}
                                    delay={item.delay}
                                    speed={0.035}
                                    onType={handleType}
                                    onComplete={() =>
                                        finalizeOutput(item.id)
                                    }
                                />
                            );
                        }

                        if (item.type === "infoTrigger") {
                            return (
                                <button
                                    key={item.id}
                                    onClick={onShowInfoMobile}
                                    className="lg:hidden mt-1 text-xs px-2 py-1
                                        border border-[#303030]
                                        rounded bg-[#1e1f22]
                                        text-[#d4d4d4]
                                        hover:bg-[#2a2a2a]"
                                >
                                    View info →
                                </button>
                            );
                        }

                        return null;
                    })}
                </div>

                {isScrollLocked && (
                    <div className="px-4 mt-2 text-xs text-[#7a7e85] italic">
                        — scroll locked —
                    </div>
                )}

                <div className="px-4 pb-4">
                    <TerminalInput onCommand={runCommand} />
                </div>
            </div>
        </div>
    );
}

/* ---------------- COMMAND LOGIC ---------------- */

function getOutput(cmd) {
    switch (cmd) {
        case "about":
            return {
                terminal: [
                    { text: "Atharva Mandle", class: "text-[#d7ba7d] font-semibold" },
                    { text: "// Backend Developer • Java & Spring Boot", class: "text-[#808080]" },
                    { text: "// Focused on scalable systems and clean architecture", class: "text-[#808080]" },
                ],info: {
                    title: "About Me",
                    content: (
                        <div className="space-y-5 text-sm leading-relaxed">

                            {/* Intro */}
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
                                <span className="text-[#c586c0]">
                    backend development
                </span>{" "}
                                and{" "}
                                <span className="text-[#9cdcfe]">
                    real-world software engineering
                </span>{" "}
                                practices.
                            </p>

                            <div className="border-t border-[#303030]" />

                            {/* Education */}
                            <div className="space-y-1">
                                <p className="text-[#ffd866] font-medium">
                                    ▸ Education
                                </p>
                                <p className="text-[#9da0a6] ml-4">
                                    Undergraduate (2nd Year) with a Computer Science background.
                                    Currently strengthening fundamentals in{" "}
                                    <span className="text-[#6aab73]">
                        backend systems
                    </span>.
                                </p>
                            </div>

                            {/* Core Stack */}
                            <div className="space-y-1">
                                <p className="text-[#c586c0] font-medium">
                                    ▸ Core Stack
                                </p>
                                <p className="text-[#9da0a6] ml-4">
                                    <span className="text-[#4fc1ff]">Java</span>,{" "}
                                    <span className="text-[#4fc1ff]">Spring Boot</span>,{" "}
                                    <span className="text-[#4fc1ff]">Spring Security (JWT)</span>,{" "}
                                    REST APIs, PostgreSQL, Git & GitHub.
                                </p>
                            </div>

                            {/* Interests */}
                            <div className="space-y-1">
                                <p className="text-[#6aab73] font-medium">
                                    ▸ Interests
                                </p>
                                <p className="text-[#9da0a6] ml-4">
                                    Backend system design,{" "}
                                    <span className="text-[#ce9178]">
                        authentication & authorization
                    </span>,{" "}
                                    scalable APIs, and clean architecture.
                                </p>
                            </div>

                            {/* Current Focus */}
                            <div className="space-y-1">
                                <p className="text-[#9cdcfe] font-medium">
                                    ▸ Current Focus
                                </p>
                                <p className="text-[#9da0a6] ml-4">
                                    Building{" "}
                                    <span className="text-[#6aab73]">
                        production-grade Spring Boot projects
                    </span>, improving code quality, and understanding
                                    real-world backend flows.
                                </p>
                            </div>

                            {/* Goals */}
                            <div className="space-y-1">
                                <p className="text-[#f44747] font-medium">
                                    ▸ Goals
                                </p>
                                <p className="text-[#9da0a6] ml-4">
                                    Secure backend internships, strengthen{" "}
                                    <span className="text-[#ce9178]">
                        system design
                    </span>{" "}
                                    skills, and grow into a backend engineer capable of building
                                    scalable systems.
                                </p>
                            </div>

                            {/* Footer */}
                            <p className="text-[#7a7e85] italic">
                                Actively learning, building, and preparing for real-world
                                backend roles and internships.
                            </p>

                        </div>
                    ),
                },

            };

        case "skills":
            return {
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
                    class: "text-[#6aab73] ml-4",
                })),
                info: {
                    title: "Technical Skills",
                    content: (
                        <div className="space-y-5 text-sm leading-relaxed">

                            {/* Intro */}
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

                            {/* Backend */}
                            <div className="space-y-1">
                                <p className="text-[#ffd866] font-medium">
                                    ▸ Backend Technologies
                                </p>
                                <p className="text-[#9da0a6] ml-4">
                                    <span className="text-[#4fc1ff]">Java</span>,{" "}
                                    <span className="text-[#4fc1ff]">Spring Boot</span>,{" "}
                                    <span className="text-[#4fc1ff]">
                                Spring Security (JWT)
                            </span>,{" "}
                                    RESTful APIs
                                </p>
                            </div>

                            {/* Databases */}
                            <div className="space-y-1">
                                <p className="text-[#c586c0] font-medium">
                                    ▸ Databases
                                </p>
                                <p className="text-[#9da0a6] ml-4">
                                    <span className="text-[#4fc1ff]">PostgreSQL</span>{" "}
                                    — relational schema design, joins, and query optimization
                                </p>
                                <p className="text-[#9da0a6] ml-4">
                                    <span className="text-[#4fc1ff]">MongoDB</span>{" "}
                                    — document-based data modeling and flexible schemas
                                </p>
                            </div>

                            {/* Frontend */}
                            <div className="space-y-1">
                                <p className="text-[#6aab73] font-medium">
                                    ▸ Frontend & UI
                                </p>
                                <p className="text-[#9da0a6] ml-4">
                                    <span className="text-[#61dafb]">React</span>{" "}
                                    for building interactive user interfaces and
                                    integrating with backend APIs
                                </p>
                            </div>

                            {/* Other Languages */}
                            <div className="space-y-1">
                                <p className="text-[#9cdcfe] font-medium">
                                    ▸ Other Languages
                                </p>
                                <p className="text-[#9da0a6] ml-4">
                                    Python — scripting, problem-solving, and backend
                                    fundamentals
                                </p>
                            </div>

                            {/* Tools */}
                            <div className="space-y-1">
                                <p className="text-[#f44747] font-medium">
                                    ▸ Tools & Workflow
                                </p>
                                <p className="text-[#9da0a6] ml-4">
                                    Git & GitHub for version control, collaboration,
                                    and project management
                                </p>
                            </div>

                            {/* Footer */}
                            <p className="text-[#7a7e85] italic">
                                Continuously improving backend depth while maintaining
                                practical full-stack awareness.
                            </p>

                        </div>
                    ),
                },
            };

        case "projects":
            return {
                terminal: [
                    "NeoWallet – Digital Wallet System",
                    "E-Commerce Microservices Backend",
                    "Authentication & Authorization API",
                    "Real-time Chat Backend",
                ].map((p) => ({
                    text: `▸ ${p}`,
                    class: "text-[#ce9178] ml-4",
                })),
                info: {
                    title: "Projects",
                    content:
                        "Designed and developed backend systems including a digital wallet, microservices-based e-commerce platform, secure authentication APIs, and real-time services.",
                },
            };

        case "contact":
            return {
                terminal: [
                    {
                        text: "LinkedIn  → https://www.linkedin.com/in/atharva-mandle-5214312aa/",
                        class: "text-[#9da0a6] underline underline-offset-2",
                    },
                    {
                        text: "GitHub    → https://github.com/atharvamandle",
                        class: "text-[#9da0a6] underline underline-offset-2",
                    },
                    {
                        text: "Email     → mailto:atharva.mandle@rbunagpur.in",
                        class: "text-[#9da0a6] underline underline-offset-2",
                    },
                ],
                info: {
                    title: "Contact",
                    content:
                        "You can reach out to Atharva Mandle through the following channels:\n\n" +
                        "• LinkedIn – For professional networking, internships, and opportunities.\n" +
                        "• GitHub – To explore backend, Spring Boot, and system design projects.\n" +
                        "• Email – For direct and formal communication.\n\n" +
                        "Best way to connect: LinkedIn.",
                },
            };


        case "help":
            return {
                terminal: [
                    {
                        text: "about",
                        class: "text-[#6aab73] font-medium",
                    },
                    {
                        text: "  → who am I",
                        class: "text-[#9da0a6]",
                    },

                    {
                        text: "skills",
                        class: "text-[#6aab73] font-medium",
                    },
                    {
                        text: "  → technical expertise",
                        class: "text-[#9da0a6]",
                    },

                    {
                        text: "projects",
                        class: "text-[#6aab73] font-medium",
                    },
                    {
                        text: "  → featured backend work",
                        class: "text-[#9da0a6]",
                    },

                    {
                        text: "help",
                        class: "text-[#6aab73] font-medium",
                    },
                    {
                        text: "  → list available commands",
                        class: "text-[#9da0a6]",
                    },
                ],
            };


        default:
            return {
                terminal: [
                    {
                        text: `command not found: ${cmd}`,
                        class: "text-[#f44747]",
                    },
                ],
            };
    }
}
