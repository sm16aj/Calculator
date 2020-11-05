import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  //state storing array of notes
  const [notes, setNotes] = useState([]);

  //When adding new note
  function addNote(newNote) {
    setNotes(prevNotes => {
      //stores new note in array
      return [...prevNotes, newNote];
    });
  }

  //deleting a not
  function deleteNote(id) {
    setNotes(prevNotes => {
      //filter used to finds specific note
      return prevNotes.filter((noteItem, index) => {
        return index !== id; //keep all notes other than the found note. 
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
