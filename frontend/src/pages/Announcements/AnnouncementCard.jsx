import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
   
const AnnouncementCard = ({ id, title, datetime, description }) => {
    return (
        <Card className="mt-6 w-80">
        <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2 line-clamp-1 h-14">
                { 
                    title
                }
            </Typography>
            <Typography className="line-clamp-1 h-32">
                {
                    description
                }
            </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex gap-2">
            <Link to={`edit/${id}`}><Button color="blue">Edit</Button></Link>
            <Button color="red">delete</Button>
        </CardFooter>
        </Card>
    );
}

export default AnnouncementCard;