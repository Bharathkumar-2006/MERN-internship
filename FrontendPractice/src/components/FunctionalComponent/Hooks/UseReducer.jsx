import {useReducer} from 'react'

var initialStage = 0;

function reducer(state, action) {
    if (action.type === 'increment') {
      return state + 1;
    }
    else if (action.type === 'reset'){
        return initialStage;
    }
    else{
        return state-1;
    }
}

const UseReducer = () => {

    //const [state, dispatch] = useReducer(reducer, initialArg, init?)
    const [num, dispatch] = useReducer(reducer, initialStage);
  return (
    <div>
      <h1>This is useReducer example</h1>
      <h4>The number is {num}</h4>
      <button onMouseEnter={() => dispatch({ type: 'increment' })}>+</button>
      <button onDoubleClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  )
}

export default UseReducer