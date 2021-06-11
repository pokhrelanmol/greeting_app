import React from 'react';
 
let style = {};

function GreetingComponent() {

	let currentTime = new Date();
	currentTime = currentTime.getHours();
	console.log(currentTime);
	let greeting;

	if (currentTime <= 11) {
		greeting = " Good morning"
		style.console = 'green';
	} else if (currentTime > 11 && currentTime < 19) {
		greeting = "Good AfterNoon"
		style.color = 'orange';
	} else {
		greeting = " Good Night"
		style.color = ' brown';
	}


	return (

		<>
			<div className = 'main-div'>
				<h1 className = "greeting">  Hello sir ,<span style ={style}>{greeting}</span> </h1>

			</div>
		</>
	);
}

export default GreetingComponent;