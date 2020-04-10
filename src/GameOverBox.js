import React from 'react'
import './GameOverBox.css'

const GameOverBox = ({rightClicks}) => {

    const closeHandler = () => {
        window.location.reload()
    }

    return (
        <div className="gameOverBox">
            <div className="gameOverTexts">
                <h2>Game Over</h2>
                <p>Your result was {rightClicks}</p>
                <button onClick={() => closeHandler()}>Close</button>
            </div>
        </div>
    )
}

export default GameOverBox