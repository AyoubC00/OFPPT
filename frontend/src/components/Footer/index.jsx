import { Typography } from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid"
import ofppt_logo from "../../assets/ofpptlogo.svg"

const currentYear = new Date().getFullYear();

const Footer =() =>{

    return (
    
    <footer className="relative min-w-full pt-10 bg-blue-gray-900">
      <div className="mx-auto lg:w-10/12 px-4 md:px-16">
          <div className="flex justify-between items-center">
            <div>
                <Typography variant="h3" className="mb-3 font-normal text-blue-gray-200">
                    Contact info
                </Typography>
                <Typography  className="font-normal text-blue-gray-200">
                    <PhoneIcon className="h-5 inline-block me-2" /> 05 52 00 55 05
                </Typography>
                <Typography  className="font-normal text-blue-gray-200">
                    <EnvelopeIcon className="h-5 inline-block me-2" /> support@ofppt.ma
                </Typography>
                <Typography  className="font-normal text-blue-gray-200">
                    <MapPinIcon className="h-5 inline-block me-2" /> Institut Supérieur de Technologie Appliquée Ait Melloul, Aït Melloul 80000
                </Typography>
            </div>
            <div className="bg-white rounded-full flex flex-col justify-center p-4 w-32 h-32 text-center">
              <img src={ofppt_logo} className="w-full mb-1" alt="OFPPT Logo" />
              <span className="text-2xl font-semibold text-blue-gray-900">OFPPT</span>
            </div>
          </div>
        <div className="mt-8 flex min-w-full flex-col items-center justify-center py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-50 md:mb-0"
          >
            &copy; {currentYear} <a href="/">Institut Supérieur de Technologie Appliquée Ait Melloul</a>
            
          </Typography>
          <div className="flex gap-4 text-blue-gray-50 sm:justify-center">
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
              <li>
                <Typography
                  as="a"
                  href="#"
                  className="font-normal transition-colors hover:text-blue-gray-500 focus:text-blue-gray-500"
                >
                  Accueil
                </Typography>
              </li>
          <li>
                <Typography
                  as="a"
                  href="#"
                  className="font-normal transition-colors hover:text-blue-gray-500 focus:text-blue-gray-500"
                >
                  Filieres
                </Typography>
              </li>
              <li>
                <Typography
                  as="a"
                  href="#"
                  className="font-normal transition-colors hover:text-blue-gray-500 focus:text-blue-gray-500"
                >
                  Espace candidate
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    
    )
}

export default Footer;



    
