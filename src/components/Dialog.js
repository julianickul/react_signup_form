import React from 'react';

function Dialog({title, subtitle=null, children }) {

	return (
		<div className="dialog">
			<div className="dialog__header">
				<h2 className="dialog__title">{title}</h2>
				{ subtitle && <p className="dialog__subtitle">{ subtitle }</p> } 
			</div>
			{ children }
		</div>
	)
}
export default Dialog;