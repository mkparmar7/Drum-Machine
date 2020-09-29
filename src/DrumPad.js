import React from "react";
import "./App.css";


function DrumPad(props) {

  function handleClick() {
    const x = document.getElementById(props.letter);
    x.play();
    x.currentTime = 0;
    props.handleDisplay(props.id);    
  } 
  
// function handleKeyUp (event) {
//   let keyStroke = event.key;
//   if (keyStroke.toUpperCase() === props.letter){
//     const x = document.getElementById(props.letter);
//       x.play();
//       x.currentTime = 0;
//       props.handleDisplay(props.id); 
//     console.log(keyStroke);

//   }
// } 
  return (
    <div className="drum-pad" id={props.id} onClick={handleClick}>
      <h1>{props.letter}</h1>
      <audio src={props.src} className="clip" id={props.letter} />
        {/* ref = {(ref) => (this.audio = ref)} */}
      
      
       
    </div>
  );
}


export default DrumPad;
