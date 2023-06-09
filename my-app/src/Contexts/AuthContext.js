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
  const [field, setField] = useState({
    firstName: "Taylor",
    lastName: "Swift",
    email: "taylor@gmail.com",
    password: "Taylor@1",
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
      const data = await response.json();
      console.log({ response }, { data });
      if (response.status === 200) {
        localStorage.setItem("token", data.encodedToken);
        localStorage.setItem("user", JSON.stringify(data.foundUser));

        setAuth((prev) => ({
          ...prev,
          token: data.encodedToken,
          user: {
            ...prev.user,
            firstName: data.foundUser.firstName,
            lastName: data.foundUser.lastName,
            email: data.foundUser.email,
          },
        }));

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
  function logoutHandler() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuth(() => ({
      token: "",
      user: {},
    }));
    setToast((prev) => ({
      ...prev,
      isVisible: "show",
      message: "Logged out successfully",
    }));
    navigate("/");
  }
  async function signupHandler() {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(field),
      });
      const data = await response.json();
      console.log({ data }, "at signup");

      if (response.status === 201) {
        localStorage.setItem("token", data.encodedToken);
        localStorage.setItem("user", JSON.stringify(data.createdUser));
        setToast((prev) => ({
          ...prev,
          isVisible: "show",
          message: `Successfully signed up ${data.createdUser.firstName}`,
        }));
        setAuth((prev) => ({
          ...prev,
          token: data.encodedToken,
          user: {
            ...prev.user,
            firstName: data.createdUser.firstName,
            lastName: data.createdUser.lastName,
            email: data.createdUser.email,
          },
        }));
        navigate(location?.state ? location?.state?.from?.pathname : "/", {
          replace: true,
        });
        return response.data;
      } else {
        console.log("failure", response);
      }
    } catch (err) {
      setToast((prev) => ({
        ...prev,
        isVisible: "show",
        message: "Error in signing up",
      }));
      console.error(err, "at catch of signupHandler");
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
        field,
        setField,
        signupHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
