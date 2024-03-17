import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline"
import {FaPeopleRoof} from "react-icons/fa6";
   
  const  CarouselEvent =({imageUrl,description,title,publisher,date})=>{
    
    return (
      <a href="">
        <Card className="md:m-4">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-2 h-30 rounded-lg"
          >
            <img
              className="transition hover:scale-110"
              src={imageUrl}
              alt="ui/ux review check"
            />
            </CardHeader>
            <CardBody className="h-40">
              <Typography variant="h4" color="blue-gray">
                {title}
              </Typography>
              <Typography variant="lead" color="gray" className="mt-3  text-sm">
                      {description.length<=70? description : description.slice(0,70)+"..."}
              </Typography> 
            </CardBody>
          
            <CardFooter className=" h-20 flex items-center justify-between">
              <div className="flex items-center -space-x-3">
                
                <div className={`center relative inline-block select-none whitespace-nowrap rounded-lg py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white ${publisher ==='admin' ?'bg-orange-500' : 'bg-green-500'}`}>
                    <div className="absolute top-2/4 left-1 h-5 w-5  -translate-y-2/4  ">
                      {
                        (publisher==="admin")? <BuildingOffice2Icon/> :<FaPeopleRoof style={{ fontSize: '1.5em' }} />
                      }
                      
                    </div>
                    <div className="ml-4 mt-px">{publisher}</div>
                </div> 
                
              </div>
              <Typography className=" text-sm sm:text-xs">{ date }</Typography>
            </CardFooter>
        </Card>
      </a>
    )
  }

  export default CarouselEvent;