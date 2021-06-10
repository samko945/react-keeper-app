import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import NewNoteForm from "./NewNoteForm";
import NoteList from "./NoteList";

export default function App() {
	const [notes, setNotes] = useState([]);
	function addNote(note) {
		setNotes([...notes, { title: note.title, text: note.text }]);
	}
	return (
		<div>
			<Header />
			<NewNoteForm addNote={addNote} />
			<NoteList listItems={notes} />
			<Footer />
		</div>
	);
}
