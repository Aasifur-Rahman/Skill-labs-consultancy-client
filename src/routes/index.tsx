
import App from "@/App";
import AboutUs from "@/pages/AboutUs";
import Consultants from "@/pages/Consultants/Consultants";
import Destination from "@/pages/Destination/Destination";
import Home from "@/pages/Home/Home";
import Services from "@/pages/Services/Services";
import Training from "@/pages/Training/Training";
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
            },
            {
                path: '/destinations',
                element: <Destination></Destination>,
            },
            {
                path: '/consultants',
                element: <Consultants></Consultants>,
            },
            {
                path: '/training',
                element: <Training></Training>,
            }
            
        ],
    },
  
]);

export default router;
