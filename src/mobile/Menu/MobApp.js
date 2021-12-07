import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../images/appmobile.jpg';

const MobApp = () => {
	const navigate = useNavigate();

	function renderRedirect() {
			navigate('/Web');
	}

	const [ abouthover, setAbouthover ] = useState(false);
	console.log(abouthover);
	return (
		<div
			style={{ height: 50, width: 150, backgroundColor: '#3D56CC', marginRight: 15 }}
			onMouseEnter={() => {
				setAbouthover(true);
			}}
			onMouseLeave={() => {
				setAbouthover(false);
			}}
			onClick={renderRedirect}
		>
			<img
				src={image}
				alt="Logo"
				className="d-flex"
				style={{ height: 50, width: 150, position: 'absolute' }}
			/>
			<p
				className="Raleway text-white d-flex text-center"
				style={{ fontSize: 20, position: 'absolute', cursor: 'pointer', paddingLeft:25, paddingTop:11 }}
			>
				Applications
			</p>
		</div>
	);
};

export default MobApp;

