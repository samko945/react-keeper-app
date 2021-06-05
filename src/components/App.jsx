import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NoteList from "./NoteList";

export default function App() {
	return (
		<div>
			<Header />
			<NoteList />
			<Footer />
		</div>
	);
}
