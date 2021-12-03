import React from 'react';
import { Image } from 'react-bootstrap';
import Photodev from '../images/amiens_dev.jpeg';
import { Card } from 'react-bootstrap';

const AboutComponent = () => {
	return (
		<div class="col-12 m-0 p-0 mt-5 row">
			<div className="div d-flex boxShadow" style={{ width: 1200, height: 500, marginLeft: 175 }}>
				<Card.Img
					src={Photodev}
					style={{
						marginTop: 12,
						width: 450,
						height: 474,
						position: 'relative'
					}}
					alt="studioimg"
				/>
				<div className="col-8 text-center">
					<h1 className="text-white mt-3">Qui suis-je ?</h1>
					<p className="text-white mt-3" style={{ fontSize: 19 }}>
						Développeur Web & React Native{' '}
					</p>
					<p className="text-white mt-2" style={{ fontSize: 17 }}>
						Jérôme, 36 ans, créatif, j'ai suivi la voie du développement.<br />
						<br />
						🔸 Ce que je fais :{' '}
					</p>
					<p className="text-white mt-2" style={{ fontSize: 17 }}>
						✔️ Maquettage (Zoning, WireFrame) pour la partie Front-end <br />
						✔️ Développement Web/Mobile (Android/Ios) <br />
						✔️ FrameWorks React JS et Native <br />
						✔️ Bootstrap classique et Bootstrap React <br />
						✔️ BDD avec Firebase, MySQL, PhpMyAdmin <br />
						✔️ Capacité d'adaptation à d'autres Frameworks <br />
						<br />
						✔️ Sens du service, de la communication et de la discrétion <br />
						✔️ Habitué de la relation clientèle, prêt à échanger avec le/les client(s)<br />
						🤝 Force de proposition
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutComponent;