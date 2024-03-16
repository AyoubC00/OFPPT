import React from "react";
import {
 Card,
 Input,
 Button,
 Typography,
 Textarea,
 Select,
 Option,
} from "@material-tailwind/react";

export const EvenementsForm = () => {
 return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 gap-2 sm:gap-6">
      <Card color="transparent" shadow={false} className="sm:w-full max-w-lg mx-4 sm:mx-0">
        <Typography variant="h4" color="blue-gray" className="text-center mb-4">
          Ajouter un événement
        </Typography>
        <form className="mt-8 mb-2 w-full">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Titre d'événement
            </Typography>
            <Input
              size="lg"
              placeholder="titre"
              className=" !border-blue-gray-200"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Sujet d'événement
            </Typography>
            <Textarea placeholder="Description de l'événement"  className=" !border-blue-gray-200"
              labelProps={{
                className: "before:content-none after:content-none",
              }}/>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Sélectionner un club
            </Typography>
            <Select size="lg" className=" !border-blue-gray-200 "
              labelProps={{
                className: "before:content-none after:content-none",
              }} >
              <Option>...</Option>
              <Option>...</Option>
              <Option>...</Option>
              <Option>...</Option>
              <Option>...</Option>
            </Select>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Date début
            </Typography>
            <Input
              type="date"
              size="lg"
              placeholder=""
              className=" !border-blue-gray-200"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Date fin
            </Typography>
            <Input
              type="date"
              size="lg"
              placeholder=""
              className=" !border-blue-gray-200"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button className="mt-6" color="blue-gray" fullWidth>
            Ajouter l'événement
          </Button>
        </form>
      </Card>
    </div>
 );
};
