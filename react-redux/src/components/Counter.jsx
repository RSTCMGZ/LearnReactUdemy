import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../store/counter';

const Counter = () => {

  const counter = useSelector((state) => state.counter.value)
  const showCounter = useSelector((state) => state.counter.showCounter)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  };
  const increaseHandler = () => {
    dispatch(counterActions.increment({ amount: 5 }))
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement())

  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main>
      <h1>Redux Counter</h1>
      <b> {showCounter && counter} </b> <br />
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increase by 5</button>
      <button onClick={decrementHandler}>Decrement</button> <br />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
