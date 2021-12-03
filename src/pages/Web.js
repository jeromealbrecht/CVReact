import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackComponent from '../logo/BackComponent';
import ReactButton from '../buttons/ReactButton';
import AppButtons from '../buttons/AppButtons';
import PortFButton from '../buttons/PortFolioButton';
import SkillsButton from '../buttons/Skillsbutton';
import ContactButton from '../buttons/ContactButtons';
import WebComponent from '../component/WebComponent';

const Applications = () => {
	return (
		<div className="container-fluid bg-dark" style={{ height: '200vh', maxWidth: '100%' }}>
			<div className="row">
				<div className="col-md-12 m-0 p-0 mt-5">
					<header className="d-flex justify-content-center">
						<BackComponent />
						<ReactButton />
						<AppButtons />
						<PortFButton />
						<SkillsButton />
						<ContactButton />
					</header>
					<WebComponent /> {/* page web */}
				</div>
			</div>
		</div>
	);
};

export default Applications;
