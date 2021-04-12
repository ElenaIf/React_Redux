import React, { Component } from "react";
import Circle from "./components/Circle";
import GameOver from "./components/GameOver";

import playSound from "./assets/sounds/pokemon_game.mp3";
import gameOver from "./assets/sounds/pokemon_game_over.mp3";

let gamePlaySound = new Audio(playSound);
let gameOverSound = new Audio(gameOver);

const getRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
	state = {
		score: 0,
		current: 0,
		showGameOver: false,
		rounds: 0,
		startButton: false,
		endButton: true,
		finalMessage: undefined,
		// The clickedOnce is needed to avoid double clicking on the circles
		clickedOnce: false,
		circles: [
			{
				id: 1,
				color: "red",
			},
			{
				id: 2,
				color: "green",
			},
			{
				id: 3,
				color: "yellow",
			},
			{
				id: 4,
				color: "orange",
			},
		],
	};

	timer = undefined;
	speed = 1500;

	clickHandler = (id) => {
		if (this.state.current !== id) {
			this.endHandler();
			return;
		}
		if (this.state.clickedOnce === false) {
			this.setState({
				score: this.state.score + 1,
				rounds: 0,
				clickedOnce: true,
			});
		} else {
			return;
		}
	};

	highlightedCircle = () => {
		if (this.state.rounds >= 3) {
			this.endHandler();
			return;
		}

		let nextActiveCircle = undefined;

		do {
			nextActiveCircle = getRandomNumber(1, 4);
		} while (nextActiveCircle === this.state.current);

		this.setState({
			current: nextActiveCircle,
			rounds: this.state.rounds + 1,
			clickedOnce: false,
		});

		this.speed *= 0.95;

		this.timer = setTimeout(this.highlightedCircle, this.speed);
	};

	startHandler = () => {
		this.highlightedCircle();
		this.setState({
			startButton: true,
			endButton: false,
		});
		gamePlaySound.play();
	};

	endHandler = () => {
		let message = undefined;

		if (this.state.score <= 3) {
			message = "Wow, you are really bad at this game...";
		} else if (this.state.score > 3 && this.state.score <= 8) {
			message = "You are ok...";
		} else if (this.state.score > 8) {
			message = "You are actually quite good at this game!";
		}

		this.setState({
			finalMessage: message,
		});

		clearTimeout(this.timer);

		this.setState({
			showGameOver: true,
		});
		gamePlaySound.pause();
		gameOverSound.play();
	};

	render() {
		const circle_list = this.state.circles.map((c) => {
			return (
				<Circle
					id={c.id}
					key={c.id}
					color={c.color}
					click={() => {
						this.clickHandler(c.id);
					}}
					// current is true if it matches the id
					active={this.state.current === c.id}
					disabled={this.state.startButton}
				/>
			);
		});

		return (
			<main className="container">
				<section className="game">
					<h1>Speed Game</h1>
					<p className="instruction">Try to catch Pikachu!</p>

					<h2 id="score">Score: {this.state.score}</h2>

					<div className="gameButtons">{circle_list}</div>

					<div>
						<button
							id="startGame"
							className="startStopButtons startButton"
							onClick={this.startHandler}
							disabled={this.state.startButton}
						>
							Start
						</button>
						<button
							id="endGame"
							className="startStopButtons stopButton"
							onClick={this.endHandler}
							disabled={this.state.endButton}
						>
							Stop
						</button>
					</div>
					{/* this shows GameOver only if the statement before && is true. This can be checked in React documentation */}
					{this.state.showGameOver && (
						<GameOver score={this.state.score} finalMessage={this.state.finalMessage} />
					)}
				</section>
			</main>
		);
	}
}

export default App;
