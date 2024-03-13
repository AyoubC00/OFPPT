import React from "react";
import {
 Card,
 Input,
 Button,
 Typography,
 Switch
} from "@material-tailwind/react";

export const AnnouncementForm = () => {
 return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card color="transparent" shadow={false} className="w-full max-w-lg">
        <Typography variant="h4" color="blue-gray">
          Ajouter un announcement
        </Typography>
        <form className="mt-8 mb-2 w-full max-w-lg">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Titre d'annoncement
            </Typography>
            <Input
              size="lg"
              placeholder="exemple:les diplomes sont prêt"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              sujet d'annonce
            </Typography>
            <Input
              size="lg"
              placeholder="cette annonce est à propos de ....."
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Date d'affichage
            </Typography>
            <Input
              type="date"
              size="lg"
              placeholder="10/01/2024"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Switch label="Pin"/>
          </div>
          <Button className="mt-6" fullWidth>
            Ajouter l'annonce
          </Button>
        </form>
      </Card>
    </div>
 )
}
