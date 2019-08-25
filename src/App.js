import React from "react";
import "./App.css";

const Hello = props => {
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  );
};

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  return (
    <div>
      <p>Greetings, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name={"Zac"} />
    </div>
  );
};

export default App;
