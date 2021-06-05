import React from "react";
import Note from "./Note";
import notesData from "../notes";

export default function NoteList() {
	return (
		<div>
			{notesData.map((note) => (
				<Note key={note.key} title={note.title} content={note.content} />
			))}
		</div>
	);
}
