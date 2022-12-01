import { useState, useEffect } from "react";
import Button from "../components/Button";
import {useSelector,useDispatch} from 'react-redux'
import{increment, decrement} from '../store/sclies/CounterSclie'

function CounterLayout() {
  //Create a state
  // const [counter, setCounter] = useState(0);
  // const [counter2, setCounter2] = useState(0);
  //using react state
  const dispatch = useDispatch();
  const {value:counter}= useSelector((store)=> store.counter);

  //Lifecycle methods
  //Runs everytime
  // useEffect(() => {
  //   console.log("Component initialized and mounted");
  // })

  //Runs only the first time when component is loaded
  // useEffect(() => {
  //   console.log("Component initialized and mounted");

  // //Runs when component is unmounted
  //   return () => {
  //     console.log("Component unmounted")
  //   }
  // }, [])

  //Only runs when counter is updated
  // useEffect(() => {
  //   console.log("Counter updated")
  // }, [counter]);
  

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement())
  };

  // const handleReset = () => {
    // setCounter2(0);
  // };

  //2nd counter
  // const handleIncrement2 = () => {
    // setCounter2(counter2 + 1);
  // };
  // const handleDecrement2 = () => {
    // setCounter2(counter2 - 1);
  // };

  // const handleReset2 = () => {
    // setCounter2(0);
  // };

  return (
    <>
      <div>
        <h1>1st Counter</h1>
        <Button label="Decrement" clickHandler={handleDecrement} className="btn-red"/>
        <p>{counter}</p>
        <Button label="Increment" clickHandler={handleIncrement} />
        {/* <Button label="Reset" clickHandler={handleReset} /> */}
      </div>

      {/* <div> */}
        {/* <h1>2nd Counter</h1> */}
        {/* <Button label="Decrement" clickHandler={handleDecrement2} className="btn-red"/> */}
        {/* <p>{counter2}</p> */}
        {/* <Button label="Increment" clickHandler={handleIncrement2} /> */}
        {/* <Button label="Reset" clickHandler={handleReset2} /> */}
      {/* </div> */}
    </>
  );
}

export default CounterLayout;
