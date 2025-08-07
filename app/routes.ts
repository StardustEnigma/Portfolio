import { type RouteConfig, index,route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("projects", "routes/projects.jsx"),
    route("about", "routes/about.jsx"),
    route("contact", "routes/contact.jsx"),

] satisfies RouteConfig;
