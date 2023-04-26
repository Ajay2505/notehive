
const baseUrl = "http://localhost:6969/";

export const Constants = {
   baseUrl,
   login: baseUrl + "login",
   reqOtp: baseUrl + "reqOtp?otpLogin=",
   checkOtp: baseUrl + "checkOtp?otpLogin=",
   deleteOtp: baseUrl + "deleteOtp?otpLogin=",
   updateProfile: baseUrl + "profile",
}