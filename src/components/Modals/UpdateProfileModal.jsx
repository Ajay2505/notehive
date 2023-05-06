import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PasswordInputs from "../UI/PasswordInputs";
import { updateModalAction } from "../../slices/modalSlice";
import { getName, userNameAction } from "../../slices/authSlice";
import { toast } from "react-toastify";
import { updateProfileService } from "../../services/data.service";

export default function UpdateProfileModal() {
   const dispatch = useDispatch();
   const [name, setName] = useState(useSelector(getName))

   const updateFormHandler = async (evt) => {
      evt.preventDefault();
      const { name, password } = evt.target;
      if (!name.value && !password.value) {
         toast.error("Please fill out the form!");
         return;
      }
      try {
         const response = await updateProfileService({ name: name.value, password: password.value });
         toast.success(response?.message);
         dispatch(userNameAction(response?.userData?.name));
         name.value = "";
         password.value = "";
         dispatch(updateModalAction(false));
      } catch ({ message }) {
         toast.error(message);
      }
   }

   return(
   <>
      <div onClick={() => dispatch(updateModalAction(false))} className="px-3 flex justify-center items-center w-screen h-screen z-50 fixed top-0 left-0 bg-[rgba(0,0,0,0.45)]">
         <form onSubmit={updateFormHandler} onClick={(e) => e.stopPropagation()} className="relative flex flex-col gap-2 w-full md:w-1/2 p-4 py-6 shadow-lg rounded-lg scaleAnime bg-white">
            <i onClick={() => dispatch(updateModalAction(false))} className="fa-solid fa-xmark cursor-pointer absolute right-3 p-1 top-2 hover:text-red-600"></i>
            <div className="flex flex-col w-full relative pt-3">
               <input onChange={(e) => setName(e.target.value)} value={name} minLength={3} name="name" type="text" className="outline-none border-2 rounded-md focus:border-2 focus:border-[#f5ba13] p-2" placeholder="Name"/>
               <label>Name</label>
            </div>
            <PasswordInputs />
            <button className="duration-500 w-fit p-2 mt-3 text-white rounded-lg bg-green-600 hover:bg-green-500" type="submit">Confirm</button>
         </form>
      </div>
   </>);
}