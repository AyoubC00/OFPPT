import { useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { nextPage, previousPage, targetPage } from "../../features/announcements/AnnouncementsSlice";
import { useDispatch, useSelector } from "react-redux"
import usePageNumbers from "../../hooks/usePageNumbers"

export function Pagination() {
  const [active, setActive] = useState(1);
  const { maxAnnouncements } = useSelector(({ announcements}) => announcements.config)
  const dispatch = useDispatch()
  // Get the numbers corresponding to the paginated pages
  const pages = usePageNumbers()

  const getItemProps = (index) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "blue-gray",
      onClick: () => {
        setActive(index)
        dispatch(targetPage(index))
      }
    });
 
  const next = () => {
    if (active === maxAnnouncements) return;
    
    setActive(active + 1);
    // Increment the currentPage 
    dispatch(nextPage())
  };
  
  const prev = () => {
    if (active === 1) return;
    
    setActive(active - 1);
    // Decrement the currentPage 
    dispatch(previousPage())
  };
  if (pages.length > 1)
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
        {
          // Create navigation buttons
          pages.map(element => 
            <IconButton key={ element } {...getItemProps(element)}>{ element }</IconButton>
          )
        }
      </div>
      <Button variant="text" className="flex items-center gap-2" onClick={next} disabled={active >= pages.length}>
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-900" />
      </Button>
    </div>
  );
}

export default Pagination