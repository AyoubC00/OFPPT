import { Typography, Input, Button } from "@material-tailwind/react"
import { Card } from "@material-tailwind/react"
import { useState } from "react"
import { useAuthContext } from "../../contexts/authContext"
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"

const LoginSection = () =>
{
    const [user, setUser] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '', message: '' })
    const { auth } = useAuthContext();

    const handleChange = ({ target: { name, value }}) =>
    {
        setUser(prev => ({ ...prev, [name]: value }))
    }

    const handleLogin = async ({ target }) => {
        setErrors( { email: '', password: '', message: '' } );
        target.disabled = true;
        if (user.email && user.password)
        {
            const message = await auth(user);
            if (message) setErrors(prev => ({ ...prev, message }))
        }
        else
        {
            if (!user.email) setErrors(prev => ({ ...prev, email: "Email is required " }))
            if (!user.password) setErrors(prev => ({ ...prev, password: "Password is required " }))
        }
        target.disabled = false;
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
                            errors.message ?
                            <Typography variant="small" color="red" className="text-sm mb-4">
                                <ExclamationTriangleIcon className="h-5 w-5 inline-block me-2" />
                                { errors.message }
                            </Typography> : null
                        }
                        <Input label="Email" name="email" color="blue-gray" variant="outlined" value={ user.email } onChange={ handleChange } />
                        {
                            errors.email ?
                            <Typography variant="small" color="red" className="text-sm">
                                <ExclamationTriangleIcon className="h-5 w-5 inline-block me-2"/>
                                { errors.email }
                            </Typography> : null
                        }
                        <Input label="Mote de pass" name="password" type="password" color="blue-gray" variant="outlined" value={ user.password } onChange={ handleChange } />
                        {
                            errors.password ?
                            <Typography variant="small" color="red" className="text-sm">
                                <ExclamationTriangleIcon className="h-5 w-5 inline-block me-2"/>
                                { errors.password }
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