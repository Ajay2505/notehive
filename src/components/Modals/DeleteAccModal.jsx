import { useDispatch } from "react-redux";
import { deleteAccModalAction, loaderAction, resetModal } from "../../slices/modalSlice";
import { toast } from "react-toastify";
import { deleteAccService } from "../../services/data.service";
import { resetAuth } from "../../slices/authSlice";
import { resetNotes } from "../../slices/noteSlice";
import { useNavigate } from "react-router-dom";


export default function DeleteAccModal() {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const resetter = () => {
     dispatch(resetAuth());
     dispatch(resetModal());
     dispatch(resetNotes());
   };
    
   const deleteAccHandler = async () => {
      dispatch(loaderAction({ loader: true }));
      try {
         await deleteAccService();
         resetter();
         navigate("/");
      } catch ({ message }) {
         toast.error(message);
      }
      dispatch(loaderAction({ loader: false }));
   }

   return(
      <>
      <div onClick={() => dispatch(deleteAccModalAction(false))} className="flex justify-center items-center w-screen h-screen z-50 fixed left-0 top-0 bg-[rgba(0,0,0,0.65)]">
         <div onClick={(e) => e.stopPropagation()} className="bg-black flex flex-col gap-7 relative text-white scaleAnime w-full md:w-1/2 p-10 rounded-xl font-semibold text-lg">
            <i onClick={() => dispatch(deleteAccModalAction(false))} className="fa-solid fa-xmark absolute top-4 right-4 cursor-pointer hover:text-red-500 p-1"></i>
            <h1 className="text-center"><span className="text-red-600"> Warning:</span> This action cannot be undone!</h1>
            <p>Are you sure you want to delete your account? All of your data will be permanently deleted. If you're sure you want to proceed, please click "CONFIRM" below.</p>
            <button onClick={deleteAccHandler} className="bg-gray-400 p-2 rounded-md outline outline-white place-self-end text-black hover:bg-slate-400">Confirm</button>
         </div>
      </div>
      </>
   );
}