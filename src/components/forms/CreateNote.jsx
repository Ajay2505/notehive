import { useState } from "react"
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { addNoteService } from "../../services/data.service";
import { addNoteAction } from "../../slices/noteSlice";


export default function CreateNote() {
   const dispatch = useDispatch();

   const [hide, setHide] = useState(true);
   const [textColor, setTextColor] = useState("#000000");
   const [noteBg, setNoteBg] = useState("#FFFFFF");

   const addNoteHandler = async (evt) => {
      evt.preventDefault();
      const { title, note } = evt.target;
      if (!title.value && !note.value) {
         toast.error("Sorry cannot add an empty note!");
         return;
      }
      console.log(textColor);
      try {
         const response = await addNoteService({ title: title.value.trim(), note: note.value.trim(), textColor, noteBg });
         dispatch(addNoteAction({ note: response?.note }));
         // toast.success(response?.message);
         title.value = "";
         note.value = "";
         setHide(true);
         console.log(response);
      } catch ({ message }) {
         toast.error(message);
      }
      // console.log(e.target.note.value.trim().split("\n"));
   }

   return (
      <>
         <div onClick={() => setHide(true)} className="flex w-full justify-center mt-24 md:mt-28 lg:mt-32">
            <form onSubmit={addNoteHandler} onClick={(e) => { setHide(false); e.stopPropagation() }} className={`${hide ? "" : "pb-7"} shadow-lg duration-500 flex relative flex-col gap-4 w-11/12 md:w-8/12 lg:w-5/12 h-fit p-3 md:p-6 rounded-lg bg-white`}>            
               <div className={`${hide ? "hide" : "animateLines"} w-full relative pt-3`}>
                  <input placeholder="Title" name="title" className="duration-500 w-full outline-none rounded-md border-2 focus:border-2 focus:border-[#f5ba13] p-2" type="text" />
                  <label>Title</label>
               </div>
               <div className="w-full relative pt-2">
                  <textarea rows={hide ? 1 : 3} name="note" placeholder="Note" className="duration-500 resize-none w-full outline-none rounded-md border-2 focus:border-2 focus:border-[#f5ba13] p-2" type="text" />
                  <label>Note</label>
               </div>

               <div className={`${hide && "hide -z-10"} duration-500 max-sm:gap-9 flex justify-evenly`}>
                  <div className="flex justify-center items-center gap-2">
                     <label className="relative" htmlFor="textColor"><i className="fa-solid fa-t text-base leading-3 cursor-pointer px-[.7rem] select-none border-2 focus:outline-none focus:border-2 max-lg:text-white lg:border-[#777] max-lg:bg-blue-400 lg:hover:bg-blue-400 hover:border-blue-400 hover:text-white focus:border-red-500 active:translate-y-1 hover:-translate-y-1 duration-500 rounded-full p-3"></i></label>
                     <input onChange={(e) => setTextColor(e.target.value)} name="textColor" value={textColor} type="color" className="relative cursor-pointer" id="textColor"/>
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                     <label className="relative" htmlFor="bgColor"><i className="fa-solid fa-palette text-base leading-3 cursor-pointer px-[.6rem] select-none border-2 focus:outline-none focus:border-2 max-lg:text-white lg:border-[#777] max-lg:bg-[#f5ba13] lg:hover:bg-[#f5ba13] hover:border-yellow-500 hover:text-white focus:border-red-500 active:translate-y-1 hover:-translate-y-1 duration-500 rounded-full p-3"></i></label>
                     <input onChange={(e) => setNoteBg(e.target.value)} name="noteBg" value={noteBg} type="color" className="relative cursor-pointer" id="bgColor"/>
                  </div>
               </div>
               
               <button name="button" type="submit" className={`${hide && "hide -z-10"} select-none border-2 border-[#f5ba13] hover:bg-yellow-300 focus:outline-none focus:border-2 focus:border-red-500 active:translate-y-1 hover:-translate-y-1 duration-700 absolute right-5 -bottom-5 w-fit py-2 px-3 text-sm md:text-base rounded-full bg-[#f5ba13] text-white`}>
                  <i className="fa-solid fa-plus"></i>
               </button>
            </form>
         </div>
      </>
   )
}