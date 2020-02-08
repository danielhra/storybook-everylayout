import React from "react";
import Sidebar from "./Sidebar";
import logo from "../logo.svg";

export default {
  title: "Sidebar",
  component: Sidebar
};

export const MediaObject = () => (
  <Sidebar>
    <img src={logo} alt="prop"></img>
    <p>example text accompanying the image</p>
  </Sidebar>
);

export const SearchWidget = () => (
  <Sidebar>
    <input type="text" aria-label="search" />
    <button>search</button>
  </Sidebar>
);
