import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem("velvet_brew_user");
const storedRole = localStorage.getItem("velvet_brew_role");

const initialState = {
  userData: storedUser ? JSON.parse(storedUser) : null,
  role: storedRole ? storedRole : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload.user;
      state.role = action.payload.role;

      localStorage.setItem(
        "velvet_brew_user",
        JSON.stringify(action.payload.user),
      );
      localStorage.setItem("velvet_brew_role", action.payload.role);
    },
    logout: (state) => {
      state.userData = null;
      state.role = null;

      localStorage.removeItem("velvet_brew_user");
      localStorage.removeItem("velvet_brew_role");
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
