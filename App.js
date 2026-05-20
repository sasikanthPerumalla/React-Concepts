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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
