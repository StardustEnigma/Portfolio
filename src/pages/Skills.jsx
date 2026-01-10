import TerminalLayout from "../components/TerminalLayout";
import Sidebar from "../components/Sidebar";

export default function Skills() {
    return (
        <TerminalLayout>
            <Sidebar />

            <div className="col-span-9 p-6 space-y-2">
                <p className="text-gray-500">$ cat skills.txt</p>
                <p className="ml-4">
                    Spring Boot · REST APIs · Microservices · PostgreSQL · Docker
                </p>
                <p className="text-gray-500">$ _</p>
            </div>
        </TerminalLayout>
    );
}
