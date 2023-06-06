import { useState, useEffect } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { useToast } from "../../Contexts/ToastContext";
import "./Login.css";
import { useProduct } from "../../Contexts/ProductContext";
export function Login() {
  const { auth, setAuth, loginHandler, loginField, setLoginField } = useAuth();
  const { toast, setToast, hideToastBar } = useToast();
  const { isLoading, setIsLoading } = useProduct();
  const [loginErrorField, setLoginErrorField] = useState({
    emailError: "",
    passwordError: "",
  });
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const emailRegexPattern = new RegExp(
    "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$",
    "i"
  );
  const passwordRegexPattern = new RegExp(
    "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,18}$",
    "i"
  );
  // const url = "http://localhost:8080";

  const [validFieldID] = useState("");
  // const navigate = useNavigate();
  // const location = useLocation();

  function validateFields(
    regexPattern,
    fieldName,
    errorName,
    errorText,
    errorField,
    setErrorField
  ) {
    let errorFieldName = Object.keys(errorField).find(
      (item) => item === errorName
    );
    if (regexPattern.test(fieldName)) {
      // console.log("pattern matched", errorFieldName);
      setErrorField((prev) => {
        return { ...prev, [errorFieldName]: "" };
      });
    } else {
      // console.log("pattern not matched", errorFieldName);
      setErrorField((prev) => {
        // console.log(errorName, errorText, "printing at line 34");
        return { ...prev, [errorFieldName]: errorText };
      });
    }
  }
  async function loginSubmitHandler() {
    if (
      loginErrorField.emailError.length > 0 ||
      loginErrorField.passwordError.length > 0
    ) {
      setToast((prev) => ({
        ...prev,
        isVisible: "show",
        message: "Please enter valid credentials",
      }));
    } else if (
      loginField.email.length <= 0 ||
      loginField.password.length <= 0
    ) {
      setToast((prev) => ({
        ...prev,
        isVisible: "show",
        message: "Please enter credentials to log in",
      }));
      return;
    } else {
      let user = loginField;
      let res = await loginHandler(user);
      if (res.status === 200) {
        console.log(res, "at login component");
        setToast((prev) => ({
          ...prev,
          isVisible: "show",
          message: `Successfully logged in`,
        }));

        resetLoginValues();
      } else {
        console.log("error at Login.jsx", await res);
      }
    }
    return validFieldID;
  }

  function resetLoginValues() {
    setLoginField((prev) => ({
      ...prev,
      email: "",
      password: "",
    }));
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      if (toast.isVisible === "show") {
        hideToastBar();
        setIsLoading(false);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast, hideToastBar]);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("login");
    loginSubmitHandler();
  }
  return (
    <div className="wrapper__main">
      <section className="flex-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1 id="login--heading" className="heading">
            Log in
          </h1>
          <hr></hr>
          <div id="email--container">
            <label htmlFor="email--input" className="label">
              Email
            </label>
            <input
              id="email--input"
              className="input"
              name="email"
              value={loginField.email}
              placeholder="jamescameron@mail.com"
              onInput={(e) => {
                // console.log(e.target.value);
                return setLoginField((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
              onBlur={(e) => {
                // console.log("email in loginForm lost focus");
                let errorAlertMessage = "Email id must be valid address";
                validateFields(
                  emailRegexPattern,
                  loginField.email,
                  "emailError",
                  errorAlertMessage,
                  loginErrorField,
                  setLoginErrorField
                );
              }}
            />
            <p className="para text--red">{loginErrorField.emailError}</p>
          </div>
          <div id="password--container">
            <label htmlFor="password--input" className="label">
              Password
            </label>
            <input
              type={showLoginPassword ? "text" : "password"}
              id="password--input"
              className="input"
              name="password"
              value={loginField.password}
              placeholder="W@terWay2"
              onInput={(e) => {
                // console.log(e.target.value);
                setLoginField((prev) => {
                  return { ...prev, password: e.target.value };
                });
              }}
              onBlur={(e) => {
                // console.log("password field lost focus");
                let errorAlertMessage =
                  "Must have 8 to 18 characters with one capital and one special character";

                validateFields(
                  passwordRegexPattern,
                  loginField.password,
                  "passwordError",
                  errorAlertMessage,
                  loginErrorField,
                  setLoginErrorField
                );
              }}
            ></input>
            <button
              id="is--shown"
              className="secondary"
              onClick={(e) => {
                e.preventDefault();
                setShowLoginPassword((prev) => !prev);
              }}
            >
              <i
                className={
                  showLoginPassword ? "fi fi-rs-slash" : "fi fi-rs-eye"
                }
              ></i>
            </button>
            <p className="para text--red" style={{ marginTop: "5px" }}>
              {loginErrorField.passwordError}
            </p>
          </div>

          <div>
            {isLoading ? (
              <button
                type="button"
                className="button login"
                style={{ opacity: "0.6" }}
              >
                Logging in...
              </button>
            ) : (
              <button type="submit" id="login--button" className="button login">
                Log in
              </button>
            )}
          </div>

          <hr></hr>
        </form>
        <div>
          <p>Don't have an account?</p>
          <Link to="/signup" className="link--secondary">
            Sign up{" "}
          </Link>
        </div>
      </section>
    </div>
  );
}
