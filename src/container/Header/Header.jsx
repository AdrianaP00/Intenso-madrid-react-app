import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Italianidad en estado puro! " />
      <h1 className="app__header-h1">¿Que es Inverso?</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        El encuentro entre Tapeo Italiano y Cocktails d’Autor da vida a Inverso.{" "}
        <br /> Un proyecto que nace del deseo de dar a conocer una Italia
        diferente, joven, moderna pero siempre auténtica. <br /> Lo haremos
        provocando, desafiando y jugando con los clichés del italiano.
        <a href="#cocktail">
          <span
            className="p__opensans wrap"
            style={{
              margin: "0.6rem 0",
              display: "flex",
              color: "#a600ff",
              fontWeight: "600",
            }}
          >
            ¿CUÁL ITALIANO TE SIENTES? 🤌
          </span>
        </a>
      </p>
      <button type="button" className="custom__button">
        <a href="https://www.localismart.it/intensomadrid/prenota">
          Reserva tu mesa!
        </a>
      </button>
    </div>

    <div
      data-aos="fade-down"
      data-aos-delay="700"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="app__wrapper_img"
    >
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
