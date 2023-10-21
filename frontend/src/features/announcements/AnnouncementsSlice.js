import { createSlice } from "@reduxjs/toolkit";
import announcementsData from "../../assets/data"

const announcementsReducer = createSlice({
    name: "ann",
    initialState: {
        pinned: [...announcementsData.pinned],
        regular: [...announcementsData.regular],
        config: {
            maxAnnouncements: 3,
            currentPage: 1
        }
    },
    reducers:{
        addAnnouncement(state, { payload: announcement })
        {
            if (announcement.isPinned) state.pinned.push(announcement)
            else state.regular.push(announcement)
        },
        removeAnnouncement(state, { payload: { id, isPinned } })
        {
            if (isPinned) state.pinned = state.pinned.filter(announcement => announcement.id !== id)
            else state.pinned = state.regular.filter(announcement => announcement.id !== id)
        },
        nextPage ({ regular, config})
        {
            if (regular.slice(config.currentPage - 1).length)
            config.currentPage += 1;
        },
        previousPage({ config })
        {
            if (config.currentPage > 1)
            config.currentPage -= 1;
        },
        targetPage({ config }, { payload: pageNumber })
        {
            config.currentPage = pageNumber
        }
    },

});

export const { addAnnouncement, removeAnnouncement, nextPage, previousPage, targetPage } = announcementsReducer.actions;
export default announcementsReducer.reducer;