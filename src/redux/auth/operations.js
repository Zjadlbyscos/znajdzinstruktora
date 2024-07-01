import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/auth/register", data);
      console.log(response.data.ResponseBody.newUser);
      return response.data.ResponseBody.newUser;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        Notiflix.Notify.failure("Podany użytkownik już istnieje");
        return thunkAPI.rejectWithValue("Podany użytkownik już istnieje");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/auth/login", credentials);
      const responseBody = response.data.RequestBody;
      const user = responseBody.user;
      const token = responseBody["Current token"];
      setAuthHeader(token);
      return { user, token };
    } catch (error) {
      Notiflix.Notify.failure("Niepoprawny email lub hasło");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/logout");
    clearAuthHeader();
    Notiflix.Notify.success("Wylogownao pomyślnie");
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const currentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get("/auth/current");
      return response.data.ResponseBody;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/auth/change-password", credentials);
      Notiflix.Notify.success("Pomyślnie zmieniono hasło");
      return response.data.ResponseBody;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (email, thunkAPI) => {
    try {
      const response = await axios.post("/auth/request-reset-password", email);
      Notiflix.Notify.success("Link do zmiany hasła został wysłany na email");
      return response.data.ResponseBody;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
