import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchInstructors = createAsyncThunk(
  "instructors/fetchInstructors",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/instructors");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectedWithValue(error.message);
    }
  }
);
