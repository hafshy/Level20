import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [currentNote, setCurrentNote] = useState({
    title: "",
    content: ""
  });
  const [notes, setNotes] = useState([]);
  const titleRef = useRef(null);

  function handleSubmitNote() {
    if (currentNote.title.trim() && currentNote.content.trim()) {
      setNotes((prevNotes) => [...prevNotes, currentNote]);
      setCurrentNote({ title: "", content: "" });
      titleRef.current.focus();
    }
  }

  function handleDeleteNote(noteIndex) {
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== noteIndex));
  }

  return (
    <div>
      <h1>Real-Time Notes Editor</h1>
      <div>
        <input
          type="text"
          placeholder='Note title'
          value={currentNote.title}
          ref={titleRef}
          onChange={(e) =>
            setCurrentNote(
              {
                ...currentNote,
                title: e.target.value
              }
            )
          }
        />
        <textarea
          placeholder='Note content'
          value={currentNote.content}
          onChange={(e) =>
            setCurrentNote(
              {
                ...currentNote,
                content: e.target.value
              }
            )
          }
        />
        <button onClick={handleSubmitNote}>Add Note</button>
        <br />
      </div>
      <div className="notes-list">
        {notes.map((note, index) => (
          <div key={index} className="note-card">
            <h3 className="note-title">{note.title}</h3>
            <p className="note-content">{note.content}</p>
            <button
              onClick={() => handleDeleteNote(index)}
              className="delete-button"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
