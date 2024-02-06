import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/reducer';

//стор и слайсы к нему, в слайсах экщены и редьюсер
export const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});
