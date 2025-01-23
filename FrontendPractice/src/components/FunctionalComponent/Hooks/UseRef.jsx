import { useState, useRef, useEffect } from 'react';

//useRef depent on useEffect
const UseRef = () => {
    var [text, setText] = useState("");
    var prev_text = useRef();

    /*
        If there is a empty dependency array then the useRef is redered only once
    */
    useEffect(() => {
        console.log(prev_text);
        prev_text.current = text;
    },[text])

    return (
        <div>
            <h1>This page is ment for useRef</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <h4>The text is {text}</h4>
            <h5>The previous Render text is {prev_text.current}</h5>
        </div>


    );
}
export default UseRef;