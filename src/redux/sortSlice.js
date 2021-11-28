import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sortSlice",
  initialState: {
    listOfSort: ["популярности", "цене", "алфавиту"],
    activeIndex: 0,
  },
  reducers: {
    setActiveIndex: (state, action) =>
      void (state.activeIndex = action.payload),
  },
});

export const { setActiveIndex } = sortSlice.actions;

export const getList = (state) => state.sort.listOfSort;
export const getActiveIndex = (state) => state.sort.activeIndex;

export default sortSlice.reducer;
