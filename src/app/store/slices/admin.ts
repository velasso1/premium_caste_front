import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAdminSliceTypes } from "../../types/store-types/admin-slice-types";

const initialState: IAdminSliceTypes = {};

const adminSlice = createSlice({
  name: "adminSlice",
  initialState,

  reducers: {},
});

export const {} = adminSlice.actions;
export default adminSlice.reducer;
