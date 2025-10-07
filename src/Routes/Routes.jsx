import { createBrowserRouter } from "react-router";
import Root from "../components/pages/Root/Root";
import Home from "../components/pages/Home/home";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
    ],
  },
]);
