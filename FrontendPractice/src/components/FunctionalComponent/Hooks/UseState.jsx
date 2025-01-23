import {useState} from 'react'

const UseState = () => {
    var initialValue = 0;
    var [num,setNum] =  useState(initialValue);
  return (
    <div>
      <h1>Thia is useState example</h1>
      <h4>The number is {num}</h4>
      <button onMouseEnter={() => setNum(num+1)}>+</button>
      <button onDoubleClick ={() => setNum(initialValue)}>Reset</button>
      <button onKeyDown={() => setNum(num-1)}>-</button>
    </div>
  )
}

export default UseState