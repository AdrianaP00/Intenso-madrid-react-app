import React from "react";
import { MdMenu } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img
          src={
            "https://res.cloudinary.com/dlybwinmd/image/upload/v1699294729/inverso-madrid/opyrhsluodn9kflwcpex.webp"
          }
          alt="app__logo"
        />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Carta</a>
        </li>
        <li className="p__opensans">
          <a href="#about">Contacto</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Reserva una mesa</a>
        </li>
      </ul>
      {/* <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Registration</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
      </div>*/}
      <div className="app__navbar-smallscreen">
        <MdMenu
          color="#FFDE55"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              color="#FFDE55"
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Carta
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  Contacto
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Reserva una mesa
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
