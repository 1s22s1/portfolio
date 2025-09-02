import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./Layout.tsx", [
        index("routes/Home.tsx"),
        route("self_introduction", "self_introduction/SelfIntroduction.tsx"),
        route("oss", "./Oss.tsx"),
        route("qualification", "./Qualification.tsx"),
        route("database_specialist", "./DatabaseSpecialist.tsx"),
        route("lucky_uuid", "./LuckyUUID.tsx"),
        route("lucky_color", "./LuckyColor.tsx"),
    ])
] satisfies RouteConfig;
