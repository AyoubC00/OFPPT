import { useSelector } from "react-redux"

const usePaginatedPage = () =>
{
    const announcements = useSelector(({ announcements }) => announcements.all);
    const { currentPage, maxAnnouncements } = useSelector(
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