import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { nextPage, previousPage, targetPage } from "../../features/announcements/AnnouncementsSlice";
import { useDispatch, useSelector } from "react-redux"
import usePageNumbers from "../../hooks/usePageNumbers"

export function Pagination() {

  const { all, config : { maxAnnouncements, currentPage } } = useSelector(state => state.announcements)
  const dispatch = useDispatch()
  // Get the numbers corresponding to the paginated pages
  const pages = usePageNumbers()

  const getItemProps = (index) =>
    ({
      variant: currentPage === index ? "filled" : "text",
      color: "blue-gray",
      onClick: () => {
        dispatch(targetPage(index))
      }
    });
 
  const next = () => {
    if (currentPage === Math.ceil(all.length / maxAnnouncements)) return;
    

    // Increment the currentPage 
    dispatch(nextPage())
  };
  
  const prev = () => {
    if (currentPage === 1) return;
    
 
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
        disabled={currentPage === 1}
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
      <Button variant="text" className="flex items-center gap-2" onClick={next} disabled={currentPage >= pages.length}>
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-900" />
      </Button>
    </div>
  );
}

export default Pagination