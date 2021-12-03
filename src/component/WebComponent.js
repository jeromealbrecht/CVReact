import React from 'react';
import { Image } from 'react-bootstrap';
import Photodev from '../images/amiens_dev.jpeg';
import Mobiles from '../images/Appli_React_Native.png';
import Cds from '../images/couleurdeson.jpg';
import Dash from '../images/Dash_Amiens_Jacobins.jpg';

const WebComponent = () => {
	return (
		<div className="col-12 m-0 p-0 mt-5 d-flex row justify-content-center">
			<div className="col-8 boxShadow row p-0 mt-4">
				<div className="col-6 mt-1 p-3 d-flex justify-content-center">
					<Image
						src={Dash}
						style={{
							width: 550,
							opacity: 5,
							maxWidth: '100%',
							maxHeight: '100%',
				
							objectFit: 'cover'
						}}
					/>
				</div>
				<div className="col-6 CardColor pl-0">
					<h2 className="Dcolor mb-4 text-right mt-5" style={{ paddingLeft: 180 }}>
						#1<span className="text-white text-right p-3">Dashboard Web</span>
					</h2>
					<p className="text-white" style={{ fontSize: 20}}>
						Création d'un dashboard pour le restaurant l'Adresse, à Amiens.
					</p>

					<p className="text-white" style={{ fontSize: 15 }}>
						Réalisé avec le FrameWork React JS, expérience professionnelle en Freelance. <br/><br/>
					</p>
                    <p className="text-white mb-1" style={{ fontSize: 15 }}>
						création d'un CRUD complet, avec Firebase
					</p>
					<h3 className="Dcolor mt-5 text-center">
						<span className="text-white">React-Native/Firebase</span>
					</h3>
				</div>
			</div>
			<div className="col-8 mt-4 boxShadow row">
				<div className="col-6 CardColor pl-0">
					<h2 className="Dcolor mb-4 text-right mt-5" style={{ paddingLeft: 175 }}>
						#2<span className="text-white text-right p-3">Couleur de son</span>
					</h2>
					<p className="text-white" style={{ fontSize: 20, paddingLeft: 240 }}>
						Mon premier site Web
					</p>
					<p className="text-white mb-2 p-0" style={{ fontSize: 15, float: 'right' }}>
						Création d'un site pour un studio d'enregistrement,
					</p>
					<p className="text-white mb-2 p-0" style={{ fontSize: 15, float: 'right' }}>
						permettant d'uploader un fichier audio et de le placer
					</p>
					<p className="text-white mb-5 p-0" style={{ fontSize: 15, float: 'right' }}>
						dans le lecteur audio intégré à la page d'accueil.
					</p>

					<h3 style={{ fontSize: 19, paddingLeft: 150, color: 'white' }}>HTML/CSS/Bootstrap/PHP/MySQL</h3>
				</div>
				<div className="col-6 mt-3 p-3 d-flex justify-content-center">
					<Image
						src={Cds}
						style={{
							width: 400,
							opacity: 5,
							maxWidth: '100%',
							maxHeight: '100%',
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							objectFit: 'cover'
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default WebComponent;
