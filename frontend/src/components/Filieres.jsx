import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";


const Filieres = () => {
    return (
      <div className="container min-w-full bg-gray-50 pt-10"  >   
        <Card
          shadow={false}
          className="relative grid items-end rounded-none justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium leading-[1.5] my-10"
            >
              Mon parcours au OFPPT
            </Typography>
            <Typography variant="h5" className="mb-4 text-white">
                  Vous ne savez pas par où commencer? Laissez-nous vous guider en quelques étapes faciles pour trouver des formations correspondant à votre situation et à vos intérêts.
            </Typography>
            <a href="https://www.myway.ac.ma/fr" target="_blank" rel="noopener noreferrer" >
              <button
              className="bg-blue-gray-400 rounded-full py-3 px-6 hover:bg-blue-gray-700 text-white font-semibold text-xl my-10 hover:shadow-md transition">
              S'inscrire maintenant
              </button>
            </a>
            
          </CardBody>
        </Card>
              
      </div>
       
    );
  };
  
  export default Filieres;
