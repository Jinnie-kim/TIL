import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';

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
  },
});

export default store;
