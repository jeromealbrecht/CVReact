import React from 'react';
import '../button.css';
import Photodev from '../images/amiens_dev.jpeg';
import { Card, Image } from 'react-bootstrap';

const AccueilDesktop = () => {
	//Redirect to
	function Linkedin() {
		window.location.href = 'https://www.linkedin.com/in/devwebapi/';
	}

	return (
		<div className="container-fluid bg-dark" style={{height: 900, maxHeight: 900}}>
			<div className="row">
				<div
					className="col-12 h-50"
					style={{
						overflow: 'hidden',
						position: 'relative',
						marginLeft: 'auto',
						marginRight: 'auto',
						width: '85%'
					}}
				>
					<Card.Img
						src={Photodev}
						style={{
							marginTop: 12,
							width: '100%',
							height: '70%',
							position: 'relative',
							objectFit: 'cover'
						}}
						alt="studioimg"
					/>
					<p className="Raleway text-white mt-2 mb-0" style={{ fontSize: 28 }}>
						Jérôme Albrecht
					</p>
					<p className="Raleway text-white" style={{ fontSize: 15 }}>
						Développeur Web & Applications Mobiles
					</p>
					<div className="di">
						<img
							src="https://img.icons8.com/color/45/000000/html-5--v2.png"
							alt="Html5"
							style={{ marginTop: 11}}
						/>
						<img
							src="https://img.icons8.com/color/45/000000/css3.png"
							alt="CSS3"
							style={{ marginTop: 11, marginLeft: 6 }}
						/>
						<Image
							src="https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo-700x700.png"
							fluid
							style={{ width: 35, marginTop: 11, marginLeft: 15 }}
							alt="Javascript"
						/>
						<Image
							src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem-700x626.png"
							fluid
							style={{ width: 35, marginTop: 11, marginLeft: 15 }}
							alt="React"
						/>
						<Image
							src="https://logos-download.com/wp-content/uploads/2016/09/PHP_logo-700x368.png"
							fluid
							style={{ width: 35, marginTop: 11, marginLeft: 15 }}
							alt="PHP"
						/>
						<img
							src="https://img.icons8.com/color/45/000000/google-firebase-console.png"
							alt="Firebase"
							style={{ width: 35, marginTop: 11, marginLeft: 14 }}
						/>
					</div>
					<div className="panel m-0 col-12 mt-4">
						<p className="Raleway text-white mt-2 mb-3" style={{ fontSize: 15 }}>
						Jérôme, 36 ans, j'ai suivi en Octobre 2020 une formation de développeur web, 
						ou j'ai obtenu<br/> le titre RNCP, Bac +2.<br/><br/>
						J'ai poursuivi avec les applications mobiles cross-plateform, ce qui m'a permis<br/>
						de m'interesser aux univers React-Native et React JS.


					</p>
						<button>Mon CV </button>
						<button onClick={Linkedin}>LinkedIn</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AccueilDesktop;
