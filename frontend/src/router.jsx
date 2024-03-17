import { createBrowserRouter } from "react-router-dom";
import { MainLayout, DashboardLayout } from "./pages/Layouts"
import { Home } from "./pages"
import { AnnouncementForm } from "./pages/Announcements/AnnouncementForm";
import { EvenementsForm } from "./pages/Evenements/EvenementsForm";
import Demande from "./pages/Demande"

const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        element: "statistique if admin else  dakchi dyal stagiare"
    },
    {
        path: "demandes",
        name: "Demandes",
        element: <Demande />
    },
    {
        path: "courses",
        name: "Courses",
        element: <Demande />
    },
    {
        path: "quizzes",
        name: "Quizes",
        element: <Demande />
    },
    {
        path: "announcements",
        name: "Announcements",
        element: <AnnouncementForm />,
    },
    {
        path: "evenements",
        name: "Evenements",
        element: <EvenementsForm />,
    },
    {
        path: "emploi_de_temps",
        name: "Emploi de temps",
        element: "<h1>Emploi de temps</h1>",
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