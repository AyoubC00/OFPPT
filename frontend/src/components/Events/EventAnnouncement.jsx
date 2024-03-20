import { Card, CardBody, Typography } from "@material-tailwind/react";
import minimizeText from "../../utils/minimizeText";

const EventAnnouncement = ({ eventDetails }) =>
{
    return (
        <Card className="align-self-stretch">
            <CardBody>
                <div className="sm:flex gap-4 mb-3">
                    <img src={ eventDetails.imageUrl } className="rounded-md mb-2 md:mb-0 w-16 h-16" />
                    <div className="flex flex-col">
                        <Typography variant="h4" className="">{ eventDetails.publisher }</Typography>
                        <Typography variant="small" className="mt-auto tracking-wide">{ eventDetails.date }</Typography>
                    </div>
                </div>
                <div className="flex flex-col w-full mb-4">
                    <div className="flex justify-between mt-auto">
                    </div>
                </div>
                <Typography variant="h6" className="mb-2">{ eventDetails.title }</Typography>
                <Typography title={ eventDetails.description }>{ minimizeText(eventDetails.description, 15, 100) }</Typography>
                
            </CardBody>
        </Card>
    )
}

export default EventAnnouncement