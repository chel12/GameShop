import HomePage from './pages/Home/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import { store } from './redux/store';
import GamePage from './pages/GamePage/GamePage';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="App">
					<Header />
					<Routes>
						<Route path="/" element={<HomePage />} />
					</Routes>
					<Routes>
						<Route path="/app/:title" element={<GamePage />} />
					</Routes>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
//! app/:title парамсы название перменной чтобы добравться до неё через useParams
