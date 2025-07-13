import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IGallerySliceState {
  createGalleryTags: string[];
  activeTag: string;
}

const initialState: IGallerySliceState = {
  createGalleryTags: [],
  activeTag: "Всё",
};

const galleriesSlice = createSlice({
  name: "galleriesSlice",
  initialState,

  reducers: {
    selectTags(state, action: PayloadAction<string>) {
      if (state.createGalleryTags.includes(action.payload)) {
        state.createGalleryTags = state.createGalleryTags.filter((tag) => tag !== action.payload);
      } else {
        state.createGalleryTags.push(action.payload);
      }
    },

    setActiveTag(state, action: PayloadAction<string>) {
      state.activeTag = action.payload;
    },
  },
});

export const { selectTags, setActiveTag } = galleriesSlice.actions;
export default galleriesSlice.reducer;
