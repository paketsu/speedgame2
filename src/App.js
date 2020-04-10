import React, { Component } from 'react';
import './App.css';
import Circle from './Circle'
import GameOverBox from './GameOverBox'

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

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      circles: circleData,
      showGameOverBox: false,
      active: "",
      rightClicks: 0,
      time: "",
      rounds: 0
    }
  }

  pace = 2000
  timer

  getNextNumber = () => {
    let number
    do (number = getRandomInt(1, 4))
      while (this.state.active === number)
    
      this.setState({
        active: number,
        rounds: this.state.rounds +1
      })

    this.pace *= 0.95
    this.timer = setTimeout(this.getNextNumber.bind(this), this.pace)
  }

  handleClick = (circles) => {
    if (circles === this.state.active) {
      this.setState({
        rightClicks: this.state.rightClicks +1    
      })
    } else {
      this.endGame()
    }
//    this.setState(prevState => {
//      return {
//        rightClicks: prevState.rightClicks + 1
//      }
//    })
  }

  startGame = () => {
    this.getNextNumber()
  }

  endGame = () => {
    this.setState({
      showGameOverBox: true
    })
    clearTimeout(this.timer)
  }

  render() { 
    const circleComponents = this.state.circles.map(circle => 
      <Circle key={circle.id} color={(this.state.active === circle.id ? "active" : circle.color)} handleClick={() => this.handleClick(circle.id)}/>)
    
    return (
      <div className="App">
        <h1>Speedgame 2</h1>
        <div className="circleContainer">
          {circleComponents}
        </div>
        <button className="start" onClick={this.startGame}>Start game</button>
        <button className="end" onClick={this.endGame}>End game</button>
        {this.state.showGameOverBox && <GameOverBox rightClicks={this.state.rightClicks} />}
      </div>
      
    );
  }
}

export default App;
