import { createBrowserRouter } from "react-router-dom";
import { MainLayout, DashboardLayout } from "./pages/Layouts"
import { Home, Login } from "./pages"

import Demande from "./pages/Demande"

const dashboardRoutes = [
    {
        path: "",
        name: "Home",
        element: "statistique if admin else  dakchi dyal stagiare"
    },
    {
        path: "demandes",
        name: "Demandes",
        element: <Demande />
    },
    {
        path: "cours",
        name: "Courses",
        element: <Demande />
    },
    {
        path: "quiz",
        name: "Quizes",
        element: <Demande />
    }
]
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: dashboardRoutes
    }
])

export default router
export {dashboardRoutes}