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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const createInstructorProfile = createAsyncThunk(
  "instructors/createInstructorProfile",
  async (id, thunkAPI) => {
    try {
      const response = await axios.post("/instructors/id", { id });
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateInstructorProfile = createAsyncThunk(
  "instructors/updateInstructorProfile",
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await axios.patch(`/instructors/${id}`, data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getInstructorById = createAsyncThunk(
  "instructors/getInstructorById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/instructors/${id}`);
      console.log(response.data.instructor);
      return response.data.instructor;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
