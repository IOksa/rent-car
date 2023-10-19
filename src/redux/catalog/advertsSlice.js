import { createSlice } from "@reduxjs/toolkit";

import {fetchAdverts} from './operations';

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


const advertsSlice = createSlice({
    name: "adverts",
    initialState: {
      adverts:[],
      isLoading: false,
      error: null,
      isAdding: false,
    },
    
    extraReducers: (builder) => {
      builder
            .addCase(fetchAdverts.pending, handlePending)
            .addCase(fetchAdverts.fulfilled, handleFulfilled)
            .addCase(fetchAdverts.rejected, handleRejected)
          

    },
  
});

export const advertsReducer = advertsSlice.reducer;