import React from "react";
import Head from "./Head.jsx";
import List from "./List.jsx";
import * as Calculator from "./Calculator.js";

function App() {
  return (
    <div>
      <Head />
      <List />
      <ul>
        <li>{Calculator.add(1, 2)}</li>
        <li>{Calculator.multiply(2, 3)}</li>
        <li>{Calculator.subtract(7, 2)}</li>
        <li>{Calculator.divide(5, 2)}</li>
      </ul>
    </div>
  );
}

export default App;
