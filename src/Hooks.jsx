import React, { useState } from 'react';

// INCREMETOR USING HOOKS 💛
const Incrementor = () => {
	// const state = useState();
	// console.log(state);
	let time = new Date().toLocaleTimeString();
	let [count, setCount] = useState(time);

	const AMPM = new Date().getHours() <= 12 ? 'AM' : 'PM';
	const Increment = () => {
		time = new Date().toLocaleTimeString();
		setCount(time);
	};

	return (
			<div className="wrapper">
				<h1 className=" number"> {count + ' ' + AMPM}</h1>
				<button className="next-btn" onClick={Increment}>
					get time
				</button>
			</div>
	);
};
export default Incrementor;
