import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [Admin, setAdmin] = useState(false);

  const loginUser = (userData) => {
    setUser(userData);
    sessionStorage.setItem("user", JSON.stringify(userData));

    if (userData.userType === "admin") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  };

  // ---- Logout User ----
  const logoutUser = () => {
    sessionStorage.removeItem("user");
    setUser(null);
    setAdmin(false);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        Admin,
        search,
        setSearch,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
