import { Outlet } from "react-router-dom"
import { Sidebar } from "../../components/Sidebar"

const DashboardLayout = () =>
{
    return (
        <>
            <div className="grid  grid-cols-12">
                <div className="cols-2"><Sidebar/></div>
                <div className="cols-10">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default DashboardLayout