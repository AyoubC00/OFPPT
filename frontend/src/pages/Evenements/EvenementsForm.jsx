import React from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Switch,
  Select,
  Option,
} from "@material-tailwind/react";

export const EvenementsForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card color="transparent" shadow={false} className="w-full max-w-lg">
        <Typography variant="h4" color="blue-gray">
          Ajouter un événement
        </Typography>
        <form className="mt-8 mb-2 w-full max-w-lg">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Titre d'événement
            </Typography>
            <Input
              size="lg"
              placeholder="exemple:Atelier de pienture...."
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              sujet d'événement
            </Typography>
            <Input
              size="lg"
              placeholder="cette événement est à propos de ....."
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
            sélectionner un club
            </Typography>
            <Select label="choisissez un club ">
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
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button className="mt-6" fullWidth>
            Ajouter l'événement
          </Button>
        </form>
      </Card>
    </div>
  );
};
