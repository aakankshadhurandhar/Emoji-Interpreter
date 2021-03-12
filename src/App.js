import './App.css';
import React,{useState} from 'react';
const emojiDictionary={
 "🤣":"Laughing",
  "😎":"Smiling with sunglasses",
  "😠":"Angry face",
  "👍":"thumbs Up",
  " ":"enter something"


};
//const emojis=Object.keys(emojiDictionary);


export default function App(){
  var[meaning,setmeaning]=useState("");
  function emojihandler(event) {
    var meaning=emojiDictionary[event.target.value];
    if(meaning===undefined)
    {meaning="emoji not in database";}
    setmeaning(meaning);
    
  }
  




  return ( <div>
    <nav>
        <div className="navbar">Emoji Interpreter 😊  </div>
    </nav>
    
    
   <div className="main">
   <input onChange={emojihandler} ></input>
    <h3>We know following emojis</h3>
    <h4>🤣😎😠👍</h4>

    <h2>{meaning}</h2>
    </div>
    
    </div>
  );
}

