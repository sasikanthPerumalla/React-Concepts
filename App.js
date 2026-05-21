import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "div",
  {
    id: "heading",
  },
  [
    React.createElement("h1", null, "Hello World!"),
    React.createElement("h2", null, "Welcome to ReactJS"),
  ],
);
const finalroot = ReactDOM.createRoot(document.getElementById("root"));
finalroot.render(heading);
