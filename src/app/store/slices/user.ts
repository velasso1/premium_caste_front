import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUserSliceState } from "../../types/store-types/user-initial-state-types";

const initialState: IUserSliceState = {
  userIsAuth: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,

  reducers: {
    changeUserLoginStatus(state, action: PayloadAction<boolean>) {
      state.userIsAuth = action.payload;
    },
  },
});

export const { changeUserLoginStatus } = userSlice.actions;
export default userSlice.reducer;
