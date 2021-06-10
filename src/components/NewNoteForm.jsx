import React, { useState } from "react";

export default function NewNoteForm(props) {
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
		<form
			onSubmit={(event) => {
				event.preventDefault();
			}}
		>
			<input value={title} onChange={updateTitle} placeholder="Title" />
			<textarea value={text} onChange={updateText} placeholder="Take a note..." />
			<button
				onClick={() => {
					props.addNote({
						title,
						text,
					});
					setTitle("");
					setText("");
				}}
			>
				Add
			</button>
		</form>
	);
}
