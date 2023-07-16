import React, { useState } from "react";

const Counter = () => {
	const [Cnt, setCent] = useState(0);
	function Add() {
		setCent(Cnt + 1);
	}
	function Sub() {
		if (Cnt > 0) setCent(Cnt - 1);
		else alert("Can't Go Lower Than 0.");
	}
	return (
		<div>
			<input type="button" value="+" onClick={Add} />
			{Cnt}
			<input type="button" value="-" onClick={Sub} />
		</div>
	);
};

export default Counter;
