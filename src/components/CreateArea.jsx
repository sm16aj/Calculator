import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {

  //set state of note as an object with a title and content
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  //whenever the user changes the text in the input
  function handleChange(event) {
    //deconstructing object into individual components
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value //take the value of the changed input and return it with previous notes
      };
    });
  }

  //when the user submits the note 
  function submitNote(event) {
    //function from App.jsx
    props.onAdd(note);
    //after the user finished adding the note reset the text to empty
    setNote({
      title: "",
      content: ""
    });
    //prevent the form from redirecting
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Input Calculation Ex. (2 + 2)"
          />
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
