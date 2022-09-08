import { configureStore } from '@reduxjs/toolkit';
import formStepReducer from './formSteps';
import formContentReducer from './formContent';

const configureAppStore = () => (
  configureStore({
    reducer: {
      formStep: formStepReducer,
      formContent: formContentReducer
    }
  })
);

export default configureAppStore
