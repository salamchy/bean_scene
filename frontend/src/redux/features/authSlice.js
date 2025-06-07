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
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;