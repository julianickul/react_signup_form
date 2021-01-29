import React from 'react';
import Input from './Input';
import Checkbox from './Checkbox'

function Field(props) {

	const {
		name, 
		type = "text", 
		label = "",
		placeholder = label,
		pattern = null,
		maxLength = null,
		required = null,
		value='',
		onChange
	} = props;

	return (
		<div className="field">
			{(function() { 
				switch (type) {
					case 'text':
					case 'email':
					case 'tel':
					case 'number':
						return <Input 
								name={name} 
								type={type} 
								placeholder={ placeholder } 
								label={ label } 
								pattern={ pattern }
								maxLength={ maxLength }
								required={ required } 
								onChange={ onChange }
								value={ value } />
					case 'checkbox':
					case 'radio':
						return <Checkbox name={name} type={type} label={label} />
					case 'select':
						return <Input name={name} type={type} />
					default:
						return null;
				}
			})()}
			
		</div>
	)
}
export default Field;