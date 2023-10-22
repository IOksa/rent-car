import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL, queryLimit} from '../../constants/constants';

axios.defaults.baseURL = BASE_URL;

export const fetchAdverts = createAsyncThunk(
    "adverts/fetchPagination",
    async (countPage, thunkAPI) => {
        try {
        const response = await axios.get(`/adverts?page=${countPage}&limit=${queryLimit}`);
        return response.data;
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const fetchFirstPageAdverts = createAsyncThunk(
    "adverts/fetchFirstRender",
    async (_, thunkAPI) => {
        try {
        const response = await axios.get(`/adverts?page=1&limit=${queryLimit}`);
        return response.data;
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
);