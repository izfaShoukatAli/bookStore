// import React, { createContext, useContext, useState } from "react";

// export const AuthContext = createContext();

// export const Authprovider = ({ children }) => {
//   const initialAuthUser = localStorage.getItem("users");
//   const [authUser, setAuthUser] = useState(
//     initialAuthUser ? JSON.parse(initialAuthUser) : undefined
//   );
//   return (
//     <AuthContext.Provider value={[authUser, setAuthUser]}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default Authprovider;
// export const useAuth = () => useContext(AuthContext);

import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
AuthContext.displayName = "AuthContext";

const getInitialUser = () => {
  try {
    const storedUser = localStorage.getItem("users");
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Failed to parse user from localStorage", error);
    return null;
  }
};

export const Authprovider = ({ children }) => {
  const [authUser, setAuthUser] = useState(getInitialUser);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;

export const useAuth = () => useContext(AuthContext);
