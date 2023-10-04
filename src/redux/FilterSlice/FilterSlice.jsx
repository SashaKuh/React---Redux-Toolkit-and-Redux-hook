import { createSlice } from '@reduxjs/toolkit';

export const FilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilterValue: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFilterValue } = FilterSlice.actions;