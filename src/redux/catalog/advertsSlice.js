import { createSlice } from "@reduxjs/toolkit";

import {fetchAdverts, fetchAllAdverts} from './operations';

const handlePending = state => {
  state.isLoading = true;

};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action)=>{
  state.isLoading = false;
  state.error = null;
  state.adverts = action.payload;

  
};
const handleAllFulfilled = (state, action)=>{
  state.isLoading = false;
  state.error = null;

  state.countAllAdverts=action.payload.length;

  
};


const advertsSlice = createSlice({
    name: "adverts",
    initialState: {
      adverts:[],
      isLoading: false,
      error: null,
      countAllAdverts: 0,
    },
    
    extraReducers: (builder) => {
      builder
            .addCase(fetchAdverts.pending, handlePending)
            .addCase(fetchAdverts.fulfilled, handleFulfilled)
            .addCase(fetchAdverts.rejected, handleRejected)
            .addCase(fetchAllAdverts.pending, handlePending)
            .addCase(fetchAllAdverts.fulfilled, handleAllFulfilled)
            .addCase(fetchAllAdverts.rejected, handleRejected)

    },
  
});

export const advertsReducer = advertsSlice.reducer;