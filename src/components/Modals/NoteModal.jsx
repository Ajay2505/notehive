import { useDispatch, useSelector } from "react-redux";
import { getNoteModal, loaderAction, noteModalAction } from "../../slices/modalSlice";
import { useState } from "react";
import { toast } from "react-toastify";
import { deleteNoteService } from "../../services/data.service";
import { deleteNoteAction } from "../../slices/noteSlice";

export default function NoteModal() {
  const dispatch = useDispatch();
  const { note } = useSelector(getNoteModal);
  const [noteBg, setNoteBg] = useState(note?.noteBg);
  const [textColor, setTextColor] = useState(note?.textColor);

  const deleteNoteHandler = async () => {
    dispatch(loaderAction({ loader: true }));
    try {
      await deleteNoteService(note._id);
      dispatch(noteModalAction({ modalState: false, note: {} }));
      dispatch(deleteNoteAction({ _id: note?._id }));
    } catch ({ message }) {
      toast.error(message);
    }
    dispatch(loaderAction({ loader: false }));
  }

  return (
    <>
      <div onClick={() => dispatch(noteModalAction({ modalState: false, note: {} }))}
        className="w-screen h-screen left-0 top-0 z-50 fixed flex justify-center items-center bg-[rgba(0,0,0,0.55)]">
        <div onClick={(e) => e.stopPropagation()} style={{backgroundColor: noteBg, color: textColor}}
          className="bg-white border-2 boxShadow border-white rounded-md duration-200 relative scaleAnime flex flex-col w-full h-fit max-w-[90vw] max-h-[90vh] overflow-y-auto md:w-1/2 p-2 sm:px-7">
          <i onClick={() => dispatch(noteModalAction({ modalState: false, note: {} }))} className="fa-solid fa-xmark absolute right-6 top-4 py-[.3rem] px-[.5rem] cursor-pointer rounded-full bg-white text-red-600"></i>
          <h1 className="text-center focus:outline-none font-bold text-lg mb-3">
            {note?.title}
          </h1>
          {note?.note.split("\n").map((line, idx) => (
            <p className="m-0 p-0" key={idx}>{line}</p>
          ))}

          <div className="flex max-lg:flex-col justify-center items-center">
            <div className="flex justify-evenly items-center my-7 w-full">
              
              <div className="flex justify-center items-center gap-2">
                <label className="relative text-inherit" htmlFor="textColor"><i className="fa-solid fa-t text-base leading-3 cursor-pointer px-[.7rem] select-none border-2 focus:outline-none focus:border-2 max-lg:text-white lg:border-[#777] max-lg:bg-blue-400 lg:hover:bg-blue-400 hover:border-blue-400 hover:text-white focus:border-red-500 active:translate-y-1 hover:-translate-y-1 duration-500 rounded-full p-3"></i></label>
                <input onChange={(e) => setTextColor(e.target.value)} name="textColor" value={textColor} type="color" className="relative opacity-0 -z-10 -translate-x-7 w-0 translate-y-1" id="textColor"/>
              </div>

              <i onClick={deleteNoteHandler} className="fa-solid fa-trash cursor-pointer select-none border-2 focus:outline-none focus:border-2 max-lg:text-white lg:border-[#777] max-lg:bg-red-500 lg:hover:bg-red-500 hover:border-red-500 hover:text-white focus:border-red-500 active:translate-y-1 hover:-translate-y-1 duration-500 rounded-full p-2"></i>  
              
              <div className="flex gap-2 justify-center items-center">
                <label className="relative text-inherit" htmlFor="bgColor"><i className="fa-solid fa-palette text-base leading-3 cursor-pointer px-[.6rem] select-none border-2 focus:outline-none focus:border-2 max-lg:text-white lg:border-[#777] max-lg:bg-[#f5ba13] lg:hover:bg-[#f5ba13] hover:border-yellow-500 hover:text-white focus:border-red-500 active:translate-y-1 hover:-translate-y-1 duration-500 rounded-full p-3"></i></label>
                <input onChange={(e) => setNoteBg(e.target.value)} name="noteBg" value={noteBg} type="color" className="relative opacity-0 -translate-x-7 translate-y-1 w-0" id="bgColor"/>
              </div>
            </div>

            <button className="text-white lg:place-self-center bg-green-500 place-self-end w-fit p-2 rounded-lg">
              Save
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
}
// onInput={() => setNoteChanged(true)} contentEditable="true"