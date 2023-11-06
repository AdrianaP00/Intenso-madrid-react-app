import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
// import {Cloudinary} from "@cloudinary/url-gen";

// const cloudy = new Cloudinary({
//   cloud: {
//     cloudName: 'inverso-madrid'
//   }
// });
const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>

);

export default App;
