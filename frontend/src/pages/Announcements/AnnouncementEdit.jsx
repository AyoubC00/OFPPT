
import React, { useState } from "react";
import {
 Card,
 Input,
 Button,
 Typography,
 Switch,
 Textarea
} from "@material-tailwind/react";
import request from "../../utils/request";
import { useAuthContext } from "../../contexts/authContext";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const AnnouncementEdit = () => {

  const navigate = useNavigate();
  const { announcementId } = useParams();
  const announcements = useSelector(state => state.announcements);
  const { title, description, pinned } = announcements.all.filter(ann => ann.id === parseInt(announcementId))[0];
  const [announcement, setAnnouncement] = useState({ title: title, description: description, pinned: pinned });
  const { user } = useAuthContext();
  const handleChange = ({ target: { name, value } }) => 
  {
    if (name === "pinned") setAnnouncement(prev => ({ ...prev, pinned: !prev.pinned }))
    else setAnnouncement(prev => ({ ...prev, [name]: value }));
  }

  const handleUpdate = async () =>
  {
    const response = await request(`announcements/${announcementId}`, "PUT", announcement);
    navigate(-1);  
  }

 return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
      <Button color="blue-gray" onClick={()=>navigate(-1)} className="self-start">Back</Button>
      <Card color="transparent" shadow={false} className="sm:w-full max-w-lg">
        <Typography variant="h4" color="blue-gray" className="text-center mb-4">
          Mettre à jour l'annoncement
        </Typography>
        <form className="mt-8 mb-2 w-full max-w-lg">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Titre d'annoncement
            </Typography>
            <Input
              name="title"
              value={ announcement.title }
              onChange={ handleChange }
              size="lg"
              placeholder="titre"
              className=" !border-blue-gray-200"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Sujet d'annonce
            </Typography>
            <Textarea placeholder="description de l'annonce"  
              name="description"
              value={ announcement.description }
              onChange={ handleChange }
              className=" !border-blue-gray-200"
              labelProps={{
                className: "before:content-none after:content-none",
              }}/>
            <Switch label="Pin" name="pinned" value='' checked={ announcement.pinned ? true : false } onChange={ handleChange } className="text-blue-gray-500"/>
          </div>
          <Button className="mt-6" color="blue-gray" fullWidth onClick={ handleUpdate }>
            Update
          </Button>
        </form>
      </Card>
    </div>
 );
};

export default AnnouncementEdit;