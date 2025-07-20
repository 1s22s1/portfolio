import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "1s22s1のポートフォリオ" },
    { name: "1s22s1のポートフォリオ", content: "1s22s1、ポートフォリオ" },
  ];
}

export default function Home() {
  return <Welcome />;
}
