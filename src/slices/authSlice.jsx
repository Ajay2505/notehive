import { createSlice } from '@reduxjs/toolkit';


export const authSlice = createSlice({
   name:"auth",
   initialState: { userData: null, formType: "login" },
   reducers: {
      loginAction: (state, action) => {
         state.userData = action.payload.userData;
      },
      formAction: (state, action) => {
         state.formType = action.payload.formType;
      },
   }
}); 

export default authSlice.reducer;
export const { loginAction, formAction } = authSlice.actions;
export const getEmail = (state) => state.auth.email;
export const getFormType = (state) => state.auth.formType;