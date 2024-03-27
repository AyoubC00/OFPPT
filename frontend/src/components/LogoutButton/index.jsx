import { Button, MenuItem, Typography } from "@material-tailwind/react";
import { useAuthContext } from "../../contexts/authContext";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";

const LogoutButton = ({ variant="button" }) =>
{
    const { logout } = useAuthContext();

    const handleLogout = async ({ target }) =>
    {
        target.disabled = true;
        const response = await logout();
        target.disabled = true;
    }
    return (
        variant === "menuItem" ?
        <MenuItem className="text-red-500" onClick={ handleLogout }>
            <ArrowUpOnSquareIcon className="h-6 w-6 rotate-90 inline-block me-2"/>
            <Typography variant="small" className="inline">Déconnecter</Typography>
        </MenuItem> :
        <Button variant="text" size="sm" color="red" onClick={ handleLogout }>
            <ArrowUpOnSquareIcon className="h-6 w-6 rotate-90 inline-block me-2"/>
            Déconnecter
        </Button>
    )
}

export default LogoutButton