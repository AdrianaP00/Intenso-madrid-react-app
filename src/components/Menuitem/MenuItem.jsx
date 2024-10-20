import React from "react";

import "./MenuItem.css";
import typeLogo from "../../constants/logos";

const getTagsImg = (key, allergenics) =>
  Object.values(allergenics).map((allergenic) => (
    <img
      id={key + allergenic}
      src={typeLogo.get(allergenic.Name)}
      alt={allergenic}
    />
  ));

const MenuItem = ({
  key,
  name,
  description,
  img,
  price,
  ingredients,
  allergenics,
}) => (
  <div className="app__menuitem ">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        {img && (
          <div className="app__menuitem-sub">
            <img id={key} src={img} alt={name} />
          </div>
        )}
        {name && (
          <p className="p__cormorant" style={{ color: "#DCCA87" }}>
            {name}
          </p>
        )}
      </div>
      <div className="app__menuitem-price-box">
        {price &&
          price.map((pr) => (
            <>
              <div className="app__menuitem-price">
                <p className="p__cormorant">{pr.Value}</p>
                {pr.Unit !== null && <p className="p__cormorant">/{pr.Unit}</p>}
              </div>
              <div className="app__menuitem-dash" />
            </>
          ))}
      </div>
    </div>
    {description && (
      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{ color: "#AAAAAA" }}>
          {description}
        </p>
      </div>
    )}
    {ingredients && (
      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{ color: "#AAAAAA" }}>
          {ingredients}
        </p>
      </div>
    )}

    {allergenics && (
      <div className="app__menuitem-alergenics" style={{ color: "#AAAAAA" }}>
        {getTagsImg(key, allergenics)}
      </div>
    )}
  </div>
);

export default MenuItem;
