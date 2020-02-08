import React from "react";
import ReactDOM from "react-dom";
import Stack from "./Stack";
import * as serviceWorker from "./serviceWorker";
import "../src/index.css";

ReactDOM.render(
  <Stack>
    <p>hola</p>
  </Stack>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
