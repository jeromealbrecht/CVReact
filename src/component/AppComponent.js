import React from 'react';
import { Image } from 'react-bootstrap';
import Mobiles from '../images/Appli_React_Native.png';
import Todo from '../images/Todolist.jpg';

const AboutComponent = () => {
	return (
		<div className="col-12 m-0 p-0 mt-5 d-flex row justify-content-center">
			<div className="col-8 boxShadow row">
				<div className="col-6 CardColor p-3">
					<h2 className="Dcolor mb-4 text-right mt-5" style={{ paddingLeft: 275 }}>
						#1<span className="text-white text-right p-3">L'adresse</span>
					</h2>
					<p className="text-white" style={{ fontSize: 20, float: 'right' }}>
						Consulter les menus du restaurant l'Adresse
					</p>
					<p className="text-white mb-2 p-0" style={{ fontSize: 17, float: 'right' }}>
					Utilisation de firebase pour récupérer les menus
					</p>
					<p className="text-white mb-5 p-0" style={{ fontSize: 17, float: 'right' }}>
						Consultation des menus avec catégories et sous-catégories
					</p>
					<h3 className="Dcolor mb-4 text-right marge text-center" style={{ marginTop: 15 }}>
						<span className="text-white text-right mt-5 p-3">React-Native/Firebase</span>
					</h3>
				</div>
				<div className="col-6 mt-3 p-3 d-flex justify-content-center">
					<Image
						src={Mobiles}
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
			<div className="col-8 boxShadow row p-0 mt-4">
			
				<div className="col-6 mt-1 p-3 d-flex justify-content-center">
					<Image
						src={Todo}
						style={{
							width: 500,
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
				<div className="col-6 CardColor pl-0">
					<h2 className="Dcolor mb-4 text-right mt-5" style={{ paddingLeft: 300 }}>
						#2<span className="text-white text-right p-3">Todolist</span>
					</h2>
					<p className="text-white" style={{ fontSize: 20, float: 'right' }}>
						Création, suppression de listes
					</p>
					
					<p className="text-white m-0 p-0" style={{ fontSize: 17, float: 'right' }}>
						Consultation des menus avec catégories et sous-catégories
					</p>
					<p className="text-white m-0 p-0" style={{ fontSize: 17, float: 'right' }}>
						première utilisation des Hooks d'états
					</p>
					<p className="text-white m-0 p-0" style={{ fontSize: 17, float: 'right' }}>
						Utilisation d'une List.Item avec React-Native-Paper
					</p>
					<p className="text-white m-0 p-0" style={{ fontSize: 17, float: 'right' }}>
						utilisation du .map() pour la List.Item
					</p>
					<h3 className="Dcolor mb-4 text-right marge text-center margeHigh">
						<span className="text-white text-right mt-5 p-3">React-Native/Paper/Firebase</span>
					</h3>
				</div>
			</div>
		</div>
		
	);
};

export default AboutComponent;
