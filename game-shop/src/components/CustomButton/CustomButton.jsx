import React from 'react';
import './CustomButton.css';
const classNames = require('classnames');





const CustomButton = ({ onClick, type, children, size = 's' }) => {
	const btnClass = classNames({
		btn: true,
		'btn--secondary': type == 'secondary',
		'btn--primary': type == 'primary',
		'btn--small': size == 's',
		'btn--medium': size == 'm',
	});

	return (
		<button className={btnClass} onClick={onClick}>
			{children}
		</button>
	);
};

export default CustomButton;
