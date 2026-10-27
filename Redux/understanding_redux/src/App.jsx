import React from "react";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { RouterPath } from "./AppRoutes/Router";
import { Navbar } from "./Components/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <RouterPath />
    </>
  );
};
