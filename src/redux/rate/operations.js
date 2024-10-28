import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const rateInstructor = createAsyncThunk(
  "rate/rateInstructor",
  async ({ rating }, thunkAPI) => {
    try {
      const response = await axios.post(`/rate/`, { rating });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchInstructorRating = createAsyncThunk(
  "rate/fetchInstructorRating",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/rate/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejecteWithValue(error.message);
    }
  }
);
