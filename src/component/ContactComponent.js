import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import '../Form.css';
import IsSended from '../MailSendedComp/IsSended';

init('user_vwy1SNSdAe2jc3jKuKzsj');

// const name = 'Gmail';
const servicesID = 'service_gmail_cvja';
const TemplateID = 'template_v1ay1pn';
// const UserID = 'user_vwy1SNSdAe2jc3jKuKzsj';
// const AccessToken = '1bce9ae0f84a7be4ea18bfbc9601fbf2';

const ContactComponent = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = (data) => setInfos(data);

	const [ infos, setInfos ] = useState();
	const [ lastname, setLastname ] = useState();
	const [ mail, setMail ] = useState();
	const [ message, setMessage ] = useState();
	const [ sended, setSended ] = useState(false);

	// fonction email send

	useEffect(
		() => {
			if (infos) {
				setLastname(infos.lastname);
				setMail(infos.email);
				setMessage(infos.textarea);
				var templateParams = {
					from_name: lastname,
					from_email: mail,
					message: message
				};

				emailjs.send(servicesID, TemplateID, templateParams).then(
					(result) => {
						console.log(result.text);
						setSended(true);
					},
					(error) => {
						console.log(error.text);
					}
				);
			}
		},
		[ infos, lastname, mail, message ]
	);

	return (
		<div className="col-12 m-0 p-0 mt-5 d-flex row justify-content-center">
			

			{sended === true ? <IsSended /> : <div className="col-8 boxShadow row p-0 mt-4">
				<form onSubmit={handleSubmit(onSubmit)} className="col-12 CardColor pl-0 row">
					<div className="row">
						<h2 className="Dcolor mb-4 text-right mt-5 text-center">
							<span className="text-white text-right p-3">Contact</span>
						</h2>
						<div className="col-6 mt-5 p-4">
							{/* Input Intitulé du poste */}
							<label className="text-input textColor">
								<span className="input-icon">
									<i className="far fa-envelope" />
								</span>

								<input
									id="nameJob"
									name="lastname"
									type="text"
									placeholder="Nom"
									{...register('lastname', { required: true })}
								/>
								{errors.lastname && <span style={{ color: 'white' }}>Obligatoire</span>}
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
								{errors.firstname && <span style={{ color: 'white' }}>Obligatoire</span>}
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
								{errors.email && <span style={{ color: 'white' }}>Obligatoire</span>}
								<span className="placeholder">Email</span>
								<span className="background textColor" />
							</label>
							<div className="text-center">
								<button className="mt-2">C'est parti !</button>
							</div>
						</div>
						{/* text area  */}
						<div className="col-6">
							<label className="text-input">
								<textarea
									className="textarea"
									placeholder="Message..."
									{...register('textarea', { required: true })}
								/>
							</label>
						</div>
					</div>
				</form>
			</div>}
		</div>
	);
};

export default ContactComponent;
