import { Card, CardBody, Typography, Chip } from "@material-tailwind/react"

const Announcement = () => 
{
    return (
        <a href="">
            <Card className="rounded-sm shadow hover:shadow-md transition-all">
                <CardBody>
                    <div className="flex flex-col md:flex-row justify-between items-top mb-4">
                        <div className="order-2 md:order-1">
                            <Typography variant="h5" color="blue-gray">[DDOWFS] - Lorem ipsum dolor amet doloas saloa kiloa lkas</Typography>
                            <Typography variant="small" color="blue-gray" className="font-light">01/03/2023 - 12:30 PM</Typography>
                        </div>
                        <div className="mb-4 md:mb-0 order-1 md:order-2 w-fit">
                                <Chip variant="filled" color="red" value="Nouveau" className="ms-auto border-none h-fit rounded-sm" />
                        </div>
                    </div>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quos cum vero. Expedita accusamus illum facilis autem minus eveniet eaque!
                    </Typography>
                </CardBody>
            </Card>
        </a>
    )
}

export default Announcement