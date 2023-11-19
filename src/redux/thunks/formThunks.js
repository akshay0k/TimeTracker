import { createAsyncThunk } from "@reduxjs/toolkit";
import { resetFormState, setFormState } from "../slices/formslice";
import { addToList } from "../slices/taskSlice";

export const saveFormData = createAsyncThunk(
    "form/saveFormData",
    async (_, { getState, dispatch }) => {

       

      try {
        const state = getState();
        const { formState } = state.form;
  
        // console.log("Form data from save thunk", formState);
        if (!state.form) {
          console.error("Form state not found");
          return;
        }
  
        dispatch(
          setFormState({
            field: 'id',
            value: Date.now(),
          })
        );
  
        dispatch(addToList(formState));
      } catch (error) {
        console.error("Error in saveFormData thunk:", error);
      }
    }
  );
  