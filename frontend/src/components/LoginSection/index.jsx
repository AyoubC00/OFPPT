import { Typography, Input, Button } from "@material-tailwind/react"
import { Card } from "@material-tailwind/react"
import { useState } from "react"
import { useAuthContext } from "../../contexts/authContext"
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"

const LoginSection = () =>
{
    const [user, setUser] = useState({ email: '', password: '' });
    const [error, setError] = useState({ email: '', password: '', message: '' })
    const { auth } = useAuthContext();

    const handleChange = ({ target: { name, value }}) =>
    {
        setUser(prev => ({ ...prev, [name]: value }))
    }

    const handleLogin = async ({ target }) => 
    {
        setError({ email: '', password: '', message: '' })
        target.disabled = true
        let message = '';
        if ( user.email && user.password ) 
        {
            message = await auth(user)
            console.log(message)
            setError(prev => ({ ...prev, message }))
        }
        else
        {
            if (!user.email) setError(prev => ({ ...prev, email: "Email is required" }))
            if (!user.password) setError(prev => ({ ...prev, password: "Password is required" }))
        }
        target.disabled = false
    }

    return (
        <div className="container min-w-full text-blue-gray-900 py-10">
            <div className="p-4 sm:px-16 xl:w-5/6 xl:mx-auto">
                <Card className="mx-auto bg-transparent shadow-none md:flex md:flex-row md:gap-16 mb-24">
                    <div className="hidden sm:flex sm:flex-col sm:w-full lg:w-2/3">
                        <Typography className="mb-2">L'éducation est la clé d'un meilleur avenir pour tous. Travaillons ensemble pour que chacun ait accès à une éducation de qualité.</Typography>
                        <div className="my-auto">
                            <Button variant="text" className="p-1 text-left mb-2 hover:bg-transparent text-sm">Vous avez oublié vos identifiants?</Button>
                            <Button variant="text" className="p-1 text-left mb-2 hover:bg-transparent text-sm">Vous n'avez pas encore de compte ? Créez-en un maintenant !</Button>
                        </div>
                    </div>
                    <Card className="flex flex-col gap-3 lg:w-1/3 p-8 md:p-6 shadow-lg">
                        {
                            error.message ?
                            <Typography variant="small" color="red" className="text-xs mb-2">
                                <ExclamationTriangleIcon color="red" className="h-4 w-4 inline-block me-2"/>
                                { error.message }
                            </Typography> : null
                        }
                        <Input label="Email" name="email" color="blue-gray" variant="outlined" value={ user.email } onChange={ handleChange }/>
                        {
                            error.email ?
                            <Typography variant="small" color="red" className="text-xs">
                                <ExclamationTriangleIcon color="red" className="h-4 w-4 inline-block me-2"/>
                                { error.email }
                            </Typography> : null
                        }
                        <Input label="Mote de pass" name="password" type="password" color="blue-gray" variant="outlined" value={ user.password } onChange={ handleChange }/>
                        {
                            error.password ?
                            <Typography variant="small" color="red" className="text-xs">
                                <ExclamationTriangleIcon color="red" className="h-4 w-4 inline-block me-2"/>
                                { error.password }
                            </Typography> : null
                        }
                        <Button variant="filled" color="blue-gray" className="shadow-none hover:shadow-none" onClick={ handleLogin }>Connexion</Button>
                        <Button variant="text" className="sm:hidden text-xs p-1 text-left mt-4 hover:bg-transparent">Mote de passe oublié ?</Button>
                        <Button variant="text" className="sm:hidden text-xs p-1 text-left hover:bg-transparent">Créez une compte maintenant !</Button>
                    </Card>
                </Card>
            </div>
        </div>
    )
}

export default LoginSection