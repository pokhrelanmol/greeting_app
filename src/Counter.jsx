import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Counter = () => {
	// styling

	const main = {
		display: 'flex',
		width: '100%',
		height: '100vh',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		background: 'gray',
	};

	let [initialNum, updatedNum] = useState(0);

	return (
		<>
			<div style={main}>
				<h3> {initialNum}</h3>
				<Tooltip title="Add" aria-label="add">
					<Button
						style={{ background: 'white', color: 'black' }}
						onClick={() => {
							updatedNum(++initialNum);
						}}
					>
						<AddIcon />
					</Button>
				</Tooltip>

				<Tooltip title="Delete">
					<Button
						style={{ background: 'white', color: 'black', marginTop: '1rem' }}
						onClick={() => {
							initialNum <= 0 ? alert('zero is limit') : updatedNum(--initialNum);
						}}
					>
						<RemoveIcon />
					</Button>
				</Tooltip>
			</div>
		</>
	);
};
export default Counter;
