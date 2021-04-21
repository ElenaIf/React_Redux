import React from "react";

import "./Form.css";

const Form = (props) => {
	return (
		<form className="inputForm" onSubmit={props.submit}>
			<div class="form-left-decoration"></div>
			<div class="form-right-decoration"></div>
			<div class="circle"></div>
			<div class="form-inner">
				<h3>Please fill the form below</h3>
				<input
					type="text"
					name="firstname"
					id="firstname"
					placeholder="First Name"
					onChange={props.inputHandler}
				/>

				<input
					type="text"
					name="lastname"
					id="lastname"
					placeholder="Last Name"
					onChange={props.inputHandler}
				/>

				<input
					type="tel"
					name="phoneNumber"
					id="phoneNumber"
					placeholder="Phone number"
					onChange={props.inputHandler}
				/>

				<select name="role" id="role" onChange={props.inputHandler}>
					<option value="" disabled hidden selected>
						Choose your role
					</option>
					<option value="student">Student</option>
					<option value="teacher">Teacher</option>
					<option value="other">Other</option>
				</select>

				<textarea
					name="message"
					id="message"
					cols="30"
					rows="5"
					placeholder="Message"
					onChange={props.inputHandler}
				></textarea>

				<button type="submit">Send</button>
			</div>
		</form>
	);
};

export default Form;
