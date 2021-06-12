import "../styles.css";
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
	function deleteNote(id) {
		const filteredArray = notes.filter((item, index) => {
			return id !== index;
		});
		setNotes(filteredArray);
	}
	return (
		<div>
			<Header />
			<NewNoteForm addNote={addNote} />
			<NoteList listItems={notes} deleteNote={deleteNote} />
			<Footer />
		</div>
	);
}
