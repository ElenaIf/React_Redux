import React from "react";

const NewAnimal = ({ change, submit }) => {
	return (
		<form onSubmit={submit}>
			<div>
				<label htmlFor="name">Name</label>
				<input type="text" id="name" name="name" onChange={change} />
			</div>
			<div>
				<label htmlFor="aclass">Class</label>
				<select name="aclass" id="aclass" onChange={change}>
					<option value="mammals">Mammals</option>
					<option value="birds">Birds</option>
					<option value="eptiles">Reptiles</option>
					<option value="amphibians">Amphibians</option>
					<option value="invertebrates">Invertebrates</option>
				</select>
			</div>
			<div>
				<label htmlFor="aimage">Image Url</label>
				<input type="text" id="aimage" name="aimage" onChange={change} />
			</div>
			<div>
				<label htmlFor="description">Description</label>
				<textarea
					name="description"
					id="description"
					cols="30"
					rows="10"
					onChange={change}
				></textarea>
			</div>
			<div>
				<label htmlFor="link">Link to Wikipedia</label>
				<input type="text" name="link" id="link" onChange={change} />
			</div>
			<button type="submit">Send</button>
		</form>
	);
};

export default NewAnimal;
