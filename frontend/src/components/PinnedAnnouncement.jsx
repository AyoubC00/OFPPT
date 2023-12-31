import { Card, CardBody, Typography } from "@material-tailwind/react"
import { BsPinAngleFill } from "react-icons/bs"

const PinnedAnnouncement = ({ id, title, datetime, description }) => 
{
    return (
        <a href="">
            <Card className="rounded-none shadow-none hover:bg-blue-gray-50 transition-all">
                <CardBody className="p-6">
                    <div className="flex-col md:flex-row flex items-center gap-4">
                        <div className="text-center flex items-center justify-between w-full sm:gap-2 lg:gap-0 md:w-fit lg:w-fit lg:flex-col">
                            <BsPinAngleFill className="text-3xl inline"/>
                            <Typography variant="small" color="blue-gray" className="font-bold inline md:block">{ datetime }</Typography>
                        </div>
                        <Typography variant="h6" color="blue-gray" className="w-full text-start">{ title }</Typography>
                    </div>
                </CardBody>
            </Card>
        </a>
    )
}

export default PinnedAnnouncement