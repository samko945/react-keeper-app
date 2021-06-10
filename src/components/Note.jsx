import React from "react";

export default function Note(props) {
	return (
		<div className="note">
			<h1>{props.title}</h1>
			<p>{props.text}</p>
			<div className="note-options">
				<span
					className="delete-note"
					onClick={() => {
						props.deleteNote(props.id);
					}}
				>
					delete
				</span>
			</div>
		</div>
	);
}
