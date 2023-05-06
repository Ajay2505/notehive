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
    throw new Error("Session timed out! Please login again");
  }
  const response = await fetch(Constants.addNote, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token,
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
