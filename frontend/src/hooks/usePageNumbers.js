import { useSelector } from "react-redux"

const usePageNumbers = () =>
{
  const announcementsCount = useSelector(state => state.announcements.regular.length);
  const maxAnnouncements = useSelector(state => state.announcements.config.maxAnnouncements);
  const numberOfPages = Math.round(announcementsCount / maxAnnouncements);
  return Array.from(Array(numberOfPages), (_, index) => index + 1)
}

export default usePageNumbers
