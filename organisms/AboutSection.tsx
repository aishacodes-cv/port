import React from "react";
import { AboutData } from "../data/AboutData";

const AboutSection = () => {
  return (
    <div>
      <div>
        <h1>ABout</h1>
        <h1> ME</h1>
      </div>
      <p>{AboutData.shortDetail}</p>
    </div>
  );
};

export default AboutSection;
