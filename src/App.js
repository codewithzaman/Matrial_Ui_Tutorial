import './App.css';
import React from "react"
import Buttons from './Buttons';
import ButtonsGroup from './ButtonsGroup';
import Checkboxs from './Checkboxs';
import RadioButtons from './RadioButtons';


function App() {
  return (
    <div className="App">
      <h1>React-Mui</h1>
      <Buttons/>
      <br/> <br/>
      <ButtonsGroup/>
      <br/><br/>
      <Checkboxs/>
      <br/> <br/>
      <RadioButtons/>
        </div>
  );
 
  }
 

export default App;
