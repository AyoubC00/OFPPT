import React from 'react'
import NavLinks from './NavLinks'
import { Outlet } from 'react-router-dom'
const index = () => {
    const currentPage = 1
  return (
    <>
        <NavLinks />
        {/* {currentPage === 1 && }
        {currentPage === 2 && }
        {currentPage === 3 && } */}
        <Outlet />
    </>
  )
}

export default index;
