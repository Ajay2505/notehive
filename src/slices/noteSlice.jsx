import { createSlice } from "@reduxjs/toolkit";

const initialState = { notes: [] };

const noteSlice = createSlice({
   name: "note",
   initialState,
   reducers: {
      notesAction : (state, action) => {
         state.notes = action.payload?.notes;
      },
      addNoteAction: (state, action) => {
         state.notes.push(action.payload?.note);
      },
      editNoteAction: (state, action) => {
         const index = state?.notes.findIndex(obj => obj._id === action.payload?.note?._id);
         if (index !== -1) {
            state.notes[index] = action.payload?.note;
         }
      },
      deleteNoteAction: (state, action) => {
         state.notes = state.notes.filter(note => note._id !== action.payload?._id)
      },
      resetNotes: () => {
         return initialState;
      }
   }
});

export default noteSlice.reducer;
export const { notesAction, addNoteAction, editNoteAction, deleteNoteAction, resetNotes } = noteSlice.actions;
export const getNotes = (state) => state.note.notes;