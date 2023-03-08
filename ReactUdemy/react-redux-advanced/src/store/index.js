import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialCartShowState = { showCart: false };

const cartSlice = createSlice({
  name: 'showCart',
  initialState: initialCartShowState,
  reducers: {
    showCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const showCartActions = cartSlice.actions;

const store = configureStore({ reducer: cartSlice.reducer });

export default store;
