import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const formContentSlice = createSlice({
  name: "formContent",
  initialState: {
    questionOne: "",
    questionTwo: "",
    questionThree: "",
    name: "",
    status: "idle",
    error: null,
  },
  reducers: {
    updatedQuestionOne: (state, action) => {
      state.questionOne = action.payload;
    },
    updatedQuestionTwo: (state, action) => {
      state.questionTwo = action.payload;
    },
    updatedQuestionThree: (state, action) => {
      state.questionThree = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getName.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getName.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.name = action.payload;
      })
      .addCase(getName.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { updatedQuestionOne, updatedQuestionTwo, updatedQuestionThree } =
  formContentSlice.actions;

export default formContentSlice.reducer;

export const getName = createAsyncThunk("formContent/getName", async () => {
  const response = await fetch("http://localhost:3002");
  const answer = await response.json();
  return answer.name;
});
