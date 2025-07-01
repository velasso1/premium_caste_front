import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import { IEffectsSliceState, IEffectPayload } from "#types/store-types/effects-initial-state-types.ts";
import { IPostsInitialState } from "#types/store-types/posts-initial-state-types.ts";

const initialState: IPostsInitialState = {
  postStatus: "published",
  attachedImages: [],
};

const postsSlice = createSlice({
  name: "postsSlice",
  initialState,

  reducers: {
    changePostStatus(state, action: PayloadAction<"published" | "draft" | "archived">) {
      state.postStatus = action.payload;
    },

    // for create post
    selectImagesForPost(state, action: PayloadAction<string>) {
      if (state.attachedImages.includes(action.payload)) {
        state.attachedImages = state.attachedImages.filter((arrayItem) => arrayItem !== action.payload);
        return;
      }
      state.attachedImages.push(action.payload);
    },

    // for edit post
    putAttachedImages(state, action: PayloadAction<string[]>) {
      state.attachedImages = action.payload;
    },

    clearAttachedImages(state) {
      state.attachedImages = [];
    },
  },
});

export const { changePostStatus, selectImagesForPost, clearAttachedImages, putAttachedImages } = postsSlice.actions;
export default postsSlice.reducer;
