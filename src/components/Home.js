import React from "react";
import Vmw from "./sections/Vmw";
import Introduction from "./sections/Introduction";
import Team from "./sections/Team";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import News from "./sections/News";
import Contact from "./sections/Contact";
import Brand from "./sections/Brand";
import Footer from "./sections/Footer";
import "../assets/global.css";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Vmw />
        <Introduction />
        <Services />
        <Brand />
        <Projects />
        <News />
        <Team />
        <Contact />
        <Footer />
      </>
    );
  }
}
