import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL, queryLimit} from '../../constants/constants';

axios.defaults.baseURL = BASE_URL;

export const fetchAdverts = createAsyncThunk(
    "adverts/fetchPagination",
    async (countPage, thunkAPI) => {
        try {
        const response = await axios.get(`/adverts?page=${countPage}&limit=${queryLimit}`);
        console.log("responsePagination=", response);
        return response.data;
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const fetchAllAdverts = createAsyncThunk(
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