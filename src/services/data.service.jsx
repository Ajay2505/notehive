import { Constants } from "../Constants";


export const updateProfileService = async (data) => {
   const token = JSON.parse(localStorage.getItem("notehubData"))?.token;
   if (!token) {
      throw new Error("Session timed out! Please login again");
   }
   const response = await fetch(Constants.updateProfile, {
      method: "PATCH",
      headers: {
         'Content-Type': 'application/json',
         "Authorization" : token,
      },
      body: JSON.stringify(data)
   });

   if (!response) {
      throw new Error("Something went wrong!");
   }
   const res = await response.json();
   if (response.status > 205) {
      localStorage.removeItem("notehubData");
      throw new Error(res.message);
   }
   
   return res;
}