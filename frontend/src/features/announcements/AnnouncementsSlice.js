import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/request"

export const fetchAnnouncements = createAsyncThunk("announcements/fetchAnnouncements", async () => {
    const response = await request("announcements", "GET");
    const announcements = await response;
    return announcements.data
});

const announcementsReducer = createSlice({
    name: "ann",
    initialState: {
        all: [],
        pinned: [],
        isLoading : false,
        config: {
            maxAnnouncements: 3,
            currentPage: 1
        },
        error: ''
    },
    reducers:{
        addAnnouncement(state, { payload: announcement })
        {
            if (announcement.isPinned) state.pinned.push(announcement)
            else state.all.push(announcement)
        },
        removeAnnouncement(state, { payload: { id, isPinned } })
        {
            if (isPinned) state.pinned = state.pinned.filter(announcement => announcement.id !== id)
            else state.pinned = state.all.filter(announcement => announcement.id !== id)
        },
        nextPage ({ all, config})
        {
            if (all.slice(config.currentPage - 1).length)
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
    extraReducers: builder => {
        builder.addCase(fetchAnnouncements.pending, (state) => { state.isLoading = true })
        builder.addCase(fetchAnnouncements.fulfilled, (state, { payload: announcements }) => {
            state.all = announcements
            state.pinned = announcements.filter(announcement => announcement.pinned == true)
            state.isLoading = false
        })
        builder.addCase(fetchAnnouncements.rejected, (state, { error }) => { state.error = error.message })
    }

});

export const { addAnnouncement, removeAnnouncement, nextPage, previousPage, targetPage } = announcementsReducer.actions;
export default announcementsReducer.reducer;