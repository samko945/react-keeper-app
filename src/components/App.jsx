import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NewNoteForm from "./NewNoteForm";
import NoteList from "./NoteList";

export default function App() {
	return (
		<div>
			<Header />
			<NewNoteForm />
			<NoteList />
			<Footer />
		</div>
	);
}
