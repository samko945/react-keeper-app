import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

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

	const [formFocus, setFormFocus] = useState(false);

	return (
		<form
			className="new-note-form"
			onFocus={(e) => {
				if (e.currentTarget === e.target) {
					console.log("focused self");
					// setFormFocus(true);
				} else {
					console.log("focused child", e.target);
				}
				if (!e.currentTarget.contains(e.relatedTarget)) {
					// Not triggered when swapping focus between children
					console.log("focus entered self");
					console.log(e.relatedTarget);
					setFormFocus(true);
				}
			}}
			// onBlur={(e) => {
			// 	if (e.currentTarget === e.target) {
			// 		console.log("unfocused self");
			// 		// setFormFocus(false);
			// 	} else {
			// 		console.log("unfocused child", e.target);
			// 	}
			// 	if (!e.currentTarget.contains(e.relatedTarget)) {
			// 		// Not triggered when swapping focus between children
			// 		console.log("focus left self");
			// 		setFormFocus(false);
			// 	}
			// }}
		>
			{formFocus && <input value={title} onChange={updateTitle} placeholder="Title" />}
			<textarea value={text} onChange={updateText} placeholder="Take a note..." rows={formFocus ? 3 : 1} />
			{formFocus && (
				<Zoom in={true} timeout={400}>
					<Fab
						size="large"
						onClick={(e) => {
							props.addNote({
								title,
								text,
							});
							setTitle("");
							setText("");
							e.target.closest("form").querySelector("textarea").focus();
							e.preventDefault();
						}}
					>
						<AddIcon />
					</Fab>
				</Zoom>
			)}
		</form>
	);
}
