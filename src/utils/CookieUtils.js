import Cookies from "universal-cookie";

const cookies = new Cookies();

export const addCookie = (name, value) => {
  cookies.set(name, value, { path: "/" });
};

export const deleteCookie = (name) => {
  cookies.remove(name, { path: "/" });
};

export const getCookie = (name) => {
  return cookies.get(name);
};
