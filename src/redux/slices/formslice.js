import { createSlice } from "@reduxjs/toolkit";


export const formSlice = createSlice({
  name: "form",
  initialState: {
    formState: {
      icon: "",
      title: "",
      description: [],
      totalTimeSpend: 0,
      id: Date.now(),
    },
  },
  reducers: {
    setFormState: (state, action) => {
        if ('field' in action.payload) {
          // Single field update
          const { field, value } = action.payload;
          state.formState[field] = value;
        } else {
          // Multiple field updates
          const updates = action.payload;
          Object.keys(updates).forEach(field => {
            state.formState[field] = updates[field];
          });
        }
      },
    resetFormState: (state) => {
      state.formState = {
        date: "",
        icon: "",
        title: "",
        description: [],
        totalTimeSpend: 0,
        id: Date.now(),
      };
    },
    updateDescription: (state, action) => {
      state.formState.description = action.payload.split("\n");
    },
  },
});

export const { setFormState, resetFormState, updateDescription } =
  formSlice.actions;
