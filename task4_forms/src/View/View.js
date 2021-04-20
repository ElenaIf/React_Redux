import React from "react";

import "./View.css";

const View = (props) => {
	return (
		<div className="viewForm">
			<h3>Check your input:</h3>
			<div className="viewFormInner">
				<p>
					First name: <span className="handWritten">{props.firstname}</span>
				</p>
				<p>
					Last name: <span className="handWritten">{props.lastname}</span>
				</p>
				<p>
					Phone number: <span className="handWritten">{props.phoneNumber}</span>
				</p>
				<p>
					Role: <span className="handWritten">{props.role}</span>
				</p>
				<p>
					Message: <span className="handWritten">{props.message}</span>
				</p>
			</div>
		</div>
	);
};

export default View;
