import React from "react";
import ClearIcon from "@material-ui/icons/Clear";

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
					<ClearIcon fontSize="large" />
				</span>
			</div>
		</div>
	);
}
