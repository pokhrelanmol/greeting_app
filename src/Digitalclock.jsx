import React, { useState } from 'react';

const DigitalClock = () => {
	let newDate = new Date().toLocaleTimeString();

	let [cTime, uTime] = useState(newDate);
	const updateTime = () => {
		newDate = new Date().toLocaleTimeString();
		uTime(newDate)
	}
	setInterval(updateTime,1000);
	return (
		<>
			<h1 className="clock-div">{cTime}</h1>
		</>
	);
};
export default DigitalClock;
