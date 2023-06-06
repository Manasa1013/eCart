import { Link } from "react-router-dom";

export function NotFound404() {
  return (
    <div className="grid-container">
      <h1>
        Page not Found, go back to{" "}
        <Link to="/" className="link text-underline">
          Home
        </Link>
      </h1>
    </div>
  );
}
