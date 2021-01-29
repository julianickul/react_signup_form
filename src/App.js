import './App.scss';

import React, { useState, useEffect } from 'react';

import Dialog from './components/Dialog';
import Form from './components/Form';
import Input from './components/Input';
import Checkbox from './components/Checkbox';
import Select from './components/Select';

function App() {
	const formId = 'sign_up_form';
	const selectLangOptions =  ["Язык", "Русский", "Английский", "Китайский", "Испанский"];

	const [buttonIsDisabled, setButtonIsDisabled] = useState(false);
	const [inputValues, setInputValues] = useState({});
	const [validationMessages, setValidationMessages] = useState({
		name: '',
		email: '',
		phone: '',
		accept: ''
	});

	function setError(field) {
		setInputValues(prevState => ({ ...prevState, [field.name]: field.value })); 
		setValidationMessages(prevState => ({ ...prevState, [field.name]: field.validationMessage }));
	}

	function handleInputChange(e) {
		const input = e.target;
		setError(input);
	}

	function handlerSubmitForm(event) {
		event.preventDefault();
		const form = event.target
		const formFields = Array.from(form.querySelectorAll('input, select'));
		formFields.forEach(field => {
			if (!field.validity.valid) setError(field);
		})
	}

	useEffect(()=> {
		const buttonIsDisabled = Object.values(validationMessages).some(msg => ( msg.length > 0 ));
		setButtonIsDisabled(buttonIsDisabled);
	}, [validationMessages])

	return (
		<div id="app" className="app">
			<Dialog title="Регистрация" subtitle={<>Уже есть аккаунт? <a href="/">Войти</a></>}>
				<Form 
					name={formId} 
					id={formId} 
					onSubmit={handlerSubmitForm} 
					buttonTitle="Зарегистрироваться"
					buttonIsDisabled={buttonIsDisabled}>

					<div className="form__item">
						<Input 
							type="text" 
							name="name" 
							placeholder="Введите Ваше имя" 
							label="Имя" 
							pattern="^[a-zA-Zа-яА-Я -]+$"
							maxLength="255"
							required={true}
							value={inputValues.name}
							onChange={handleInputChange}
							validationMessage={validationMessages.name} />
					</div>

					<div className="form__item">
						<Input 
							type="email" 
							name="email" 
							placeholder="Введите ваш email" 
							label="Email"
							required={true}
							value={inputValues.email}
							onChange={handleInputChange}
							validationMessage={validationMessages.email} />
					</div>

					<div className="form__item">
						<Input 
							type="tel" 
							name="phone" 
							placeholder="Введите номер телефона" 
							label="Номер телефона" 
							pattern="\+?[0-9]{1}\(?-?[0-9]{3}\)?-?[0-9]{3}-?[0-9]{2}-?[0-9]{2}"
							required={true} 
							value={inputValues.phone}
							onChange={handleInputChange}
							validationMessage={validationMessages.phone} />
					</div>
					
					<div className="form__item">
						<Select 
							label="Язык" 
							options={selectLangOptions}
							onChange={handleInputChange} />
					</div>

					<div className="form__item">
						<Checkbox 
							type="checkbox" 
							name="accept" 
							label={<>Принимаю <a href='/'>условия</a> использования</>} 
							required={true} 
							value={inputValues.accept}
							onChange={handleInputChange}
							validationMessage={validationMessages.accept} />
					</div>

				</Form>
			</Dialog>
		</div>
	);
}

export default App; 