import { useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
 
export function Pagination() {
  const [active, setActive] = useState(1);
 
  const getItemProps = (index) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "blue-gray",
      onClick: () => setActive(index),
    });
 
  const next = () => {
    if (active === 3) return;
 
    setActive(active + 1);
  };
 
  const prev = () => {
    if (active === 1) return;
 
    setActive(active - 1);
  };
 
  return (
    <div className="flex items-center justify-between gap-4 max-w-full">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-900" /> Previous
      </Button>
      <div className="hidden sm:flex sm:items-center sm:gap-2 sm:flex-1 sm:justify-center">
        <IconButton {...getItemProps(1)}>1</IconButton>
        <IconButton {...getItemProps(2)}>2</IconButton>
        <IconButton {...getItemProps(3)}>3</IconButton>
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === 3}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-900" />
      </Button>
    </div>
  );
}

export default Pagination