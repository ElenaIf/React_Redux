import React from "react";

import "./Form.css";

const options = [
	{
		id: 1,
		label: "Choose your role",
		value: "",
	},
	{
		id: 2,
		label: "Teacher",
		value: "teacher",
	},
	{
		id: 3,
		label: "Student",
		value: "student",
	},
	{
		id: 4,
		label: "Other",
		value: "other",
	},
];

const Form = ({ inputHandler, submit }) => {
	return (
		<form className="inputForm" onSubmit={submit}>
			<div className="form-left-decoration"></div>
			<div className="form-right-decoration"></div>
			<div className="circle"></div>
			<div className="form-inner">
				<h3>Please fill the form below</h3>
				<input
					type="text"
					name="firstname"
					id="firstname"
					placeholder="First Name"
					onChange={inputHandler}
				/>

				<input
					type="text"
					name="lastname"
					id="lastname"
					placeholder="Last Name"
					onChange={inputHandler}
				/>

				<input
					type="tel"
					name="phoneNumber"
					id="phoneNumber"
					placeholder="Phone number"
					onChange={inputHandler}
				/>

				<select name="role" id="role" onChange={inputHandler}>
					{/* <option value="" disabled hidden selected>
						Choose your role
					</option> */}
					{options.map((option) => (
						<option value={option.value} key={option.id}>
							{option.label}
						</option>
					))}
				</select>

				<textarea
					name="message"
					id="message"
					cols="30"
					rows="5"
					placeholder="Message"
					onChange={inputHandler}
				></textarea>

				<button type="submit">Send</button>
			</div>
		</form>
	);
};

export default Form;
