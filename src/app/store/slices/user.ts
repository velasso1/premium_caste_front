import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUserSliceState, IUserData } from "../../types/store-types/user-initial-state-types";

const initialState: IUserSliceState = {
  userIsAuth: false,
  userId: "",
  // userData: {
  //   access_token: "",
  //   refresh_token: "",
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

    // setUserData(state, action: PayloadAction<IUserData>) {
    //   state.userData = action.payload;
    // },
  },
});

export const { changeUserLoginStatus } = userSlice.actions;
export default userSlice.reducer;
