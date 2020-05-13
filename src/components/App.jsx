import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { func } from "prop-types";

function App() {
  const[notes,setNotes]=useState([]);

function addNote(newNote){
  setNotes(function(prevNotes){
    return ([...prevNotes,newNote])
  });
}
  return (
    <div>
      <Header />
      <CreateArea 
      sendNote={addNote}
      />
      {notes.map(function(notestoadd){
        return(<Note 
        title={notestoadd.title}
        content={notestoadd.content}
        />)
      })}
      
      <Footer />
    </div>
  );
}

export default App;
