import React from 'react';
import phone from '../images/telephone.jpg';
import { Image } from 'react-bootstrap';

const ContactButton = () => {
	return (
		<div
			className="d-flex text-center justify-content-center"
			style={{ height: 92, width: 214.25, alignItems: 'center' }}
		>
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
				style={{ fontSize: 20, position: 'absolute', marginTop: 9 }}
			>
				Contact
			</p>
		</div>
	);
};

export default ContactButton;
