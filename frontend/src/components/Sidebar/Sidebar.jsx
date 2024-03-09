import React from 'react'
import { Button } from '@material-tailwind/react'
import { dashboardRoutes } from '../../router'

const Sidebar = () => {
  return (
    <div>
        {dashboardRoutes.map(route=>
        <Button>
            {route.name}
        </Button>)}
        
    </div>
  )
}

export default Sidebar