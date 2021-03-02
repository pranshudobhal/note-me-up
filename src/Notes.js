import Card from "./Card";

export function Notes({
  notesList,
  setNotesList,
  pinnedNotesList,
  setPinnedNotesList
}) {
  const pinnedNote = notesList.filter((note) => note.pinned);
  const unpinnedNote = notesList.filter((note) => !note.pinned);

  // console.log(pinnedNote);
  return (
    <div>
      <div>
        Pinned Notes
        <br />
        <br />
        <br />
        {pinnedNote.map((note) => {
          return (
            <Card
              id={note.id}
              title={note.title}
              content={note.content}
              color={note.color}
              pinned={note.pinned}
            />
          );
        })}
      </div>
      <div>
        All Notes
        <br />
        {unpinnedNote.map((note) => {
          return (
            <Card
              id={note.id}
              title={note.title}
              content={note.content}
              color={note.color}
              pinned={note.pinned}
            />
          );
        })}
      </div>
    </div>
  );
}
