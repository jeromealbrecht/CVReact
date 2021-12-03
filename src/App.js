import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import AccueilDesktop from './pages/AccueilDesktop';

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


const App = () => (
	<div>
		{/* call each components here  */}
		<Desktop>
			<AccueilDesktop /> 		{/* call Accueil Desktop  */}
		</Desktop>
		<Tablet>Tablet</Tablet>
		<Mobile>Mobile</Mobile>
	</div>
);

export default App;
