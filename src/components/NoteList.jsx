import React from "react";
import Note from "./Note";

export default function NoteList(props) {
	return (
		<div>
			{props.listItems.map((note, index) => (
				<Note key={index} title={note.title} text={note.text} />
			))}
		</div>
	);
}
