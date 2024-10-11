import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { reset } from "./instructorsSlice";

export const fetchInstructors = createAsyncThunk(
  "instructors/fetchInstructors",
  async ({ city, discipline, languages, page, limit }, thunkAPI) => {
    try {
      reset();
      const query = new URLSearchParams({
        ...(city && { city }),
        ...(discipline && { discipline }),
        ...(languages && { languages }),
        page: page || 1,
        limit: limit || 10,
      }).toString();

      const response = await axios.get(`/instructors?${query}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createInstructorProfile = createAsyncThunk(
  "instructors/createInstructorProfile",
  async (id, thunkAPI) => {
    try {
      const response = await axios.post(`/instructors/${id}`);
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
      return response.data.instructor;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
