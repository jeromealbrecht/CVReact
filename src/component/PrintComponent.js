import React from 'react';
import { Image } from 'react-bootstrap';
import Print from '../images/Print1.jpg';
import Print2 from '../images/Print2.jpg';

const PrintComponent = () => {
	return (
		<div className="col-12 m-0 p-0 mt-5 d-flex row justify-content-center">
			<div className="col-8 boxShadow row">
				<div className="col-6 CardColor p-3">
					<h2 className="Dcolor mb-4 text-center" style={{ marginTop: 100 }}>
						#1<span className="text-white p-3 ">Affiche promotionnelle</span>
					</h2>
					<p className="text-white text-center mt-4" style={{ fontSize: 20 }}>
						Objectif: promouvoir une activité professionnelle
					</p>
					<p className="text-white text-center mb-2 p-0" style={{ fontSize: 18 }}>
						Mettre en avant l'offre et les références
					</p>
					<p className="text-white text-center mb-5 p-0" style={{ fontSize: 18 }}>
						Créer un visuel attrayant et agréable
					</p>
					<p className="text-white mt-3 p-0 text-center" style={{ fontSize: 17 }}>
						Réalisé avec l'outil Canva
					</p>
				</div>
				<div className="col-6 mt-3 p-3 d-flex justify-content-center">
					<Image
						src={Print}
						style={{
							width: 300,
							opacity: 5,
							maxWidth: '100%',
							maxHeight: '100%',
							objectFit: 'cover'
						}}
					/>
				</div>
			</div>
			<div className="col-8 boxShadow row p-0 mt-4">
				<div className="col-6 p-3">
					<Image
						src={Print2}
						style={{
							opacity: 5,
							maxWidth: '100%',
							maxHeight: '100%',
							objectFit: 'cover'
						}}
						fluid
					/>
				</div>
				<div className="col-6 CardColor pl-0">
					<h2 className="Dcolor mb-4 text-center mt-5">
						#2<span className="text-white p-3">Print promotionnel</span>
					</h2>

					<p className="text-white mt-3 p-0 text-center" style={{ fontSize: 20 }}>
						Réaliser un visuel promotionnel pour le studio C&P
					</p>
					<p className="text-white mt-3 p-0 text-center" style={{ fontSize: 18 }}>
						Afin d'alimenter une campagne publicitaire payante
					</p>
					<p className="text-white mt-3 p-0 text-center" style={{ fontSize: 18 }}>
						Réalisé lors d'un stage en Community Management
					</p>
					<p className="text-white mt-3 p-0 text-center" style={{ fontSize: 17 }}>
						Réalisé avec l'outil Canva
					</p>
				</div>
			</div>
		</div>
	);
};

export default PrintComponent;
