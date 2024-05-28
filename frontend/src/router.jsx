import { createBrowserRouter } from "react-router-dom";
import { MainLayout, DashboardLayout } from "./pages/Layouts"
import { Home } from "./pages"
import {
    Announcements,
    AnnouncementForm,
    AnnouncementEdit,
} from "./pages/Announcements";
import { EvenementsForm } from "./pages/Evenements/EvenementsForm";
import Demande from "./pages/Demande"
import { Courses } from "./pages/courses/Courses";
import index from "./pages/Demande";

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
        element: <Courses/>
    },
    {
        path: "quizzes",
        name: "Quizes",
        element: <h1>Quizzes</h1>
    },
    {
        path: "announcements",
        name: "Announcements",
        children: [
            {
                index: true,
                element: <Announcements />,
            },
            {
                path: "new",
                element: <AnnouncementForm />,
            },
            {
                path: "edit/:announcementId",
                element: <AnnouncementEdit />,
            },
        ]
    },
    {
        path: "evenements",
        name: "Evenements",
        element: <EvenementsForm />,
    },
    {
        path: "emploi_de_temps",
        name: "Emploi de temps",
        element: <h1>Emploi de temps</h1>,
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