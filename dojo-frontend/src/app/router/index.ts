import { Layout } from "@/widgets";
import { Home, Kana } from "@/pages";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      {
        path: "/kana",
        name: "kana",
        component: Kana,
      },
    ],
  },
];

export default routes;
