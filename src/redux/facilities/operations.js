import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFacilities = createAsyncThunk(
  "facilities/fetchFacilities",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/facilities?page=${page}&limit=2`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFacilityById = createAsyncThunk(
  "facilities/fetchFacilityById",
  async (facilityId, thunkAPI) => {
    try {
      const response = await axios.get(`/facilities/${facilityId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
