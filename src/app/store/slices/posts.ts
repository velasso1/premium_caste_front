import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import { IEffectsSliceState, IEffectPayload } from "#types/store-types/effects-initial-state-types.ts";
import { IPostsInitialState } from "#types/store-types/posts-initial-state-types.ts";

const initialState: IPostsInitialState = {
  postStatus: "published",
};

const postsSlice = createSlice({
  name: "postsSlice",
  initialState,

  reducers: {
    changePostStatus(state, action: PayloadAction<"published" | "draft" | "archived">) {
      state.postStatus = action.payload;
    },
  },
});

export const { changePostStatus } = postsSlice.actions;
export default postsSlice.reducer;
