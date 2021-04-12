import React from "react";
import "../index.css";

const Circle = (props) => {
	return (
		<div
			className={`gameButton ${props.color} ${props.active ? " active" : "notActive"}`}
			onClick={props.click}
			style={{ pointerEvents: props.disabled ? "auto" : "none" }}
		>
			{/* <p>{props.id}</p> */}
		</div>
	);
};

export default Circle;
