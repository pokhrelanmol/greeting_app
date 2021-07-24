import React, { useState } from 'react';
// controlled component in react using hooks 
const Forms = () => {
	let [fullName, setFullName] = useState({
		fname: "",
		lname: ""

	});
	const onChangeEvent= (event) => {
		const value = event.target.value
		const name= event.target.name
		setFullName((preVal) => {
			if (name === "fname") {
				return{
				fname: value,
			lname: preVal.lname,
}
			} else if (name === "lname") {
				return {
					fname: preVal.lname,
					lname: value
				}
			}
			})
	};
	
	const showNameOnClick = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<div className="form-div">
				<form onSubmit={showNameOnClick}>
					<h1 style={{ textTransform: 'uppercase' }} className="form-heading">
						{fullName.fname} {fullName.lname}
					</h1>
					<input type="text" name = "fname" className="name-input" onChange={onChangeEvent} value={fullName.fname} placeholder='Last Name'/>
					<input type="text" name = "lname" className="name-input" onChange={onChangeEvent} value={fullName.lname} placeholder=' First Name'/>
					<input type="submit" className="submit-btn" />
				</form>
			</div>
		</>
	);
};
export default Forms;
