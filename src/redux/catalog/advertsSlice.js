import { createSlice } from "@reduxjs/toolkit";

import {fetchAdverts, fetchFirstPageAdverts} from './operations';

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
  state.adverts = [...state.adverts, ...action.payload];
  
};
const handleFirstPageAdvertsFulfilled = (state, action)=>{
  state.isLoading = false;
  state.error = null;
  state.adverts = action.payload;
};


const advertsSlice = createSlice({
    name: "adverts",
    initialState: {
      adverts:[],
      isLoading: false,
      error: null,
     
    },
    
    extraReducers: (builder) => {
      builder
            .addCase(fetchAdverts.pending, handlePending)
            .addCase(fetchAdverts.fulfilled, handleFulfilled)
            .addCase(fetchAdverts.rejected, handleRejected)
            .addCase(fetchFirstPageAdverts.pending, handlePending)
            .addCase(fetchFirstPageAdverts.fulfilled, handleFirstPageAdvertsFulfilled)
            .addCase(fetchFirstPageAdverts.rejected, handleRejected)

    },
  
});

export const advertsReducer = advertsSlice.reducer;