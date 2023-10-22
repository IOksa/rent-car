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
  console.log("state.adverts before =",state.adverts.length);
  if(state.adverts.length>0){
    state.adverts = [...state.adverts, ...action.payload];
  }
  else{  
    state.adverts = action.payload;
  }
  console.log("state.adverts after =",state.adverts);
 

  
};
const handleAllFulfilled = (state, action)=>{
  state.isLoading = false;
  state.error = null;
  state.countAllAdverts=action.payload.length;
  state.adverts=[];
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