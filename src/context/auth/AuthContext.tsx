import type { LoginResponse, User} from "@/@types/user";
import { authMeApi, logoutApi } from "@/services/api";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (response: LoginResponse) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children } : { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const initAuth = async () => {

      try {
        const response = await authMeApi();

        setIsLoggedIn(true);
        setUser(response);
      } catch (error) {
        setIsLoggedIn(false);
        setUser(null);
      }
    };

    initAuth();
  }, [])

  const login = (response: LoginResponse) => {
    setIsLoggedIn(true);
    setUser(response);
  };

  const logout = async () => {
    await logoutApi();
    setIsLoggedIn(false);
    setUser(null);
  };

  if (isLoggedIn === null) return null;

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}