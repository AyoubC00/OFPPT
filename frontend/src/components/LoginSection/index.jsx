import { CardHeader, Typography, Input, Button, Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react"
import { Card } from "@material-tailwind/react"
import Myway from "../myway/Myway"

const LoginSection = () =>
{
    return (
        <div className="container min-w-full text-blue-gray-900 py-10 relative">
            <svg xmlns='http://www.w3.org/2000/svg' className="absolute top-0 left-0 -z-20" width='100%' height='100%' >
                <rect fill='#FAFAFA' width='24' height='24'/>
                <defs>
                    <linearGradient id='a' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'>
                        <stop offset='0'  stopColor='#ECEFF1'/>
                        <stop offset='1'  stopColor='#FAFAFA'/>
                    </linearGradient>
                </defs>
                <pattern id='b'  width='34' height='34' patternUnits='userSpaceOnUse'>
                    <circle  fill='#FAFAFA' cx='17' cy='17' r='17'/>
                </pattern>
                <rect width='100%' height='100%' fill='url(#a)'/>
                <rect width='100%' height='100%' fill='url(#b)' fillOpacity='0.44'/>
            </svg>
            <div className="p-4 sm:px-16 xl:w-5/6 xl:mx-auto">
                <Myway />
                <Card className="mx-auto bg-transparent shadow-none md:flex md:flex-row md:gap-16">
                    <div className="hidden sm:flex sm:flex-col sm:w-full lg:w-2/3">
                        <Typography className="mb-2">L'éducation est la clé d'un meilleur avenir pour tous. Travaillons ensemble pour que chacun ait accès à une éducation de qualité.</Typography>
                        <div className="my-auto">
                            <Button variant="text" className="p-1 text-left mb-2 hover:bg-transparent text-sm">Vous avez oublié vos identifiants?</Button>
                            <Button variant="text" className="p-1 text-left mb-2 hover:bg-transparent text-sm">Vous n'avez pas encore de compte ? Créez-en un maintenant !</Button>
                        </div>
                    </div>
                    <Card className="flex flex-col gap-3 lg:w-1/3 p-6 shadow-lg">
                        <CardHeader className="p-4 -translate-y-8 text-center sm:hidden">
                            <Typography variant="h4">Se connecté</Typography>
                        </CardHeader>
                        <Input label="CEF" color="blue-gray" variant="outlined"/>
                        <Input label="Mote de pass" type="password" color="blue-gray" variant="outlined"/>
                        <Button variant="filled" color="blue-gray" className="shadow-none hover:shadow-none">Connexion</Button>
                        <Button variant="text" className="sm:hidden text-xs p-1 text-left mt-4 hover:bg-transparent">Mote de passe oublié ?</Button>
                        <Button variant="text" className="sm:hidden text-xs p-1 text-left mb-2 hover:bg-transparent">Créez une compte maintenant !</Button>
                    </Card>
                </Card>
            </div>
        </div>
    )
}

export default LoginSection