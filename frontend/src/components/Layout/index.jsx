import { Outlet } from "react-router-dom"
import { Navbar } from "../"
const Layout = () =>
{
    return (
        <div className="relative bg-gray-50">
            {/* <svg xmlns='http://www.w3.org/2000/svg' className="absolute top-0 left-0 -z-20" width='100%' height='100%' >
                <rect fill='#FAFAFA' width='24' height='24'/>
                <defs>
                    <linearGradient id='a' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'>
                        <stop offset='0'  stopColor='#ECEFF1'/>
                        <stop offset='1'  stopColor='#FAFAFA'/>
                    </linearGradient>
                </defs>
                <pattern id='b'  width='34' height='34' patternUnits='userSpaceOnUse'>
                    <circle  fill='#FAFAFA' cx='17' cy='17' r='17'/>
                </pattern>
                <rect width='100%' height='100%' fill='url(#a)'/>
                <rect width='100%' height='100%' fill='url(#b)' fillOpacity='0.44'/>
            </svg> */}
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout