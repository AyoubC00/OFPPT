import { Typography,ButtonGroup, Button ,Avatar } from "@material-tailwind/react";
import  GoogleMap from "./mapfooter"
 
const currentYear = new Date().getFullYear();


const Footer =() =>{

    return (
    
    <footer className="relative min-w-full pt-10 bg-blue-gray-900">
      <div className="mx-auto lg:w-10/12 px-4 md:px-16">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2 " >
          <div>
                <Typography variant="h3" className="mb-3 font-normal text-blue-gray-200">
                    Contact info
                </Typography>
                <Typography  className="font-normal text-blue-gray-200">
                    Tel : 05 52 00 55 05
                </Typography>
                <Typography  className="font-normal text-blue-gray-200">
                    Email : support@ofppt.ma
                </Typography>
                <ButtonGroup className="mt-3" variant="gradient">
                    <img src="https://www.ofppt.ma/themes/custom/ofppt/assets/images/logo.png" alt="avatar" variant="rounded" />
                </ButtonGroup>
                
          </div>
       
          <GoogleMap />
        </div>
        <div className="mt-12 flex min-w-full flex-col items-center justify-center border-t border-blue-gray-400 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-200 md:mb-0"
          >
            &copy; {currentYear} <a href="https://material-tailwind.com/">Institut Supérieur de Technologie Appliquée Ait Melloul</a>
            
          </Typography>
          <div className="flex gap-4 text-blue-gray-200 sm:justify-center">
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Accueil
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            A propos
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Les Filieres
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
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



    
