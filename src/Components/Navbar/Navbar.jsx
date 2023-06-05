import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

export function Navbar({ openMenu, setOpenMenu, openSideBar, setOpenSideBar }) {
  function getActiveLink() {}
  return (
    <>
      <nav className="navbar-component">
        <div className="route-links">
          <div
            className={openMenu ? "icon--display open" : "icon--display"}
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
          <header className="inline">
            <a style={{ padding: "0 1rem" }} href="/" className="logo link">
              eCart
            </a>
          </header>
          <ul
            style={{ padding: "0 0.5rem" }}
            className={
              openMenu ? "categories__list flex-display" : "categories__list"
            }
          >
            <li>
              <Link to="/products" className="link">
                Products
              </Link>
            </li>
          </ul>
          <div className={"search__container"}>
            <input
              type="search"
              name="search-input"
              id="search-input"
              className="search__input"
              placeholder={`Search for products`}
              // value={state.searchInput}
              onInput={(e) => {}}
              onBlur={(e) => {}}
            />
            <button
              type="button"
              id="search-button"
              className="search__button"
              onClick={() => {}}
            >
              <i className="fi fi-rs-search"></i>
            </button>
          </div>
        </div>
        <ul className="user__list">
          <li>
            <NavLink to="/" className="link">
              <i className="fi fi-rs-shopping-cart"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="link">
              <i className="fi fi-rs-heart"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="link">
              <i className="fi fi-rs-user"></i>
            </NavLink>
          </li>
          <li className="icon--display">
            <button
              className="button icon--button"
              onClick={() => setOpenSideBar((prev) => !prev)}
            >
              <i className="fi fi-rs-list"></i>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
// TODO : add navbar with styles in navbar folder
// navbar with search box and filter products using search
// responsive, just as spotify ones
