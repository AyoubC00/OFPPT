import { createSlice } from "@reduxjs/toolkit";

const announcementsReducer = createSlice({
    name: "ann",
    initialState: {pinned: [], regular: []},
    reducers:{
        addAnnouncement(state, {payload: announcement}){
            if (announcement.isPinned) state.pinned.push(announcement)
            else state.regular.push(announcement)
    },
        removeAnnouncement(state, {payload: {id, isPinned}}){
            if (isPinned) state.pinned = state.pinned.filter(announcement => announcement.id !== id)
            else state.pinned = state.regular.filter(announcement => announcement.id !== id)
        }
    }
});

export const { addAnnouncement, removeAnnouncement } = announcementsReducer.actions;
export default announcementsReducer.reducer;