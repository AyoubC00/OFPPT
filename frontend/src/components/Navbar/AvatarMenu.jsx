import { Avatar, MenuHandler, MenuList, Menu, MenuItem, Typography } from "@material-tailwind/react";
import { BookOpenIcon, CalendarDaysIcon, DocumentIcon, PaperClipIcon, Squares2X2Icon, ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import { useAuthContext } from "../../contexts/authContext";
import { NavLink } from "react-router-dom";
import LogoutButton from "../LogoutButton";

const AvatarMenu = ({ className: classes }) =>
{
  const { user } = useAuthContext();
  const { nom, prenom } = user.user
  return (
    <Menu>
      <MenuHandler className={ `ms-auto ${ classes } hover:cursor-pointer w-[48px] h-[48px] rounded-full bg-blue-gray-100 text-center py-2.5` }>
        <Typography>{`${prenom[0]}${nom[0]}`}</Typography>
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
        <LogoutButton variant="menuItem"/>
      </MenuList>
    </Menu>
  )
}

export default AvatarMenu