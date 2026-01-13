import { createBrowserRouter } from "react-router";
import minlayout from "../layout/minlayout";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Singup from "../components/Singup/Singup";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: minlayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: "login",
            Component: Login,
        },
        {
            path: "signup",
            Component: Singup,
        }
    ]
  },
]);