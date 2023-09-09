import { createBrowserRouter } from "react-router-dom";
import Auth from "./auth";
import Main from "./main";

export const router = createBrowserRouter([
  {
    path: "/auth/*",
    element: <Auth />,
  },
  {
    path: "/*",
    element: <Main />,
  },
]);
