import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionTypes from "./actions/actions";

class Counter extends Component {
	render() {
		return (
			<main>
				<h1>Here is your score: {this.props.ctr}</h1>
				<button onClick={this.props.onIncreasingCounter}>Add one</button>
				<button onClick={this.props.onDecreasingCounter}>Remove one</button>
				<button onClick={this.props.onResetCounter}>Reset</button>
				<button onClick={this.props.onAdd5}>Add 5</button>
				<button onClick={this.props.onRemove5}>Remove 5</button>
				<button onClick={this.props.onStoreResults}>Store the results</button>

				<div>
					<ul>
						{this.props.storeResults.map((item) => (
							<li key={item.id} onClick={() => this.props.onRemoveItem(item.id)}>
								{item.value}
							</li>
						))}
					</ul>
				</div>
			</main>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ctr: state.counter,
		storeResults: state.results,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIncreasingCounter: () =>
			dispatch({
				type: actionTypes.INCREMENT,
			}),
		onDecreasingCounter: () => {
			dispatch({
				type: actionTypes.DECREASE,
			});
		},
		onResetCounter: () => {
			dispatch({
				type: actionTypes.RESET,
			});
		},
		onAdd5: () => {
			dispatch({
				type: actionTypes.ADD5,
				value: 5,
			});
		},
		onRemove5: () => {
			dispatch({
				type: actionTypes.REMOVE5,
				value: 5,
			});
		},
		onStoreResults: () => {
			dispatch({
				type: actionTypes.STORE_RESULTS,
			});
		},
		onRemoveItem: (id) => {
			dispatch({
				type: actionTypes.REMOVE_ITEM,
				item: id,
			});
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
