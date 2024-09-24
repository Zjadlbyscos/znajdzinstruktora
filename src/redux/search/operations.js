import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchEvents = createAsyncThunk(
  "search/searchEvents",
  async (searchData, thunkAPI) => {
    try {
      const response = await axios.get(`/search`, {
        params: searchData,
      });
      console.log(response.data);
      return response.data.result;
    } catch (error) {
      console.error("Error during search:", error);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
