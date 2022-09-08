import { createSlice } from '@reduxjs/toolkit';

export const formStepSlice = createSlice({
  name: 'formStep',
  initialState: {
    step: 0
  },
  reducers: {
    nextStep: state => {
      state.step += 1
    },

    prevStep: state => {
      state.step -= 1
    }
  }
});

export const { nextStep, prevStep } = formStepSlice.actions;

export const getStep = state => state.formStep.step

export default formStepSlice.reducer
