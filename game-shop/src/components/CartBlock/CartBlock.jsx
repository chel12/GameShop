import React from 'react';
import { useState } from 'react';
import { BiCartAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux'; //чтобы в корзину достать данные
import CartMenu from '../CartMenu/CartMenu';
import ItemsInCart from '../ItemsInCart/ItemsInCart';
import { calcTotalPrice } from '../utils/utils';
import './CartBlock.css';
//корзина
const CartBlock = () => {
	const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
	const items = useSelector((state) => state.cart.itemsInCart); //слайс с карточками
	const totalPrice = calcTotalPrice(items);
	//проходит на итему и изменяет каждое значение которое мы передаем
	//1 аргумент acc(значение) 2 где делать

	return (
		<div className="cart-block">
			<ItemsInCart quantity={items.length} />
			<BiCartAlt
				size={40}
				className="cart-block__icon"
				onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
			/>
			{totalPrice > 0 ? (
				<span className="cart-block__total-price">
					{totalPrice} руб.
				</span>
			) : null}
			{isCartMenuVisible && (
				<CartMenu items={items} onClick={() => null} />
			)}
		</div>
	);
};

export default CartBlock;
