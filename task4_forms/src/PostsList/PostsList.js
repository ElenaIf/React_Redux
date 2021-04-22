import React from "react";

import "./PostList.css";

const PostsList = ({ notes }) => {
	return (
		<section className="printResults">
			<h3>Saved notes</h3>
			<div className="cards">
				{notes.map((note) => {
					return (
						<div key={note.id} className="nameCard">
							<h4>
								{" "}
								{note.firstname} {note.lastname}
							</h4>
							<p>Phone: {note.phoneNumber}</p>
							<p>Role: {note.role}</p>
							<p className="messageOnCard">{note.message}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default PostsList;
