import { Card, CardBody, Typography, Button } from "@material-tailwind/react"
import { 
    BsFillTrash3Fill,
    BsFillPencilFill,
    BsPinAngleFill,
 } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";

import request from "../../utils/request";
import { removeAnnouncement } from "../../features/announcements/AnnouncementsSlice";
import minimizeText from "../../utils/minimizeText"

const PinnedAnnouncement = ({ id, title, pinned }) => 
{
    const dispatch = useDispatch();
    const deleteHandler = async() => {
        const data = await request(`announcements/${id}`, "DELETE");  
        if(data.ok) dispatch(removeAnnouncement({id, isPinned : pinned}));
    }
    return (
        <div>
            <Card className="rounded-none shadow-none">
                <CardBody className="p-6 flex justify-between border-b-2 items-center">
                    <div className="flex items-center justify-start gap-4">
                        <BsPinAngleFill className="text-xl lg:text-3xl inline w-12"/>
                        <Typography variant="h6" color="blue-gray" className=" text-start" title={ title }>{ minimizeText(title, 8, 50) }</Typography>
                    </div>
                    <div className="flex gap-5">
                        <Link to={`edit/${id}`}><BsFillPencilFill className="text-2xl text-blue-gray-600" /></Link>
                        <BsFillTrash3Fill onClick={deleteHandler} className="text-2xl text-red-600 cursor-pointer" />
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default PinnedAnnouncement;