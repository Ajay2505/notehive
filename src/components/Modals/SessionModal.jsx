import { useNavigate } from "react-router-dom";

export default function SessionModal() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-screen h-screen fixed flex justify-center items-center z-50 bg-[rgba(0,0,0,0.45)] ">
        <div className="bg-[rgba(52,53,65,1)] scaleAnime flex flex-col text-white p-4 rounded-md h-fit w-[90%] md:w-1/2">
          <p className="text-xl font-semibold text-center mb-4">Hey! </p>
          <p className="text-xl font-semibold text-center">
            Your session has expired. Please Login again to continue!
          </p>
          <button
            onClick={() => navigate("/")}
            className="place-self-end outline hover:bg-[#444] outline-white p-2 rounded-lg mr-5 mt-2 w-fit"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
