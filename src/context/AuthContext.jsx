import { createContext, useState } from 'react';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [token, setToken] = useState(null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
