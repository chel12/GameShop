import React from 'react';
import './GameCover.css';
const GameCover = ({ image =''}) => {
	return (
		<div
			className="game-cover"
			styles={{ backgroundImage: `url(${image})` }}
		/>
	);
};

export default GameCover;
