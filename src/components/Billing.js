import React, { useState } from "react";

const Billing = () => {
	const [Qty1, setQty1] = useState(0);
	const [Qty2, setQty2] = useState(0);
	function PizzaAdd() {
		setQty1(Qty1 + 1);
	}
	function PizzaRmv() {
		if (Qty1 > 0) setQty1(Qty1 - 1);
		else alert("Can't Go Lower Than 0.");
	}
	function BurgerAdd() {
		setQty2(Qty2 + 1);
	}
	function BurgerRmv() {
		if (Qty2 > 0) setQty2(Qty2 - 1);
		else alert("Can't Go Lower Than 0.");
	}

	return (
		<div>
			<h1>Billing App</h1>
			Pizza(Rs.200)
			<input type="button" value=" + " onClick={PizzaAdd} />
			{Qty1}
			<input type="button" value=" - " onClick={PizzaRmv} />
			Total:={Qty1 * 200}
			<br />
			Burger(Rs.100)
			<input type="button" value=" + " onClick={BurgerAdd} />
			{Qty2}
			<input type="button" value=" - " onClick={BurgerRmv} />
			Total:={Qty2 * 100}
			<br />
			<br />
			<b>Grand Total: Rs.{Qty1 * 200 + Qty2 * 100}</b>
		</div>
	);
};

export default Billing;
