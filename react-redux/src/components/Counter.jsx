import { useDispatch, useSelector } from 'react-redux'


const Counter = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' })
  };
  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' })

  };
  const toggleCounterHandler = () => { };

  return (
    <main>
      <h1>Redux Counter</h1>
      <b> {counter} </b> <br />
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button> <br />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
