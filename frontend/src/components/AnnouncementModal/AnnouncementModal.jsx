import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from "@material-tailwind/react"
import { BsChevronLeft, BsX } from "react-icons/bs"

const AnnouncementModal = ({ handleShow, announcement, ...props}) =>
{
    return (
        announcement === null ? null :
        <Dialog { ...props } size="xxl">
            <DialogHeader>
                <Typography variant="h4">{ announcement.title }</Typography>
                <Button variant="text" size="sm" className="ms-auto p-1 self-start" onClick={ props.handler}>
                    <BsX size="32"/>
                </Button>
            </DialogHeader>
            <DialogBody className="overflow-y-scroll">
                <Typography variant="small">Posted { announcement.created_at }</Typography>
                <Typography variant="small" className="mb-8">By { `${ announcement.posted_by.nom } ${ announcement.posted_by.prenom }` }</Typography>
                { announcement.description }
            </DialogBody>
        </Dialog>
    )
}

export default AnnouncementModal