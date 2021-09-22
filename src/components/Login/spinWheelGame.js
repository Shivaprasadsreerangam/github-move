import {React, Component } from "react";
import "./spinWheelGame.css"
import logo from './dogStory.png';

class spinWheelGame extends Component{
  constructor(props) {
    super(props)
    this.state = {
      dog_story:false,
      elephant_story:false,
    }
  }

  rotateFunction = (e) => {
 

    var min = 1024;
    var max = 9999;
    var deg = Math.floor(Math.random() * (max - min)) + min;
    alert(deg);
    document.getElementById('box').style.transform = "rotate("+deg+"deg)";
    var element = document.getElementById('mainbox');
    element.classList.remove('animate');
    setTimeout(function(){
      element.classList.add('animate');
      var valueList = ["Elephant","Dog","Cat","man","Hire","ballon","dear","ball"];
  var getValue = valueList[Math.floor(Math.random() * valueList.length)];
 
    }, 5000);
  
  }


    render(){
        return(

            <div>

   <h1>Spin Wheel Game</h1>
 
  <div id="mainbox" class="mainbox">
    <div id="box" class="box">
      <div class="box1">
        <span id='spangame' name="Elephant" class="span1"><b>Elephant</b></span>
        <span id='spangame' name="Dog" class="span2"><b>Dog</b></span>
        <span id='spangame'name="cat" class="span3"><b>cat</b></span>
        <span id='spangame'name="cat" class="span4"><b>man</b></span>
      </div>
      <div class="box2">
        <span id='spangame'name="Elephant" class="span1"><b>hire</b></span>
        <span id='spangame'name="Elephant" class="span2"><b>ballon</b></span>
        <span id='spangame'name="Elephant" class="span3"><b>dear</b></span>
        <span id='spangame'name="Elephant" class="span4"><b>ball</b></span>
      </div>
    </div> 
    <button class="spin"  onClick={this.rotateFunction}>SPIN</button>
 
  </div>
  <div id="Parent">
    <button id ='submit3' onClick={e => {
                this.setState(
                  {
                    dog_story: !this.state.dog_story

                  });
              }}> 1.dog</button>
      {(this.state.dog_story)?(<div>this is a dog<br></br>
    
        <img src={logo} alt="Logo" width='350'height='400' align="center"/> 

      </div>):(<div></div>)}
      <button id ='submit3' onClick={e => {
                this.setState(
                  {
                    elephant_story: !this.state.elephant_story

                  });
              }}> 2.Elephant</button>
      {(this.state.elephant_story)?(<div>this is a dog<br></br>
    
        <img src={logo} alt="Logo" width='350'height='400' align="center"/> 

      </div>):(<div></div>)}

  </div>


            </div>
        );
    }
}

export default spinWheelGame;

