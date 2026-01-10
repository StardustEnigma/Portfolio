import { useState, useRef, useEffect } from "react";
import CommandPills from "./CommandPills";
import TerminalInput from "./TerminalInput";


export default function Terminal({ setInfo, onShowInfoMobile }) {
    const [history, setHistory] = useState([]);
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const runCommand = (cmd) => {
        const result = getOutput(cmd); // ✅ NOW DEFINED

        setHistory((prev) => [
            ...prev,
            { type: "command", value: cmd },
            ...(result.terminal || []).map((l) => ({
                type: "output",
                ...l,
            })),
            result.info
                ? { type: "infoTrigger", info: result.info }
                : null,
        ].filter(Boolean));

        if (result.info) {
            setInfo(result.info);
        }
    };

    return (
        <div className="h-full bg-[#181818] border border-[#303030] rounded-lg flex flex-col">

            {/* Header */}
            <div className="h-10 px-4 flex items-center border-b border-[#303030]">
                <span className="text-[#d4d4d4]">Terminal</span>
            </div>

            {/* Body */}
            <div className="flex-1 p-3 sm:p-4 overflow-auto text-sm">

                <CommandPills onRun={runCommand} />

                <div className="text-[#7a7e85] mt-3">
                    // type a command or click one above
                </div>

                <div className="mt-4 space-y-2">
                    {history.map((item, i) => {
                        if (item.type === "command") {
                            return (
                                <div key={i}>
                                    <span className="text-[#4fc1ff]">atharva@portfolio</span>
                                    <span className="text-[#7a7e85]">:~$ </span>
                                    <span className="text-[#98c379]">{item.value}</span>
                                </div>
                            );
                        }

                        if (item.type === "output") {
                            return (
                                <div key={i} className={item.class}>
                                    {item.text}
                                </div>
                            );
                        }

                        if (item.type === "infoTrigger") {
                            return (
                                <button
                                    key={i}
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

                <TerminalInput onCommand={runCommand} />
                <div ref={bottomRef} />
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
                    { text: "Atharva Mandle", class: "text-[#d7ba7d]" },
                    {
                        text: "// Backend developer focused on Spring Boot.",
                        class: "text-[#7a7e85]",
                    },
                ],
                info: {
                    title: "About Me",
                    content:
                        "Backend developer specializing in Spring Boot, REST APIs, and scalable backend systems. Focused on clean architecture and performance.",
                },
            };

        case "skills":
            return {
                terminal: [
                    "Spring Boot",
                    "REST APIs",
                    "Microservices",
                    "PostgreSQL",
                    "Docker",
                ].map((s) => ({
                    text: s,
                    class: "text-[#6aab73] ml-4",
                })),
                info: {
                    title: "Skills",
                    content:
                        "Strong backend skills with Java, Spring ecosystem, microservices architecture, database design, and containerization.",
                },
            };

        case "projects":
            return {
                terminal: [
                    "e-commerce-microservices",
                    "auth-api",
                    "realtime-chat-service",
                ].map((p) => ({
                    text: p,
                    class: "text-[#ce9178] ml-4",
                })),
                info: {
                    title: "Projects",
                    content:
                        "Built scalable e-commerce platforms, authentication systems, and real-time backend services using Spring Boot.",
                },
            };

        case "help":
            return {
                terminal: [
                    { text: "about    - about me", class: "text-[#6aab73]" },
                    { text: "skills   - technical skills", class: "text-[#6aab73]" },
                    { text: "projects - featured projects", class: "text-[#6aab73]" },
                ],
            };

        default:
            return {
                terminal: [
                    {
                        text: `command not found: ${cmd}`,
                        class: "text-[#f14c4c]",
                    },
                ],
            };
    }
}
