import Pagination from "../../components/Pagination"
import NoResult from "../../components/NoResult"
import usePaginatedPage from "../../hooks/usePaginatedPage"
import { fetchAnnouncements, removeAnnouncement } from "../../features/announcements/AnnouncementsSlice"
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

const Announcements = () => {
    const { all, pinned } = useSelector(state => state.announcements)
    const dispatch = useDispatch()
    const paginatedPage = usePaginatedPage(7)
    const announcements = paginatedPage()

    const deleteHandler = async(id, pinned) => {
        const data = await request(`announcements/${id}`, "DELETE");  
        if(data.ok) dispatch(removeAnnouncement({id, isPinned : pinned}));
    }

    useEffect( () => {
        dispatch(fetchAnnouncements())
    }, [])
    
    return (
        <div className="container min-w-full bg-gray-50 text-blue-gray-900 py-10 h-screen">
            <Typography variant="small" className="text-3xl px-4 mb-8 sm:px-16 md:w-3/4 md:mx-auto md:px-4">
                Announcements
            </Typography>
            <div className="flex flex-col px-2">
                <span className="self-end my-10">
                    <Link to='new'><Button  className="mt-6 my-3" color="blue-gray">Add announcement</Button></Link>
                </span>
                <div className="flex flex-col justify-between gap-5">
                    <Pagination maxAnnouncements={7} />
                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead class=" text-white uppercase bg-blue-gray-600">
                                <tr>
                                    <th scope="col" class="px-6 py-3 w-96">
                                        Titre
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Description
                                    </th>
                                    <th scope="col" class="px-6 py-3 w-10">
                                        Pinned
                                    </th>
                                    <th scope="col" class="px-6 py-3 w-28">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    announcements.length ?
                                    announcements.map(({id, title, description, pinned}) => 
                                        <tr class="bg-white border-b" key={ id }>
                                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                <Typography variant="h5" color="blue-gray" className="overflow-x-hidden">
                                                    { 
                                                        minimizeText(title, 5, 30)
                                                    }
                                                </Typography>
                                            </td>

                                            <td class="px-6 py-4">
                                                <Typography variant="paragraph" className="overflow-x-hidden">
                                                    {
                                                        minimizeText(description, 20, 100)
                                                    }
                                                </Typography>
                                            </td>
                                            <td class="px-6 py-4">
                                                {
                                                    pinned ? "Oui" : "Non"
                                                }
                                            </td>
                                            
                                            <td class="px-6 py-4 flex justify-end gap-6">
                                                <Link to={`edit/${id}`}><BsFillPencilFill className="text-2xl text-blue-gray-600" /></Link>
                                                <BsFillTrash3Fill onClick={()=>deleteHandler(id, pinned)} className="text-2xl text-red-600 cursor-pointer" />
                                            </td>
                                        </tr>
                                    )
                                    :
                                    <NoResult />
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Announcements;