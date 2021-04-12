import React from "react";

const closeHandler = () => {
	window.location.reload();
};

const GameOver = (props) => {
	return (
		<div id="gameOver" className="gameOver">
			<button id="close" className="close" onClick={closeHandler}>
				&times;
			</button>
			<h2 className="gameOverHeading">GAME OVER!</h2>
			<div className="gameOverText">
				<p>Your score is {props.score}</p>
				<p className="finalMessage">{props.finalMessage}</p>
			</div>
		</div>
	);
};

export default GameOver;
