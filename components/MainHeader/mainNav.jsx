import { useState } from "react";
// Icons
import SearchIcon from "../icons/search-icon";
import CarretDownIcon from "../icons/carretDown-icon";
import AccountIcon from "../icons/account-icon";
import CartIcon from "../icons/cart-icon";
import CarretDown from "../icons/carretDown-icon";
import FullFaceIcon from "../icons/fullface-icon";
import HalfFaceIcon from "../icons/halfFace-icon";
import ModularHelmet from "../icons/modularHelment-icon";

const MainHeader = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <h1>EVNX.</h1>
        </div>
        <div className="nav__items--container">
          <ul className="nav__items">
            <li className="nav__item">
              <a href="#" className="nav__item-link current">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__item-link">
                Blog
              </a>
            </li>
            <li
              className={`nav__item  ${categoryOpen ? "open" : ""}`}
              onClick={() => setCategoryOpen(!categoryOpen)}
            >
              <span className={`nav__item-link ${categoryOpen ? "open" : ""}`}>
                <div className="nav__item-link--dropdown">
                  <span className="dropdown__btn">
                    <p>
                      Category
                      <CarretDown />
                    </p>
                  </span>
                  <div
                    className={`dropdown__content ${
                      categoryOpen ? "open" : ""
                    }`}
                  >
                    <ul className="dropdown__items">
                      <li className="dropdown__item">
                        <a href="#" className="dropdown__item-links">
                          <span className="dropdown__item-links--icon reverse-icon">
                            <FullFaceIcon />
                          </span>
                          Full Face Helmet
                        </a>
                      </li>
                      <li className="dropdown__item">
                        <a href="#" className="dropdown__item-links">
                          <span className="dropdown__item-links--icon">
                            <ModularHelmet />
                          </span>
                          Modular Helmet
                        </a>
                      </li>
                      <li className="dropdown__item">
                        <a href="#" className="dropdown__item-links">
                          <span className="dropdown__item-links--icon">
                            <HalfFaceIcon />
                          </span>
                          Half Face Helmet
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </span>
            </li>
            <li className="nav__item">
              <a href="" className="nav__item-link">
                Contacts
              </a>
            </li>
          </ul>
        </div>
        <div className="nav__rightside--container">
          <div className="nav__rightside__price">
            <p>
              USD
              <span>
                <CarretDownIcon />
              </span>
            </p>
          </div>
          <div className="nav__rightside__search">
            <input type="text" placeholder="SEARCH" name="search" id=""></input>
            <SearchIcon />
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
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
