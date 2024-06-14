import Pagination from "../../components/Pagination"
import NoResult from "../../components/NoResult"
import usePaginatedPage from "../../hooks/usePaginatedPage"
import { fetchAnnouncements, previousPage, removeAnnouncement, targetPage } from "../../features/announcements/AnnouncementsSlice"
import minimizeText from "../../utils/minimizeText";
import request from "../../utils/request";

import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import {
    Typography,
    Button,
} from "@material-tailwind/react";
import { 
    BsFillTrash3Fill,
    BsFillPencilFill,
 } from "react-icons/bs"
 import { useEffect } from "react"

const ANNOUNCEMENTS_PER_PAGE = 4

const Announcements = () => {
    const dispatch = useDispatch()
    const { current_page } = useSelector(state => state.announcements.config)
    const paginatedPage = usePaginatedPage(ANNOUNCEMENTS_PER_PAGE)
    let announcements = paginatedPage()
    
    const deleteHandler = async(id, pinned) => {
        const data = await request(`announcements/${id}`, "DELETE");  
        if(data.ok) dispatch(removeAnnouncement({id, isPinned : pinned}));
        if (announcements.length <= ANNOUNCEMENTS_PER_PAGE) dispatch(previousPage())
    }

    useEffect( () => {
        announcements = paginatedPage()
    }, [current_page])
    
    useEffect( () => {
        dispatch(targetPage(1))
        dispatch(fetchAnnouncements())
    }, [])

    
    return (
        <div className="container min-w-full text-blue-gray-900 h-screen">
            <div className="flex flex-col h-full px-2">
                <span className="self-end py-1">
                    <Link to='new'><Button size="md" className="mt-6 my-5" color="blue-gray">Add announcement</Button></Link>
                </span>
                <div className="flex flex-col h-full pb-8 justify-between gap-5">
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead className=" text-white uppercase bg-blue-gray-600">
                                <tr>
                                    <th scope="col" className="px-6 py-3 w-96">
                                        Titre
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Description
                                    </th>
                                    <th scope="col" className="px-6 py-3 w-10">
                                        Pinned
                                    </th>
                                    <th scope="col" className="px-6 py-3 w-28">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    announcements.length ?
                                    announcements.map(({id, title, description, pinned}) => 
                                        <tr className="bg-white border-b" key={ id }>
                                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                <Typography variant="paragraph" color="blue-gray" className="overflow-x-hidden">
                                                    { 
                                                        minimizeText(title, 5, 30)
                                                    }
                                                </Typography>
                                            </td>

                                            <td className="px-6 py-4">
                                                <Typography variant="small" className="overflow-x-hidden">
                                                    {
                                                        minimizeText(description, 8, 60)
                                                    }
                                                </Typography>
                                            </td>
                                            <td className="px-6 py-4">
                                                {
                                                    pinned ? "Oui" : "Non"
                                                }
                                            </td>
                                            
                                            <td className="px-6 py-4 flex justify-end gap-6">
                                                <Link to={`edit/${id}`}><BsFillPencilFill className="text-2xl text-blue-gray-600" /></Link>
                                                <BsFillTrash3Fill onClick={()=>deleteHandler(id, pinned)} className="text-2xl text-red-600 cursor-pointer" />
                                            </td>
                                        </tr>
                                    )
                                    :
                                    <tr>
                                        <td colSpan={4}>
                                            <NoResult />
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-auto">
                        <Pagination maxAnnouncements={ ANNOUNCEMENTS_PER_PAGE } />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Announcements;