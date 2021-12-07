import React, { useState } from 'react';
import wheel from '../images/wheel.jpg';
import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SkillsButton = () => {
	const navigate = useNavigate();

	const [ learnHover, setLearnHover ] = useState(false);
	
	function renderRedirect() {
		navigate('/Formations');
	}

	return (
		<div
			className="d-flex text-center justify-content-center"
			style={{ height: 92, width: 214.25, alignItems: 'center' }}
			onMouseEnter={() => {
				setLearnHover(true);
			}}
			onMouseLeave={() => {
				setLearnHover(false);
			}}
			onClick={renderRedirect}
		>
			<Image
				src={wheel}
				style={{
					width: '100%',
					opacity: 5,
					maxWidth: '100%',
					maxHeight: '100%',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					objectFit: 'cover'
				}}
			/>
			<p
				className="Raleway p-2 text-white d-flex text-center"
				style={{ fontSize: 20, position: 'absolute', marginTop: 9, cursor: 'pointer' }}
			>
				Formations
			</p>
		</div>
	);
};

export default SkillsButton;
