import NavLinks from './NavLinks'
import { Outlet } from 'react-router-dom'
const index = () => {
  return (
    <>
        <NavLinks />
        <Outlet />
    </>
  )
}

export default index;
