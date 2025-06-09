import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    token: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.token = action.payload.token;
    },
    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;

      // Remove JWT cookie manually
      document.cookie =
        "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
