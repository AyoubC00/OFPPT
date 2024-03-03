import { Typography, Button } from "@material-tailwind/react"
import mywayLogo from "../../assets/myway.png"

const MyWay = () =>
{
    return (
        <div className="container flex justify-between py-10 bg-white rounded-md px-4 md:px-16 shadow-md items-center">
            <div>
                <div className="flex justify-between lg:justify-center items-center">
                    <img src={ mywayLogo } alt="Myway logo" className="mb-5"/>
                    <a href="https://www.myway.ac.ma/fr" className="lg:hidden">
                        <Button color="blue-gray" className="h-fit py-5">Découvrez My Way</Button>
                    </a>
                </div>
                <Typography>
                    Vous êtes sur la bonne voie, pour devenir acteur du Maroc des Compétences !
                </Typography>
                <Typography>
                    Bien choisir votre métier est votre premier pas sur le chemin de la réussite.
                </Typography>
            </div>
            <a href="https://www.myway.ac.ma/fr" className="hidden lg:block">
                <Button color="blue-gray" className="h-fit py-5">Découvrez My Way</Button>
            </a>
        </div>
    )
}

export default MyWay