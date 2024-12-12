import { useRoutes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";

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

    ];
    return useRoutes(router);
}
