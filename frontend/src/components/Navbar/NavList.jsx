import { Typography } from "@material-tailwind/react";
import AvatarMenu from "./AvatarMenu";
import { useAuthContext } from "../../contexts/authContext";

const NavList = () => 
{
    const { user: {token} } = useAuthContext();

    return (
        <ul className="w-full my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium"
        >
            <a href="#" className="flex items-center hover:text-blue-gray-500 transition-colors">
            Accueil
            </a>
        </Typography>
        <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium"
        >
            <a href="#" className="flex items-center hover:text-blue-gray-500 transition-colors">
            Filières
            </a>
        </Typography>
        <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium"
        >
            <a href="#" className="flex items-center hover:text-blue-gray-500 transition-colors">
            Espace candidat
            </a>
        </Typography>
        { token ? <AvatarMenu className="hidden lg:block" /> : null }
        </ul>
  );
}

export default NavList