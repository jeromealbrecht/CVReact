import React from 'react';
import MobAccueil from './Menu/MobAccueil';
import MobWeb from './Menu/MobWeb';
import MobApp from './Menu/MobApp';

const TabletDesk = () => {
	return (
		<div className="container-fluid bg-dark m-0 p-0" style={{ maxHeight: 490, height: 375 }}>
			<div className="row">
				<div className="col-12 text-white mt-4 row">
				<header className="d-flex justify-content-center m-0 p-0">
						<MobAccueil />
						<MobWeb />
						<MobApp />
						<MobAccueil />
					
					</header>
			</div>
		</div>
		</div>
	);
};

export default TabletDesk;
