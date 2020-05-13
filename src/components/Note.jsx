import React, { useState } from "react";

function Note(props) {
const[value,setValue]=useState("block");

function handleclick(){
  setValue("none");
}
  return (
    <div className="note" style={{display:value}}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleclick}>DELETE</button>
    </div>
  );
}

export default Note;
