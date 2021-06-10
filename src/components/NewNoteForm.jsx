import React, { useState } from "react";

export default function NewNoteForm() {
	const [title, setTitle] = useState("");
	function updateTitle(event) {
		const newTitle = event.target.value;
		setTitle(newTitle);
	}

	const [text, setText] = useState("");
	function updateText(event) {
		const newText = event.target.value;
		setText(newText);
	}
	return (
		<form>
			<input value={title} onChange={updateTitle} />
			<textarea value={text} onChange={updateText} />
			<button>Add</button>
		</form>
	);
}
