import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center" id="carta">
    <div className="app__specialMenu-title">
      <SubHeading title="Savor the moment with our specialty drinks" />
      <h1 className="headtext__cormorant">Nuestra carta</h1>
    </div>

    <div className="app__specialMenu-menu_img">
      {/* <img src={im} alt="menu__img" /> */}
    </div>

    <div className="app__specialMenu-menu" id="montanare">
      <div
        className="app__specialMenu-menu_cocktails  flex__start"
        id="cocktail"
      >
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <p className="app__specialMenu-menu_heading">
          ’La senda que lleva al Paraíso
        </p>
        <p className="app__specialMenu-menu_heading">
          comienza en el Infierno’.
        </p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              name={cocktail.title}
              price={cocktail.price}
              img={cocktail.img}
              description={cocktail.description}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>

      {data.montanare && (
        <div className="app__specialMenu-menu_wine  flex__center">
          <p className="app__specialMenu-menu_heading">
            {data.montanare.title}
          </p>
          <div className="app__specialMenu_menu_items">
            {data.montanare.items.map((montanara, index) => (
              <MenuItem
                key={montanara.name + index}
                name={montanara.name}
                description={montanara.description}
                img={montanara.img}
                price={montanara.price}
                tags={montanara.tags}
                alergenics={montanara.alergenics}
              />
            ))}
          </div>
        </div>
      )}
    </div>

    <div className="app__specialMenu-menu">
      {data.tapas && (
        <div
          className="app__specialMenu-menu_cocktails  flex__center"
          id="tapa"
        >
          <p className="app__specialMenu-menu_heading">{data.tapas.title}</p>
          <div className="app__specialMenu_menu_items">
            {data.tapas.items.map((tapa, index) => (
              <MenuItem
                key={tapa.name + index}
                name={tapa.name}
                description={tapa.description}
                img={tapa.img}
                price={tapa.price}
                tags={tapa.tags}
                alergenics={tapa.alergenics}
              />
            ))}
          </div>
        </div>
      )}
      {data.dolci && (
        <div className="app__specialMenu-menu_wine  flex__center" id="dolce">
          <p className="app__specialMenu-menu_heading">{data.dolci.title}</p>
          <div className="app__specialMenu_menu_items">
            {data.dolci.items.map((dolce, index) => (
              <MenuItem
                key={dolce.name + index}
                name={dolce.name}
                description={dolce.description}
                img={dolce.img}
                price={dolce.price}
                tags={dolce.tags}
                alergenics={dolce.alergenics}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  </div>

  /*     <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div> */
  /* <div className="app__specialMenu-menu_img">
        <img src={images.qr} alt="menu__img" />
      </div>
      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Scan this code for menu</p>
        </div> */
);

export default SpecialMenu;
