import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import { formAction, getFormType, nameAction, tokenAction } from "../../slices/authSlice";
import { loaderAction } from "../../slices/loaderSlice";

import { confirmOtpService, deleteOtpService, reqOtpService } from "../../services/login.service";
import { updateProfileService } from "../../services/data.service";
import PasswordInputs from "../UI/PasswordInputs";

export default function EmailOtpForm() {
   const [otpState, setOtpState] = useState(false);
   const [updatePass, setUpdatePass] = useState(false);

   const [email, setEmail] = useState("");
   const [name, setName] = useState("");

   const formType = useSelector(getFormType);

   const dispath = useDispatch();
   const navigate = useNavigate();

   const reqOtp = async (evt) => {
      evt.preventDefault();
      if (formType !== "otpLogin") {
         console.log(evt.target.name.value);
         setName(evt.target.name.value);
      }
      setEmail(evt.target.email.value);
      dispath(loaderAction({ loader: true }));
      try {
         const response = await reqOtpService({ email: evt.target.email.value, type: formType==="otpLogin" });
         toast.success(response.message);
         setOtpState(true);
      } catch (error) {
         toast.error(error.message);
      }
      dispath(loaderAction({ loader: false }));
   }

   const confirmOtp = async (evt) => {
      evt.preventDefault();
      dispath(loaderAction({ loader: true }));
      try {
         const response = await confirmOtpService({ email, otp: evt.target.otp.value, name, type: formType==="otpLogin" });
         toast.success(response.message);
         dispath(tokenAction(response.userData.token));
         dispath(nameAction(response.userData.name));
         if (formType === "otpLogin") {
            navigate("/home");
         } else {
            setUpdatePass(true);
         }
      } catch (error) {
         toast.error(error.message);
      }
      dispath(loaderAction({ loader: false }));
   }

   const wrongEmailHandler = async () => {
      try {
         setOtpState(false);
         await deleteOtpService({ email, type: formType==="otpLogin" });
      } catch (error) {
         toast.error(error.message);
      }
   }

   const updatePassword = async (evt) => {
      evt.preventDefault();
      const { initPassword, password } = evt.target;
      if (password.value < 7) {
         toast.error("Please choose a stronger password!");
         return;
      }
      if (initPassword.value !== password.value) {
         toast.error("Incorrect password!");
         return;
      }
      dispath(loaderAction({ loader: true }));
      try {
         const response = await updateProfileService({ password: evt.target.password.value });
         toast.success(response.message);
         dispath(nameAction(response.userData.name));
         navigate("/home");
      } catch (error) {
         toast.error(error.message);
      }
      dispath(loaderAction({ loader: false }));
   }

   return(
      <>
         {updatePass ?
            <>
               <p className="w-full text-right text-blue-600">
                  <span onClick={() => navigate("/home")} className="w-fit underlineAnime relative cursor-pointer hoverAr">
                     Skip for now? <i className="fa-solid duration-500 fa-arrow-right"></i> 
                  </span>
               </p>
               <form onSubmit={updatePassword} className="flex flex-col gap-4">
                  <PasswordInputs />
                  <button className="duration-500 w-fit p-2 text-white rounded-lg bg-green-600 hover:bg-green-500" type="submit">Confirm</button>
               </form>
            </>
            :
            <>
               <p className="w-full text-right text-blue-600">
                  <span onClick={() => dispath(formAction({ formType: "login" }))} className="w-fit underlineAnime relative after:right-0 after:left-auto cursor-pointer hoverAl">
                     <i className="fa-solid duration-500 fa-arrow-left"></i> Back
                  </span>
               </p>
               <form onSubmit={otpState ? confirmOtp : reqOtp} className="flex flex-col gap-2">
                  {formType === "signup" &&
                     <div className="flex flex-col w-full">
                        <input disabled={otpState} required minLength={3} name="name" type="text" className="outline-none border rounded-md focus:border focus:border-[#f5ba13] p-2" placeholder="Name"/>
                        <label className="text-xs ml-3 font-semibold duration-300">Name</label>
                     </div>
                  }
                  <div className="flex flex-col w-full">
                     <input required disabled={otpState} className="outline-none border rounded-md focus:border focus:border-[#f5ba13] p-2" type="email" name="email" placeholder="Email" />
                     <label className="text-xs ml-3 font-semibold duration-300">Email</label>
                  </div>
                  <button className={ `${otpState && "hide"} w-fit p-2 text-white rounded-lg bg-green-600 hover:bg-green-500`} type="submit" name="button">Send OTP</button>
                  
                  <div className="flex flex-col w-full">
                     <input className={`${!otpState && "hide"} duration-500 outline-none border rounded-md focus:border focus:border-[#f5ba13] p-2`} type="number" name="otp" placeholder="OTP"/>
                     <label className={`${!otpState && "hide"} text-xs ml-3 font-semibold duration-300`}>OTP</label>
                  </div>
                  
                  <button className={`${!otpState && "hide"} duration-500 w-fit p-2 text-white rounded-lg bg-green-600 hover:bg-green-500`} type="submit">{formType === "otpLogin" ? "Login" : "Confirm"}</button>
               </form>

               <p onClick={wrongEmailHandler} className={`${!otpState && "hide"} underlineAnime relative duration-500 cursor-pointer w-fit text-blue-600`}>Wrong Email?</p>
            </>
         }
      </>
   );
}