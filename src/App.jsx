import React, {useRef, useState} from "react";

function App() {
    const [value, setValue]= useState('')

    // get dom
    const inputRef = useRef(null)
    const showDom=()=>{
        console.log(inputRef.current)
    }
    return (
        //data binding
        <div className="App">
            <input
                ref={inputRef}
                value={value} onChange={(e)=>setValue(e.target.value)}
                type="text" />
            <button onClick={showDom}>click im new button me</button>

        </div>



    );
}

export default App;
