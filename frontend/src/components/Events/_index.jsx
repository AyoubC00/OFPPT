import Carousel from "./Carousel";
import { Typography } from "@material-tailwind/react"
import { CalendarIcon } from "@heroicons/react/24/outline"
const Events = () => {


  return (
    <div className="container min-w-full py-10 bg-gray-50 text-blue-gray-900  ">
              <Typography variant="h2" className="sm:text-5xl px-4 text-center mb-10 font-normal">
                  <CalendarIcon className="h-16 inline align-middle me-5 text-blue-gray-900"/>
                  Evenements
              </Typography>
            <Carousel/>
    </div>
  )
}
export default Events;