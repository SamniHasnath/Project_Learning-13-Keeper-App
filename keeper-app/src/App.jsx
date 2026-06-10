import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  function toggleDark() {
    setDarkMode(prev => !prev);
  }

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes(prevNotes =>
      prevNotes.filter((note, index) => index !== id)
    );
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* ✅ Use Header only once */}
      <Header toggleDark={toggleDark} />

      <CreateArea onAdd={addNote} />

      <div className="notes-container">
        {notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;