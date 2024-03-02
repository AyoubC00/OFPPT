import { Outlet } from "react-router-dom"
import { Navbar } from "../"
const Layout = () =>
{
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout