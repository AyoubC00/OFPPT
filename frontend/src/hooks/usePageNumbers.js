import { useSelector } from "react-redux"

const usePageNumbers = () =>
{
  const announcementsCount = useSelector(state => state.announcements.all.length);
  const maxAnnouncements = useSelector(state => state.announcements.config.maxAnnouncements);
  const numberOfPages = Math.ceil(announcementsCount / maxAnnouncements);
  // console.table([
  //   ["Announcements cout", announcementsCount], 
  //   ["Max announcements", maxAnnouncements],
  //   ["Number of pages", numberOfPages],
  //   ["Result array", Array.from(Array(numberOfPages), (_, index) => index + 1)]
  // ])
  return Array.from(Array(numberOfPages), (_, index) => index + 1)
}

export default usePageNumbers
