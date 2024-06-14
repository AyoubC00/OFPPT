import { useSelector } from "react-redux"

const usePaginatedPage = (maxAnnouncements) =>
{
    const announcements = useSelector(({ announcements }) => announcements.all);
    const { currentPage } = useSelector(
        ({ announcements: { config } }) => config
    );
    
    return () => {
        const [start, end] = [
            (currentPage - 1) * maxAnnouncements,
            (currentPage - 1) * maxAnnouncements + maxAnnouncements
        ]
        return announcements.slice(start, end)
    }
}

export default usePaginatedPage