import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counter';
import calculatorReducer from '../slices/calculator';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    calculator: calculatorReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
