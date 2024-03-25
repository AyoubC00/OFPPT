import {createSlice} from "@reduxjs/toolkit"
import Data from "../../dataEvent"
const eventSlice = createSlice({
    name:"eve",
    initialState:{
        events:[...Data]

    },
    reducers:{
        addEvent:(state,{payload:event})=>state.events.push(event),
        removeEvent:(state,{payload:eventID})=> 
        state.events =state.events.filter(event => event.id!==eventID)   
    },
})


const {addEvent,removeEvent}=eventSlice.actions;
export default eventSlice.reducer;