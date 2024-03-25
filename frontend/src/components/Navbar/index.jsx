import ofppt_logo from "../../assets/ofpptlogo.svg"
import { Navbar as Nav, Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import NavList from "./NavList";
import AvatarMenu from "./AvatarMenu";
import { useAuthContext } from "../../contexts/authContext";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const { user: { token } } = useAuthContext();

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
        <div className="hidden lg:flex w-full">
          <NavList />
        </div>
        { token ? <AvatarMenu className="ms-auto me-4 h-9 w-9 block lg:hidden" /> : null }
        <IconButton
          variant="text"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          className={ ` ${ token ? "" : "ms-auto" } h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden` }
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