import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
    value: '',
};

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        setAdvertsFilter(state, action) {
        state.value = action.payload;
      },
    },
  });
  
export const {setAdvertsFilter}=filterSlice.actions;
export const filterReducer=filterSlice.reducer;

