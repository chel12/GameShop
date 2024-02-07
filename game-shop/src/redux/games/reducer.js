import { createSlice } from '@reduxjs/toolkit';

const gamesSlice = createSlice({
	//имя слайса
	name: 'games',
	//первоначальное значение
	initialState: {
		currentGame: null,
	},
	//экшены actions
	reducers: {
		setCurrentGame: (state, action) => {
			//
			state.currentGame = action.payload;
		},
	},
});

export const { setCurrentGame } = gamesSlice.actions;
export default gamesSlice.reducer;
