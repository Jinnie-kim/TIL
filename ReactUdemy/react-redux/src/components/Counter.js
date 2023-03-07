import { useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector((state) => state.counter); // useSelector를 사용하면 자동으로 react-redux에 구독을 설정한다.
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
