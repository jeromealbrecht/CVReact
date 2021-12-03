import React, { useState } from 'react';
import image from '../images/developpeur_Amiens.jpg';
import MenuReact from '../menulogos/menuReactJS';
import { useNavigate } from 'react-router-dom';

const ReactButton = () => {
	const navigate = useNavigate();

	const [ hover, setHover ] = useState(false);
	console.log(hover);

	function renderRedirect() {
		navigate('/Web');
}

	return (
		<div
			className="d-flex text-center"
			style={{ height: 92, width: 214.25, alignItems: 'center' }}
			onMouseEnter={() => {
				setHover(true);
			}}
			onMouseLeave={()=>{
				setHover(false);
			  }}
			  onClick={renderRedirect}
		>
			<img
				src={image}
				alt="Logo"
				className="d-flex"
				style={{ height: 92, width: 214.25, position: 'absolute' }}
			/>
			<p
				className="Raleway p-3 text-white d-flex text-center shadow"
				style={{ fontSize: 20, position: 'absolute', marginLeft: 45, marginTop: 10, cursor: 'pointer' }}
			>
				Sites Web
			</p>
		</div>
	);
};

export default ReactButton;
