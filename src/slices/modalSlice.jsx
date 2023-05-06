import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: false,
  logoutModal: false,
  updateModal: false,
  deleteAccModal: false,
  noteModal: { modalState: false, note: {} },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    loaderAction: (state, action) => {
      state.loader = action.payload.loader;
    },
    noteModalAction: (state, action) => {
      state.noteModal = action.payload;
    },
    logoutModalAction: (state, action) => {
      state.logoutModal = action.payload;
    },
    updateModalAction: (state, action) => {
      state.updateModal = action.payload;
    },
    deleteAccModalAction: (state, action) => {
      state.deleteAccModal = action.payload;
    },
    resetModal: () => {
      return initialState;
    },
  },
});

export default modalSlice.reducer;
export const {
  loaderAction,
  noteModalAction,
  resetModal,
  logoutModalAction,
  updateModalAction,
  deleteAccModalAction
} = modalSlice.actions;

export const getLoaderState = (state) => state.modal.loader;
export const getNoteModal = (state) => state.modal.noteModal;
export const getLogoutModalState = (state) => state.modal.logoutModal;
export const getUpdateModalState = (state) => state.modal.updateModal;
export const getDeleteAccModalState = (state) => state.modal.deleteAccModal;
