import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { IconButton } from "@material-tailwind/react"

export const PreviousArrow = ({ handlePrev }) =>
{
    return (
        <IconButton 
            variant="text" 
            color="gray"
            className="!absolute top-2/4 left-4 -translate-y-2/4"
            onClick={ handlePrev } 
            >
            <ChevronLeftIcon className="h-6 w-6"/>
        </IconButton>
    )
}

export const NextArrow = ({ handleNext }) =>
{
    return (
        <IconButton 
            variant="text" 
            color="gray"
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
            onClick={ handleNext } 
        >
            <ChevronRightIcon className="h-6 w-6"/>
        </IconButton>
    )
}