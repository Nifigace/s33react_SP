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
        <li>{Calculator.multiply(1, 2)}</li>
        <li>{Calculator.subtract(1, 2)}</li>
        <li>{Calculator.divide(1, 2)}</li>
      </ul>
    </div>
  );
}

export default App;
