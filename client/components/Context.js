import React, { createContext, useState } from "react";

export const item = createContext();

export const Context = ({ children }) => {
  const [myBag, setmyBag] = useState([]);
  return <item.Provider value={{myBag,setmyBag }}>{children}</item.Provider>;
};
