import React from 'react';
import { BiCartAlt } from 'react-icons/bi';
import './CartBlock.css';
const CartBlock = () => {
	return (
		<div className="cart-block">
			<BiCartAlt size={40} className="cart-block__icon" />
			<span className="cart-block__total-price">Price rub.</span>
		</div>
	);
};

export default CartBlock;
