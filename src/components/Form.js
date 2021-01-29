import React from 'react';

function Form({ 
	id, 
	name=id, 
	onSubmit, 
	buttonTitle='Отправить', 
	buttonIsDisabled=true, 
	children 
}) {

	return (
		<form 
			className="form" 
			name={name} 
			id={id} 
			onSubmit={onSubmit}
			noValidate>
				{ children }
				<button 
					className="button button_style_primary" 
					type="submit" 
					disabled={buttonIsDisabled ? true : false}>
						{buttonTitle}</button>
		</form>
	)
}
export default Form;