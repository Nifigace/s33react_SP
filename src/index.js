//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

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
  <h1 style={customStyle}>{greeting + ", " + name + "."}</h1>,
  document.getElementById("root")
);
