import React from "react";
import Hero from "./Hero.js";
import Education from "./Education.js";
import Pricing from "./Pricing.js";
import Stats from "./Stats.js";
import Awards from "./Awards";
import OpenAccount from "../OpenAccount.js";
import Footer from "../Footer.js";
import Navbar from "../Navbar.js";
function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}
export default HomePage;
