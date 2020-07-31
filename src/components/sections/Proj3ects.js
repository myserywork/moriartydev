import React from "react";
import { Link } from "react-router-dom";

const carrouselItemStyle = (img) => {
  return {
    background: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: 320,
  };
};

export default class Projects extends React.Component {
  render() {
    return <div id="projectsinject"></div>;
  }
}
