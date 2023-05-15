
const baseUrl = "http://localhost:8080/";

export const Constants = {
   baseUrl,
   login: baseUrl + "login",
   logout: baseUrl + "logout",
   logoutAll: baseUrl + "logoutAll",
   reqOtp: baseUrl + "reqOtp?otpLogin=",
   checkOtp: baseUrl + "checkOtp?otpLogin=",
   deleteOtp: baseUrl + "deleteOtp?otpLogin=",
   updateProfile: baseUrl + "profile",
   getNotes: baseUrl + "notes",
   addNote: baseUrl + "note",
   addNotes: baseUrl + "notes",
   deleteNote: baseUrl + "note/",
   editnote: baseUrl + "note/",
   deleteAcc: baseUrl + "account"
}