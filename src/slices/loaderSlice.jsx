import { createSlice } from '@reduxjs/toolkit';

export const loaderSlice = createSlice(
   {
      name: "loader",
      initialState: { loader: false },
      reducers: {
         loaderAction: (state, action) => {
            state.loader = action.payload.loader;
         }
      }
   }
);

export default loaderSlice.reducer;
export const { loaderAction } = loaderSlice.actions;
export const getLoaderState  = (state) => state.loader.loader;