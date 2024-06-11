import { Card, CardBody, Typography } from "@material-tailwind/react"
import { BsPinAngleFill } from "react-icons/bs"
import minimizeText from "../../utils/minimizeText"

const PinnedAnnouncement = ({ announcement, handleShow }) => 
{
    return (
        <div onClick={ () => handleShow(announcement) } className="cursor-pointer">
            <Card className="rounded-none shadow-none hover:bg-blue-gray-50 transition-all">
                <CardBody className="p-6">
                    <div className="flex-col md:flex-row flex gap-4">
                        <BsPinAngleFill className="text-xl lg:text-3xl inline"/>
                        <Typography variant="h6" color="blue-gray" className="w-full text-start" title={ announcement.title }>{ minimizeText(announcement.title, 8, 50) }</Typography>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default PinnedAnnouncement