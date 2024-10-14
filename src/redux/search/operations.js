import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchEvents = createAsyncThunk(
  "search/searchEvents",
  async ({ searchData, page, limit }, thunkAPI) => {
    try {
      const query = new URLSearchParams({
        ...searchData,
        page,
        limit,
      }).toString();
      const response = await axios.get(`/search?${query}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error during search:", error);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
