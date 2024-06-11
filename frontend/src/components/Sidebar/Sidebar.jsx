import React from 'react'
import { Button, IconButton } from '@material-tailwind/react'
import { dashboardRoutes } from '../../router'
import { NavLink } from 'react-router-dom'
import { Squares2X2Icon, BookOpenIcon, PaperClipIcon, HomeIcon, DocumentIcon, CalendarDaysIcon, MegaphoneIcon, SparklesIcon, ArrowUpOnSquareIcon } from '@heroicons/react/24/outline'
import { useAuthContext } from '../../contexts/authContext'

const Sidebar = () => {

  const { logout } = useAuthContext();
  const iconStyle = "h-6 w-6 inline-block";
  const ICONS = {
    home : <HomeIcon className={ iconStyle } />,
    dashboard: <Squares2X2Icon className={ iconStyle }  />,
    demandes: <DocumentIcon className={ iconStyle }  />,
    courses: <BookOpenIcon className={ iconStyle }  />,
    quizzes: <PaperClipIcon className={ iconStyle }  />,
    announcements: <MegaphoneIcon className={ iconStyle }  />,
    evenements: <SparklesIcon className={ iconStyle }  />,
    emploi_de_temps: <CalendarDaysIcon className={ iconStyle }  />
  }
  
  return (
    <div className="flex flex-col fixed h-full py-8 shadow-md">

        <NavLink to="/" className="whitespace-pre px-9 py-2 hover:bg-red-500">
          <IconButton variant='text' className="me-2 w-8 h-8 rounded-md">
            { ICONS.home }
          </IconButton>
            Home
        </NavLink>

        {
          dashboardRoutes.map(route =>
            <NavLink to={`${ route.path }`} key={ route.path } className="whitespace-pre px-9 py-2 hover:bg-red-500">
              <IconButton variant='text' className="me-2 w-8 h-8 rounded-md">
                { ICONS[route.path.split("/").pop()] }
              </IconButton>
                { route.name }
            </NavLink>
          )
        }

        <Button variant="text" size="lg" color="red" onClick={ logout } className="w-fit p-1.5 font-semibold mx-auto mt-auto">
            <ArrowUpOnSquareIcon className="h-7 w-7 rotate-90 inline-block me-2"/>
            Déconnecter
        </Button>

    </div>
  )
}

export default Sidebar