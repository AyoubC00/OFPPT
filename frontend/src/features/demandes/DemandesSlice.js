import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import request from "../../utils/request";

export const fetchDemands = createAsyncThunk("demand/fetchDemands", async () => {
    const response = request("demandes", "GET");
    return response;
});

export const updateDemandStatus = createAsyncThunk("demand/updateDemandStatus", async ({id, status}) => {
   const response = await request(`demandes/${id}`, "PUT", {status});
    return response;
});

const demandesSlice = createSlice({
    name: "demand",
    initialState: {
        demands: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchDemands.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchDemands.fulfilled, (state, action) => {
            state.loading = false;
            state.demands = action.payload;
        });
        builder.addCase(fetchDemands.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
        builder.addCase(updateDemandStatus.fulfilled, (state, action) => {
            const updatedDemands = state.demands.map((demand) => {
                if (demand.id === action.payload.id) {
                    return {
                        ...demand,
                        status: action.payload.status,
                    };
                }
                return demand;
            });
            state.demands = updatedDemands;
        });
    }
});

export default demandesSlice.reducer;