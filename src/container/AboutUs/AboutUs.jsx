import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';
import fetchHandsSectionData from "../../constants/hands-section-data";

const data = await fetchHandsSectionData();

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

        <p className="p__opensans">{data.left_side}</p>
       {/*  <button type="button" className="custom__button">Know More</button> */}
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={data.image.formats.small.url} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <p className="p__opensans">{data.right_side}</p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;