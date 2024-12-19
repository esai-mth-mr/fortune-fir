import { useRoutes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import SignUp from "./pages/SingUp";
import LogIn from "./pages/LogIn";

export default function Router() {
    const router = [
        {
            element: <Layout />,
            children: [

            ],
        },
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/signup',
            element: <SignUp/>
        },
        {
            path: '/login',
            element: <LogIn/>
        }

    ];
    return useRoutes(router);
}
