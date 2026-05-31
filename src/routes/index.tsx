
import App from "@/App";
import AboutUs from "@/pages/AboutUs";
import Home from "@/pages/Home/Home";
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
        ],
    },
  
]);

export default router;
