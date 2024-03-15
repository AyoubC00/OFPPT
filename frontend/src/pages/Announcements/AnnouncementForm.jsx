import React from "react";
import {
 Card,
 Input,
 Button,
 Typography,
 Switch,
 Textarea
} from "@material-tailwind/react";

export const AnnouncementForm = () => {
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
              size="lg"
              label="exemple:les diplomes sont prêt"
             
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Sujet d'annonce
            </Typography>
            <Textarea label="description de l'annonce" className="resize-none"/>
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
            <Switch label="Pin" className="text-blue-gray-500"/>
          </div>
          <Button className="mt-6" color="blue-gray" fullWidth>
            Ajouter l'annonce
          </Button>
        </form>
      </Card>
    </div>
 );
};
