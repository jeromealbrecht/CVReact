import React, { useState } from 'react';
import print from '../images/print.jpg';
import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PortFbutton = () => {
	const navigate = useNavigate();

	const [ printhover, setPrinthover ] = useState(false);

	function renderRedirect() {
		navigate('/Print');
	}
	return (
		<div
			className="d-flex text-center justify-content-center"
			style={{ height: 92, width: 214.25, alignItems: 'center' }}
			onMouseEnter={() => {
				setPrinthover(true);
			}}
			onMouseLeave={() => {
				setPrinthover(false);
			}}
			onClick={renderRedirect}
		>
			<Image
				src={print}
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
				style={{ fontSize: 20, position: 'absolute', cursor: 'pointer', marginTop: 9 }}
			>
				Print
			</p>
		</div>
	);
};

export default PortFbutton;
