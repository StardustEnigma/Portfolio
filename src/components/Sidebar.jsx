import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
    const { pathname } = useLocation();

    const base =
        "block border border-emerald-500/30 px-4 py-3 rounded-md transition";
    const active = "bg-emerald-500/10";

    const link = (path) =>
        `${base} ${pathname === path ? active : "hover:bg-emerald-500/10"}`;

    return (
        <div className="col-span-3 border-r border-emerald-500/30 p-4 space-y-4">
            <Link to="/about" className={link("/about")}>about</Link>
            <Link to="/skills" className={link("/skills")}>skills</Link>
            <Link to="/projects" className={link("/projects")}>projects</Link>
            <Link to="/contact" className={link("/contact")}>contact</Link>
        </div>
    );
}
