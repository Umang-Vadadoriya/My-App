import React, { useState } from "react";

const ChildToParent = (props) => {
	const [val, setVal] = useState("");

	const inputHandler = (event) => {
		setVal(event.target.value);
	};

	const formHandler = (event) => {
		event.preventDefault();
		props.onSubmit(val);
		setVal("");
	};

	return (
		<form onSubmit={formHandler}>
			<input type="text" value={val} onChange={inputHandler} />
			<input type="submit" />
		</form>
	);
};

export default ChildToParent;
