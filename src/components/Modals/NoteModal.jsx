import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";

import Loader from "../UI/Loader";
import { getLoaderState, getNoteModal, loaderAction, resetModal } from "../../slices/modalSlice";
import { deleteNoteService, updateNoteService } from "../../services/data.service";
import { deleteNoteAction, editNoteAction } from "../../slices/noteSlice";

export default function NoteModal() {
  const dispatch = useDispatch();
  const { note } = useSelector(getNoteModal);
  const loaderState = useSelector(getLoaderState);
  const [title, setTitle] = useState(note?.title);
  const [noteText, setNoteText] = useState(note?.note);
  const [noteBg, setNoteBg] = useState(note?.noteBg);
  const [textColor, setTextColor] = useState(note?.textColor);

  const deleteNoteHandler = async () => {
    dispatch(loaderAction({ loader: true }));
    try {
      await deleteNoteService(note._id);
      dispatch(resetModal());
      dispatch(deleteNoteAction({ _id: note?._id }));
    } catch ({ message }) {
      toast.error(message);
    }
    dispatch(loaderAction({ loader: false }));
  }

  const validateAndSave = async (evt) => {
    dispatch(loaderAction({ loader: true }));
    evt.target.disabled = true;
    try {
      const response = await updateNoteService({ note, title, noteText, noteBg, textColor });
      toast.success(response?.message);
      dispatch(editNoteAction({ note: response?.note }));
    } catch ({ message }) {
      toast.error(message);
    }
    
    evt.target.disabled = false;
    dispatch(resetModal());
  }

  return (
    <>
      {loaderState && <Loader />}
      <div onClick={() => dispatch(dispatch(resetModal()))}
        className="w-screen h-screen left-0 top-0 z-40 fixed flex justify-center items-center bg-[rgba(0,0,0,0.55)]">
        <div onClick={(e) => e.stopPropagation()} style={{backgroundColor: noteBg, color: textColor}}
          className="bg-white border-2 boxShadow border-white rounded-md duration-200 relative scaleAnime flex flex-col w-full h-fit max-w-[90vw] max-h-[90vh] overflow-y-auto md:w-1/2 p-2 sm:px-7">
          <i onClick={() => dispatch(dispatch(resetModal()))} className="fa-solid fa-xmark absolute right-6 top-4 py-[.3rem] px-[.5rem] cursor-pointer rounded-full bg-white text-red-600"></i>
          <h1 className="text-lg text-center font-semibold mt-5">Edit Note!</h1>
          <hr /> <br />
          <input placeholder="Title" className="text-center placeholder:text-inherit placeholder:opacity-40 bg-inherit text-inherit outline-none font-bold text-lg mb-3"
            value={title} onChange={(e) => setTitle(e.target.value)}/>
          <textarea placeholder="Note" rows="5" onChange={(e) => setNoteText(e.target.value)} value={noteText} className="outline-none placeholder:opacity-40 placeholder:text-inherit text-inherit scrollBar bg-inherit resize-none"></textarea>

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

            <button onClick={validateAndSave} className="text-white lg:place-self-center bg-green-700 place-self-end w-fit p-2 rounded-lg">
              Save
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
}