import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoComponent = () => {
	const navigate = useNavigate();

	function renderRedirect() {
			navigate('/About');
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
					À propos
				</p>
			) : (
				<p className="Raleway p-3 text-white text-center mt-1" style={{ fontSize: 28, cursor: 'pointer' }}>
					À propos
				</p>
			)}
		</div>
	);
};

export default LogoComponent;
