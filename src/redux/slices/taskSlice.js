import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
      listData: [],
      selectedData: null,
    },
    reducers: {
      setListData: (state, action) => {
        state.listData = action.payload;
      },
      setSelectedData: (state, action) => {
        console.log("action.payload",action.payload)
        state.selectedData = action.payload;
      },
      resetSelectedData: (state) => {
        state.selectedData = null;
      },
      addToList: (state, action) => {
        state.listData.push(action.payload);
      },
    },
  });


  export const {
    setListData,
    setSelectedData,
    resetSelectedData,
    addToList,
  } = taskSlice.actions;