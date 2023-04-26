import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import { formAction, getFormType } from "../../slices/authSlice";
import { loaderAction } from "../../slices/loaderSlice";

import { confirmOtpService, deleteOtpService, reqOtpService } from "../../services/login.service";

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
         setName(evt.target.name.value);
      }
      setEmail(evt.target.email.value);
      dispath(loaderAction({ loader: true }));
      try {
         const response = await reqOtpService({ email: evt.target.email.value, type: formType==="otpLogin" });
         console.log(response);
         toast.success(response.message);
         setOtpState(true);
      } catch (error) {
         toast.error(error.message);
      }
      dispath(loaderAction({ loader: false }));
   }

   const confirmOtp = async (evt) => {
      evt.preventDefault();
      console.log(name);
      try {
         const response = await confirmOtpService({ email, otp: evt.target.otp.value, name, type: formType==="otpLogin" }) 
         toast.success(response.message);
         if (formType === "otpLogin") {
            navigate("/home");
         } else {
            setUpdatePass(true);
         }
      } catch (error) {
         toast.error(error.message);
      }

   }

   const wrongEmailHandler = async () => {
      try {
         await deleteOtpService({ email, type: formType==="otpLogin" });
      } catch (error) {
         toast.error(error.message);
      }
   }

   const updatePassword = () => {}

   return(
      <>
         {updatePass ?
            <>
               <p className="w-full text-right text-blue-600">
                  <span onClick={() => navigate("/home")} className="w-fit underlineAnime relative cursor-pointer hoverAr">
                     Skip for now? <i className="fa-solid duration-500 fa-arrow-right"></i> 
                  </span>
               </p>
               <form onSubmit={(evt) => updatePassword(evt)} className="flex flex-col gap-4">
                  <input required minLength={7} type="password" className="outline-none border rounded-md focus:border focus:border-[#f5ba13] p-2" placeholder="Password"/>
                  <input type="password" className="outline-none border rounded-md focus:border focus:border-[#f5ba13] p-2" placeholder="Confirm Password"/>
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
               <form onSubmit={otpState ? confirmOtp : reqOtp} className="flex flex-col gap-4">
                  {formType === "signup" &&
                     <input disabled={otpState} required minLength={3} type="text" className="outline-none border rounded-md focus:border focus:border-[#f5ba13] p-2" placeholder="Name"/>
                  }
                  <input required disabled={otpState} className="outline-none border rounded-md focus:border focus:border-[#f5ba13] p-2" type="email" name="email" placeholder="Email" />
                  <button className={ `${otpState && "hide"} w-fit p-2 text-white rounded-lg bg-green-600 hover:bg-green-500`} type="submit" name="button">Send OTP</button>
                  
                  <input className={`${!otpState && "hide"} duration-500 outline-none border rounded-md focus:border focus:border-[#f5ba13] p-2`} type="number" name="otp" placeholder="OTP"/>
                  <button className={`${!otpState && "hide"} duration-500 w-fit p-2 text-white rounded-lg bg-green-600 hover:bg-green-500`} type="submit">{formType === "otpLogin" ? "Login" : "Confirm"}</button>
               </form>

               <p onClick={wrongEmailHandler} className={`${!otpState && "hide"} duration-500 cursor-pointer w-fit text-blue-600 hover:underline`}>Wrong Email?</p>
            </>
         }
      </>
   );
}