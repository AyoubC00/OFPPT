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

export const AnnouncementForm = () => {

  const [announcement, setAnnouncement] = useState({ title: '', description: '', displayDate: '', pinned: false });
  const { user } = useAuthContext();
  const handleChange = ({ target: { name, value } }) => 
  {
    if (name === "pinned") setAnnouncement(prev => ({ ...prev, pinned: !prev.pinned }))
    else setAnnouncement(prev => ({ ...prev, [name]: value }));
  }

  const handleCreate = async () =>
  {
    const response = await request("announcements", "POST", announcement)
        
  }

 return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
      <Card color="transparent" shadow={false} className="sm:w-full max-w-lg">
        <Typography variant="h4" color="blue-gray" className="text-center mb-4">
          Ajouter un announcement
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
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Date d'affichage
            </Typography>
            <Input
              name="displayDate"
              value={ announcement.displayDate }
              onChange={ handleChange }
              type="date"
              size="lg"
              placeholder="10/01/2024"
              className=" !border-blue-gray-200"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Switch label="Pin" name="pinned" value='' checked={ announcement.pinned ? true : false } onChange={ handleChange } className="text-blue-gray-500"/>
          </div>
          <Button className="mt-6" color="blue-gray" fullWidth onClick={ handleCreate }>
            Ajouter l'annonce
          </Button>
        </form>
      </Card>
    </div>
 );
};
