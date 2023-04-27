import { useState } from "react"


export default function CreateNote() {
   const [hide, setHide] = useState(true);

   return (
      <>
         <div onClick={() => setHide(true)} className="flex w-full justify-center mt-24 md:mt-28 lg:mt-32">
            <form onClick={(evt) => { setHide(false); evt.stopPropagation() }} className={`${!hide && "animateLines"} shadow-lg duration-500 flex relative flex-col gap-4 w-11/12 md:w-8/12 lg:w-5/12 h-fit p-7 rounded-lg bg-white`}>            <input placeholder="Title" className={`${hide && "hide"} duration-500 w-full outline-none rounded-md border focus:border focus:border-[#f5ba13] p-2`} type="text" />
               <div className="w-full relative">
                  <textarea rows={hide ? 1 : 3} placeholder="Note" className="duration-500 resize-none w-full outline-none rounded-md border focus:border focus:border-[#f5ba13] p-2" type="text" />
               </div>
               <button type="submit" className={`${hide && "hide"} hover:bg-yellow-300 duration-700 absolute right-5 -bottom-5 w-fit py-2 px-3 rounded-full bg-[#f5ba13] text-white `}><i className="fa-solid fa-plus"></i></button>
            </form>
         </div>
      </>
   )
}