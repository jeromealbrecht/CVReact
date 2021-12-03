import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BackComponent = () => {
	const navigate = useNavigate();

	function renderRedirect() {
			navigate('/');
	}

	const [ abouthover, setAbouthover ] = useState(false);
	console.log(abouthover);
	return (
		<div
			style={{ height: 92, width: 250, backgroundColor: '#3D56CC', borderTopLeftRadius: 25 }}
			onMouseEnter={() => {
				setAbouthover(true);
			}}
			onMouseLeave={() => {
				setAbouthover(false);
			}}
			onClick={renderRedirect}
		>
			{abouthover ? (
				<p className="Raleway p-3 text-dark text-center mt-1" style={{ fontSize: 28, cursor: 'pointer' }}>
					Accueil
				</p>
			) : (
				<p className="Raleway p-3 text-white text-center mt-1" style={{ fontSize: 28, cursor: 'pointer' }}>
					Accueil
				</p>
			)}
		</div>
	);
};

export default BackComponent;
