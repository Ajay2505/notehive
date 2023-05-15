import { useSelector } from "react-redux";
import { getLoaderState } from "../slices/modalSlice";
import { getFormType } from "../slices/authSlice";

import Navbar from "../components/UI/Navbar";
import Loader from "../components/UI/Loader";
import LoginForm from "../components/forms/LoginForm";
import EmailOtpForm from "../components/forms/EmailOtpForm";

export default function Auth() {
  const loaderState = useSelector(getLoaderState);
  const formType = useSelector(getFormType);
  return (
    <>
      {loaderState && <Loader />}
      <div className="w-screen relative h-screen overflow-x-hidden gap-y-5 py-7 lg:py-0 overflow-y-auto flex flex-col justify-center items-center">
        <Navbar />
        <div className="boxShadow bg-white text-sm mt-44 lg:mt-32 duration-1000 sm:text-base lg:text-lg p-6 w-[90%] md:w-1/2 lg:w-2/5 rounded-md flex flex-col gap-4">
          {formType === "login" && <LoginForm />}
          {(formType === "signup" || formType === "otpLogin") && (
            <EmailOtpForm />
          )}
        </div>
        <div className="h-fit boxShadow duration-300 p-3 rounded-lg bg-gray-200 w-[90%] md:w-1/2 lg:w-2/5">
            <p className=" sm:text-base lg:text-lg"><span className="text-red-700 font-semibold text-lg">Notice: </span>We are currently experiencing a slight issue with our backend system. As a result, our login feature is temporarily unavailable. However, you can still continue to browse our website as a <span className="text-green-700 font-semibold">Guest</span> and even add notes, which will be backed up once you sign in. We apologize for any inconvenience this may cause and our team is working to resolve the issue as quickly as possible. Thank you for your patience and understanding.</p>
        </div>
      </div>
    </>
  );
}

export async function loader() {
  const token = JSON.parse(localStorage.getItem("notehubData"))?.token;
  if (!token) {
    return {};
  }
  window.location.href = "/home";
  return {};
}