import { Outlet } from "react-router-dom"
import { Navbar } from "../../components"
import { AuthContextProvider } from "../../contexts/authContext"

const Layout = () =>
{
    return (
        <div className="relative bg-gray-50">
            <AuthContextProvider>
                <Navbar />
                <Outlet />
            </AuthContextProvider>
        </div>
    )
}

export default Layout