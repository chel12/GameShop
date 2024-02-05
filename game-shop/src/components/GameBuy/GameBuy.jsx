import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './GameBuy.css';

const GameBuy = ({ game }) => {
	return (
		<div className="game-buy">
			<span className="game-buy__price">{game.price} руб.</span>
			<CustomButton type="primary" onClick={() => null}>
				В корзину
			</CustomButton>
		</div>
	);
};

export default GameBuy;
