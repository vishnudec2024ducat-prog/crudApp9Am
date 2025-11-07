import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../utility/CounterSlice';

const Counter = () => {
    const dispatch =useDispatch()
    const {count,method} =   useSelector((state)=>state.counterApp)
            //   console.log(obj)
  return (
    <div className="row text-center">
      <div className="col-6 mx-auto border">
        <h1>
          <span className="text-warning">Counter</span>
        </h1>
        <h1>Method: {method}</h1>
        <h1>Count: {count}</h1>
        <div>
          <button
            className="btn btn-success"
            onClick={() => dispatch(increment("increment"))}
          >
            Inc
          </button>

          <button
            className="btn btn-warning"
            onClick={() => dispatch(decrement("decrement"))}
          >
            Dec
          </button>

          <button
            className="btn btn-info"
            onClick={() => dispatch(reset("reset"))}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter