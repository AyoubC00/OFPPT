import { useSelector } from "react-redux"

const usePaginatedPage = () =>
{
    const regularAnnouncements = useSelector(({ announcements: { regular } }) => regular);
    const { currentPage, maxAnnouncements } = useSelector(
        ({ announcements: { config } }) => config
    );
    
    return () => {
        const [start, end] = [
            (currentPage - 1) * maxAnnouncements,
            (currentPage - 1) * maxAnnouncements + maxAnnouncements
        ]
        return regularAnnouncements.slice(start, end)
    }
}

export default usePaginatedPage