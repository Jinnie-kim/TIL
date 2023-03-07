import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './coutner-slice';
import authSlice from './auth-slice';

const store = configureStore({
  reducer: {
    // reducer를 개별로 적어주지만 하나의 리듀서로 통합되며 주요 리듀서를 store에 노출한다.
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
