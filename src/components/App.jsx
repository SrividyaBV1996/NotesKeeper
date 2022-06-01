import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([]);

  const handleNoteSubmit = (note) => {
    setNoteList([...noteList, note]);
  };

  const handleDeleteNote = (id) => {
    const newList = noteList.filter((note, index) => index !== id);
    setNoteList(newList);
  };

  return (
    <div>
      <Header />
      <CreateArea handleNoteSubmit={handleNoteSubmit} />
      {noteList.map((note, index) => (
        <Note key={index} title={note.title} content={note.content} id={index} handleDeleteNote={handleDeleteNote} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
