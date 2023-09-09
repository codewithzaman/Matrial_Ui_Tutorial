import './App.css';
import React from "react"
import Buttons from './Buttons';
import ButtonsGroup from './ButtonsGroup';
import Checkboxs from './Checkboxs';
import RadioButtons from './RadioButtons';
import Sliders from './Sliders';
import RangeSliders from './RangeSliders';
import SelectBox from './Selectbox';
import Textfields from './Textfields';


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
      <br/> <br/>
      <Sliders/> 
      <br/> <br/>
      <RangeSliders/>
      <br/> <br/>
      <SelectBox/>
      <br/><br/><br/>
      <Textfields/>
      <br/> <br/>
        </div>
  );
 
  }
 

export default App;
