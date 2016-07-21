import React from 'react';
import Button from './btn_base';
import ButtonDropdown from './btn_dropdown';

const Buttons = () => {
	return (
		<div className="doc-section button-list">
			<h2>Buttons</h2>

			<Button className="btn" buttonText="Default Button" />
			<Button className="btn btn-primary" buttonText="Primary Button" />
			<ButtonDropdown buttonText="Make a Select" actionIcon="keyboard_arrow_down" />

		</div>
	);
};

export default Buttons;
