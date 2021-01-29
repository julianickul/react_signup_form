import React, { useState } from "react";

function Select({label, options, onChange}) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(options[0]);

	const toggling = () => setIsOpen(!isOpen);

	const onOptionClicked = value => () => {
		setSelectedOption(value);
		setIsOpen(false);
	};

	return (
		<div className="field">
			<label>
				<span className="field__label">{label}</span>
				<select value={selectedOption} className="is-hidden" onChange={onChange}>
					{options.map(option => (
						<option value={option} key={Math.random()}>
						{option}
						</option>
					))}
				</select>
				<div className={`select-box ${ isOpen ? `select-box_is-opened`: null }`}>
					<div className='select-box__toggler' onClick={toggling}>
					{selectedOption || ""}
					</div>
					{isOpen && (
					<div className="select-box__options-container">
						<ul className="select-box__options-list">
						{options.map(option => (
							<li className="select-box__option" onClick={onOptionClicked(option)} key={Math.random()}>
							{option}
							</li>
						))}
						</ul>
					</div>
					)}
				</div>
			</label>
		</div>
	);
}

export default Select;