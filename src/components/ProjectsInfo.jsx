import { useState } from "react";

export default function ProjectsInfo() {
    const [active, setActive] = useState("sentinel");

    return (
        <div className="space-y-5 text-sm leading-relaxed">

            {/* Project tabs */}
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => setActive("sentinel")}
                    className={`px-3 py-1 text-xs rounded border transition-colors
                        ${active === "sentinel"
                            ? "border-[#fb7185] text-[#fb7185] bg-[#fb7185]/10"
                            : "border-[#27272a] text-[#a1a1aa] hover:text-[#e4e4e7]"
                        }`}
                >
                    SentinelAPI
                </button>

                <button
                    onClick={() => setActive("wallet")}
                    className={`px-3 py-1 text-xs rounded border transition-colors
                        ${active === "wallet"
                            ? "border-[#f59e0b] text-[#22d3ee] bg-[#f59e0b]/10"
                            : "border-[#27272a] text-[#a1a1aa] hover:text-[#e4e4e7]"
                        }`}
                >
                    NeoWallet
                </button>

                <button
                    onClick={() => setActive("ecommerce")}
                    className={`px-3 py-1 text-xs rounded border transition-colors
                        ${active === "ecommerce"
                            ? "border-[#34d399] text-[#34d399] bg-[#34d399]/10"
                            : "border-[#27272a] text-[#a1a1aa] hover:text-[#e4e4e7]"
                        }`}
                >
                    E-Commerce
                </button>
            </div>

            <div className="border-t border-[#27272a]" />

            {/* SentinelAPI */}
            {active === "sentinel" && (
                <div className="space-y-5 text-sm leading-relaxed">
                    <p>
                        <a
                            href="https://github.com/StardustEnigma/api-security-analyzer" // TODO: paste your actual GitHub link here
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#fb7185] font-medium underline underline-offset-2 hover:text-[#fda4af]"
                        >
                            SentinelAPI
                        </a>{" "}
                        is a{" "}
                        <span className="text-[#c084fc]">backend security intelligence tool</span>{" "}
                        built with{" "}
                        <span className="text-[#fbbf24]">Spring Boot 3.5</span> and{" "}
                        <span className="text-[#fbbf24]">Java 21</span>. It scans any HTTP(S)
                        API endpoint, detects vulnerabilities, and models how they chain
                        together into realistic multi-step exploits.
                    </p>

                    <div className="border-t border-[#27272a]" />

                    <div className="space-y-1">
                        <p className="text-[#fb923c] font-medium">▸ Security Scanners</p>
                        <p className="text-[#a1a1aa] ml-4">
                            <span className="text-[#22d3ee]">8 parallel scanners</span>{" "}
                            running on Java 21 virtual threads — SQL injection, XSS,
                            CORS misconfig, missing headers, open redirects, SSL/TLS,
                            HTTP methods, and info disclosure.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#fb7185] font-medium">▸ Attack Chain Engine</p>
                        <p className="text-[#a1a1aa] ml-4">
                            <span className="text-[#fb923c]">16 chain detection rules</span>{" "}
                            that model real-world multi-step attack scenarios — doesn't just
                            find bugs, shows how an attacker would chain them for maximum damage.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#c084fc] font-medium">▸ Risk Scoring & Remediation</p>
                        <p className="text-[#a1a1aa] ml-4">
                            Composite risk scores{" "}
                            <span className="text-[#22d3ee]">(0-100)</span> based on severity,
                            exploit confidence, and chain length.{" "}
                            <span className="text-[#34d399]">Smart remediation</span> identifies
                            the single fix that breaks the most attack chains.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#34d399] font-medium">▸ React Flow Integration</p>
                        <p className="text-[#a1a1aa] ml-4">
                            Exports{" "}
                            <span className="text-[#22d3ee]">React Flow-compatible JSON</span>{" "}
                            with pre-positioned nodes, styled edges, severity color maps,
                            and per-chain summaries for interactive attack graph visualization.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#22d3ee] font-medium">▸ Tech Stack</p>
                        <p className="text-[#a1a1aa] ml-4">
                            <span className="text-[#22d3ee]">Java 21</span>,{" "}
                            <span className="text-[#22d3ee]">Spring Boot 3.5</span>,{" "}
                            <span className="text-[#22d3ee]">Spring WebFlux</span> (WebClient),{" "}
                            <span className="text-[#22d3ee]">PostgreSQL</span>,{" "}
                            Maven, Lombok, Jakarta Validation
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#22d3ee] font-medium">▸ API Endpoints</p>
                        <p className="text-[#a1a1aa] ml-4">
                            <span className="text-[#34d399]">POST /api/scan</span>{" "}
                            — full vulnerability scan + attack chain visualization
                        </p>
                        <p className="text-[#a1a1aa] ml-4">
                            <span className="text-[#34d399]">POST /api/scan/attack-chains</span>{" "}
                            — attack chain graph data only
                        </p>
                        <p className="text-[#a1a1aa] ml-4">
                            <span className="text-[#34d399]">POST /api/scan/export-graph</span>{" "}
                            — React Flow-ready graph JSON
                        </p>
                    </div>

                    <p className="text-[#71717a] text-xs">
                        Source code available on{" "}
                        <a
                            href="https://github.com/StardustEnigma/SentinelAPI" // TODO: paste your actual GitHub link here
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#fb7185] underline underline-offset-2 hover:text-[#fda4af]"
                        >
                            GitHub
                        </a>.
                    </p>

                    <p className="text-[#71717a] italic">
                        An automated penetration tester that doesn't just find bugs — it
                        shows you how an attacker would chain them together.
                    </p>
                </div>
            )}

            {/* NeoWallet */}
            {active === "wallet" && (
                <div className="space-y-5 text-sm leading-relaxed">
                    <p>
                        <a
                            href="https://github.com/StardustEnigma/neowallet"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#22d3ee] font-medium underline underline-offset-2 hover:text-[#67e8f9]"
                        >
                            NeoWallet
                        </a>{" "}
                        is a{" "}
                        <span className="text-[#c084fc]">production-grade fintech backend</span>{" "}
                        system focused on{" "}
                        <span className="text-[#fbbf24]">secure wallet operations</span>, user
                        balances, and transaction consistency.
                    </p>

                    <div className="border-t border-[#27272a]" />

                    <div className="space-y-1">
                        <p className="text-[#fb923c] font-medium">▸ Architecture</p>
                        <p className="text-[#a1a1aa] ml-4">
                            Built using{" "}
                            <span className="text-[#22d3ee]">Spring Boot</span> with a clean
                            layered architecture separating controllers, services, and data
                            access layers.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#c084fc] font-medium">▸ Security</p>
                        <p className="text-[#a1a1aa] ml-4">
                            <span className="text-[#fb923c]">JWT-based authentication</span>{" "}
                            combined with{" "}
                            <span className="text-[#34d399]">role-based authorization</span>{" "}
                            for secure access control.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#34d399] font-medium">▸ Domain Design</p>
                        <p className="text-[#a1a1aa] ml-4">
                            Designed with{" "}
                            <span className="text-[#fbbf24]">6+ core entities</span> including
                            User, Wallet, Transaction, Role, Ledger, and Audit for real-world
                            financial modeling.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#22d3ee] font-medium">▸ Data Integrity</p>
                        <p className="text-[#a1a1aa] ml-4">
                            Uses{" "}
                            <span className="text-[#22d3ee]">PostgreSQL</span> with{" "}
                            <span className="text-[#fbbf24]">ACID-compliant transactions</span>{" "}
                            to ensure balance correctness and consistency.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#fb7185] font-medium">▸ Scalability</p>
                        <p className="text-[#a1a1aa] ml-4">
                            Stateless backend design suitable for{" "}
                            <span className="text-[#34d399]">cloud-based deployment</span> and
                            horizontal scaling.
                        </p>
                    </div>

                    <p className="text-[#71717a] text-xs">
                        Source code available on{" "}
                        <a
                            href="https://github.com/StardustEnigma/neowallet"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#22d3ee] underline underline-offset-2 hover:text-[#67e8f9]"
                        >
                            GitHub
                        </a>.
                    </p>

                    <p className="text-[#71717a] italic">
                        Designed as a flagship fintech project with a strong emphasis on
                        security, correctness, and real-world transaction flows.
                    </p>
                </div>
            )}

            {/* E-Commerce */}
            {active === "ecommerce" && (
                <div className="space-y-5 text-sm leading-relaxed">
                    <p>
                        The{" "}
                        <a
                            href="https://github.com/StardustEnigma/ecommerce-backend"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#34d399] font-medium underline underline-offset-2 hover:text-[#6ee7b7]"
                        >
                            E-Commerce Backend
                        </a>{" "}
                        is an{" "}
                        <span className="text-[#c084fc]">enterprise-scale system</span>{" "}
                        designed to support complex product, order, and user workflows with
                        high scalability.
                    </p>

                    <div className="border-t border-[#27272a]" />

                    <div className="space-y-1">
                        <p className="text-[#fb923c] font-medium">▸ Core Modules</p>
                        <p className="text-[#a1a1aa] ml-4">
                            Modular design covering{" "}
                            <span className="text-[#22d3ee]">products</span>,{" "}
                            <span className="text-[#22d3ee]">orders</span>,{" "}
                            <span className="text-[#22d3ee]">users</span>, and inventory
                            management.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#c084fc] font-medium">▸ Authorization</p>
                        <p className="text-[#a1a1aa] ml-4">
                            <span className="text-[#fb923c]">Role-based access control</span>{" "}
                            implemented using Spring Security for admins, sellers, and
                            customers.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#34d399] font-medium">▸ API Design</p>
                        <p className="text-[#a1a1aa] ml-4">
                            RESTful APIs built with clear DTO contracts, validation layers, and
                            standardized error handling.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#22d3ee] font-medium">▸ Persistence</p>
                        <p className="text-[#a1a1aa] ml-4">
                            Uses{" "}
                            <span className="text-[#22d3ee]">PostgreSQL</span> for relational
                            data modeling and transactional consistency.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[#fb7185] font-medium">▸ Scalability</p>
                        <p className="text-[#a1a1aa] ml-4">
                            Designed for{" "}
                            <span className="text-[#34d399]">high concurrency</span> and future
                            microservice decomposition.
                        </p>
                    </div>

                    <p className="text-[#71717a] text-xs">
                        Source code available on{" "}
                        <a
                            href="https://github.com/StardustEnigma/ecommerce-backend"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#34d399] underline underline-offset-2 hover:text-[#6ee7b7]"
                        >
                            GitHub
                        </a>.
                    </p>

                    <p className="text-[#71717a] italic">
                        Focused on enterprise design patterns, clean architecture, and
                        long-term maintainability.
                    </p>
                </div>
            )}
        </div>
    );
}
