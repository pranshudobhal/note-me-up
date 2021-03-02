import "./styles.css";
import { Notes } from "./Notes";
import { NoteInput } from "./NoteInput";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { dataList } from "./data";

export default function App() {
  const [notesList, setNotesList] = useState(dataList);
  const [pinnedNotesList, setPinnedNotesList] = useState([]);

  return (
    <div className="App">
      <h1>Notes App</h1>
      <NoteInput notesList={notesList} setNotesList={setNotesList} />
      <br />
      <br />
      <Notes
        notesList={notesList}
        setNotesList={setNotesList}
        pinnedNotesList={pinnedNotesList}
        setPinnedNotesList={setPinnedNotesList}
      />
    </div>
  );
}
