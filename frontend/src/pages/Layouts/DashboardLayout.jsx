import { Outlet } from "react-router-dom"
import { Sidebar } from "../../components/Sidebar"
import { AuthContextProvider } from "../../contexts/authContext"

const DashboardLayout = () =>
{
    return (
        <AuthContextProvider>
            <div>
                <Sidebar/>
            </div>
            <div className="p-8 ps-72 w-full">
                <Outlet />
            </div>
        </AuthContextProvider>
    )
}

export default DashboardLayout