import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import AppDetails from "../pages/AppDetails/AppDetails";
import Installation from "../pages/Installation/Installation";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    // errorElement: ErrorPage,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("/appData.json"),
      },
      {
        path: "/apps",
        Component: Apps,
        loader: () => fetch("/appData.json"),
      },
      {
        path: "/appDetails/:id",
        Component: AppDetails,
        loader: () => fetch("/appData.json"),
      },
      {
        path: "/installation",
        Component: Installation,
        loader: () => fetch("/appData.json"),
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
