import React from "react";

import { SubHeading } from "../../components";
import "./Header.css";
import getSection from "../../services/getSection";

const data = await getSection("main-section");

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title={data.Claim} />
      <h1 className="app__header-h1">{data.Title}</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        {data.Description.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < data.Description.split("\n").length - 1 && <br />}
          </React.Fragment>
        ))}
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
            {data.CallToAction} 🤌
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
      <img src={data.Image.formats.small.url} alt="header_img" loading="lazy"/>
    </div>
  </div>
);

export default Header;
