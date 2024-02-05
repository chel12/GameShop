import React from 'react';
import GameItem from '../../components/GameItem/GameItem';
import './HomePage.css';

const GAMES = [
	{
		image: '../../img/game/Fifa23.jpg',
		title: 'FIFA 23',
		genres: ['Симуляторы', 'Спорт'],
		price: 2299,
		video: 'https://www.youtube.com/watch?v=o3V-GvvzjE4',
		id: 1,
		description:
			'EA SPORTS™ FIFA 23 — величайшая игра о FIFA компании EA на данный момент. Это целый мир достоверного футбола: более 19 000 игроков, более 700 мужских и женских команд, 100 стадионов и более 30 лиг. В игре представлены клубные и национальные соревнования: Лига чемпионов УЕФА, Лига Европы УЕФА, Лига конференций УЕФА, кубок Либертадорес, Южноамериканский кубок, Премьер-Лига, Бундеслига и Ла Лига. Также можно будет участвовать в мужских и женских турнирах FIFA World Cup™. Женские футбольные клубы появились в FIFA впервые, и у них специальная анимация HyperMotion 2.',
	},
	{
		image: '../../img/game/GTA5.jpg',
		title: 'Grand Theft Auto V',
		genres: ['Экшены', 'Приключения'],
		price: 1049,
		video: 'https://www.youtube.com/watch?v=G-7i4mpz7CQ',
		id: 2,
		description:
			'Grand Theft Auto V — компьютерная игра из серии Grand Theft Auto в жанре Action, разработанная компанией Rockstar North. Также известна как GTA 5 или GTA V. Это пятнадцатая игра в серии. Действия игры разворачиваются в городе Лос-Сантос, а также в сельской и пустынной местностях штата Сан-Андреас.',
	},
	{
		image: '../../img/game/AgeofWonders4.jpg',
		title: 'Age of Wonders 4',
		genres: ['Стратегии'],
		price: 2049,
		video: 'https://www.youtube.com/watch?v=0kVYvEywfzA',
		id: 3,
		description:
			'Age of Wonders 4 — компьютерная игра в жанре пошаговой стратегии (4X) с элементами RPG, разработанная голландской студией Triumph Studios и выпущенная шведской компанией Paradox Interactive 2 мая 2023 года для платформ Windows, Xbox Series X/S и PlayStation 5.',
	},
	{
		image: '../../img/game/Destiny2LightfallAnnualPass.jpg',
		title: 'Destiny 2 – Lightfall + Annual Pass',
		genres: ['Экшены', 'Приключения'],
		price: 3099,
		video: 'https://www.youtube.com/watch?v=Lge5OMeSCW8',
		id: 4,
		description:
			'Включает «Конец Света», новый рейд, два подземелья, которые появятся в 21 и 23 сезонах, новый экзотический «Спэрроу», катализатор и украшение для «Ртутной бури», а также абонементы 20, 21, 22 и 23 сезонов.',
	},
	{
		image: '../../img/game/UNCHARTED.jpg',
		title: 'UNCHARTED: Legacy of Thieves Collection',
		genres: ['Приключения'],
		price: 1899,
		video: 'https://www.youtube.com/watch?v=ws1cLs9dKMs',
		id: 5,
		description:
			'Особенности Uncharted: Legacy of Thieves Collection — сборник игр, который включает в себя Uncharted 4: A Thiefs End и Uncharted: The Lost Legacy. В нём имеются три режима производительности, которые позволяют игроку расставить приоритеты между качеством изображения и производительностью.',
	},
	{
		image: '../../img/game/Battlefield2042.jpg',
		title: 'Battlefield 2042',
		genres: ['Шутеры', 'Экшены'],
		price: 1499,
		video: 'https://www.youtube.com/watch?v=ASzOzrB-a9E',
		id: 6,
		description:
			'Описание Battlefield 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. Отправляйтесь в захватывающие многопользовательские битвы как на масштабных полях сражений, так и в закрытых помещениях, взяв на вооружение передовые военные технологии.',
	},
];

const HomePage = () => {
	return (
		<div className="home-page">
			{GAMES.map((game) => (
				<GameItem game={game} key={game.id} />
			))}
		</div>
	);
};

export default HomePage;
