import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionTypes from "../actions/actions";

class TaskList extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onAddNote(e.target.note.value);
		e.target.note.value = "";
	};

	render() {
		return (
			<main>
				<form onSubmit={this.handleSubmit}>
					<input type="text" placeholder="Write here your task" name="note" />
					<button type="submit">Add task</button>
				</form>
				<ul className="task-list">
					{this.props.allMyNotes.map((item) => (
						<li
							key={item.id}
							className={item.complete ? "item-text strike" : "item-text"}
							onClick={() => this.props.onCompleteNote(item.id)}
						>
							{item.text}{" "}
							<span className="close-buttton" onClick={() => this.props.onDeleteNote(item.id)}>
								X
							</span>
						</li>
					))}
				</ul>
			</main>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		allMyNotes: state.notes,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddNote: (text) =>
			dispatch({
				type: actionTypes.ADD_NOTE,
				data: text,
			}),
		onDeleteNote: (id) =>
			dispatch({
				type: actionTypes.DELETE_NOTE,
				item: id,
			}),
		onCompleteNote: (id) => dispatch({ type: actionTypes.COMPLETE_NOTE, completedID: id }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
