import { Outlet } from "react-router-dom"
import { Sidebar } from "../../components/Sidebar"

const DashboardLayout = () =>
{
    return (
        <>
            <div className="grid  grid-cols-[16rem,1fr] h-screen overflow-hidden">
                <div><Sidebar/></div>
                <div className="overflow-auto">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default DashboardLayout