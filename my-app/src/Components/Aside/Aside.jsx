import { Filters } from "./Filters";
import "./Aside.css";
export function Aside({ openSideBar, setOpenSideBar }) {
  return (
    <>
      <div className={openSideBar ? "sidebar flex" : "sidebar"}>
        <Filters />
      </div>
    </>
  );
}
