import { Button } from "@material-tailwind/react"
import ofppt_logo from "../../assets/ofpptlogo.svg"
const Navbar = () =>
{
    return (
        <nav className="w-full px-4 py-4 sticky top-0 z-50 bg-white shadow-sm">
            <div className="w-3/4 mx-auto flex items-center">
                <a href="/" className="me-8">
                    <img src={ ofppt_logo } alt="OFPPT Logo" className="h-8" />
                </a>
                <ul className="flex flex-1 items-center gap-6 [&>*]:text-md [&>*:hover]:text-blue-gray-500">
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Les filières</a></li>
                    <li><a href="#">Espace candidate</a></li>
                    <li className="ms-auto"><Button variant="text" color="blue-gray">Se connecter</Button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar