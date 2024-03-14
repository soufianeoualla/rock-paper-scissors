"use client";

import { createContext, useState } from "react";
import { getJwtFromLocalCookie } from "./auth";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getJwtFromLocalCookie() ? true : false);

  return <UserContext.Provider value={{user,setUser}}>{children} </UserContext.Provider>;
};
