import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'
import {counterAction} from'./store/counterStore'

const Counter = () => {
  const count = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch()

  const increment = ()=>{
    dispatch(counterAction.increment())
  }
  const decrement = ()=>{
    dispatch(counterAction.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{count}</div>}
      <div>
        <button onClick={increment} >Increment</button>
        <button onClick={decrement} >decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
