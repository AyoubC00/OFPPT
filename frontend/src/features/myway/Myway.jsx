import { Typography, Button } from "@material-tailwind/react"
import mywayLogo from "../../assets/myway.png"

const Myway = () =>
{
    return (
        <div className="container flex justify-between p-10 mb-20 bg-white rounded-md px-16 shadow-md items-center">
            <div>
                <img src={ mywayLogo } alt="Myway logo" className="text-center"/>
                <Typography>
                    Vous êtes sur la bonne voie, pour devenir acteur du Maroc des Compétences !
                </Typography>
                <Typography>
                    Bien choisir votre métier est votre premier pas sur le chemin de la réussite.
                </Typography>
            </div>
            <a href="https://www.myway.ac.ma/fr">
                <Button color="blue-gray" className="h-fit py-5">Découvrez My Way</Button>
            </a>
        </div>
    )
}

export default Myway