import React, {useEffect} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from 'react-responsive';
import BackComponent from '../logo/BackComponent';
import ReactButton from '../buttons/ReactButton';
import AppButtons from '../buttons/AppButtons';
import PortFButton from '../buttons/PortFolioButton';
import SkillsButton from '../buttons/Skillsbutton';
import ContactButton from '../buttons/ContactButtons';
import WebComponent from '../component/WebComponent';

const Desktop = ({ children }) => {
	useEffect(() => {
		document.title = 'Jérôme Albrecht | Développeur Web & Applications Mobiles - Port-folio';
	}, []);

	const isDesktop = useMediaQuery({ minWidth: 992 });
	return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
	useEffect(() => {
		document.title = 'Jérôme Albrecht | Développeur Web & Applications Mobiles - Port-folio';
	}, []);

	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
	return isTablet ? children : null;
};
const Mobile = ({ children }) => {
	useEffect(() => {
		document.title = 'Jérôme Albrecht | Développeur Web & Applications Mobiles - Port-folio';
	}, []);

	const isMobile = useMediaQuery({ maxWidth: 767 });
	return isMobile ? children : null;
};

const Applications = () => {
	return (
		<div>
			<Desktop>
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
			</Desktop>
			<Tablet>Tablet</Tablet>
			<Mobile>Mobile</Mobile>
		</div>
	);
};

export default Applications;
