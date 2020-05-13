import React,{useState} from "react";

function CreateArea(props) {
const[note,setNote]=useState({
  title:"",
  content:""
})

function handleChange(event){
  const{name,value}=event.target;
  setNote(function(prevValue){
    return {...prevValue,
      [name]:value
    };
  })
}

function sendNotes(event){
  props.sendNote(note);
event.preventDefault();
setNote({
  title:"",
  content:""
})
}

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={handleChange} />
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.content}  onChange={handleChange} />
        <button onClick={sendNotes}>Add</button>
      </form>
    </div>
  );

}
export default CreateArea;
