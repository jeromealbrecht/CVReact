import React from 'react';
import imageapp from '../images/appmobile.jpg';
import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AppButtons = () => {
	const navigate = useNavigate();

	function renderRedirect(event) {
		event.preventDefault();
		navigate('/Applications');
	}

	return (
		<div
			className="d-flex text-center justify-content-center"
			style={{ height: 92, width: 214.25, alignItems: 'center' }}
			onClick={renderRedirect}
		>
			<Image src={imageapp} style={{ height: 92, width: 214.25, opacity: 5 }} fluid />
			<p
				className="Raleway p-2 text-white d-flex text-center"
				style={{ fontSize: 20, position: 'absolute', cursor: 'pointer', marginTop: 9 }}
			>
				Applications
			</p>
		</div>
	);
};

export default AppButtons;
