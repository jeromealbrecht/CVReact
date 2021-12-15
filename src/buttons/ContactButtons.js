import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import phone from '../images/telephone.jpg';
import { Image } from 'react-bootstrap';

const ContactButton = () => {
	const navigate = useNavigate();

	const [ contact, setContact ] = useState(false);
	console.log(contact);
	
	function renderRedirect(event) {
		event.preventDefault()
		navigate('/Contact');
	}
	return (
		<div
			className="d-flex text-center justify-content-center"
			style={{ height: 92, width: 214.25, alignItems: 'center', justifyContent: 'center' }}
			onMouseEnter={() => {
				setContact(true);
			}}
			onMouseLeave={() => {
				setContact(false);
			}}
			onClick={renderRedirect}>
			<Image
				src={phone}
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
				Contact
			</p>
		</div>
	);
};

export default ContactButton;
