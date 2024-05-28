import { Card, CardBody, Typography, Button } from "@material-tailwind/react"
import { BsPinAngleFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import minimizeText from "../../utils/minimizeText"

const PinnedAnnouncement = ({ id, title }) => 
{
    return (
        <div>
            <Card className="rounded-none shadow-none">
                <CardBody className="p-6 flex justify-between border-b-2 items-center">
                    <div className="flex-col md:flex-row flex gap-4">
                        <BsPinAngleFill className="text-xl lg:text-3xl inline"/>
                        <Typography variant="h6" color="blue-gray" className="w-full text-start" title={ title }>{ minimizeText(title, 8, 50) }</Typography>
                    </div>
                    <div className="flex gap-2">
                        <Link to={`edit/${id}`}><Button color="blue">Edit</Button></Link>
                        <Button color="red">Delete</Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default PinnedAnnouncement;