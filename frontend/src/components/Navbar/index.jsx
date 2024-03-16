import ofppt_logo from "../../assets/ofpptlogo.svg"
import {
  Navbar as Nav,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-gray-500 transition-colors">
        Accueil
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-gray-500 transition-colors">
          Filières
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-gray-500 transition-colors">
          Espace candidat
        </a>
      </Typography>
    </ul>
  );
}
 
function Navbar() {
  const [openNav, setOpenNav] = useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Nav className="px-0 py-3 shadow-none rounded-none max-w-screen-4xl sticky top-0 z-50 shadow-sm">
      <div className="flex items-center text-blue-gray-900 px-4 sm:px-16 xl:w-5/6 xl:mx-auto">
        <a href="/" className="me-8">
             <img src={ ofppt_logo } alt="OFPPT Logo" className="h-8" />
        </a>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="w-5/6 mx-auto mt-6">
            <NavList />
        </div>
      </Collapse>
    </Nav>
  );
}

export default Navbar