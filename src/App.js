import React, { useState } from "react";
import { soundData } from "./sound";
import DrumPad from "./DrumPad";

import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  function handleDisplay(display) {
    const newDisplay = display;
    setDisplay(newDisplay);
  }

  function handleKeyUp (event) {
    let keyStroke = event.key;
    let upperCasedKeyStroke = keyStroke.toUpperCase();
    let audioElement = document.getElementById(upperCasedKeyStroke);
    console.log(keyStroke, audioElement);
    if (audioElement){
      audioElement.play();      
        audioElement.currentTime =0;
        
    }
  } 
  
  return (
    <div className="App" id="drum-machine" onKeyUp={handleKeyUp} tabIndex="0">
      <div id="display">{display}</div>
      <div id="drum-pads">
        {soundData.map((sound) => (
          <DrumPad
            key={sound.id}
            id={sound.id}
            letter={sound.keyTrigger}
            src={sound.url}
            handleDisplay={handleDisplay}            
          />
        ))}
      </div>     
    </div>
  );
}

export default App;
