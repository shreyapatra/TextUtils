import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: "  + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to Uppercase!", "success");
    }

    const handleLoClick = () => {
        // console.log("Lowercase was clicked: "  + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to Lowercase!", "success");
    }

    const handleInverseClick = () => {
        // console.log("inverse click is triggered");
        let newtext = "";
        for (let i = text.length - 1; i >= 0; i--) {
            newtext += text[i];
        }
        setText(newtext);
        props.showAlert(" Text is Inversed!", "success");
    };

    const handleCopy = () => {
        // console.log("I'm copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Text Copied to clipboard!", "success");
    }


    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(" Extra spaces are removed!", "success");
    }

    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleClearText = () => {
        // console.log("Clear Text was clicked: "  + text);
        let newText = ("");
        setText(newText);
        props.showAlert(" Textbox Cleared!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    //text-> the value we have given by default i.e. 'Enter text here'
    //setText-> the function which we can use to update the text  

    // text="new text";  // Wrong way to change the state
    // setText("new text");  // Correct way to change the state

    // const updatetText = () => {
    //     setText("new text"); // Correct, update state in an event handler
    //   };

    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#05162e'}}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleInverseClick}>Inverse Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra spaces</button>
                <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleSpeak} >Speak</button>
                <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleClearText}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#05162e'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview!"}</p>

            </div>
        </>
    )
}
