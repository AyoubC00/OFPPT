import { createBrowserRouter } from "react-router-dom";
import { MainLayout, DashboardLayout } from "./pages/Layouts"
import { Home } from "./pages"
import { AnnouncementForm } from "./pages/Announcements/AnnouncementForm";
import { EvenementsForm } from "./pages/Evenements/EvenementsForm";
import Demande from "./pages/Demande"
import { Courses } from "./pages/courses/Courses";
import ProtectedRoute from "./components/ProtectedRoute";



const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        element: <ProtectedRoute roles="admin" >this a protected route</ProtectedRoute>
    },
    {
        path: "demandes",
        name: "Demandes",
        element: <Demande />
    },
    {
        path: "courses",
        name: "Courses",
        element: <Courses />
    },
    {
        path: "quizzes",
        name: "Quizes",
        element: <h1>Quizzes</h1>
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
        element: <ProtectedRoute roles={['stagiare, formateur, adminstrateur']} ><DashboardLayout /></ProtectedRoute>,
        children: dashboardRoutes
    }
])

export default router
export { dashboardRoutes }