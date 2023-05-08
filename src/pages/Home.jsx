import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

import CreateNote from "../components/forms/CreateNote";
import Notes from "../components/Notes/Notes";
import Navbar from "../components/UI/Navbar";
import NoteModal from "../components/Modals/NoteModal";
import SessionModal from "../components/Modals/SessionModal";
import { getNoteModal } from "../slices/modalSlice";
import { Constants } from "../helpers/Constants";
import { notesAction } from "../slices/noteSlice";
import { authAction, userDataAction } from "../slices/authSlice";

export default function Home() {
  const { modalState } = useSelector(getNoteModal);
  const data = useLoaderData();
  const dispatch = useDispatch();
  const [sessionModal, setSessionModal] = useState(false);

  useEffect(() => {
    if (data?.errorStatus === 401) {
      setSessionModal(true);
      return;
    }
    const userData = JSON.parse(localStorage.getItem("notehubData"));
    if (!userData) {
      dispatch(authAction(false));
      return;
    }
    dispatch(userDataAction({ name: userData?.name, token: userData?.token }));
    dispatch(authAction(true));
    dispatch(notesAction({ notes: data?.notes }));
  }, []);

  return (
    <>
      {sessionModal && <SessionModal />}
      {modalState && <NoteModal />}
      <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
        <Navbar />
        <CreateNote />
        <Notes />
      </div>
    </>
  );
}

export const loader = async () => {
  const token = JSON.parse(localStorage.getItem("notehubData"))?.token;
  if (!token) {
    toast.info("Login to save your notes!");
    return {};
  }

  try {
    const response = await fetch(Constants.getNotes, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
    });

    if (!response) {
      return toast.error("Something went wrong!");
    }
    if (response.status === 401) {
      localStorage.removeItem("notehubData");
      return { errorStatus: 401 };
    }
    if (response.status > 399) {
      toast.error(response?.message);
      return {};
    }
    return response;
  } catch (error) {
    toast.error(error?.message);
    return {};
  }
};
