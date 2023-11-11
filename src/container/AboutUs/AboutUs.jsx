import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="1100"
     data-aos-offset="0"

     >
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">

        <p className="p__opensans">Disfruta de nuestros refinados cócteles, acompañados de auténticas tapas italianas. </p>
       {/*  <button type="button" className="custom__button">Know More</button> */}
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <p className="p__opensans">¡Déjate sorprender por la fusión de sabores en Inverso!</p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;