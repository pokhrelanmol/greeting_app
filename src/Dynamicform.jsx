import React, { useState } from 'react';

const DynamicForm = () => {
	let [fullName, setFullName] = useState({
		fname: '',
		lname: '',
		email: '',
		mobile: '',
		age: '',
	});
	const onChangeEvent = (event) => {
		// const value = event.target.value;
		// const name = event.target.name;
		const { name, value } = event.target;
		setFullName((previousVal) => {
			return {
				...previousVal,
				[name]: value,
			};
		});
	};

	const showNameOnClick = (e) => {
		e.preventDefault();
		alert('summited');
	};

	return (
		<>
			<div className="form-div">
				<form onSubmit={showNameOnClick} autoComplete="off">
					<h1 style={{ textTransform: 'uppercase' }} className="form-heading">
						{`  Hello , ${fullName.fname}  `} {fullName.lname}
					</h1>
					<h3>{fullName.email}</h3>
					<h4>{fullName.mobile}</h4>
					<p> {fullName.age}</p>
					<input
					  autoComplete="none"
						type="text"
						className="name-input"
						onChange={onChangeEvent}
						name="fname"
						value={fullName.fname}
						placeholder=" First Name"
					/>
					<input
						type="text"
						className="name-input"
						onChange={onChangeEvent}
						name="lname"
						value={fullName.lname}
						placeholder="Last Name"
					/>{' '}
					<input
						type="text"
						className="name-input"
						onChange={onChangeEvent}
						name="email"
						value={fullName.email}
						placeholder="email"
					/>{' '}
					<input
						type="text"
						className="name-input"
						onChange={onChangeEvent}
						name="mobile"
						value={fullName.mobile}
						placeholder="mobile no"
					/>
					<input
						type="text"
						className="name-input"
						onChange={onChangeEvent}
						name="age"
						value={fullName.age}
						placeholder="age"
					/>
					<input type="submit" className="submit-btn" />
				</form>
			</div>
		</>
	);
};
export default DynamicForm;
