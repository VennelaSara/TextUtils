import React,{useState} from 'react'

export default function TextForm(props) {
  const [text,setText] = useState("");
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Cleared!","success");
  }
  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  }
  const handleOnChange = (event)=>{
setText(event.target.value);
  }
  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!","success");
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[.]+/);
    setText(newText.join(" "))
    props.showAlert("ExtraSpaces removed!","success");
  }
  return (
    <>
    {/* <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div> */}
<div className="container">
  <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
  {/* <label for="myBox" class="form-label">Example textarea</label> */}
  <div className="mb-3">
  <textarea class="form-control" onChange={handleOnChange} value={text}  id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea></div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
  <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
<h2>Your Text Summary</h2>
<p>{text.split(" ").length>0&&text!=""?text.split(" ").length:0} words and {text.length} characters</p>
<p>{0.008*text.split(" ").length} Minutes read.</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
</div>
    </>
  )
}
