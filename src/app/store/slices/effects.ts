import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IEffectsSliceState, IEffectPayload } from "../../types/store-types/effects-initial-state-types";

const initialState: IEffectsSliceState = {
  effectData: {
    status: null,
    message: "",
  },
};

const effectsSlice = createSlice({
  name: "effectsSlice",
  initialState,

  reducers: {
    setEffect(state, action: PayloadAction<IEffectPayload>) {
      state.effectData = action.payload;
    },
  },
});

export const { setEffect } = effectsSlice.actions;
export default effectsSlice.reducer;
