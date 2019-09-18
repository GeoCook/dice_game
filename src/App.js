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


class App extends React.Component {
  state={
    display: `${face0}`,
    count: 0,
    message: ""

  }

    clear=()=>{
      this.setState({count:0, message:""});
    }

    roll=()=>{
      let randomFace=Math.floor(Math.random() * 6);
      let newCount;
        if(randomFace==0){
          newCount=this.state.count+1;
          this.setState({count:newCount, display:face1, message:"You lose!"})
          this.clear();
        }
        else if(randomFace==1) {
          newCount=this.state.count+2;
          this.setState({ count:newCount, display:face2 })
          // newCount >= 20 ? this.setState({message:"You won!"}) : null
          if (newCount >= 20) {
            this.setState({message:"You won!"})
          }
        }
        else if(randomFace==2){
          newCount=this.state.count+3;
          this.setState({count:newCount, display:face3})
          if(newCount>=20){
            this.setState({message:"You won!"})
          }
        }
        else if(randomFace==3){
          newCount=this.state.count+4;
          this.setState({count:newCount, display:face4})
          if(newCount>=20){
            this.setState({message:"You won!"})
          }
        }
        else if(randomFace==4){
          newCount=this.state.count+5;
          this.setState({count:newCount, display:face5})
          if(newCount>=20){
            this.setState({message:"You won!"})
          }
        }
        else if(randomFace==5){
          newCount=this.state.count+6;
          this.setState({count:newCount, display:face6})
          if(newCount>=20){
            this.setState({message:"You won!"})
          }
        }
    }
    
    testPrint=()=>{
      console.log("this image has been clicked")
    }

    render(){
      return (

        //ternary if the message is set to "you won", then display just the message, else, display the game
        <div className="App">
          {this.state.message === "You won!" ? 
              <h1 id="message" className="text">{this.state.message}</h1>
            :
            <React.Fragment>
              <img src={clickPlay} alt="default" onClick={()=>this.roll()} />
              <img src={this.state.display} alt="default"/>
              <h1 id="count" className="text">Score: {this.state.count}</h1>
              <h1 id="message" className="text">{this.state.message}</h1>
            </React.Fragment>
          }
        </div>
      );
    }
}

export default App;
