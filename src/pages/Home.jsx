import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

import CreateNote from "../components/forms/CreateNote";
import Notes from "../components/Notes/Notes";
import Navbar from "../components/UI/Navbar";
import NoteModal from "../components/Modals/NoteModal";
import SessionModal from "../components/Modals/SessionModal";
import { getNoteModal, gethHasGuestNotesState, hasGuestNotesAction } from "../slices/modalSlice";
import { Constants } from "../helpers/Constants";
import { notesAction } from "../slices/noteSlice";
import { authAction, userDataAction } from "../slices/authSlice";
import BackupNotesModal from "../components/Modals/BackupNotesModal";

export default function Home() {
  const { modalState } = useSelector(getNoteModal);
  const data = useLoaderData();
  const dispatch = useDispatch();
  const [sessionModal, setSessionModal] = useState(false);
  const hasGuestNotes = useSelector(gethHasGuestNotesState);

  useEffect(() => {
    if (data?.errorStatus === 401) {
      setSessionModal(true);
      return;
    }
    const userData = JSON.parse(localStorage.getItem("notehubData"));
    dispatch(notesAction({ notes: data?.notes }));
    if (!userData) {
      dispatch(authAction(false));
      return;
    }
    dispatch(userDataAction({ name: userData?.name, token: userData?.token }));
    dispatch(authAction(true));
    const notes = JSON.parse(localStorage.getItem("notehubNotes"));
    if (!notes?.length) return;
    dispatch(hasGuestNotesAction(true));
}, []);

  return (
    <>
      {sessionModal && <SessionModal />}
      {modalState && <NoteModal />}
      {hasGuestNotes && <BackupNotesModal />}
      <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
        <Navbar home={true}/>
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
    return { notes: JSON.parse(localStorage.getItem("notehubNotes")) || [] };
  }

  try {
    const response = await fetch(Constants.getNotes, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
    });
    const res = await response.json();
    if (!response) {
      return toast.error("Something went wrong!");
    }
    if (response.status === 401) {
      localStorage.removeItem("notehubData");
      return { errorStatus: 401 };
    }
    if (response.status > 299) {
      toast.error(response?.message);
      return {};
    }
    return res;
  } catch ({ message }) {
    toast.error(message);
    return {};
  }
};
