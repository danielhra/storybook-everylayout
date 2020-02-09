import { text, withKnobs } from "@storybook/addon-knobs/react";

import React from "react";
import Sidebar from "./Sidebar";
import logo from "../vue.svg";
import { Button, TextField } from "@material-ui/core";

export default {
  title: "Design System/Layout/Sidebar",
  component: Sidebar,
  decorators: [withKnobs]
};

export const MediaObject = () => (
  <Sidebar
    side={text("side", "left")}
    sideWidth={text("side width", null)}
    minWidth={text("min width", "75%")}
    space={text("space", "var(--s-1)")}
  >
    <div>
      <div>
        <img src={logo} alt="prop"></img>
      </div>
      <p>example text accompanying the image</p>
    </div>
  </Sidebar>
);

export const SearchWidget = () => (
  <Sidebar
    side={text("side", "right")}
    sideWidth={text("side width", null)}
    minWidth={text("min width", "66%")}
    space={text("space", "0")}
  >
    <div>
      <TextField id="filled-basic" label="Text" variant="filled" />
      <Button variant="contained" color="primary">
        search
      </Button>
    </div>
  </Sidebar>
);
