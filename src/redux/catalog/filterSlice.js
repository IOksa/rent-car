import { createSlice } from "@reduxjs/toolkit";
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'filter',
  storage,
};

const filterInitialState = {
  make: '',
  price: '',
  mileageFrom: '',
  mileageTo: '',
};

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        setAdvertsFilter(state, action) {
        state.make = action.payload.make;
        state.price = action.payload.price;
        state.mileageFrom = action.payload.mileageMin;
        state.mileageTo = action.payload.mileageMax;
      },
    },
  });
  
export const {setAdvertsFilter}=filterSlice.actions;
export const filterReducer = persistReducer(persistConfig, filterSlice.reducer);
