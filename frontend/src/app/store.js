import { configureStore } from "@reduxjs/toolkit";
import announcementsReducer from "../features/announcements/AnnouncementsSlice";

const store = configureStore({
    reducer: {
        announcements: announcementsReducer
    }
});

export default store;