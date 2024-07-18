import { createSlice } from "@reduxjs/toolkit";

import {
  login,
  logout,
  currentUser,
  changePassword,
  resetPasswordRequest,
  registerUser,
  changeUserPasswordByReset,
  activateAccount,
} from "./operations";

const isPendingAction = (action) => {
  return action.type.endsWith("/pending");
};

const isRejectAction = (action) => {
  return action.type.endsWith("/rejected");
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  user: {
    firstName: null,
    lastName: null,
    email: null,
    city: null,
    discipline: null,
    id: null,
  },
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
  isVerified: false,
  isSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isSuccess = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = {
          firstName: null,
          lastName: null,
          email: null,
          city: null,
          discipline: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = true;
        state.isSuccess = true;
      })
      .addCase(resetPasswordRequest.fulfilled, (state) => {
        state.isRefreshing = true;
        state.isSuccess = true;
      })
      .addCase(changeUserPasswordByReset.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = true;
        state.isSuccess = true;
      })
      .addCase(activateAccount.fulfilled, (state) => {
        state.isVerified = true;
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase((state) => {
        state.error = "someone use old function, fix it!";
      });
  },
});

export const authReducer = authSlice.reducer;
