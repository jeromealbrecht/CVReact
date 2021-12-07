import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MobAccueil = () => {
	const navigate = useNavigate();

	function renderRedirect() {
			navigate('/About');
	}

	const [ abouthover, setAbouthover ] = useState(false);
	console.log(abouthover);
	return (
		<div
			style={{ height: 50, width: 150, backgroundColor: '#3D56CC', borderTopLeftRadius: 25, marginRight: 15 }}
			onMouseEnter={() => {
				setAbouthover(true);
			}}
			onMouseLeave={() => {
				setAbouthover(false);
			}}
			onClick={renderRedirect}
		>
			{abouthover ? (
				<p className="Raleway p-2 text-dark text-center" style={{ fontSize: 23.5, cursor: 'pointer' }}>
					À propos
				</p>
			) : (
				<p className="Raleway p-2 text-white text-center" style={{ fontSize: 23.5, cursor: 'pointer' }}>
					À propos
				</p>
			)}
		</div>
	);
};

export default MobAccueil;
