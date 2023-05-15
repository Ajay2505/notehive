import { Constants } from "../helpers/Constants";

export const updateProfileService = async (data) => {
  const token = JSON.parse(localStorage.getItem("notehubData"))?.token;
  if (!token) {
    throw new Error("Session timed out! Please login again");
  }
  const response = await fetch(Constants.updateProfile, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token,
    },
    body: JSON.stringify(data),
  });

  if (!response) {
    throw new Error("Something went wrong!");
  }
  const res = await response.json();
  if (response.status === 401) {
    localStorage.removeItem("notehubData");
    throw new Error(res?.message);
  }
  if (response.status > 205) {
    throw new Error(res?.message);
  }

  return res;
};

export const addNoteService = async (note) => {
  const token = JSON.parse(localStorage.getItem("notehubData"))?.token;
  if (!token) {
    // throw new Error("Session timed out! Please login again");
    const notes = JSON.parse(localStorage.getItem("notehubNotes")) || [];

    if (!notes.length) {
      note["_id"] = Math.floor(Math.random() * 900000) + 100000;
    } else {
      note["_id"] = notes[notes.length - 1]["_id"] + 1;
    }
    
    notes.push(note);
    localStorage.setItem("notehubNotes", JSON.stringify(notes));
    return { note };
  }
  const response = await fetch(Constants.addNote, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(note),
  });

  if (!response) {
    throw new Error("Something went wrong!");
  }
  const res = await response.json();
  if (response.status === 401) {
    localStorage.removeItem("notehubData");
    throw new Error(res.message);
  }
  if (response.status > 205) {
    throw new Error(res.message);
  }

  return res;
};

export const updateNoteService = async ({
  note,
  title,
  noteText,
  noteBg,
  textColor,
}) => {
  const token = JSON.parse(localStorage.getItem("notehubData"))?.token;
  const updated = {};
  if (note?.title !== title) {
    updated.title = title;
  }
  if (note?.note !== noteText) {
    updated.note = noteText;
  }
  if (note?.noteBg !== noteBg) {
    updated.noteBg = noteBg;
  }
  if (note?.textColor !== textColor) {
    updated.textColor = textColor;
  }

  if (!updated || Object.keys(updated).length === 0) {
    throw new Error("No changes made!");
  }
  
  if (!token) {
    const notes = JSON.parse(localStorage.getItem("notehubNotes")) || [];
    if (!notes.length) {
      throw new Error("Something went wrong!");
    }
    let newNote = notes?.find(obj => obj["_id"] === note["_id"]);
    if (newNote) {
      Object.assign(newNote, updated);
      const updatedNotes = notes.map(n => {
        if (n["_id"] === newNote["_id"]) {
          return newNote;
        } else {
          return n;
        }
      });
      localStorage.setItem("notehubNotes", JSON.stringify(updatedNotes));
      return { note: newNote };
    }
    throw new Error("Something went wrong!");
  }

  const response = await fetch(Constants.editnote + note?._id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token,
    },
    body: JSON.stringify(updated),
  });
  const res = await response?.json();
  if (response.status > 300) {
    throw new Error(res?.message);
  }

  return res;
};

export const uploadNotesService = async () => {
  const token = JSON.parse(localStorage.getItem("notehubData"))?.token;
  if (!token) {
    throw new Error("Session timed out! Please login again");
  }

  const notes = JSON.parse(localStorage.getItem("notehubNotes")) || [];
  if (!notes.length) {
    throw new Error("No notes were Saved in device!");
  }
  const response = await fetch(Constants.addNotes, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token,
    },
    body: JSON.stringify({ notes }),
  });

  if (!response) {
    throw new Error("Something went wrong!");
  }
  const res = await response.json();
  if (response.status === 401) {
    localStorage.removeItem("notehubData");
    throw new Error(res.message);
  }
  if (response.status > 205) {
    throw new Error(res.message);
  }
  localStorage.removeItem("notehubNotes");
  return res;
}

export const deleteNoteService = async (id) => {
  const token = JSON.parse(localStorage.getItem("notehubData"))?.token;
  if (!token) {
    // throw new Error("Session timed out! Please login again");
    let notes = JSON.parse(localStorage.getItem("notehubNotes")) || [];
    if (!notes.length) {
      throw new Error("Something went wrong!");
    }
    notes = notes.filter((note) => note?._id !== id );
    localStorage.setItem("notehubNotes", JSON.stringify(notes));
    return;
  }
  const response = await fetch(Constants.deleteNote + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token,
    },
  });

  if (!response) {
    throw new Error("Something went wrong!");
  }
  if (response.status === 401) {
    localStorage.removeItem("notehubData");
    throw new Error("Session timed out! Please login again");
  }
  if (response.status > 300) {
    throw new Error("Something went wrong!");
  }
};

export const deleteAccService = async () => {
  const token = JSON.parse(localStorage.getItem("notehubData"))?.token;
  if (!token) {
    throw new Error("Session timed out! Please login again");
  }
  const response = await fetch(Constants.deleteAcc, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token,
    },
  });

  if (!response) {
    throw new Error("Something went wrong!");
  }
  
  if (response.status === 401) {
    localStorage.removeItem("notehubData");
    throw new Error("Session timed out! Please login again");
  }
  if (response.status > 300) {
    throw new Error("Something went wrong!");
  }
};
