import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUserSliceState, IUserData } from "#types/store-types/user-initial-state-types.ts";

import { EXPIRES_SESSION_TIME, USER_ID } from "#utils/constants.ts";

const initialState: IUserSliceState = {
  userIsAuth: false,
  userId: "",
  userIsAdmin: false,
  sessionExpiresAt: "",
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

    setExpiresSession(state, action: PayloadAction<string | Date>) {
      state.sessionExpiresAt = action.payload;
    },

    logOut() {
      localStorage.removeItem(EXPIRES_SESSION_TIME);
      localStorage.removeItem(USER_ID);
      return initialState;
    },

    checkExpiresSession(state) {
      if (!localStorage.getItem(EXPIRES_SESSION_TIME)) {
        return initialState;
      }

      const expires: string = localStorage.getItem(EXPIRES_SESSION_TIME) ?? "";
      const uid = localStorage.getItem(USER_ID) ?? "";

      const now = new Date();
      const expiresAt = new Date(expires);

      if (now > expiresAt) {
        return initialState;
      } else {
        state.userIsAuth = true;
        state.userId = uid;
      }
    },
  },
});

export const { changeUserLoginStatus, setUserData, setExpiresSession, checkExpiresSession, logOut } = userSlice.actions;
export default userSlice.reducer;
