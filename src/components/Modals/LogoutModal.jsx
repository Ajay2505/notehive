import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { loaderAction, logoutModalAction, resetModal } from "../../slices/modalSlice";
import { logoutAllService, logoutService } from "../../services/login.service";
import { resetAuth } from "../../slices/authSlice";
import { resetNotes } from "../../slices/noteSlice";

export default function LogoutModal() {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const resetter = () => {
     dispatch(resetAuth());
     dispatch(resetModal());
     dispatch(resetNotes());
   };

   const logoutHandler = async () => {
      dispatch(loaderAction({ loader: true }));
      try {
         await logoutService();
         navigate("/");
         resetter();
      } catch ({ message }) {
         toast.error(message);
      }
      dispatch(loaderAction({ loader: false }));
   }

   const logoutAllHandler = async () => {
      dispatch(loaderAction({ loader: true }));
      try {
         await logoutAllService();
         navigate("/");
         resetter();
      } catch ({ message }) {
         toast.error(message);
      }  
      dispatch(loaderAction({ loader: false }));
   }

  return (
    <>
      <div onClick={() => dispatch(logoutModalAction(false))} className="flex justify-center items-center w-screen h-screen z-50 fixed left-0 top-0 bg-[rgba(0,0,0,0.45)]">
         <div onClick={(e) => e.stopPropagation()} className="bg-black relative text-white scaleAnime w-full md:w-1/2 p-10 rounded-xl font-semibold text-lg">
            <i onClick={() => dispatch(logoutModalAction(false))} className="fa-solid fa-xmark absolute top-4 right-4 cursor-pointer hover:text-red-500 p-1"></i>
            <h1 className="text-center pb-7">Confirm Logout?</h1>
            <div className="flex justify-between ">
               <button onClick={logoutHandler} className="bg-gray-400 p-2 rounded-md outline outline-white text-black hover:bg-slate-400">Logout</button>
               <button onClick={logoutAllHandler} className="bg-gray-400 p-2 rounded-md outline outline-white text-black hover:bg-slate-400">Logout From all devices</button>
            </div>
         </div>
      </div>
    </>
  );
}
