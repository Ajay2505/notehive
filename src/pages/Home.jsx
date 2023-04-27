import CreateNote from "../components/Note/CreateNote";
import Navbar from "../components/UI/Navbar";

export default function Home () {
   return(
      <>
         <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
            <Navbar />
            <CreateNote />
         </div>
      </>
   );
}