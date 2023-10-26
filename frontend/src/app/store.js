import { configureStore } from "@reduxjs/toolkit";
import announcementsReducer from "../features/announcements/AnnouncementsSlice";
import eventsReducer from "../features/events/eventsSlice"

const store = configureStore({
    reducer: {
        announcements: announcementsReducer,
               events:eventsReducer
    }
});

export default store;