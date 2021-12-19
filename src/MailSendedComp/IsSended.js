import React from 'react';
import '../mail.css';

const IsSended = () => {
	return (
		<div className="col-6 boxShadow row p-0 mt-4">
			<div className="col-12 CardColor pl-0 row">
				<div className="row">
					<h2 className="Dcolor mb-4 text-right mt-4 text-center">
						<span className="text-white text-right p-3">Contact</span>
					</h2>

					<p className="Dcolor mb-4 text-white mt-3 text-center" style={{ fontSize: 20 }}>
						Je vous remercie pour votre intérêt, <br />
						<br />
						Votre message a bien été envoyé, <br />
						je reviens vers vous dans les plus bref délais.
					</p>

					<div id="envelope_two">
						<div className="address" />
						<div className="address" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default IsSended;
