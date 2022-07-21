import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

const name = "Roman";
const customStyle = {
  fontSize: "40px"
};

const data = new Date();
const currentTime = data.getHours();

let greeting;

if (currentTime < 12) {
  greeting = "Good morning";
  customStyle.color = "red";
}
if (currentTime < 18 || currentTime > 12) {
  greeting = "Good afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 style={customStyle}>{greeting + ", " + name + "."}</h1>
    <App />
  </div>,
  document.getElementById("root")
);
