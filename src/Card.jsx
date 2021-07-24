import React from 'react';
const Card = (props) => {
	return (
		<>
		 		<div className="card">
				<img src ={props.imgsrc}/>
					<div className="card_info">
						<span className="card_catagory">{props.title}</span>
						<h3 className="card_title">{props.name}</h3>
						<a href={props.link} target="_blank" >
							<button> Watch Now</button>
						</a>
					</div>
				</div>


		</>
	)

}
 
export { Card}