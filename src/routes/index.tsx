
import App from "@/App";
import AboutUs from "@/pages/AboutUs";
import Home from "@/pages/Home/Home";
import Services from "@/pages/Services/Services";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>,
            },      
            {
                path: '/services',
                element: <Services></Services>,
            }      
        ],
    },
  
]);

export default router;
