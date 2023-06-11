import { lazy } from "solid-js";

export default [
  {
    path: "/",
    component: lazy(() => import("./pages/landing-page"))
  },
  {
    path: "/mp3",
    component: lazy(() => import("./pages/yt2mp3"))
  },
  {
    path: "/mp4",
    component: lazy(() => import("./pages/yt2mp4"))
  },
  {
    path: "/*",
    component: lazy(() => import("./pages/NotFoundPage"))
  }
];
