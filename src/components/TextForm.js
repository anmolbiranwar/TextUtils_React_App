import React, { useState } from 'react'

const TextForm = (props) => {
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to Uppercase!","success");
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to Lowercase!","success");
    }
    const clear=()=>{
        let newText="";
        setText(newText);
        props.showAlert(" Text Cleared!","success");
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert(" Extra spaces removed!","success");
    }
   
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert(" Copied to Clipboard!","success");
    }
    const [text, setText]= useState("");
  return (
   <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2 className='mb-3'>{props.heading}</h2>
    <div className='mb-3'>
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clear}>Clear</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button disabled={text.length===0} className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
    

    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
        <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
   </>
  )
}

export default TextForm 