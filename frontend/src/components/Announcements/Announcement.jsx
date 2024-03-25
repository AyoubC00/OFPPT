import { Card, CardBody, Typography, Chip } from "@material-tailwind/react"
import minimizeText from "../../utils/minimizeText"


const Announcement = ({ title, datetime, description }) => 
{
    return (
        <a href="">
            <Card className="rounded-sm shadow hover:shadow-md transition-all md:max-h-[218px]">
                <CardBody>
                    <div className="flex flex-col md:flex-row justify-between items-top mb-4">
                        <div className="order-2 md:order-1">
                            <Typography variant="h5" color="blue-gray" title={ title }>{ minimizeText(title, 11, 50) }</Typography>
                            {/* <Typography variant="small" color="blue-gray" className="font-light">{ datetime }</Typography> */}
                        </div>
                        <div className="mb-4 md:mb-0 order-1 md:order-2 w-fit">
                                <Chip variant="filled" color="red" value="Nouveau" className="ms-auto border-none h-fit rounded-sm" />
                        </div>
                    </div>
                    <Typography>{ minimizeText(description, 20, 130) }</Typography>
                </CardBody>
            </Card>
        </a>
    )
}

export default Announcement