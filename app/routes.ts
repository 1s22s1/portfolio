import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./layout.tsx", [
        index("routes/home.tsx"),
        route("self_introduction", "self_introduction/self_introduction.tsx"),
        route("oss", "./oss.tsx"),
        route("qualification", "./qualification.tsx"),
        route("lucky_uuid", "./LuckyUUID.tsx")
    ])
] satisfies RouteConfig;
