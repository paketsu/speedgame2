import React, { Component } from 'react';
import './App.css';
import Circle from './Circle'

const circleData = [
  {
    id: 1,
    color: "yellow"
  },
  {
    id: 2,
    color: "purple"
  },
  {
    id: 3,
    color: "blue"
  },
  {
    id: 4,
    color: "pink"
  }
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      circles: circleData,
      showGameOverBox: false,
      rightClicks: 0,
      wrongClcks: "",
      time: ""
    }
  }

  
  timer = 2000;

  getRandomInt = () => {
    return Math.floor(Math.random() * 3)
  }

  handleClick = (id) => {
    console.log(id);
//    this.setState(prevState => {
//      return {
//        rightClicks: prevState.rightClicks + 1
//      }
//    })
  }

  startGame = () => {
    console.log(this.getRandomInt())
  }

  endGame = () => {
    this.setState({
      showGameOverBox: true
    })
  }

  render() { 
    const circleComponents = this.state.circles.map(circle => 
      <Circle key={circle.id} color={circle.color} handleClick={() => this.handleClick(circle.id)}/>)
    
    return (
      <div className="App">
        <h1>Speedgame 2</h1>
        <div className="circleContainer">
          {circleComponents}
        </div>
        <button className="start" onClick={this.startGame}>Start game</button>
        <button className="end" onClick={this.endGame}>End game</button>
        <div className="gameOverBox">

        </div>  
      </div>
      
    );
  }
}

export default App;
