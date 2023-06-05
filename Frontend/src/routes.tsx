import { lazy } from "solid-js";

export default [
  {
    path: "/",
    component: lazy(() => import("./pages/landing-page"))
  },
  {
    path: "/inputbox",
    component: lazy(() => import("./pages/InputBoxPage"))
  }
];
