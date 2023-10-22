import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button

  } from "@material-tailwind/react";
  import { BuildingOffice2Icon } from "@heroicons/react/24/outline"
import {FaPeopleRoof} from "react-icons/fa6";
   
  const  CarouselEvent =({imageUrl,description,title,publisher})=>{
    return (
    <div className="">
      
      <Card className="max-w-[26rem]  m-2 h-full overflow-hidden text-start ">
      
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 h-30 rounded-none"
        >
          <img
            src={imageUrl}
            alt="ui/ux review check"
            style={{ width: "800px", height: "250px" }}
          />
        </CardHeader>
        
        <CardBody className="h-50">
          <Typography variant="h4" color="blue-gray ">
            {title}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3  font-normal ">
                  {description}
          </Typography> 
            
        </CardBody>
       
        <CardFooter className=" h-20 flex items-center justify-between">
          <div className="flex items-center -space-x-3">
            
            <div class={`center relative inline-block select-none whitespace-nowrap rounded-lg py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white ${publisher ==='administration' ?'bg-orange-500' : 'bg-green-500'}`}>
                <div class="absolute top-2/4 left-1 h-5 w-5 -translate-y-2/4">
                  {
                    (publisher==="administration")? <BuildingOffice2Icon/> :<FaPeopleRoof style={{ fontSize: '1.5em' }} />
                  
                  }
                  
                </div>
                <div class="ml-4 mt-px">{publisher}</div>
            </div> 
            
          </div>
          <Typography className="font-normal">January 10</Typography>
        </CardFooter>
      </Card>
      
     
      </div>
    );
  }

  export default CarouselEvent;