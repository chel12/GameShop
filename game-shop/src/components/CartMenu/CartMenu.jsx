import React from 'react';
import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';
import { calcTotalPrice } from '../utils/utils';
import './CartMenu.css';

//всплывает при нажатие на корзину\
//блок с кнопкой оформить и ценой
const CartMenu = ({ items, onClick }) => {
	return (
		<div className="cart-menu">
			<div className="cart-menu__games-list">
				{items.length > 0
					? items.map((game) => (
							<CartItem
								key={game.title}
								price={game.price}
								title={game.title}
								id={game.id}
							/>
					  ))
					: 'Корзина пуста'}
			</div>
			{items.length > 0 ? (
				<div className="cart-menu__arrange">
					<div className="cart-menu__total-price">
						<span>Итого:</span>
						<span>{calcTotalPrice(items)} руб.</span>
					</div>
					<CustomButton type="primary" size="m" onClick={onClick}>
						Оформить заказ
					</CustomButton>
				</div>
			) : null}
		</div>
	);
};

export default CartMenu;
