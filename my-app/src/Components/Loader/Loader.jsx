import ClipLoader from "react-spinners/ClipLoader";

import { useProduct } from "../../Contexts/ProductContext";
import "./Loader.css";

export function Loader() {
  const { isLoading } = useProduct();
  const override = {
    margin: "0 auto",
    borderColor: "var(--emerald-700)",
  };
  return (
    <>
      <div className="container">
        <ClipLoader
          color="var(--secondary-white)"
          cssOverride={override}
          size={150}
          aria-label="Loading.."
        />
      </div>
    </>
  );
}
