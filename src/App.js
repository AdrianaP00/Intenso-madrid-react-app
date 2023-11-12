import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    {/* <Chef /> */}
    {/* <Intro /> */}
    <Gallery />
    {/* <FindUs /> */}
    <Footer />
  </div>
);

export default App;
