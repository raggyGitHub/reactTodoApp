import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effect.css';

export const Simpleform = () => {

	const [formState, setFormState] = useState({
		name: '',
		email: ''
	});

	const { name, email } = formState;

	useEffect(() => {
		//console.log('hey !');
	}, []);

	useEffect(() => {
		//console.log('formState cambió');
	}, [formState]);

	useEffect(() => {
		//console.log('formState cambió');
	}, [email]);

	const handleInputChange = ({ target }) => {
		setFormState({
			...formState,
			[target.name]: target.value
		});
	}

	return (
		<>
			<h1>useEffect</h1>
			<hr />

			<div className="form-group">
				<input
					type="text"
					name="name"
					className="form-control"
					placeholder="Tu nombre"
					autoComplete="off"
					value={name}
					onChange={handleInputChange}
				/>
			</div>

			<div className="form-group">
				<input
					type="text"
					name="email"
					className="form-control mt-4"
					placeholder="email@gmail.com"
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				/>
			</div>

			{(name == '123') && <Message />}
		</>
	)
}
