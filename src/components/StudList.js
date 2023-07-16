import React, { useState } from "react";

const StudList = () => {
	const x = 0;
	const list = ["A", "B", "C", "D"];
	const [stud, setStud] = useState("");
	const [newList, setNewList] = useState(list);
	const inputHandler = (event) => {
		setStud(event.target.value);
	};
	const submitHandler = (event) => {
		event.preventDefault();
		const newList1 = newList.concat(stud);
		setNewList(newList1);
		setStud("");
	};

	return (
		<>
			<div>
				<form onSubmit={submitHandler}>
					<input type="text" value={stud} onChange={inputHandler} />
					<button type="submit">Add</button>
				</form>
			</div>
			<div>
				{newList.map((user, x) => ((x += 1), (<li key={x}>{user}</li>)))}
			</div>
		</>
	);
};

export default StudList;
