import { configureStore } from "@reduxjs/toolkit";
import announcementsReducer from "../features/announcements/AnnouncementsSlice";
import eventsReducer from "../features/events/eventsSlice"
import DemandesSlice from "../features/demandes/DemandesSlice";

const store = configureStore({
    reducer: {
        announcements: announcementsReducer,
        events: eventsReducer,
        demand: DemandesSlice,
    }
});

export default store;