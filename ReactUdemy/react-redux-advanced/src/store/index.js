import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

// const initialCartShowState = { showCart: false };

// const showCartSlice = createSlice({
//   name: 'showCart',
//   initialState: initialCartShowState,
//   reducers: {
//     showCart(state) {
//       state.showCart = !state.showCart;
//     },
//   },
// });

// export const showCartActions = showCartSlice.actions;

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
