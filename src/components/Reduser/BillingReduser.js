import React, { useReducer } from "react";

const BillingReduser = () => {

	const ini = {
		burger: 0,
		pizza: 0,
		total: 0
	}

	const prices = [150, 450];
	let disBurg = true;
	let disPizz = true;
	const [state, dispatch] = useReducer(reduser, ini);

	function a() {
		if (state.burger >= 1) {
			return false;
		}
		else {
			return true;
		}
	}
	function b() {
		if (state.pizza >= 1) {
			return false;
		}
		else {
			return true;
		}
	}

	function reduser(state, action) {
		switch (action.type) {
			case "BD":
				if (state.burger <= 1) { disBurg = true }
				else { disBurg = false }
				return { ...state, burger: state.burger - 1, total: state.total - action.payload };
			case "BI":
				if (state.burger >= 0) { disBurg = false }
				else { disBurg = true }
				return { ...state, burger: state.burger + 1, total: state.total + action.payload };
			case "PD":
				if (state.pizza <= 1) { disPizz = true }
				else { disPizz = false }
				return { ...state, pizza: state.pizza - 1, total: state.total - action.payload };
			case "PI":
				if (state.pizza >= 0) { disPizz = false }
				else { disPizz = true }
				return { ...state, pizza: state.pizza + 1, total: state.total + action.payload };

			default:
				break;
		}
	}

	return (
		<div className="container-fluid">
			<div className="row border-bottom border-1 mb-3">
				<h1 className="text-white" style={{ fontWeight: "bold" }}>Billing</h1>
			</div>

			<div className="row">
				<div className="col-6 align-items-end">

					<div className="row justify-content-center align-items-center text-center">
						<div className="col-12">
							<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V400z" /></svg>
							<h3>Burger</h3>
						</div>
					</div>
					<div className="row"><p className="mb-3 fs-5">Only Rs.{prices[0]}</p></div>
					<div className="row " >

						<div className="col-12 d-flex align-items-center justify-content-center text-center">
							<button onClick={() => dispatch({ type: "BD", payload: prices[0] })} className="btn btn-danger fs-4" disabled={a()}> <svg style={{ fill: "#ffffff" }} xmlns="http://www.w3.org/2000/svg" height="0.7em" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" /></svg> </button>
							<p className="fs-4 p-3" style={{ transform: "translate(0px, 7px)" }}>{state.burger}</p>
							<button onClick={() => dispatch({ type: "BI", payload: prices[0] })} className="btn btn-success fs-4"> <svg style={{ fill: "#ffffff" }} xmlns="http://www.w3.org/2000/svg" height="0.7em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg> </button>
						</div>
					</div>
					<div style={{ borderBottom: "1px solid purple" }}>
						<p className="fs-4 p-1" style={{ transform: "translate(0px, 7px)" }}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z" /></svg> {state.burger * prices[0]}</p>
					</div>
				</div>

				<div className="col-6">

					<div className="row justify-content-center align-items-center text-center">
						<div className="col-12">
							<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
							<h3>Pizza</h3>
						</div>
					</div>
					<div className="row"><p className="mb-3 fs-5">Only Rs.{prices[1]}</p></div>
					<div className="row ">

						<div className="col-12 d-flex align-items-center justify-content-center text-center">
							<button onClick={() => dispatch({ type: "PD", payload: prices[1] })} className="btn btn-danger fs-4" disabled={b()}> <svg style={{ fill: "#ffffff" }} xmlns="http://www.w3.org/2000/svg" height="0.7em" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" /></svg> </button>
							<p className="fs-4 p-3" style={{ transform: "translate(0px, 7px)" }}>{state.pizza}</p>
							<button onClick={() => dispatch({ type: "PI", payload: prices[1] })} className="btn btn-success fs-4"> <svg style={{ fill: "#ffffff" }} xmlns="http://www.w3.org/2000/svg" height="0.7em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg> </button>
						</div>
					</div>
					<div style={{ borderBottom: "1px solid purple" }}>
						<p className="fs-4 p-1" style={{ transform: "translate(0px, 7px)" }}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z" /></svg> {state.pizza * prices[1]}</p></div>
				</div>
			</div>

			<div className="row align-items-center justify-content-center">
				<div className="col-4">
					<h1 className="p-1 fw-bold shadow-lg p-2 rounded" style={{ transform: "translate(0px, 7px)" }}>Total Amount: <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z" /></svg> {state.total}</h1>
				</div>
			</div>
		</div >
	);
};

export default BillingReduser;
