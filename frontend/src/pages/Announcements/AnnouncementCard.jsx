import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { 
    BsFillTrash3Fill,
    BsFillPencilFill,
 } from "react-icons/bs"
 import { Link } from "react-router-dom";
 import { useDispatch } from "react-redux";

 import { removeAnnouncement } from "../../features/announcements/AnnouncementsSlice";
import minimizeText from "../../utils/minimizeText";
import request from "../../utils/request";
   
const AnnouncementCard = ({ id, title, datetime, description, pinned }) => {
    const dispatch = useDispatch();
    const deleteHandler = async() => {
        const data = await request(`announcements/${id}`, "DELETE");  
        if(data.ok) dispatch(removeAnnouncement({id, isPinned : pinned}));
    }

    return (
        <Card className="mt-6 w-80 px-2">
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2 h-14 overflow-x-hidden">
                    { 
                        minimizeText(title, 3, 10)
                    }
                </Typography>
                <Typography variant="paragraph" className="h-28">
                    {
                        minimizeText(description, 20, 100)
                    }
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-end gap-6">
                <Link to={`edit/${id}`}><BsFillPencilFill className="text-2xl text-blue-gray-600" /></Link>
                <BsFillTrash3Fill onClick={deleteHandler} className="text-2xl text-red-600 cursor-pointer" />
            </CardFooter>
        </Card>
    );
}

export default AnnouncementCard;
