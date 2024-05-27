import { createBrowserRouter } from "react-router-dom";
import { MainLayout, DashboardLayout } from "./pages/Layouts"
import { Home } from "./pages"
import { AnnouncementForm } from "./pages/Announcements/AnnouncementForm";
import { EvenementsForm } from "./pages/Evenements/EvenementsForm";
import Demande from "./pages/Demande"
import Demandes from "./pages/Demande/administrateur/Demandes";
import Bac from "./pages/Demande/administrateur/Bac";
import Historique from "./pages/Demande/administrateur/Historique";

const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        element: "statistique if admin else  dakchi dyal stagiare"
    },
    {
        path: "demandes",
        name: "Demandes",
        element: <Demande />,
        children:[{
            path:"",
            name:"Demandes administrateur",
            element:<Demandes/>
        },
        {
            path:"bac",
            name:"Demandes administrateur",
            element:<Bac/>
        },
        {
            path:"historique",
            name:"Demandes administrateur",
            element:<Historique/>
        }
    ]
    },
    {
        path: "courses",
        name: "Courses",
        element: <h1>Courses</h1>
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
        element: <DashboardLayout />,
        children: dashboardRoutes
    }
])

export default router
export {dashboardRoutes}