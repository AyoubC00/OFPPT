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
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
      <Card color="transparent" shadow={false} className="w-full max-w-lg">
        <Typography variant="h4" color="blue-gray" className="text-center mb-4">
          Ajouter un événement
        </Typography>
        <form className="mt-8 mb-2 w-full max-w-lg">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Titre d'événement
            </Typography>
            <Input
              size="lg"
              placeholder="exemple:Atelier de peinture...."
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Sujet d'événement
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
              Sélectionner un club
            </Typography>
            <Select label="choisissez un club " size="lg" className="!border-t-blue-gray-200 focus:!border-t-gray-900">
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
          <Button className="mt-6" color="blue-gray" fullWidth>
            Ajouter l'événement
          </Button>
        </form>
      </Card>
    </div>
 );
};
