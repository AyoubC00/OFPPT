import { Button, Typography } from "@material-tailwind/react";
import { useAuthContext } from "../../contexts/authContext"
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";

const LogoutButton = ({ variant="button" }) =>
{
    const { logout } = useAuthContext();

    const handleLogout = async ({ target }) =>
    {
        target.disabled = true;
        const message = await logout();
        target.disabled = false;
    }
    
    return (
        variant === "menuItem" ?
        <>
            <ArrowUpOnSquareIcon className="h-6 w-6 rotate-90 inline-block me-2"/>
            <Typography variant="small" className="inline">Déconnecter</Typography>
        </> :
        <Button variant="text" size="sm" color="red" onClick={ handleLogout }>
            <ArrowUpOnSquareIcon className="h-6 w-6 rotate-90 inline-block me-2"/>
            Déconnecter
        </Button>
    )
}

export default LogoutButton