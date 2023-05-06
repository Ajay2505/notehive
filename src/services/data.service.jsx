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
      Authorization: token,
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
    throw new Error("Session timed out! Please login again");
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

  const response = await fetch(Constants.editnote + note?._id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(updated),
  });
  const res = await response?.json();
  if (response.status > 300) {
    throw new Error(res?.message);
  }

  return res;
};

export const deleteNoteService = async (id) => {
  const token = JSON.parse(localStorage.getItem("notehubData"))?.token;
  if (!token) {
    throw new Error("Session timed out! Please login again");
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
