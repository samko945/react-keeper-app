import React from "react";

export default function Note(props) {
	return (
		<div className="note" tabindex={0}>
			<h1>{props.title}</h1>
			<p>{props.text}</p>
		</div>
	);
}
