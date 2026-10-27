import React from "react";
import { Button } from "../Components/Button";

export const About = () => {
  const styleAbout = {
    padding: ".3rem 1.5rem",
    background: "transparent",
    border: "2px solid green",
    textTransform: "Capitalize",
  };
  return <Button name={"about"} style={styleAbout} />;
};
