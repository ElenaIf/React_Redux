import React from "react";

import "./Popup.css";

const closePopup = () => {
	window.location.reload();
};

const Popup = (props) => {
	return (
		<div className="overlay">
			<div className="popup">
				<div class="popup-left-decoration"></div>
				<div class="popup-right-decoration"></div>

				<p>First name: {props.firstname}</p>
				<p>Last name: {props.lastname}</p>
				<p>Phone number: {props.phoneNumber}</p>
				<p>Role: {props.role}</p>
				<p>Message: {props.message}</p>
				<div className="popupButtons">
					<button onClick={closePopup}>Yes, submit</button>
					<button onClick={closePopup}>No, delete</button>
				</div>
			</div>
		</div>
	);
};

export default Popup;
