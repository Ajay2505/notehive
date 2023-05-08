import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import LogoutModal from "../Modals/LogoutModal";
import UpdateProfileModal from "../Modals/UpdateProfileModal";
import { getAuthState, getName } from "../../slices/authSlice";
import { logoutModalAction, getLogoutModalState, getUpdateModalState, updateModalAction, getDeleteAccModalState, deleteAccModalAction } from "../../slices/modalSlice";
import DeleteAccModal from "../Modals/DeleteAccModal";

export default function Navbar() {
   const authState = useSelector(getAuthState);
   const userName = useSelector(getName);
   const modalState = useSelector(getLogoutModalState);
   const updateState = useSelector(getUpdateModalState);
   const deleteAccState = useSelector(getDeleteAccModalState);
   const dispatch = useDispatch();

   const [hide, setHide] = useState(true);

   return(
      <>
      {updateState && <UpdateProfileModal />}
      {modalState && <LogoutModal />}
      {deleteAccState && <DeleteAccModal />}
         <div className="z-10 w-screen flex justify-between items-center absolute top-0 left-0 bg-[#f5ba13] p-5 pr-10 md:p-7 md:pr-16">
            <h1 className="text-xl md:text-3xl font-medium  text-white">NoteHive</h1>
            { authState &&
               <div onMouseOver={() => setHide(false)} onMouseLeave={() => setHide(true)} className="relative">
                  <i className={`fa-${userName?.charAt(0)?.toLowerCase()} fa-solid select-none cursor-pointer text-sm leading-4 md:text-lg md:leading-4 rounded-full bg-white p-2`}></i>
                  <div className={`${hide ? "translate-y-[-70%] -z-10 opacity-0 scale-y-0" : "translate-y-0 scale-y-100 opacity-100"} duration-300 z-50 absolute w-fit bg-[#d7d7d7] lg:bg-white rounded-md -left-[7rem]`}>
                     <p className="lg:text-[#777] hover:text-black select-none p-2 px-3 rounded-[inherit] hover:bg-slate-200">{userName?.slice(0,10)}</p>
                     <p onClick={() => dispatch(updateModalAction(true))} className="cursor-pointer lg:text-[#777] hover:text-black select-none p-2 px-3 rounded-[inherit] hover:bg-slate-200">Update Profile</p>
                     <p onClick={() => dispatch(logoutModalAction(true))} className="cursor-pointer lg:text-[#777] hover:text-black select-none p-2 px-3 rounded-[inherit] hover:bg-slate-200">Log out</p>
                     <p onClick={() => dispatch(deleteAccModalAction(true))} className="cursor-pointer hoverBGAnime overflow-hidden relative text-red-500 hover:text-white font-semibold select-none p-2 px-3 rounded-[inherit] hover:bg-red-500">Delete Account!</p>
                  </div>
               </div>
            }
         </div>
      </>
   );
}