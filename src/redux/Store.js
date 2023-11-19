// store.js
import { configureStore } from '@reduxjs/toolkit';
import { taskSlice } from './slices/taskSlice';
import { timerSlice } from './slices/timerSlice';
import { formSlice } from './slices/formslice';

// Task Slice




// export const selectListData = (state) => state.task.listData;
// export const selectFormState = (state) => state.task.formState;
// export const selectSelectedData = (state) => state.task.selectedData;



// export const { setTimerCount, setTimerPlay } = timerSlice.actions;
// export const selectTimerCount = (state) => state.timer.timerCount;

// Combine all slices
export const rootReducer = {
  task: taskSlice.reducer,
  timer: timerSlice.reducer,
  form: formSlice.reducer,
};

export default configureStore({
  reducer: rootReducer,
});
