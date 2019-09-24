//importing images for the dice faces and css styling
import React from 'react';
import face0 from'./face000.png';
import face1 from'./face001.png';
import face2 from'./face002.png';
import face3 from'./face003.png';
import face4 from'./face004.png';
import face5 from'./face005.png';
import face6 from'./face006.png';
import clickPlay from './button.png'
import './App.css';

//class app made with react
class App extends React.Component {
  //state contains display, score and message
  state={
    display: `${face0}`,
    count: 0,
    message: ""

  }
  //resets game
    clear=()=>{
      this.setState({count:0, message:""});
    }
    //|"rolling" which produces a random face/number and add it to the total score.
    roll=()=>{
      let randomFace=Math.floor(Math.random() * 6);
      let newCount;
        if(randomFace===0){
          newCount=this.state.count+1;
          this.setState({count:newCount, display:face1, message:"You lose!"})
        }
        else if(randomFace===1) {
          newCount=this.state.count+2;
          this.setState({ count:newCount, display:face2 })
          // newCount >= 20 ? this.setState({message:"You won!"}) : null
          if (newCount >= 20) {
            this.setState({message:"You won!"})
          }
        }
        else if(randomFace===2){
          newCount=this.state.count+3;
          this.setState({count:newCount, display:face3})
          if(newCount>=20){
            this.setState({message:"You won!"})
          }
        }
        else if(randomFace===3){
          newCount=this.state.count+4;
          this.setState({count:newCount, display:face4})
          if(newCount>=20){
            this.setState({message:"You won!"})
          }
        }
        else if(randomFace===4){
          newCount=this.state.count+5;
          this.setState({count:newCount, display:face5})
          if(newCount>=20){
            this.setState({message:"You won!"})
          }
        }
        else if(randomFace===5){
          newCount=this.state.count+6;
          this.setState({count:newCount, display:face6})
          if(newCount>=20){
            this.setState({message:"You won!"})
          }
        }
    }
    
    render(){
      return (

        //ternary if the message is not "", then display the message, else, display the game
        <div className="App">
          {this.state.message !== "" ? 
            <div className="gameOver">
              <h1 className="message" className="text">{this.state.message}</h1>
              {this.state.message === "You lose!"?
                <div className="gameOver">
                  <h1 id="roll-1">You rolled a 1!</h1>
                  <img src={this.state.display} alt="one"/>
                </div>
              :
                <div className="gameOver">
                  <h1>You got over 20!</h1>
                </div>
              }
              <button id="clearBtn" onClick={()=>this.clear()}>RESTART</button>
              <h1 id="count" className="text">Score: {this.state.count}</h1>
            </div>

            :
            //game is still active, onlclick, roll
            <React.Fragment>
              <img src={clickPlay} alt="default" onClick={()=>this.roll()} />
              <img src={this.state.display} alt="default"/>
              <h1 id="count" className="text">Score: {this.state.count}</h1>
              <h1 className="message" className="text">{this.state.message}</h1>
              <div id="rules">
                <ul>Rules:
                  <li>Roll the dice to begin the game</li>
                  <li>Each time time the dice is rolled, the score adds up</li>
                  <li>If the score passes 20, you win</li>
                  <li>If you roll a 1 at any time, you lose</li>
                </ul>
                
              </div>
            </React.Fragment>
          }
        </div>
      );
    }
}

export default App;
