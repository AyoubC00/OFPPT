import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button
} from "@material-tailwind/react";


const Filieres = () => {
  return (
    <div className="container min-w-full py-16 bg-blue-gray-900 relative">
      <Card
        shadow={false}
        className="relative bg-transparent grid items-end rounded-none justify-center overflow-hidden text-center"
      >
        <CardBody className="relative px-6 md:px-12 w-3/4 mx-auto">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            Mon parcours au OFPPT
          </Typography>
          <Typography variant="paragraph" className="mb-10 text-white">
            Vous ne savez pas par où commencer? Laissez-nous vous guider en quelques étapes faciles pour trouver des formations correspondant à votre situation et à vos intérêts.
          </Typography>
          <Button
            color="blue-gray"
            className="shadow-none hover:shadow-none text-lg">
            S'inscrire maintenant
          </Button>

        </CardBody>
      </Card>

    </div>

  );
};

export default Filieres;
