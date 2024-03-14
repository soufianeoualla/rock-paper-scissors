import Cookies from "js-cookie";

export const setToken = (userData) => {
  if (typeof window !== "undefined") {
    Cookies.set("id", userData.id);
    Cookies.set("jwt", userData.jwt);
    Cookies.set("username", userData.username);
  }
};

export const getJwtFromLocalCookie = () => {
  return Cookies.get("jwt");
};

export const unSetToken = () => {
  if (typeof window !== "undefined") {
    Cookies.remove("id");
    Cookies.remove("jwt");
    Cookies.remove("username");

  }
};
