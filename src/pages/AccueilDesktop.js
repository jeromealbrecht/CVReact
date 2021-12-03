import React from 'react';
import '../button.css';
import LogoComponent from '../logo/LogoComponent';
import ReactButton from '../buttons/ReactButton';
import AppButtons from '../buttons/AppButtons';
import PortFButton from '../buttons/PortFolioButton';
import SkillsButton from '../buttons/Skillsbutton';
import ContactButton from '../buttons/ContactButtons';
import AccueilComponent from '../component/AccueilComponent';

const AccueilDesktop = () => {
	
	return (
		<div className="container-fluid bg-dark" style={{ height: '100vh', maxWidth: '100%', maxHeight: '100vh' }}>
			<div className="row">
				<div className="col-md-12 m-0 p-0 mt-5">
					<header className="d-flex justify-content-center">
						<LogoComponent />
						<ReactButton />
						<AppButtons />
						<PortFButton />
						<SkillsButton />
						<ContactButton />
					</header>
					<AccueilComponent/> {/* page d'accueil */}
				</div>
			</div>
		</div>
	);
};

export default AccueilDesktop;
