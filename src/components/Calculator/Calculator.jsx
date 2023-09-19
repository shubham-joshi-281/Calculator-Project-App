import React, { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  // State Handling
  const [result, setResult] = useState("");

  // For Clicking Button
  const clickHandler = (e) => {
    const value = e.target.getAttribute("data");
    if (value === "." && result.includes(".")) return;
    setResult(result + value);
  };

  // For Clearing
  const clearHandler = () => {
    setResult("");
  };
  // For Deleting
  const deleteHandler = () => {
    setResult(String(result).slice(0, -1));
  };

  // for Handling + - ? * Buttons
  const operationHandler = (e) => {
    const operator = e.target.getAttribute("data");
    setResult(result + operator);
  };

  // For + Operators
  const equalHandler = () => {
    setResult(eval(result).toString());
  };

  return (
    <main className="cal-container">
      <section className="cal">
        <h1>calculator App</h1>
        <h2>{result ? `${result}` : "0"}</h2>
        <div className="row-container">
          <div className="row">
            <button data={9} onClick={clickHandler}>
              9
            </button>
            <button data={8} onClick={clickHandler}>
              8
            </button>
            <button data={7} onClick={clickHandler}>
              7
            </button>
            <button data={"/"} onClick={operationHandler}>
              /
            </button>
          </div>
          <div className="row">
            <button data={6} onClick={clickHandler}>
              6
            </button>
            <button data={5} onClick={clickHandler}>
              5
            </button>
            <button data={4} onClick={clickHandler}>
              4
            </button>
            <button data={"*"} onClick={operationHandler}>
              *
            </button>
          </div>
          <div className="row">
            <button data={3} onClick={clickHandler}>
              3
            </button>
            <button data={2} onClick={clickHandler}>
              2
            </button>
            <button data={"1"} onClick={clickHandler}>
              1
            </button>
            <button data={"+"} onClick={operationHandler}>
              +
            </button>
          </div>
          <div className="row">
            <button data={"."} onClick={clickHandler}>
              .
            </button>
            <button data={"0"} onClick={clickHandler}>
              0
            </button>
            <button data={"="} onClick={equalHandler}>
              =
            </button>

            <button data={"-"} onClick={operationHandler}>
              -
            </button>
          </div>
          <div className="last-row">
            <button className="cBtn" onClick={clearHandler}>
              Clear All
            </button>
            <button className="dBtn" onClick={deleteHandler}>
              Delete
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Calculator;
