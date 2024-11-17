import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEvents = createAsyncThunk(
  "events/fetchEvents",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/events");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchInstructorEvents = createAsyncThunk(
  "events/fetchInstructorEvents",
  async (instructorId, thunkAPI) => {
    try {
      const response = await axios.get(`/events/byInstructor/${instructorId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectedWithValue(error.message);
    }
  }
);

export const fetchEventById = createAsyncThunk(
  "events/fetchEventById",
  async (eventId, thunkAPI) => {
    try {
      const response = await axios.get(`/events/${eventId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createNewEvent = createAsyncThunk(
  "events/createNewEvent",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/events", data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteEvent = createAsyncThunk(
  "events/deleteEvent",
  async (eventId, thunkAPI) => {
    try {
      const response = await axios.delete(`events/${eventId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateEventInfo = createAsyncThunk(
  "events/updateEvent",
  async ({ eventId, data }, thunkAPI) => {
    try {
      const response = await axios.patch(`/events/${eventId}`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getInstructorUpcomingEvents = createAsyncThunk(
  "events/getInstructorUpcomingEvents",
  async ({ id, limit, page }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/upcoming/${id}?limit=${limit}&page=${page}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
