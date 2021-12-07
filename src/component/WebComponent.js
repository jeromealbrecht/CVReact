import React from 'react';
import { Image } from 'react-bootstrap';
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
					<div class="col-12">
						<h2 className="Dcolor mb-4 text-right mt-5" style={{ paddingLeft: 180 }}>
							#1<span className="text-white text-right p-3">Dashboard Web</span>
						</h2>
						<p className="text-white m-0" style={{ fontSize: 18, float: 'right' }}>
							Création d'un dashboard pour le restaurant
						</p>
						<p className="text-white" style={{ fontSize: 18, float: 'right' }}>
							l'Adresse, à Amiens.
						</p>
					</div>
					<div class="col-12">
						<p className="text-white m-0" style={{ fontSize: 18, float: 'right' }}>
							Authentification par mail et mot de passe,
						</p>
						<p className="text-white m-0 p-0" style={{ fontSize: 18, float: 'right' }}>
							enregistrement d'un utilisateur et <br/> création des menus via l'interface
						</p>
						<p className="text-white" style={{ fontSize: 17, float: 'right', marginTop: 110 }}>
							
							Réalisation d'un CRUD. <br/>
							React-JS/CSS/React-dom-router/Firebase
						</p>
						
						
					</div>
				</div>
			</div>
			<div className="col-8 mt-4 boxShadow row">
				<div className="col-6 CardColor pl-0">
					<h2 className="Dcolor mb-4 text-right mt-5" style={{ paddingLeft: 150 }}>
						#2<span className="text-white text-right p-3">Couleur de son</span>.fr
					</h2>
					<p className="text-white" style={{ fontSize: 20, paddingLeft: 235 }}>
						Mon premier site Web
					</p>
					<p className="text-white mb-2 p-0" style={{ fontSize: 18, float: 'right' }}>
						Création d'un site pour un studio d'enregistrement,
					</p>
					<p className="text-white mb-2 p-0" style={{ fontSize: 18, float: 'right' }}>
						permettant d'uploader un fichier audio et de le placer
					</p>
					<p className="text-white mb-5 p-0" style={{ fontSize: 18, float: 'right' }}>
						dans le lecteur audio intégré à la page d'accueil.
					</p>

					<h3 style={{ fontSize: 19, paddingLeft: 150, color: 'white' }}>HTML/CSS/JS/Bootstrap/PHP/MySQL</h3>
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
