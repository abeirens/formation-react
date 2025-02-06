import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  result: 0,
  operator: false,
  hasDecimal: false
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    reinit: (state) => {
      state.result = 0;
      state.hasDecimal = false;
    },
    undo: (state) => {
      state.result = state.result.toString().slice(0, -1);
    },
    calculate: (state, value) => {
      state.result = state.result === 0 ? value.payload : state.result + value.payload;
      state.operator = false;
    },
    addOperator: (state, value) => {
      if(!state.operator) {
        state.result = state.result + value.payload;
        state.operator = true;
        state.hasDecimal = false;
      }
    },
    percent: (state) => {
      const extractPercent = state.result.split(/([+\-/*])/);
      if (extractPercent.length > 2) {
        const firstValue = extractPercent[0];
        const secondValue = extractPercent[2];
        const symbol = extractPercent[1];
        const percentValue = (firstValue * secondValue) / 100;
        const newResult = firstValue + symbol + percentValue;
        state.result = newResult;
      } else {
        const percentValue = state.result / 100;
        state.result = percentValue;
      }
    },
    equals: (state) => {
      if (state.result === null) {
        state.result = 0;
      } else {
        const equal = !state.operator ? eval(state.result) : eval(state.result.slice(0, -1));

        if(equal === Infinity) {
          state.result = 'Impossible de diviser par 0';
        } else {
          if (equal.toString().split('.').length > 1 && equal.toString().split('.')[1].length > 3) {
            state.result = equal.toFixed(3).toString();
          } else {
            state.result = equal.toString();
          }
        }
      }
      state.operator = false;
    },
    addComma: (state, value) => {
      if (!state.hasDecimal) {
        if (state.result === 0) {
          state.result = 0 + value.payload;
        } else {
          const lastChar = state.result.split('').slice(-1)[0];
          if (state.result !== null && ['+', '-', '*', '/'].includes(lastChar)) {
            state.result = state.result + 0 + value;
          } else {
            state.result = state.result + value;
          }
        }
        state.hasDecimal = true;
      }
    }
  }
});

export const { reinit, undo, calculate, addOperator, percent, equals, addComma } = calculatorSlice.actions
export const finalResult = (state) => state.calculator.result
export default calculatorSlice.reducer
