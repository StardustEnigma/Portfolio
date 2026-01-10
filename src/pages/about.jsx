import TerminalLayout from "../components/TerminalLayout";
import Sidebar from "../components/Sidebar";

export default function About() {
    return (
        <TerminalLayout>
            <Sidebar />

            <div className="col-span-9 p-6 space-y-2">
                <p className="text-gray-500">$ cat about.txt</p>
                <p className="ml-4">
                    Backend developer focused on Spring Boot, APIs, and scalable systems.
                </p>
                <p className="text-gray-500">$ _</p>
            </div>
        </TerminalLayout>
    );
}
