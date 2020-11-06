import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
let calculator = require("../model.js");

function Calculation(props) {
  
  //handle deletion of note
  function handleClick() {
    props.onDelete(props.id);
  }

  //user variables
  var num1, num2, result = null;
  var operator;
  var spaceIndex1 = -1, space2 = -1;
  var isOperator = false;

  //find the Index of both spaces of calculation
  spaceIndex1 = props.title.indexOf(" ");
  space2 = props.title.indexOf(" ", props.title.indexOf(" ") + 1);

  //Every Calculation in this calculator must have 2 numbers, and a operator
  num1 = props.title.substring(0, spaceIndex1);
  operator = props.title.substring(spaceIndex1 + 1, spaceIndex1 + 2);
  num2 = props.title.substring(space2 + 1, props.title.length);

  //evaluate the operator to determine the result
  if (operator === '+') {
    result = parseInt(num1) + parseInt(num2);
    isOperator = true;
  }
  else if (operator === '-') {
    result = parseInt(num1) - parseInt(num2);
    isOperator = true;
  }
  else if (operator === '*' || operator === 'x') {
    result = parseInt(num1) * parseInt(num2);
    isOperator = true;
  }
  else if (operator === '/') {
    result = parseInt(num1) / parseInt(num2);
    isOperator = true;
  }


  //Error Handling

  //if num1 is not a number
  if(isNaN(num1)) {
    return (
      <div className="error">
      <h1>Error: First operand must be a number</h1>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    );
  }

  //if the expression does not have whitespace
  else if (spaceIndex1 === -1) {
    return (
      <div className="error">
        <h1>Error: Invalid expression format</h1>
          <button onClick={handleClick}>
            <DeleteIcon />
          </button>
        </div>
      );
  }

  //if the operator isn't our allowed operators
  else if(!isOperator) {
    return (
    <div className="error">
      <h1>Error: Invalid Operator</h1>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    );
  }

  //if the expression doesn't have the 2nd space
  else if (space2 === -1) {
    return (
      <div className="error">
        <h1>Error: Missing space after operator</h1>
          <button onClick={handleClick}>
            <DeleteIcon />
          </button>
        </div>
      );
  }

  //if the second number is not a number
  else if(isNaN(num2)) {
    return (
      <div className="error">
        <h1>Error: Second operand must be a number</h1>
          <button onClick={handleClick}>
            <DeleteIcon />
          </button>
        </div>
      );
  }

  //otherwise It's probably a calculation so perform calculation
  else {

    return (
      <div className="calculation">
      <h1>{props.title} = {result}</h1>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    );
  }
}


export default Calculation;
