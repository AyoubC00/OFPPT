import { Typography, Button, Card, CardBody } from "@material-tailwind/react"
import mywayLogo from "../../assets/myway.png"

const MyWay = () =>
{
    return (
        <div className="container min-w-full text-blue-gray-900 py-10 bg-white">
            <Card className="shadow-none rounded-none sm:w-5/6 lg:w-3/4 mx-auto bg-transarent">
                <CardBody>
                    <div className="mb-4">
                        <div className="flex justify-between items-center mb-4 gap-4">
                            <img src={ mywayLogo } alt="Myway logo" className="lg:mb-5"/>
                            <a href="https://www.myway.ac.ma/fr" className="hidden sm:inline-block">
                                <Button color="blue-gray" className="h-fit py-5">Découvrez My Way</Button>
                            </a>
                        </div>
                        <Typography>
                            Vous êtes sur la bonne voie, pour devenir acteur du Maroc des Compétences !
                            Bien choisir votre métier est votre premier pas sur le chemin de la réussite.
                        </Typography>
                    </div>
                    <a href="https://www.myway.ac.ma/fr" className="sm:hidden">
                        <Button color="blue-gray" className="h-fit py-5 w-full">Découvrez My Way</Button>
                    </a>
                </CardBody>
            </Card>
        </div>
    )
}

export default MyWay