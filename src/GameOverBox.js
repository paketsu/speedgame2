import React from 'react'

const GameOverBox = (props) => {
    return (
        <div>
            <h2>Game Over</h2>
            <p>Your result was {props.this.state.rightClicks}</p>
        </div>
    )
}

export default GameOverBox