import React, { useState } from 'react';
import wheel from '../images/wheel.jpg';
import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SkillsButton = () => {
	const navigate = useNavigate();

	const [ learnHover, setLearnHover ] = useState(false);
	console.log(learnHover);
	function renderRedirect(event) {
		event.preventDefault();
		navigate('/Formations');
	}

	return (
		<div
			className="d-flex text-center justify-content-center"
			style={{ height: 92, width: 214.25, alignItems: 'center', justifyContent: 'center' }}
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
				style={{ fontSize: 20, position: 'absolute', marginTop: 8, cursor: 'pointer' }}
			>
				Expériences <br/>
				Formations
			</p>
		</div>
	);
};

export default SkillsButton;
