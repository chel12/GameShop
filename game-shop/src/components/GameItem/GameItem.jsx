import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import GameBuy from '../GameBuy/GameBuy';
import GameCover from '../GameCover/GameCover';
import GameGenre from '../GameGenre/GameGenre';
import './GameItem.css';
import { setCurrentGame } from '../../redux/games/reducer';

const GameItem = ({ game }) => {
	const history = useHistory(); //запоминает историю и ссылку
	const dispatch = useDispatch();

	const handleClick = () => {
		//при клике в редаксе лежала игра на которую кликнули
		dispatch(setCurrentGame(game));
		history.push(`/app/${game.title}`); //ссылка ткая будет для игры
	};

	return (
		<div className="game-item" onClick={handleClick}>
			<GameCover image={game.image} />
			<div className="game-item__details">
				<span className="game-item__title">{game.title}</span>
				<div className="game-item__genre">
					{game.genres.map((genre) => (
						<GameGenre genre={genre} key={genre} />
					))}
				</div>
				<div className="game-item__buy">
					<GameBuy game={game} />
				</div>
			</div>
		</div>
	);
};

export default GameItem;
