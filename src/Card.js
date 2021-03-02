import { useState } from "react";

export default function Card({ id, title, content, color, pinned }) {
  const [noteColor, setNoteColor] = useState(color);

  function changeNoteColor(e) {
    setNoteColor(e.target.value);
  }

  return (
    <div className="card" style={{ backgroundColor: noteColor }}>
      <li key={id}>
        <div>{title}</div>
        <div>{content}</div>
        <br />
        <div>{pinned ? "true" : "false"}</div>
        <input type="color" onChange={(e) => changeNoteColor(e)} />
      </li>
    </div>
  );
}
