import { Constants } from "../helpers/Constants";

export const loginService = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("Please fill the form!");
  }
  const response = await fetch(Constants.login, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (!response) {
    throw new Error("Something went wrong!");
  }
  const res = await response.json();
  if (response.status > 205) {
    throw new Error(res.message);
  }
  // const userData = res?.userData;
  localStorage.setItem("notehubData", JSON.stringify(res.userData));
  return res;
};

export const reqOtpService = async ({ email, type }) => {
  if (!email) {
    throw new Error("Please fill the form!");
  }

  const response = await fetch(Constants.reqOtp + type.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response) {
    throw new Error("Something went wrong!");
  }
  const res = await response.json();
  if (response.status > 205) {
    throw new Error(res.message);
  }

  return res;
};

export const confirmOtpService = async ({ name, email, otp, type }) => {
  if (!email || !otp || (!type && !name)) {
    throw new Error("Please fill the form!");
  }

  const response = await fetch(Constants.checkOtp + type.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, otp, name, type }),
  });

  if (!response) {
    throw new Error("Something went wrong!");
  }
  const res = await response.json();
  if (response.status > 205) {
    throw new Error(res.message);
  }

  localStorage.setItem("notehubData", JSON.stringify(res.userData));
  return res;
};

export const deleteOtpService = async ({ email, type }) => {
  if (!email) {
    throw new Error("Please fill the form!");
  }

  const response = await fetch(Constants.deleteOtp + type.toString(), {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response || response.status > 205) {
    throw new Error("Something went wrong!");
  }
};

export const logoutService = async () => {
  const token = JSON.parse(localStorage.getItem("notehubData"))?.token;
  if (!token) {
    throw new Error("Session timed out! Please login again");
  }

  await fetch(Constants.logout, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token,
    },
  });

  localStorage.removeItem("notehubData");
};

export const logoutAllService = async () => {
  const token = JSON.parse(localStorage.getItem("notehubData"))?.token;
  if (!token) {
    throw new Error("Session timed out! Please login again");
  }

  await fetch(Constants.logoutAll, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token,
    },
  });

  localStorage.removeItem("notehubData");
};
