
import { useSelector } from "react-redux";
import { getLoaderState } from "../slices/loaderSlice";
import { getFormType } from "../slices/authSlice";

import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import LoginForm from "../components/forms/LoginForm";
import EmailOtpForm from "../components/forms/EmailOtpForm";

export default function Auth() {
   const loaderState = useSelector(getLoaderState);
   const formType = useSelector(getFormType);
   return(
      <>
         {loaderState && <Loader />}   
         <div className="w-screen h-screen overflow-hidden flex flex-col justify-center items-center">
            <Navbar />
            <div className="bg-white text-sm duration-1000 sm:text-base lg:text-lg p-6 w-4/5 md:w-1/2 lg:w-2/5 rounded-md flex flex-col gap-4">
               {formType === "login" && <LoginForm />}
               {(formType === "signup" || formType === "otpLogin") && <EmailOtpForm />}
            </div>
         </div>
      </>
   );
}