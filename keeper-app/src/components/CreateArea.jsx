import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => ({
      ...prevNote,
      [name]: value   // ✅ FIXED
    }));
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <form className="create-note">
      <input
        name="title"
        placeholder="Title"
        value={note.title}
        onChange={handleChange}
      />

      <textarea
        name="content"
        placeholder="Take a note..."
        value={note.content}
        onChange={handleChange}
      />

      <button type="submit" onClick={submitNote}>
        ➕
      </button>
    </form>
  );
}

export default CreateArea;