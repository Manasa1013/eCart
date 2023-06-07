import { useAuth } from "../../Contexts/AuthContext";
import "../CartList/CartList.css";

export function UserProfile() {
  const { logoutHandler, auth } = useAuth();
  return (
    <>
      <div className="summary-container">
        <div className="summary-card">
          <h2>{auth.token ? auth.user.firstName : "User"}</h2>
          <button
            className="button"
            style={{ width: "10rem" }}
            onClick={() => {
              logoutHandler();
            }}
          >
            Log out
          </button>
        </div>
      </div>
    </>
  );
}
