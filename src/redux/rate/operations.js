import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const rateInstructor = createAsyncThunk(
  "rate/rateInstructor",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(`/rate`, payload);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchInstructorRating = createAsyncThunk(
  "rate/fetchInstructorRating",
  async ({ id, page, limit }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/rate/${id}?page=${page}&limit=${limit}`
      );
      console.log(response.data, "response");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
