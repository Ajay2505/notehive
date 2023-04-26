import { useDispatch } from "react-redux";
import { formAction } from "../../slices/authSlice";
import { loaderAction } from "../../slices/loaderSlice";
import { loginService } from "../../services/login.service";
import { toast } from "react-toastify";

export default function LoginForm() {

   const dispath = useDispatch();

   const loginHandler = async (evt) => {
      evt.preventDefault();
      const { email, password } = evt.target;
      dispath(loaderAction({ loader: true }));

      try {
         const data = await loginService({ email: email.value, password:password.value });
         console.log(data);
      } catch (error) {
         toast.error(error.message);
      }
      dispath(loaderAction({ loader: false }))
   }

   return (
      <>
         <form onSubmit={loginHandler} className="flex flex-col gap-4">
            <input required name="email" className="outline-none rounded-md border focus:border focus:border-[#f5ba13] p-2" type="email" placeholder="Email" />
            <input required minLength={7} name="password" autoComplete="off" className="outline-none rounded-md border focus:border focus:border-[#f5ba13] p-2" type="password" placeholder="Password" />
            <button type="submit" className="w-fit p-2 text-white rounded-lg bg-green-600 hover:bg-green-500">Login</button>
         </form>
         <p>Dont have an account? <span onClick={() => dispath(formAction({ formType: "signup" }))} className="cursor-pointer text-blue-600 relative underlineAnime">Sign Up!</span></p>
         <p onClick={() => dispath(formAction({ formType: "otpLogin" }))} className="text-blue-600 w-fit relative underlineAnime cursor-pointer hoverAr">Login using OTP <i className="fa-solid duration-500 fa-arrow-right child:text-red-400"></i></p>
      </>
   );
}