import React from 'react';
import { useState } from 'react';import './Accordion.css'
function MyAccordion(props) {
	let { question, answer } = props;
	let[show,setShow] = useState(false)
	return (
		<>
		<div className="main-heading">
				<p onClick={() => setShow(!show)} className= "btn"> { show? "-" : "+"   } </p>
		<h3>{ question}  </h3>	
			
			
			</div>
			{show && 
			
				<p className="answer"> {answer}</p>
			}
			
		</>
	);
}

export default MyAccordion;