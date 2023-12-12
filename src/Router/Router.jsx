import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import Errorpage from "../Errorpage/Errorpage";
import Home from "../HomePage/Home";
import Footer from "../HomePage/Footer";
import Banner from "../HomePage/Banner";
import ContactForm from "../HomePage/ContactForm";

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
      {
        path: "/contact",
        element: <ContactForm></ContactForm>,
      },
      {
        path: "/about-me",
        element: <Banner></Banner>,
      },
    ],
  },
]);
