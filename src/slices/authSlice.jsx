import { createSlice } from '@reduxjs/toolkit';


export const authSlice = createSlice({
   name:"auth",
   initialState: { token: "", name: "", formType: "login" },
   reducers: {
      formAction: (state, action) => {
         state.formType = action.payload.formType;
      },
      tokenAction: (state, action) => {
         state.token = action.payload;
      },
      nameAction: (state, action) => {
         state.name = action.payload;
      },
   }
}); 

export default authSlice.reducer;
export const { formAction, tokenAction, nameAction } = authSlice.actions;
export const getFormType = (state) => state.auth.formType;
export const getToken = (state) => state.auth.token;
export const getName = (state) => state.auth.name;