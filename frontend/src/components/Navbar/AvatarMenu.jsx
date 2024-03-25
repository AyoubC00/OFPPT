import { Avatar, MenuHandler, MenuList, Menu, MenuItem, Typography } from "@material-tailwind/react";
import { BookOpenIcon, CalendarDaysIcon, DocumentIcon, PaperClipIcon, Squares2X2Icon, ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import { useAuthContext } from "../../contexts/authContext";
import { NavLink } from "react-router-dom";
import LogoutButton from "../LogoutButton";

const AvatarMenu = ({ className: classes }) =>
{
  const { logout } = useAuthContext();

  return (
    <Menu>
      <MenuHandler className={ `ms-auto ${ classes } hover:cursor-pointer` }>
        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="Profile image" className="ms-auto w-10 h-10"/>
      </MenuHandler>
      <MenuList>
        <MenuItem>
          <NavLink to="/dashboard">
            <Squares2X2Icon className="h-6 w-6 inline-block me-2"/>
            <Typography variant="small" className="inline">Dashboard</Typography>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/dashboard/courses">
            <BookOpenIcon className="h-6 w-6 inline-block me-2"/>
            <Typography variant="small" className="inline">Courses</Typography>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/dashboard/quizzes">
            <PaperClipIcon className="h-6 w-6 inline-block me-2"/>
            <Typography variant="small" className="inline">Quizzes</Typography>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/dashboard/emploi_de_temps">
            <CalendarDaysIcon className="h-6 w-6 inline-block me-2"/>
            <Typography variant="small" className="inline">Emploi de temps</Typography>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/dashboard/demandes">
            <DocumentIcon className="h-6 w-6 inline-block me-2"/>
            <Typography variant="small" className="inline">Demandes</Typography>
          </NavLink>
        </MenuItem>
        <hr className="my-3" />
        <MenuItem className="text-red-500" onClick={ logout }>
          <LogoutButton variant="menuItem"/>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default AvatarMenu