import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from '../src/pages/AboutDesktop';
import Applications from '../src/pages/Applications';
import Web from '../src/pages/Web';
import Print from '../src/pages/Print';
import Formations from '../src/pages/FormationsDesktop';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<App />} />
				<Route exact path="/About" element={<About />} />
				<Route exact path="/Applications" element={<Applications />} />
				<Route exact path="/Web" element={<Web />} />
				<Route exact path="/Print" element={<Print />} />
				<Route exact path="/Formations" element={<Formations />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
