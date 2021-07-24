import React, { useState } from 'react';



const Events = () => {

let [initialText,uText]= useState("click me")
let [color,changedColor] = useState("red")
	const changeState = () => {

		changedColor('purple')
		uText("ouch🔫 ")
}
	const bgBack = () => {
		changedColor('blue');
		uText('doubleclick')
}



	return (
		<>
			<div className="event-div" style={{backgroundColor:color}}>
				<button className="event-btn" onClick={changeState} onDoubleClick = {bgBack}>{initialText}</button>
			</div>
		</>
	);
};
export default Events;
