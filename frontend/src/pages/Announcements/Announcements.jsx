import { useSelector, useDispatch } from "react-redux"

import { Link } from "react-router-dom"
import { 
    AnnouncementCard,
    PinnedAnnouncement,
 } from "./"
import Pagination from "../../components/Pagination"
import NoResult from "../../components/NoResult"
import { Typography, Button } from "@material-tailwind/react"
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
        <div className="container min-w-full bg-gray-50 text-blue-gray-900 py-10 h-screen">
            <Typography variant="small" className="text-3xl px-4 mb-8 sm:px-16 md:w-3/4 md:mx-auto md:px-4">
                Announcements
            </Typography>
            <div className="flex flex-col px-2">
                <span className="self-end">
                    <Link to='new'><Button  className="mt-6 my-3" color="blue-gray">Add announcement</Button></Link>
                </span>
                <div className="flex flex-col">
                    <div className="overflow-y-auto h-96 max-h-674 mb-16 bg-white lg:mb-0 lg:col-span-2 row-start-2 row-end-3">
                        <Typography variant="h4" className="bg-white p-6 sticky top-0 z-20 shadow-sm">Pinned</Typography>
                        {
                            pinned.length ?
                            pinned.map(announcement => 
                                <PinnedAnnouncement key={ announcement.id } { ...announcement }/>    
                            ) :
                            <NoResult />
                        }
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-1 my-5 justify-items-center">
                            {
                                announcements.length ?
                                announcements.map(announcement => 
                                    <AnnouncementCard key={ announcement.id } { ...announcement }/> 
                                ) :
                                <NoResult /> 
                            }
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Announcements;