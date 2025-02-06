import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addNewCounter: (state) => {
      state.value = [...state.value, 0];
    },
    increment: (state, index) => {
      const newCountersArray = [...state.value];
      newCountersArray[index.payload] += 1;
      state.value = newCountersArray;
    },
    decrement: (state, index) => {
      const newCountersArray = [...state.value];
      newCountersArray[index.payload] -= 1;
      state.value = newCountersArray;
    },
    reset: (state, index) => {
      const newCountersArray = [...state.value];
      newCountersArray[index.payload] = 0;
      state.value = newCountersArray;
    },
    remove: (state, index) => {
      state.value = [...state.value].filter((_, i) => i !== index.payload);
    }
  }
});

export const { addNewCounter, increment, decrement, reset, remove } = counterSlice.actions
export const countersArray = (state) => state.counter.value
export default counterSlice.reducer
