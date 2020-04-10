import React from 'react'
import './Circle.css'

const Circle = ({color, active, handleClick}) => {
    return (
        <div>
            {/*Huom! onClick event listener (joka ei ole props) */}
            <div className={"Circle " + (active ? "active" : color)} onClick={handleClick}></div>
        </div>
    )
}

export default Circle