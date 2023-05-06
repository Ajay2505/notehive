import { useDispatch, useSelector } from "react-redux";
import { getNoteModal, noteModalAction } from "../../slices/modalSlice";

export default function Note({ note }) {
  const dispatch = useDispatch();
  const noteModal = useSelector(getNoteModal);

  return (
    <>
      <div style={{backgroundColor: note?.noteBg, color: note?.textColor, opacity: noteModal?.note?._id === note?._id ? "0" : "1"}}
        onClick={() => dispatch(noteModalAction({ note, modalState: true }))}
        className="scaleAnime scrollBar relative shadow-md border hover:border overflow-y-hidden hover:overflow-y-auto hover:border-[#777] hover:shadow-lg duration-300 cursor-pointer p-4 rounded-lg max-md:mx-auto w-full h-fit max-h-[50vh] lg:max-h-[30vh] md:w-fit md:max-w-[47%] md:min-w-[250px]">
        <h1 className="focus:outline-none text-center mb-1 font-bold text-lg md:text-xl">
          {note?.title}
        </h1>
        {note?.note.split("\n").map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
    </>
  );
}
