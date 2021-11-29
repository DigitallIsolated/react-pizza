import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState: {
    categoriesList: [
      "Все",
      "Мясные",
      "Вегетарианская",
      "Гриль",
      "Острые",
    ],
    activeCategory: 0,
  },
  reducers: {
    setActiveIndex: (state, action) => void (state.activeCategory = action.payload),
  },
});
export const { setActiveIndex } = categoriesSlice.actions;

export const getList = (state) => state.categories.categoriesList;
export const getActive = (state) => state.categories.activeCategory;

export default categoriesSlice.reducer;
