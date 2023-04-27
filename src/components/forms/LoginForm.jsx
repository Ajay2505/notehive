import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { formAction, nameAction, tokenAction } from "../../slices/authSlice";
import { loaderAction } from "../../slices/loaderSlice";
import { loginService } from "../../services/login.service";

export default function LoginForm() {

   const dispath = useDispatch();
   const navigate = useNavigate();

   const loginHandler = async (evt) => {
      evt.preventDefault();
      const { email, password } = evt.target;
      dispath(loaderAction({ loader: true }));

      try {
         const response = await loginService({ email: email.value, password: password.value });
         dispath(tokenAction(response.userData.token));
         dispath(nameAction(response.userData.name));
         toast.success(response.message);
         navigate("/home");
      } catch (error) {
         toast.error(error.message);
      }
      dispath(loaderAction({ loader: false }))
   }

   return (
      <>
         <form onSubmit={loginHandler} className="flex flex-col gap-2">
            <div className="w-full flex flex-col">
               <input required name="email" autoComplete="off" className="input outline-none rounded-md border focus:border focus:border-[#f5ba13] p-2" type="email" placeholder="Email" />
               <label className="text-xs ml-3 font-semibold duration-300">Email</label>
            </div>
            <div className="w-full flex flex-col">
               <input required minLength={7} name="password" autoComplete="off" className="outline-none rounded-md border focus:border focus:border-[#f5ba13] p-2" type="password" placeholder="Password" />
               <label className="ml-3 duration-300 font-semibold text-xs">Password</label>
            </div>
            <button type="submit" className="w-fit p-2 px-3 text-white rounded-lg bg-green-600 hover:bg-green-500">Login</button>
         </form>
         <p>Dont have an account? <span onClick={() => dispath(formAction({ formType: "signup" }))} className="cursor-pointer text-blue-600 relative underlineAnime">Sign Up!</span></p>
         <p onClick={() => dispath(formAction({ formType: "otpLogin" }))} className="text-blue-600 w-fit relative underlineAnime cursor-pointer hoverAr">Login using OTP <i className="fa-solid duration-500 fa-arrow-right child:text-red-400"></i></p>
      </>
   );
}