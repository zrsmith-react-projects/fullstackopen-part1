import React from "react";
import "./App.css";

const Footer = () => {
  return (
    <div>
      <p>
        This is a footer, Copyright <a href="#">Stuff</a>{" "}
      </p>
    </div>
  );
};

const Hello = props => {
  return (
    <div>
      <h1>
        Hello {props.name}, your number is {props.number}
      </h1>
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
      <Hello name={"Zac"} number={a} />
      <Hello name={"Brittany"} number={b} />
      <Footer />
    </div>
  );
};

export default App;
