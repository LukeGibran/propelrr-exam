import { useState, useEffect } from "react";
import SearchIcon from "../icons/search-icon";
import CarretDownIcon from "../icons/carretDown-icon";
import AccountIcon from "../icons/account-icon";
import CartIcon from "../icons/cart-icon";
import CarretDown from "../icons/carretDown-icon";
import FullFaceIcon from "../icons/fullface-icon";
import HalfFaceIcon from "../icons/halfFace-icon";
import ModularHelmet from "../icons/modularHelment-icon";

const MobileNav = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let targetElement = document.querySelector("html");
    isSidebarOpen
      ? targetElement.classList.add("no-scroll")
      : targetElement.classList.remove("no-scroll");
  });
  return (
    <>
      <nav className="nav" id="mobileNav">
        <div className="nav__container">
          <div className="nav__menu">
            <div className="nav__logo">
              <h1>EVNX.</h1>
            </div>
            <div className="nav__rightside__icons">
              <div
                className={`rightside__icon cart--icon cart__dropdown ${
                  cartOpen ? "open" : ""
                }`}
                onClick={() => setCartOpen(!cartOpen)}
              >
                <CartIcon />
                <div
                  className={`cart__dropdown-wrapper ${cartOpen ? "open" : ""}`}
                >
                  <div className="cart__dropdown-container">
                    <p>No Items</p>
                  </div>
                </div>
              </div>
              <p className="rightside__icon account--icon">
                <AccountIcon />
              </p>
            </div>
            <div
              className="nav__hamburger-menu"
              onClick={() => setIsSidebarOpen(true)}
            >
              <span className="line-1"></span>
              <span className="line-2"></span>
              <span className="line-3"></span>
            </div>
          </div>
        </div>
      </nav>
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar__container">
          <div className="sidebar__header">
            <div className="sidebar__logo">
              <h1>ENVX.</h1>
            </div>
            <div
              className="sidebar__close-icon"
              onClick={() => setIsSidebarOpen(false)}
            >
              <span className="line-1"></span>
              <span className="line-2"></span>
            </div>
          </div>
          <div className="sidebar__menu">
            <div className="sidebar__search">
              <input
                type="text"
                placeholder="SEARCH"
                name="search"
                id=""
              ></input>
              <SearchIcon />
            </div>
            <div className="sidebar__price">
              <p>
                USD
                <span>
                  <CarretDownIcon />
                </span>
              </p>
            </div>
          </div>
          <ul className="sidebar__items">
            <li className="sidebar__item">
              <a href="#" className="sidebar__item-link">
                Home
              </a>
            </li>
            <li className="sidebar__item">
              <a href="#" className="sidebar__item-link">
                Blog
              </a>
            </li>
            <li
              className="sidebar__item"
              onClick={() => setCategoryOpen(!categoryOpen)}
            >
              <div href="#" className="sidebar__item-link dropdown-btn">
                <p className={`${categoryOpen ? "rotate-carret" : ""}`}>
                  Category
                  <CarretDown />
                </p>
              </div>
              <div
                className={`sidebar__dropdown ${categoryOpen ? "open" : ""}`}
              >
                <ul className="sidebar__dropdown-items">
                  <li className="sidebar__dropdown-item">
                    <a href="#" className="sidebar__dropdown-item-link">
                      <span className="dropdown__item-links--icon reverse-icon">
                        <FullFaceIcon />
                      </span>
                      Full Face Helmet
                    </a>
                  </li>
                  <li className="sidebar__dropdown-item">
                    <a href="#" className="sidebar__dropdown-item-link">
                      <span className="dropdown__item-links--icon ">
                        <ModularHelmet />
                      </span>
                      Modular Helmet
                    </a>
                  </li>
                  <li className="sidebar__dropdown-item">
                    <a href="#" className="sidebar__dropdown-item-link">
                      <span className="dropdown__item-links--icon ">
                        <HalfFaceIcon />
                      </span>
                      Half Face Helmet
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="sidebar__item">
              <a href="#" className="sidebar__item-link">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default MobileNav;
