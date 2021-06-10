import React from 'react';
import ReactDom from 'react-dom';
import './style.css'

// GREETING CODE STARTS 

let currentTime = new Date();
currentTime = currentTime.getHours();
let greetingMsg;
let cssStyle = {};
if (currentTime <= 11) {
     greetingMsg = " Good Morning";
     cssStyle.color = "green";
} else if (currentTime > 11 && currentTime < 19) {
     greetingMsg = " Good After-Noon"
     cssStyle.color = "orange"

} else {
     greetingMsg = " Good Night";
     cssStyle.color = " voilet"
}


ReactDom.render(

     <>
<div className = " main-div">         <h2 className="greeting"> Hello Sir , <span style={cssStyle}> {grettingMsg} </span> </h2>
</div> 

     </>,
     document.getElementById('root')
)

// GREETING CODE ENDS 


