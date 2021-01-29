import React from 'react';

function Checkbox({ 
	name, 
	type="text", 
	label='', 
	required=null, 
	value='',
	onChange,
	validationMessage=''
}) {
	
	return (
		<div className="field field_type_checkbox">
			<label className="field__label field__label_type_checkbox">
				<input 
					className="input input_type_checkbox"
					name={ name } 
					type={ type } 
					required={ required }
					onChange={ onChange }
					value={ value }
					/>
				<span className="field__label-text">{ label }</span>
			</label>
			{(validationMessage.length > 0) && <div className="field__error">{validationMessage}</div>}
		</div>
	)
}
export default Checkbox;