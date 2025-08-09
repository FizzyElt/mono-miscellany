import { type RouteObject, useRoutes } from "react-router";
import { jotaiRoutes } from "./pages/jotai-poc";
import RootPage from "./pages/RootPage";
import { xstateRoutes } from "./pages/xstate-poc";
import { zustandRoutes } from "./pages/zustand-poc";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/jotai",
    children: [jotaiRoutes],
  },
  {
    path: "/xstate",
    children: [xstateRoutes],
  },
  {
    path: "/zustand",
    children: [zustandRoutes],
  },
];

export const Routes = () => {
  return useRoutes(routes);
};
