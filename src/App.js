import React from "react";

import { AboutUs, Footer, Gallery, Header, SpecialMenu } from "./container";
import { Navbar } from "./components";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { inject } from "@vercel/analytics";

inject();

AOS.init();
const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Gallery />

    <Footer />
  </div>
);

export default App;
