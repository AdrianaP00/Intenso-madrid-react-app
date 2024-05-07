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

    <div className="app__specialMenu-menu_img"></div>

    <div className="app__specialMenu-menu" id="cocktail">
      <div
        className="app__specialMenu-menu_cocktails  flex__start"
        id="cocktail"
      >
        <p className="app__specialMenu-menu_heading_titles">COCKTAILS</p>
        <p className="app__specialMenu-menu_heading">’ITALIANS DO IT BETTER’</p>
        <p className="app__specialMenu-menu_heading">
          ¿ Cuál Italiano Te Sientes ?
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
        <p className="app__specialMenu-menu_heading_medium">
          ’TE APETECE ALGO DIFERENTE ?! PREGUNTAS POR NUESTROS COCKTAILS SIN
          ALCOHOL y POR LOS CLÁSICOS.’.
        </p>
        <p className="app__specialMenu-menu_heading_mini">
          Ningún actor fue maltratado durante la sesión fotográfica.
        </p>
      </div>

      {data.caprichos && (
        <div className="app__specialMenu-menu_wine flex__center" id="caprichos">
        <p className="app__specialMenu-menu_heading_titles">Caprichos</p>
          <p className="app__specialMenu-menu_heading">
            {data.caprichos.title}
          </p>
          <div className="app__specialMenu_menu_items">
            {data.caprichos.items.map((capricho, index) => (
              <MenuItem
                key={capricho.name + index}
                name={capricho.name}
                description={capricho.description}
                img={capricho.img}
                price={capricho.price}
                tags={capricho.tags}
                alergenics={capricho.alergenics}
              />
            ))}
          </div>
        </div>
      )}
    </div>
    <div className="app__specialMenu-menu">
      {data.montanare && (
        <div
          className="app__specialMenu-menu_wine  flex__center"
          id="montanare"
        >
          <p className="app__specialMenu-menu_heading_title">
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
          <p className="app__specialMenu-menu_heading_titles">TAPAS</p>
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
          <p className="app__specialMenu-menu_heading_titles">DOLCI</p>
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

    <div className="app__specialMenu-menu">
      {data.bebidas && (
        <div
          className="app__specialMenu-menu_cocktails  flex__center"
          id="bebidas"
        >
          <p className="app__specialMenu-menu_heading_titles">AGUA Y CERVEZA</p>
          <div className="app__specialMenu_menu_items">
            {data.bebidas.items.map((bebida, index) => (
              <MenuItem
                key={bebida.title + index}
                name={bebida.title}
                price={bebida.price}
                description={bebida.description}
              />
            ))}
          </div>
        </div>
      )}
      {data.VinosBlancos && (
        <div
          className="app__specialMenu-menu_wine  flex__center"
          id="VinosBlancos"
        >
          <p className="app__specialMenu-menu_heading_titles">
            VINOS
          </p>
          <div className="app__specialMenu_menu_items">
            {data.VinosBlancos.items.map((vino, index) => (
              <MenuItem
                key={vino.title + index}
                name={vino.title}
                price={vino.price}
                description={vino.description}
              />
            ))}
          </div>
        </div>
      )}
    </div>

    <div className="app__specialMenu-menu">
      {data.VinosRosado && (
        <div
          className="app__specialMenu-menu_cocktails  flex__center"
          id="VinosRosado"
        >
          <div className="app__specialMenu_menu_items">
            {data.VinosRosado.items.map((VinosRosado, index) => (
              <MenuItem
                key={VinosRosado.title + index}
                name={VinosRosado.title}
                price={VinosRosado.price}
                description={VinosRosado.description}
              />
            ))}
          </div>
        </div>
      )}
      {data.VinosTintos && (
        <div
          className="app__specialMenu-menu_wine  flex__center"
          id="VinosTintos"
        >
          <div className="app__specialMenu_menu_items">
            {data.VinosTintos.items.map((VinosTintos, index) => (
              <MenuItem
                key={VinosTintos.title + index}
                name={VinosTintos.title}
                price={VinosTintos.price}
                description={VinosTintos.description}
              />
            ))}
          </div>
        </div>
      )}
    </div>

    <div className="app__specialMenu-menu">
      {data.Prosecco && (
        <div
          className="app__specialMenu-menu_cocktails  flex__center"
          id="Prosecco"
        >
          <p className="app__specialMenu-menu_heading_titles">PROSECCO & CHAMPAGNE</p>
          <div className="app__specialMenu_menu_items">
            {data.Prosecco.items.map((Prosecco, index) => (
              <MenuItem
                key={Prosecco.title + index}
                name={Prosecco.title}
                price={Prosecco.price}
                description={Prosecco.description}
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
