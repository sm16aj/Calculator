import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Calculation from "./Calculation";
import CreateArea from "./CreateArea";

function App() {
  //state storing array of notes
  const [calculations, setCalculations] = useState([]);

  //When adding new note
  function addCalculation(newCalculation) {
    setCalculations(prevCalculations => {
      //stores new note in array
      return [...prevCalculations, newCalculation];
    });
  }

  //deleting a not
  function deleteCalculation(id) {
    setCalculations(prevCalculations => {
      //filter used to finds specific note
      return prevCalculations.filter((calculationItem, index) => {
        return index !== id; //keep all notes other than the found note. 
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addCalculation} />
      {calculations.map((calculationItem, index) => {
        return (
          <Calculation
            key={index}
            id={index}
            title={calculationItem.title}
            onDelete={deleteCalculation}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
