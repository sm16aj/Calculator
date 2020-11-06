import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  var num1, num2, result = null;
  var operator;
  var spaceIndex1 = -1, space2 = -1;
  var isOperator = false;
  spaceIndex1 = props.title.indexOf(" ");
  space2 = props.title.indexOf(" ", props.title.indexOf(" ") + 1);
  num1 = props.title.substring(0, spaceIndex1);
  operator = props.title.substring(spaceIndex1 + 1, spaceIndex1 + 2);
  num2 = props.title.substring(space2 + 1, props.title.length);
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

  if(isNaN(num1)) {
    return (
      <div className="note">
      <h1>Error: First operand must be a number</h1>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    );
  }
  else if (spaceIndex1 === -1) {
    return (
      <div className="note">
        <h1>Error: Expession must have whitespace</h1>
          <button onClick={handleClick}>
            <DeleteIcon />
          </button>
        </div>
      );
  }
  else if(!isOperator) {
    return (
    <div className="note">
      <h1>Error: Invalid Operator</h1>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    );
  }
  else if (space2 === -1) {
    return (
      <div className="note">
        <h1>Error: Missing space after operator</h1>
          <button onClick={handleClick}>
            <DeleteIcon />
          </button>
        </div>
      );
  }
  else if(isNaN(num2)) {
    return (
      <div className="note">
        <h1>Error: Second operand must be a number</h1>
          <button onClick={handleClick}>
            <DeleteIcon />
          </button>
        </div>
      );
  }
  else {

    return (
      <div className="note">
      <h1>{props.title} = {result}</h1>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    );
  }
}


export default Note;
