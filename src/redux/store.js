import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import {advertsReducer} from  './catalog/advertsSlice';
import {filterReducer} from './catalog/filterSlice';
import {favoriteReducer } from './catalog/favoriteSlice';


export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    filter: filterReducer,
    favorites: favoriteReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);