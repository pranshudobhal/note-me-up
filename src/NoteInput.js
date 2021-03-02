import { useState } from "react";

export function NoteInput({ notesList, setNotesList }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("");
  const [pin, setPin] = useState(false);

  function addNote(e) {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    } else if (name === "color") {
      setColor(value);
    } else if (name === "pin") {
      setPin(!pin);
    }
    // console.log(name);
  }

  function saveNote() {
    if (title === "" && content === "") {
      return;
    } else {
      setNotesList([
        ...notesList,
        {
          title: title,
          content: content,
          color: color,
          pinned: pin
        }
      ]);
    }
  }

  return (
    <div>
      <label htmlFor="title">Title:</label>
      <input type="text" name="title" id="title" onChange={(e) => addNote(e)} />
      <br />
      <label htmlFor="content">Take a note:</label>
      <input
        type="text"
        name="content"
        id="content"
        onChange={(e) => addNote(e)}
      />
      <br />
      <br />
      <label htmlFor="color">Select your favorite color:</label>
      <input
        type="color"
        id="color"
        name="color"
        onChange={(e) => addNote(e)}
      />
      <br />
      <br />
      <label htmlFor="pin"> Pin </label>
      <input
        type="checkbox"
        id="pin"
        name="pin"
        value="pin"
        onChange={(e) => addNote(e)}
      />
      <br />
      <br />
      <button onClick={saveNote}>Save Note</button>
    </div>
  );
}
