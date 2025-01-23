import { useState, useCallback } from 'react'
import List from "./List"

const UseCallback = () => {
    var [num, setNum] = useState(0);
    var [dark, setDark] = useState(true);

    var styling = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }

    var getItems = (inc) => {
        return [num +inc + 1, num + inc + 2, num + inc + 3];
    }

    return (
        <div style={styling}>
            <button onClick={() => setDark(dark => !dark)}>Change Theme</button>
            <h1>This is meant for useCallback hook</h1>
            <input type="number" value={num} onChange={(e) => { setNum(parseInt(e.target.value)) }} />
            <h4>The number is {num}</h4>
            <List func={getItems} />

        </div>
    )
}

export default UseCallback