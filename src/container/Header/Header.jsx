import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';



const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Italianidad en estado puro! " />
      <h1 className="app__header-h1">¿Que es Inverso?</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>El encuentro entre Tapeo Italiano y Cocktails d’Autor da vida a Inverso. Un proyecto que nace del deseo de dar a conocer una Italia diferente, joven, moderna pero siempre auténtica. Lo haremos provocando, desafiando y jugando con los clichés del italiano.
      <span className="p__opensans wrap" style={{ margin: '0.6rem 0', display: 'flex', color: '#FDD36A', fontWeight: '600' }}>Vienes a probar nuestra carta demoniaca? 👹 </span>
      </p>
      <button type="button" className="custom__button"><a href="#menu">Descubres nuestra carta</a></button>
    </div>

    <div data-aos="fade-down"
         data-aos-delay="700"
     data-aos-easing="linear"
     data-aos-duration="1500" className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;