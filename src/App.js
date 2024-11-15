import React from "react";
import { AboutUs, Footer, Gallery, Header, SpecialMenu } from "./container";
import { Navbar } from "./components";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Vercel
import { inject } from "@vercel/analytics";
import { SpeedInsights } from "@vercel/speed-insights/react";

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

    <SpeedInsights />
  </div>
);

export default App;
