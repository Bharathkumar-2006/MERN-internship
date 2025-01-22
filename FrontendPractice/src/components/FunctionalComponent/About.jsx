import {useState} from 'react'
const About=()=>{
    var[text,setText]=useState(" Vijay")
    function handledText(e)
    {
        setText(e.target.value)
    }
    return(
       

        <div>

            <h1> this is About Component.</h1>
            <h2>TextArea.</h2>
            <textarea value={text} onChange={handledText}
            
            />
            <p>The text is {text}</p>
        </div>
    )
}
export default About;