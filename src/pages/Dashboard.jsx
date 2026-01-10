import TerminalLayout from "../components/TerminalLayout";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
    return (
        <TerminalLayout>
            <Sidebar />

            <div className="col-span-9 p-6 space-y-3">
                <p className="text-gray-500">$ whoami</p>
                <p className="ml-4">Atharva Mandle</p>

                <p className="text-gray-500">$ role</p>
                <p className="ml-4">Backend Developer | Spring Boot | Java</p>

                <p className="text-gray-500">$ help</p>
                <p className="ml-4 text-emerald-300">
                    Navigate using the left panel.
                </p>

                <p className="text-gray-500">$ _</p>
            </div>
        </TerminalLayout>
    );
}
