import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialCartShowState = { showCart: false };

const showCartSlice = createSlice({
  name: 'showCart',
  initialState: initialCartShowState,
  reducers: {
    showCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const showCartActions = showCartSlice.actions;

const store = configureStore({ reducer: showCartSlice.reducer });

export default store;
