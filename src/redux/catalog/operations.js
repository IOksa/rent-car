import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64bd21e22320b36433c770d0.mockapi.io";

export const fetchAdverts = createAsyncThunk(
    "adverts/fetchAll",
    async (_, thunkAPI) => {
        try {
        const response = await axios.get("/adverts");
        console.log("response=", response);
        return response.data;
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
);