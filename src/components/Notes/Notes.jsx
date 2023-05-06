import { useSelector } from "react-redux";
import { getNotes } from "../../slices/noteSlice";
import Note from "./Note";

export default function Notes() {
  const notes = useSelector(getNotes);
  
  return (
    <>
      <div className="flex justify-start gap-4 flex-wrap my-10  w-screen h-fit px-[2vw] md:px-[5vw]">
        {notes?.length ?
          notes?.map((note) => {
            return <Note key={note?._id} note={note} />;
          }) : ""}
      </div>
    </>
  );
}
