import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components"
import { Home, Login } from "./pages"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
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
    }
])

export default router