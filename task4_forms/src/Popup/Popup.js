import React from "react";

import "./Popup.css";

const closePopup = () => {
	window.location.reload();
};

const Popup = ({ firstname, lastname, phoneNumber, message, role, submit }) => {
	return (
		<div className="overlay">
			<div className="popup">
				<div className="popup-left-decoration"></div>
				<div className="popup-right-decoration"></div>

				<p>First name: {firstname}</p>
				<p>Last name: {lastname}</p>
				<p>Phone number: {phoneNumber}</p>
				<p>Role: {role}</p>
				<p>Message: {message}</p>
				<div className="popupButtons">
					<button onClick={submit}>Yes, submit</button>
					<button type="submit" onClick={closePopup}>
						No, delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default Popup;
