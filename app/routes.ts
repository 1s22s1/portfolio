import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("self_introduction", "self_introduction/self_introduction.tsx"),
    route("oss", "./oss.tsx"),
    route("qualification", "./qualification.tsx")
] satisfies RouteConfig;
