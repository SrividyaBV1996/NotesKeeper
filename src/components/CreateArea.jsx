import React, { useState } from "react";

function CreateArea(props) {
  const [noteObject, setNoteObject] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setNoteObject({...noteObject, [name]: value});
  };

  const handleSubmit = (event) => {
    props.handleNoteSubmit(noteObject);
    setNoteObject({
      title: "",
      content: ""
    });
    event.preventDefault();
  };

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={noteObject.title} onChange={(e) => handleChange(e)} />
        <textarea name="content" placeholder="Take a note..." rows="3" value={noteObject.content}  onChange={(e) => handleChange(e)} />
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
