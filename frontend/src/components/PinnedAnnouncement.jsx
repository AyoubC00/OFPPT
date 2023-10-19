import { Card, CardBody, Typography } from "@material-tailwind/react"
import { BsPinAngleFill } from "react-icons/bs"

const PinnedAnnouncement = () => 
{
    return (
        <a href="">
            <Card className="rounded-none shadow-none hover:bg-blue-gray-50 transition-all">
                <CardBody className="p-6">
                    <div className="flex-col md:flex-row flex items-center gap-4">
                        <div className="text-center flex items-center justify-between w-full sm:gap-2 lg:gap-0 md:w-fit lg:w-fit lg:flex-col">
                            <BsPinAngleFill className="text-3xl inline"/>
                            <Typography variant="small" color="blue-gray" className="font-bold inline md:block">03/23</Typography>
                        </div>
                        <Typography variant="h6" color="blue-gray" className="">[DDOWFS] - Lorem ipsum dolor amet doloas saloa kiloa lkas</Typography>
                    </div>
                </CardBody>
            </Card>
        </a>
    )
}

export default PinnedAnnouncement