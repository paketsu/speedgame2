import React, { Component } from 'react';
import './App.css';
import Circle from './Circle'

class App extends Component {
  constructor() {
    super()
    this.state= {

    }
  }

  timer = 2000;

  getRandomInt = () => {
    return Math.floor(Math.random() * 3)
  }

  handleClick = (id) => {
    console.log(id)
  }

  startGame = () => {
    console.log(this.getRandomInt())
  }

  endGame = () => {

  }

  render() { 
    return (
      <div className="App">
        <h1>Speedgame 2</h1>
        <div className="circleContainer">
          <Circle onClick={() => this.handleClick(1)}/>
          <Circle id="2"/>
          <Circle id="3"/>
          <Circle id="4"/>
        </div>
        <button className="start" onClick={this.startGame}>Start game</button>
        <button className="end" onClick={this.endGame}>End game</button>
      </div>
    );
  }
}

export default App;
