import { useState } from "react"
import { Form } from "react-router-dom"


const UseEffect=()=>
{
    var[text,setText]=useState("")
    return(
        <div>
            <h1>this is useEffect example.</h1>
            <input type="number" value={text} onChange />
            <h4>this text is {text}</h4>
        </div>
    )
}
export default UseEffect;