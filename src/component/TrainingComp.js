import React from 'react';
import { Image } from 'react-bootstrap';
import diplôme from '../images/diplôme.png';
import attestation from '../images/reactnative.png';

const PrintComponent = () => {
	return (
		<div className="col-12 m-0 p-0 mt-5 d-flex row justify-content-center">
			<div className="col-8 boxShadow row">
				<div className="col-6 CardColor p-3">
					<p className="Dcolor mb-3 text-center" style={{ fontSize: 27 }}>
						Mai-Août 2021 <br /> <span className="text-white p-3 ">Développeur d'applications Mobiles</span>
					</p>
					<p className="text-white mb-4 text-center" style={{ fontSize: 17.5 }}>
						École du numérique, La Manu, Amiens.
						<br />
						<br />Formation au développement mobile: Méthodes Agiles, Maquettage UI, Acquérir les principes
						de la programmation orientée objet, Maîtriser le Framework React-Native.
					</p>
				</div>
				<div className="col-6 p-3 d-flex justify-content-center">
					<Image
						src={attestation}
						style={{
							width: '100%',
							maxWidth: '100%',
							maxHeight: '100%',
							cursor: 'pointer'
						}}
					/>
				</div>
			</div>
			<div className="col-8 boxShadow row p-0 mt-4">
				<div className="col-6 p-3">
					<Image
						src={diplôme}
						style={{
							width: '100%',
							opacity: 5,
							maxWidth: '100%',
							maxHeight: '100%',
							objectFit: 'cover',
							cursor: 'pointer'
						}}
					/>
				</div>
				<div className="col-6 CardColor pl-0">
					<p className="Dcolor text-center mt-3" style={{ fontSize: 27 }}>
						Sept. - Mars 2021 <br />
						<span className="text-white">Développeur web et web mobile</span>
					</p>

					<p className="text-white mt-3 p-0 text-center" style={{ fontSize: 20 }}>
						Développeur web et web mobile
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
