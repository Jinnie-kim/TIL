const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

const store = redux.createStore(counterReducer); // initialize but that doesn't trigger subscribtion

const counterSubscriber = () => {
  const latestState = store.getState(); // getState 메소드는 state가 업데이트된 후 최신 상태 스냅샷을 제공한다.
  console.log(latestState);
};

store.subscribe(counterSubscriber); // redux가 실행할거임

store.dispatch({ type: 'increment' });
