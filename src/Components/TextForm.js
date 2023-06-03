import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const upClickUpper = () => {
    //  console.log("Button was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success")
  };
  const upClickLower = () => {
    //  console.log("Button was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success")
  };
  const upClickClear = () => {
    //  console.log("Button was clicked");
    let newText = ""
    setText(newText);
    props.showAlert("Text Cleared","success")
  };

  const handleExtraSpaces = () => {
    //  console.log("Button was clicked");
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed","success")
  };
  const reverse = (event) => {
    //  console.log("Button was clicked");
    let arr=text.split(" ")
    arr=arr.reverse()
    let arr1=arr.map(arr=>arr.split("").reverse().join(""));
    let newText = arr1.join(" ") 
    setText(newText);
    props.showAlert("Text is reversed","success")
  };
  const oneUp=()=>{
    let arr=text.split(" ");
    for (var i=0;i<arr.length;i++){
      arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
    }
    let newText=arr.join(" ");
    setText(newText)
    props.showAlert("Sentence is formated","success")
  }

  const handleOnCHange = (event) => {
    // console.log("On change")
    setText(event.target.value);
  };
  

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  

  const [text, setText] = useState("");
  //setText("new Text");
  return (
    <>
      <div className="conatiner my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>

        <textarea
        
          className="form-control"
          style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
          value={text}
          id="myBox"
          onChange={handleOnCHange}
          rows="10"></textarea>
        <button className="btn btn-primary my-3 "  onClick={upClickUpper}>
          Click to Upper Case
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={upClickLower}>
          Click to Lower Case
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={speak}>
          Click to Listen
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={oneUp}>
          Click to Change Sentance
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={reverse}>
          Click to Reverse
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={upClickClear}>
          Click to Clear
        </button>
      </div>

      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} letter
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text to preview"}</p>
      </div>
    </> 
  );
}
