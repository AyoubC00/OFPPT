import { Typography } from "@material-tailwind/react"
import { ExclamationCircleIcon } from "@heroicons/react/24/outline"

const NoResult = () =>
{
    return (
        <div>
            <Typography className="text-3xl text-center py-6">Aucune résultat!</Typography>
            <ExclamationCircleIcon className="h-40 w-full text-gray-300"/>
        </div>
    )
}

export default NoResult