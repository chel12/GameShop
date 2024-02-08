import React from 'react';
import './GameCover.css';
const GameCover = ({image}) => {
	return (
		<img
			className="game-cover"
			
			src={`${image}`}
		/>
	);
};

export default GameCover;
