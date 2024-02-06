import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	//имя слайса
	name: 'cart',
	//первоначальное значение
	initialState: {
		itemsInCart: [],
	},
	//экшены actions
	reducers: {
		setItemInCart: (state, action) => {
			//возьми стейте и добавть туда данные из экшена
			state.itemsInCart.push(action.payload);
		},
		deleteItemFromCart: (state, action) => {
			//фильтер будет идти по текущему стейту и удалять игру на которую нажали
			//передай новый массив тех игр чей id не равен id который передали в экшен
			state.itemsInCart = state.itemsInCart.filter(
				(game) => game.id !== action.payload
			);
		},
	},
});

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
