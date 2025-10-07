import { createBrowserRouter } from "react-router";
import Root from "../components/pages/Root/Root";
import Home from "../components/pages/Home/home";
import Apps from "../components/pages/Apps/Apps";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("../appData.json"),
      },
      {
        path: "/apps",
        Component: Apps,
        loader: () => fetch("../appData.json"),
      },
    ],
  },
]);
