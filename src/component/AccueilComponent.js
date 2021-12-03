import React from 'react';
import { Image } from 'react-bootstrap';
import Dashboard from '../images/Dashboardm.png';
import Mobile from '../images/Dashboardmobile.png';

const AccueilComponent = () => {


	function Linkedin(){
		window.location.href = 'https://www.linkedin.com/in/devwebapi/'; 
	}

	return (
		<div className="col-12 d-flex m-0 p-0 mt-5 row justify-content-around">
			{/* Présentation  */}
			<div className="col-3 mt-5">
				<h2 className="Raleway text-white" style={{ fontSize: 35, marginLeft: 100 }}>
					Hi, I'm
				</h2>
				<p className="Raleway text-white" style={{ fontSize: 75, marginLeft: 110 }}>
					Jérôme
				</p>
				{/* Sous-titre  */}
				<div className="di col-4 mb-2" style={{ position: 'absolute', marginLeft: 50 }}>
					<h4 className="Raleway" style={{ color: 'white', marginLeft: 55 }}>
						Développeur Web & Mobile
					</h4>
					{/* Logos  */}
					<div className="di mt-2">
						<img
							src="https://img.icons8.com/color/70/000000/html-5--v2.png"
							alt="Html5"
							style={{ marginTop: 15 }}
						/>
						<img
							src="https://img.icons8.com/color/70/000000/css3.png"
							alt="CSS3"
							style={{ marginTop: 15 }}
						/>
						<Image
							src="https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo-700x700.png"
							fluid
							style={{ width: 60, marginTop: 15, marginLeft: 15 }}
							alt="Javascript"
						/>
						<Image
							src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem-700x626.png"
							fluid
							style={{ width: 60, marginTop: 15, marginLeft: 15 }}
							alt="React"
						/>
						<Image
							src="https://logos-download.com/wp-content/uploads/2016/09/PHP_logo-700x368.png"
							fluid
							style={{ width: 60, marginTop: 15, marginLeft: 15 }}
							alt="PHP"
						/>
						<img
							src="https://img.icons8.com/color/60/000000/google-firebase-console.png"
							alt="Firebase"
							style={{ width: 60, marginTop: 10, marginRight: 15 }}
						/>
					</div>
					<div className="panel marge" style={{ float: 'left' }}>
						<button>Mon CV </button>
						<button onClick={Linkedin}>LinkedIn</button>
					</div>
				</div>
			</div>

			<div className="col-6 m-0 floating">
				<Image
					src={Mobile}
					style={{
						width: 350,
						opacity: 5,
						maxWidth: '100%',
						maxHeight: '100%',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						objectFit: 'cover',
						position: 'absolute',
						marginTop: 128
					}}
				/>

				<Image
					src={Dashboard}
					style={{
						width: 800,
						opacity: 5,
						maxWidth: '100%',
						maxHeight: '100%',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						objectFit: 'cover',
						marginLeft: 0
					}}
				/>
			</div>
		</div>
	);
};
export default AccueilComponent;
