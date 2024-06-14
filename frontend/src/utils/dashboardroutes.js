export const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",

    },
    {
        path: "demandes",
        name: "Demandes",
    },
    {
        path: "courses",
        name: "Courses",
    },
    {
        path: "quizzes",
        name: "Quizes",
    },
    {
        path: "emploi_de_temps",
        name: "Emploi de temps",
    }
]

export const adminRoutes = [
    ...routes,
    {
        path: "announcements",
        name: "Announcements",
    },
    {
        path: "evenements",
        name: "Evenements",
    },
]