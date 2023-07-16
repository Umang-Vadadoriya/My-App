import "./App.css";
import StudList from "./components/StudList";
import Color from "./Color";
import Billing from "./components/Billing";
import Counter from "./components/Counter";
import ChildToParent from "./components/ChildToParent";
import CntReducer from "./components/Reduser/CntReducer";
import BillingReduser from "./components/Reduser/BillingReduser";
import ToDoReduser from "./components/Reduser/ToDoReduser";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
	return (
		<div className="App" style={{ background: "linear-gradient(180deg, purple, pink, transparent)" }}>

			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Reducer0" element={<CntReducer />} />
				<Route path="/Reducer1" element={<BillingReduser />} />
				<Route path="/Reducer2" element={<ToDoReduser />} />
			</Routes>



			{/* <ToDoReduser /> */}
			{/* <BillingReduser /> */}
			{/* <CntReducer /> */}
			{/* <StudList /> */}
			{/* <ChildToParent onSubmit={getData} />; */}
			{/* <ChildToParent onChildToParent={this.ChildToParent} /> */}
			{/* <Billing /> */}
			{/* <Color send={dcs} /> */}
			{/* <Counter /> */}

		</div>
	);
}

export default App;
