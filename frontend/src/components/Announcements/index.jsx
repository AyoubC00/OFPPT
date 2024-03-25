import { useSelector, useDispatch } from "react-redux"

import Announcement from "./Announcement"
import Pagination from "../Pagination"
import PinnedAnnouncement from "../PinnedAnnoncemet"
import NoResult from "../NoResult"
import { Typography } from "@material-tailwind/react"
import usePaginatedPage from "../../hooks/usePaginatedPage"
import { fetchAnnouncements } from "../../features/announcements/AnnouncementsSlice"
import { useEffect } from "react"

const Announcements = () => {
    const { all, pinned } = useSelector(state => state.announcements)
    const dispatch = useDispatch()
    const paginatedPage = usePaginatedPage(all)
    const announcements = paginatedPage()

    useEffect( () => {
        dispatch(fetchAnnouncements())
    }, [])
    
    return (
        <div className="container min-w-full bg-gray-50 text-blue-gray-900 py-10">
            <Typography variant="small" className="text-3xl px-4 mb-8 sm:px-16 md:w-3/4 md:mx-auto md:px-4">
                Announcements
            </Typography>
            <div className="px-4 sm:px-16 lg:grid lg:grid-rows-1 lg:grid-cols-5 lg:gap-x-8 xl:gap-x-8 xl:w-5/6 xl:mx-auto">
                
                <div className="overflow-y-auto h-fit max-h-674 mb-16 bg-white lg:mb-0 lg:col-span-2 row-start-2 row-end-3">
                    <Typography variant="h4" className="bg-white p-6 sticky top-0 z-20 shadow-sm">Pinned</Typography>
                    {
                        pinned.length ?
                        pinned.map(announcement => 
                            <PinnedAnnouncement key={ announcement.id } { ...announcement }/>    
                        ) :
                        <NoResult />
                    }
                </div>
                <div className="row-start-1 row-end-1 col-start-3 col-end-6 mb-2">
                    <Pagination />
                </div>
                <div className="col-span-3 row-start-2 row-end-3">
                    <div className="flex flex-col gap-2">
                        {
                            announcements.length ?
                            announcements.map(announcement => 
                                <Announcement key={ announcement.id } { ...announcement }/>    
                            ) :
                            <NoResult /> 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Announcements