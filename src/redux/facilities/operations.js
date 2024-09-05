import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFacilities = createAsyncThunk(
  "facilities/fetchFacilities",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/facilities");
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
