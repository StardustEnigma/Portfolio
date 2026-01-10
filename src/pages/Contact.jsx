import TerminalLayout from "../components/TerminalLayout";
import Sidebar from "../components/Sidebar";

export default function Contact() {
    return (
        <TerminalLayout>
            <Sidebar />

            <div className="col-span-9 p-6 space-y-2">
                <p className="text-gray-500">$ cat contact.txt</p>
                <p className="ml-4">GitHub</p>
                <p className="ml-4">LinkedIn</p>
                <p className="ml-4">Email</p>
                <p className="text-gray-500">$ _</p>
            </div>
        </TerminalLayout>
    );
}
