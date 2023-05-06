import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../slices/authSlice";
import modalReducer from '../slices/modalSlice';
import noteReducer from '../slices/noteSlice';

export const store = configureStore({
   reducer: {
      auth: authReducer,
      modal: modalReducer,
      note: noteReducer
   }
});