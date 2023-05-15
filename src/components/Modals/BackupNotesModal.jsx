import { useDispatch } from "react-redux";
import { hasGuestNotesAction } from "../../slices/modalSlice";
import { toast } from "react-toastify";
import { uploadNotesService } from "../../services/data.service";
import { addNotesAction } from "../../slices/noteSlice";


export default function BackupNotesModal() {
   const dispatch = useDispatch();

   const onUploadNotes = async (evt) => {
      evt.target.disabled = true;
      try {
         const response = await uploadNotesService();
         dispatch(addNotesAction(response?.notes));
         toast.info(response?.message);
         dispatch(hasGuestNotesAction(false));
      } catch ({ message }) {
         toast.error(message);
      }
      evt.target.disabled = false;
   }

   const onDeleteNotes = () => {
      localStorage.removeItem("notehubNotes");
      dispatch(hasGuestNotesAction(false));
      toast.info("Notes deleted!");
   }

   return(
      <>
      <div className="flex justify-center items-center w-screen h-screen z-50 fixed left-0 top-0 bg-[rgba(0,0,0,0.65)]">
         <div className="flex flex-col gap-7 relative bg-white  scaleAnime w-full md:w-1/2 p-10 rounded-xl text-lg">
               <i onClick={() => dispatch(hasGuestNotesAction(false))} className="fa-solid fa-xmark absolute top-4 right-4 cursor-pointer hover:text-red-500 p-1"></i>
               <h1 className="text-center font-semibold text-[#800000] text-md md:text-xl">What would you like to do with your guest notes?</h1>
               <p>You have notes saved on your device that were created while using NoteHive as a guest. Would you like to save these notes to your account or delete them from your device?</p>
               <div className="flex justify-around ">
                  <button onClick={onUploadNotes} className="p-2 px-3 rounded-md bg-green-700 text-white">Upload</button>
                  <button onClick={() => dispatch(hasGuestNotesAction(false))} className="px-3 rounded-md bg-gray-400 hover:bg-slate-400">Ask me Later</button>
                  <button onClick={onDeleteNotes} className="px-3 rounded-md text-white bg-red-700">Delete</button>
               </div>
            </div>
      </div>
      </>
   );
}