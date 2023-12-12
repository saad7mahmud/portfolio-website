import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import Errorpage from "../Errorpage/Errorpage";
import Home from "../HomePage/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
