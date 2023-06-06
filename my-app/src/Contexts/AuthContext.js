import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { useToast } from "./ToastContext";
import { useProduct } from "./ProductContext";
export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useState({
    token: "",
    user: {},
  });
  const [loginField, setLoginField] = useState({
    email: "adarshbalika@gmail.com",
    password: "Adarshbalika@1",
  });
  const { setToast } = useToast();
  // const { setIsLoading } = useProduct();
  // console.log(setIsLoading);
  async function logoutHandler() {
    try {
      localStorage.removeItem("token");
    } catch (err) {
      console.error(err, "while logging out error");
    }
  }
  async function loginHandler(user) {
    try {
      // setIsLoading(true);
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(user),
      });
      console.log({ response });
      const data = await response.json();
      if (response.status === 200) {
        // console.log(response);
        localStorage.setItem("token", data.encodedToken);
        localStorage.setItem("user", JSON.stringify(data.foundUser));
        setAuth((prev) => ({ ...prev, token: data.encodedToken }));
        navigate(location?.state ? location?.state?.from?.pathname : "/", {
          replace: true,
        });
        return response;
      }
      if (response.status !== 200) {
        console.error(response);
      }
    } catch (err) {
      console.error(err, "error while logging in");
      setToast((prev) => ({
        ...prev,
        isVisible: "show",
        message: "Error in logging in at authcontext",
      }));
      return err;
    } finally {
      // setIsLoading(false);
    }
  }
  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        loginHandler,
        logoutHandler,
        loginField,
        setLoginField,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
