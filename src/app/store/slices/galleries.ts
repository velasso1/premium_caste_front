import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IGetAllGalleriesResponse } from "#types/api-types/api-response-types.ts";

interface IGallerySliceState {
  createGalleryTags: string[];
  activeTag: string;
  downloadGalleries: IGetAllGalleriesResponse[];
}

const initialState: IGallerySliceState = {
  createGalleryTags: [],
  activeTag: "Всё",
  downloadGalleries: [],
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

    editGalleryTags(state, action: PayloadAction<string[]>) {
      state.createGalleryTags = action.payload;
    },

    clearSelectedTags(state) {
      state.createGalleryTags = [];
    },

    setDownloadGalleries(state, action: PayloadAction<IGetAllGalleriesResponse>) {
      state.downloadGalleries = [...state.downloadGalleries, action.payload];

      console.log(state.downloadGalleries);
    },

    clearDownloadGalleries(state) {
      state.downloadGalleries = [];
    },
  },
});

export const {
  selectTags,
  setActiveTag,
  clearSelectedTags,
  editGalleryTags,
  setDownloadGalleries,
  clearDownloadGalleries,
} = galleriesSlice.actions;
export default galleriesSlice.reducer;
