import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';
import CustomButton from '../CustomButton/CustomButton';
import './GameBuy.css';

const GameBuy = ({ game }) => {
	const dispatch = useDispatch();
	// надо узнать в корзине или нет текущий элемент
	const items = useSelector((state) => state.cart.itemsInCart);
	//some возвращает значение true или false
	//проверка
	const isItemInCart = items.some((item) => item.id === game.id);
	const handleClick = (e) => {
		e.stopPropagation(); //остановка всплытия события
		if (isItemInCart) {
			dispatch(deleteItemFromCart(game.id));
		} else {
			dispatch(setItemInCart(game));
		}
	};
	return (
		<div className="game-buy">
			<span className="game-buy__price">{game.price} руб.</span>
			<CustomButton
				type={isItemInCart ? 'secondary' : 'primary'}
				onClick={handleClick}>
				{isItemInCart ? 'Убрать из корзины' : 'В корзину'}
			</CustomButton>
		</div>
	);
};

export default GameBuy;
