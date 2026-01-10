import TerminalLayout from "../components/TerminalLayout";
import Sidebar from "../components/Sidebar";

export default function Projects() {
    return (
        <TerminalLayout>
            <Sidebar />

            <div className="col-span-9 p-6 space-y-4">
                <p className="text-gray-500">$ ls projects</p>

                <div className="border border-emerald-500/30 rounded-md p-3">
                    e-commerce-microservices
                </div>

                <div className="border border-emerald-500/30 rounded-md p-3">
                    auth-api
                </div>

                <div className="border border-emerald-500/30 rounded-md p-3">
                    realtime-chat-service
                </div>

                <p className="text-gray-500">$ _</p>
            </div>
        </TerminalLayout>
    );
}
