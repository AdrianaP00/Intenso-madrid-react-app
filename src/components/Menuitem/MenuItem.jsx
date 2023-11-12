import React from "react";

import "./MenuItem.css";
import typeLogo from "../../constants/logos";

const getTagsImg = (key, alergenics) =>
  Object.values(alergenics).map((alergenic) => (
    <img id={key + alergenic} src={typeLogo.get(alergenic)} alt={alergenic} />
  ));

const MenuItem = ({ key, name, description, img, price, tags, alergenics }) => (
  <div className="app__menuitem ">

    {img && (
      <div className="app__menuitem-sub">
          {img}
      </div>
    )}

    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {name}
        </p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>
    {description && (
      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{ color: "#AAAAAA" }}>
          {description}
        </p>
      </div>
    )}
    {tags && (
      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{ color: "#AAAAAA" }}>
          {tags}
        </p>
      </div>
    )}

    {alergenics && (
      <div className="app__menuitem-alergenics" style={{ color: "#AAAAAA" }}>{getTagsImg(key, alergenics)}</div>
    )}
  </div>
);

export default MenuItem;
