import React from 'react';
import { useForm } from 'react-hook-form';
import '../Form.css';

const ContactComponent = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div className="col-12 m-0 p-0 mt-5 d-flex row justify-content-center">
			<div className="col-8 boxShadow row p-0 mt-4">
				<form onSubmit={handleSubmit(onSubmit)} className="col-12 CardColor pl-0 row">
					<div className="row">
						<h2 className="Dcolor mb-4 text-right mt-5 text-center">
							<span className="text-white text-right p-3">Contact</span>
						</h2>
						<div className="col-6 mt-5">
							{/* Input Intitulé du poste */}
							<label className="text-input textColor">
								<span className="input-icon">
									<i className="far fa-envelope" />
								</span>

								<input id="nameJob" type="text" placeholder="Nom" {...register('lastname')} />
								{errors.exampleRequired && <span style={{ color: 'white' }}>Champ obligatoire</span>}
								<span className="placeholder textColor">Nom</span>
								<span className="background textColor" />
							</label>
							{/* Input Entreprise */}
							<label className="text-input">
								<input
									id="firstname"
									type="text"
									placeholder="Prénom"
									{...register('firstname', { required: true })}
								/>
								{errors.exampleRequired && <span style={{ color: 'white' }}>Champ obligatoire</span>}
								<span className="placeholder">Prénom</span>
								<span className="background textColor" />
							</label>
							<label className="text-input">
								<input
									id="Entreprise"
									name="Entreprise"
									type="email"
									placeholder="Prénom"
									{...register('email', { required: true })}
								/>
								{errors.exampleRequired && <span style={{ color: 'white' }}>Champ obligatoire</span>}
								<span className="placeholder">Email</span>
								<span className="background textColor" />
							</label>
							<div className="text-center">
								<button className='mt-2'>C'est parti !</button>
							</div>
						</div>
						{/* text area  */}
						<div class="col-6">
						<label className="text-input">


							<textarea class="textarea" placeholder="Message..." {...register('textarea', { required: true })} />

						</label>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactComponent;

