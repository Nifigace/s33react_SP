import React from "react";

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
if (currentTime < 18) {
  greeting = "Good afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good evening";
  customStyle.color = "blue";
}

function Head() {
  return (
    <div>
      <h1>Oumai...</h1>
      <h1 style={customStyle}>{greeting + ", " + name + "."}</h1>
    </div>
  );
}

export default Head;
