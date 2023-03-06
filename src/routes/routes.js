import { createBrowserRouter } from "react-router-dom"
import DynamicServices from "../compopnents/Services/DynamicServices"
import Main from "../layouts/Main"
import Home from "../pages/Home/Home"
import PhoneAuth from "../pages/Login/PhoneAuth"

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Main/>,
        children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/services/:id",
                element: <DynamicServices/>
            },
            {
                path:"/login",
                element: <PhoneAuth/>
            }
        ]
    }
])