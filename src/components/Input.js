import React from 'react';

function Input(props) {
	const { 
		name, 
		type="text", 
		label='', 
		placeholder=label, 
		pattern=null, 
		maxLength=null, 
		required=null, 
		value='',
		onChange,
		validationMessage=''
	} = props;

	return (
		<div className="field">
			<label>
				<span className="field__label">{label}</span>
				<input 
					className="input input_type_text"
					name={name} 
					type={type} 
					placeholder={ placeholder }
					pattern={ pattern }
					maxLength={ maxLength }
					required={ required }
					onChange={ onChange }
					value={ value }
					/>
			</label>
			{(validationMessage.length > 0) && <div className="field__error">{validationMessage}</div>}
		</div>
	)
}
export default Input;