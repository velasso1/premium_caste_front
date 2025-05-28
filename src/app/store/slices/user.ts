import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUserSliceState, IUserData } from "../../types/store-types/user-initial-state-types";

const initialState: IUserSliceState = {
  userIsAuth: false,
  userId: "",
  userIsAdmin: false,
  // userData: {
  // access_token: "",
  // refresh_token: "",
  //   user_id: "",
  // },
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,

  reducers: {
    changeUserLoginStatus(state, action: PayloadAction<boolean>) {
      state.userIsAuth = action.payload;
    },

    setUserData(state, action: PayloadAction<string | boolean>) {
      if (typeof action.payload === "string") {
        state.userId = action.payload;
      } else {
        state.userIsAdmin = action.payload;
      }
    },

    logOut() {
      return initialState;
    },
  },
});

export const { changeUserLoginStatus, setUserData, logOut } = userSlice.actions;
export default userSlice.reducer;
